import express, { Request, Response } from 'express';
import Post from '../Models/post';

const router = express.Router();

router.get('/:id', async (req, res) => {
    try {
        const data = await Post.findOne({ _id: req.params.id })
            .populate('category', 'name')
            .populate('user_id', 'icon enterpriseName websiteURL')

        if (!data) {
            res.status(500).json({ success: false, message: 'Not found' })
        }

        res.status(200).json({ success: true, data })
    } catch (error: any) {
        res.status(500).json({ success: false, message: error.message })
    }
})

router.get('/', async (req, res) => {
    try {
        const data = await Post.find()
            .populate('category', 'name')
            .populate('user_id', 'icon enterpriseName websiteURL')

        res.status(200).json({ success: true, data })
    } catch (error: any) {
        res.status(500).json({ success: false, message: error.message })

    }
})

module.exports = router