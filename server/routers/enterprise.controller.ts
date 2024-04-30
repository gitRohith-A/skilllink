import express, { Request, Response } from 'express';
import EnterpriseModel, { Enterprise } from '../Models/Enterprise';
import { upload } from '../utils/multer';
import RejectedEnterpriseModel from '../Models/RejectEnterprise';
import User from '../Models/User';

const router = express.Router();

// Create Enterprise
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

router.post('/move/:id', async (req: Request, res: Response) => {
    try {
        const enterprise = await EnterpriseModel.findByIdAndUpdate(req.params.id, { adminnote: req.body.adminnote });

        if (!enterprise) {
            return res.status(404).json({ error: 'Enterprise not found' });
        }

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
                $push: { notification: { text: enterprise.adminnote } }
            }
        );


        res.status(200).json({ message: 'Data moved successfully', newEnterprise });
    } catch (error: any) {
        // Handle errors
        res.status(500).json({ error: error.message });
    }
});


module.exports = router;



