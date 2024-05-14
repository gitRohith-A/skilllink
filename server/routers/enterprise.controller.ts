import express, { Request, Response, response } from 'express';
import EnterpriseModel, { Enterprise } from '../Models/Enterprise';
import RejectedEnterpriseModel from '../Models/RejectEnterprise';
import User from '../Models/User';
import multer from 'multer';
import Post from '../Models/post';
import Category from '../Models/Category';

const router = express.Router();

const storage = multer.diskStorage({
    destination: function (req: Request, file: Express.Multer.File, cb: (error: Error | null, destination: string) => void) {
        cb(null, 'public/');
    },
    filename: function (req: Request, file: Express.Multer.File, cb: (error: Error | null, filename: string) => void) {
        cb(null, file.originalname);
    },
});

const upload = multer({ storage: storage });

router.post('/', upload.single('icon'), async (req: Request, res: Response) => {
    try {
        const enterpriseData: Enterprise = req.body as Enterprise;
        if (req.file) {
            enterpriseData.icon = req.file.path;
        }
        const newEnterprise = await EnterpriseModel.create(enterpriseData);

        await User.findOneAndUpdate(newEnterprise.user_id, { enterpriseApproval: 'pending' })

        res.status(201).json({ success: true, newEnterprise });
    } catch (error: any) {
        res.status(500).json({ success: false, error: error.message });
    }
});

router.get('/', async (req, res) => {
    try {
        const query = req.query;

        const enterprises = await EnterpriseModel.find(query)
            .populate('user_id', 'email name isAdmin location categories aboutMe occupation')

        res.status(200).json(enterprises);
    } catch (error: any) {
        res.status(500).json({ error: error.message });
    }
});

// Read Enterprise by ID
router.get('/:id', async (req: Request, res: Response) => {
    try {
        const enterprise = await EnterpriseModel.findById(req.params.id);
        if (!enterprise) {
            return res.status(404).json({ error: 'Enterprise not found' });
        }
        res.status(200).json(enterprise);
    } catch (error: any) {
        res.status(500).json({ error: error.message });
    }
});

// Update Enterprise by ID
router.put('/:id', upload.single('icon'), async (req: Request, res: Response) => {
    try {
        const enterpriseData: Enterprise = req.body as Enterprise;
        if (req.file) {
            enterpriseData.icon = req.file.path;
        }
        const updatedEnterprise = await EnterpriseModel.findByIdAndUpdate(req.params.id, enterpriseData, { new: true });
        if (!updatedEnterprise) {
            return res.status(404).json({ error: 'Enterprise not found' });
        }
        res.status(200).json(updatedEnterprise);
    } catch (error: any) {
        res.status(500).json({ error: error.message });
    }
});

// Delete Enterprise by ID
router.delete('/:id', async (req: Request, res: Response) => {
    try {
        const deletedEnterprise = await EnterpriseModel.findByIdAndDelete(req.params.id);
        if (!deletedEnterprise) {
            return res.status(404).json({ error: 'Enterprise not found' });
        }
        res.status(200).json(deletedEnterprise);
    } catch (error: any) {
        res.status(500).json({ error: error.message });
    }
});

router.patch('/approve/:id', async (req: Request, res: Response) => {
    try {
        const enterprise = await EnterpriseModel.findByIdAndUpdate(req.params.id, { approved: true });
        if (!enterprise) {
            return res.status(404).json({ error: 'Enterprise not found' });
        }

        const message = enterprise.adminnote

        await User.findByIdAndUpdate(
            enterprise.user_id,
            {
                $set: { enterpriseApproval: true, isAdmin: 'enterprises' },
                $push: {
                    notification: message,
                }
            }
        );


        res.status(200).json(enterprise);
    } catch (error: any) {
        res.status(500).json({ error: error.message });
    }
});

