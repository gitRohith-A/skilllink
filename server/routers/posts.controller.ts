import express, { Request, Response } from 'express';
import Post from '../Models/post';

const router = express.Router();

router.get('/:slug', async (req, res) => {
    try {
        const data = await Post.findOne({ slug: req.params.slug })
            .populate('category', 'name')
            .populate('user_id', 'icon enterpriseName websiteURL additionalNotes')

        if (!data) {
            res.status(500).json({ success: false, message: 'Not found' })
            return
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