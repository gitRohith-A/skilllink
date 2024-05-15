import express, { Request, Response } from 'express';
import { Review } from '../Models/Review';
import Post from '../Models/post';
import User from '../Models/User';


const router = express.Router();

router.post('/', async (req, res) => {
    try {
        const { userId, itemId, reviewText, rating } = req.body;

        if (!userId || !itemId || !reviewText || rating == null) {
            return res.status(400).send({ error: 'Missing required fields' });
        }

        const post = await Post.findOne({ slug: itemId })

        if (!post) {
            return res.status(400).send({ error: 'Post Not found' })
        }

        const review = new Review({
            userId,
            itemId: post._id,
            reviewText,
            rating
        });

        await Post.findByIdAndUpdate(post._id, { $push: { review: review._id } })
        await User.findByIdAndUpdate(userId, { $push: { review: review._id } })

        await review.save();

        res.status(201).send(review);
    } catch (error: any) {
        console.error('Error creating review:', error);
        res.status(500).send({ error: 'Internal server error' });
    }
});

router.get('/', async (req, res) => {
    try {
        const post = await Review.find({})
            .populate('userId')
            .populate('itemId')
            .sort({ _id: -1 })

        res.status(200).send({ post });

    } catch (error) {
        res.status(500).send({ error: 'Internal server error' });

    }
})

router.delete('/:id', async (req, res) => {
    try {
        const { id } = req.params;

        // Find the review by ID and delete it
        const review = await Review.findByIdAndDelete(id);

        if (!review) {
            return res.status(404).send({ error: 'Review not found' });
        }

        res.status(200).send({ message: 'Review deleted successfully' });
    } catch (error) {
        console.error('Error deleting review:', error);
        res.status(500).send({ error: 'Internal server error' });
    }
});


module.exports = router
