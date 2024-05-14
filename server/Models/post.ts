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
    image: { 
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
