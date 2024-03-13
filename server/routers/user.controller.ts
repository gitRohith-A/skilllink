import express, { Request, Response } from 'express';
import User from '../Models/User';
import { upload } from '../utils/multer';

const router = express.Router();

router.get('/getUser/:email', async (req: Request, res: Response) => {
    try {
        const user = await User.findOne({ email: req.params.email })
            .select('-__v -verifyEmail -provider -password')

        if (!user) {
            return res.status(404).json({ error: "No user available with the email" });
        }
        return res.status(200).json({ user });
    } catch (error: any) {
        return res.status(500).json({ error: error.message });
    }
});

// Endpoint to update user data with file upload
router.put('/:id', upload.single('file'), async (req: Request, res: Response) => {
    const { id } = req.params;
    const formData = req.body;

    try {
        // Check if file was uploaded
        if (req.file) {
            // If file was uploaded, update the image field with the path
            formData.image = process.env.VIEW + req.file.path.replace('\\/g', '/');
        }
        formData.boardingStatus = 0;

        // Find the user by id and update the fields
        const user = await User.findByIdAndUpdate(id, formData, { new: true });

        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }

        res.status(200).json({ success: true, user });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server Error' });
    }
});


module.exports = router
