import { Schema, model, Document } from 'mongoose';
import { IUser } from './User';
import { IPost } from './post';

export interface IReview extends Document {
    userId: IUser['_id'];
    itemId: IPost['_id'];
    reviewText: string;
    rating: number;
    createdAt: Date;
    updatedAt: Date;
}

const reviewSchema = new Schema<IReview>({
    userId: { type: Schema.Types.ObjectId, ref: 'users', required: true },
    itemId: { type: Schema.Types.ObjectId, ref: 'post', required: true },
    reviewText: { type: String, required: true },
    rating: { type: Number, required: true, min: 1, max: 5 },
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now }
}, {
    timestamps: { createdAt: 'createdAt', updatedAt: 'updatedAt' }
});

export const Review = model<IReview>('Review', reviewSchema);