router.post('/move/:id', async (req: Request, res: Response) => {
    try {
        const enterprise = await EnterpriseModel.findByIdAndUpdate(req.params.id, { adminnote: req.body.adminnote });

        if (!enterprise) {
            return res.status(404).json({ error: 'Enterprise not found' });
        }

        const message = enterprise.adminnote


        await EnterpriseModel.findOneAndDelete({ _id: req.params.id });

        const newEnterprise = await RejectedEnterpriseModel.create({
            icon: enterprise.icon,
            enterpriseName: enterprise.enterpriseName,
            phoneNo: enterprise.phoneNo,
            gstNumber: enterprise.gstNumber,
            locationLink: enterprise.locationLink,
            emailAddress: enterprise.emailAddress,
            websiteURL: enterprise.websiteURL,
            contactPersonName: enterprise.contactPersonName,
            industryType: enterprise.industryType,
            numberOfEmployees: enterprise.numberOfEmployees,
            yearEstablished: enterprise.yearEstablished,
            address: enterprise.address,
            additionalNotes: enterprise.additionalNotes,
            adminnote: req.body.adminnote,
            approved: enterprise.approved,
            user_id: enterprise.user_id
        });

        await User.findByIdAndUpdate(
            enterprise.user_id,
            {
                $set: { enterpriseApproval: false },
                $push: { notification: message }
            }
        );


        res.status(200).json({ message: 'Data moved successfully', newEnterprise });
    } catch (error: any) {
        res.status(500).json({ error: error.message });
    }
});

router.post('/api/posts', upload.single('image'), async (req, res) => {
    try {
        const { description, price, discountPrice, priceDescription, duration, rating, user_id, category } = req.body;
        let points = JSON.parse(req.body.points)
        let image = '';

        if (req.file) {
            image = '/public/' + req.file.filename;
        }

        const enterprsieData = await EnterpriseModel.findOne({ user_id: user_id })

        console.log(category)

        const post = new Post({
            description,
            price,
            discountPrice,
            priceDescription,
            duration,
            rating,
            points,
            image,
            category,
            user_id: enterprsieData ? enterprsieData._id : user_id
        });
        await post.save();

        await EnterpriseModel.findOneAndUpdate({ user_id: user_id }, { $push: { posts: post._id } })
        await Category.findOneAndUpdate({ _id: category }, { $push: { posts: post._id } })

        res.status(201).json({ message: 'Post created successfully' });
    } catch (error) {
        console.error('Error creating post:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
});


router.get('/posts/:id', async (req: Request, res: Response) => {
    const id = req.params.id;
    try {
        const data = await EnterpriseModel.findOne({ user_id: id }).populate('posts')
        if (!data) {
            return res.status(404).send('No Data')
        }
        res.json(data.posts);
    } catch (error) {
        console.error(error);
        res.status(500).send('Internal Server Error');
    }
});

// Edit API
router.patch('/posts/:postId', upload.single('image'), async (req, res) => {
    const postId = req.params.postId;
    try {
        const { description, price, discountPrice, priceDescription, duration, rating } = req.body;
        let image = '';

        if (req.file) {
            image = '/public/' + req.file.filename;
        }

        const updatedPostData: any = {};
        if (description) updatedPostData.description = description;
        if (price) updatedPostData.price = price;
        if (discountPrice) updatedPostData.discountPrice = discountPrice;
        if (priceDescription) updatedPostData.priceDescription = priceDescription;
        if (duration) updatedPostData.duration = duration;
        if (rating) updatedPostData.rating = rating;
        if (image) updatedPostData.image = image;

        // Update the post in the database if there are new fields
        if (Object.keys(updatedPostData).length === 0) {
            return res.status(400).json({ error: 'No fields to update' });
        }

        const updatedPost = await Post.findByIdAndUpdate(postId, updatedPostData, { new: true });

        if (!updatedPost) {
            return res.status(404).json({ error: 'Post not found' });
        }

        res.json({ message: 'Post updated successfully', post: updatedPost });
    } catch (error) {
        console.error('Error updating post:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
});


// Delete API
router.delete('/posts/:postId', async (req, res) => {
    const postId = req.params.postId;
    try {
        // Delete the post from the database
        const deletedPost = await Post.findByIdAndDelete(postId);

        if (!deletedPost) {
            return res.status(404).json({ error: 'Post not found' });
        }

        // Optionally, remove the post reference from EnterpriseSchema
        await EnterpriseModel.findOneAndUpdate({ 'posts._id': postId }, { $pull: { posts: { _id: postId } } });

        res.json({ message: 'Post deleted successfully' });
    } catch (error) {
        console.error('Error deleting post:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
});



module.exports = router;
