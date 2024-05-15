import mongoose, { Schema, Document, ObjectId } from 'mongoose';

export interface IPost extends Document {
    enterprise?: ObjectId;
    category?: ObjectId;
    description: string;
    price: string;
    discountPrice: string;
    priceDescription: string;
    duration: string;
    image: string;
    rating: string;
    review?: ObjectId[];
    points: string[];
}

const postSchema: Schema = new Schema({
    user_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Enterprise'
    },
    category: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Category'
    },
    review: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Review'
    }],
    description: {
        type: String,
    },
    price: {
        type: String,
    },
    slug: {
        type: String,
    },
    title: {
        type: String,
    },
    discountPrice: {
        type: String,
    },
    priceDescription: {
        type: String,
    },
    duration: {
        type: String,
    },
    image: {
        type: String,
    },
    rating: {
        type: String,
    },
    points: [{
        type: String,
    }]
}, { timestamps: true });

const Post = mongoose.model<IPost>('post', postSchema);

export default Post;
