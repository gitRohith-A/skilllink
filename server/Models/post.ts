import mongoose, { Schema, Document, ObjectId } from 'mongoose';

export interface IPost extends Document {
    enterprise?: ObjectId;
    description: string;
    price: string;
    discountPrice: string;
    priceDescription: string;
    duration: string;
    image: string; // Change to hold a single image filename instead of an array
    rating: string;
    points: string[];
}

const postSchema: Schema = new Schema({
    enterprise: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'enterprises'
    },
    description: {
        type: String,
        required: true
    },
    price: {
        type: String,
        required: true
    },
    discountPrice: {
        type: String,
        required: true
    },
    priceDescription: {
        type: String,
        required: true
    },
    duration: {
        type: String,
        required: true
    },
    image: { // Change to accept a single image filename instead of an array
        type: String,
        required: true
    },
    rating: {
        type: String,
        required: true
    },
    points: [{
        type: String,
        required: true
    }]
}, { timestamps: true });

const Post = mongoose.model<IPost>('post', postSchema);

export default Post;
