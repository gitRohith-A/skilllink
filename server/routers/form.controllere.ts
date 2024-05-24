import express from 'express';
import form from '../Models/Form';
import EnterpriseModel from '../Models/Enterprise';
import { ObjectId } from 'mongodb';
import { Types } from 'mongoose';

const router = express.Router();

router.post('/', async (req, res) => {
    try {
        const formData = req.body; // Access the form data directly
        const userId = formData.user_id; // Access the user_id from the form data
        const data = await form.create({ ...formData.formData, user_id: userId });
        const enter = await EnterpriseModel.findByIdAndUpdate(userId, { $push: { forms: data._id } });
        res.status(200).json({ success: true, data });
    } catch (error: any) {
        res.status(500).json({ success: false, message: error.message });
    }
});


router.get('/', async (req, res) => {
    try {
        const data = await form.find()
        res.status(200).json({ success: true, data })
    } catch (error: any) {
        res.status(500).json({ success: false, message: error.message })
    }
})

module.exports = router