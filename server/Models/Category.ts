import { ObjectId } from 'mongodb';
import { Document, Schema, model } from 'mongoose';

interface IService {
    _id: ObjectId;
}

interface Category extends Document {
    name: string;
    slug: string;
    icon: string;
    services: Array<IService['_id']>;
    posts: Array<ObjectId>;
    metaTitle?: string;
    metaDescription?: string;
}

const CategorySchema = new Schema<Category>({
    name: {
        type: String,
        required: true
    },
    slug: {
        type: String,
        required: true,
        unique: true
    },
    icon: {
        type: String,
        required: true
    },
    services: [{
        type: Schema.Types.ObjectId,
        ref: 'Service'
    }],
    posts: [{
        type: Schema.Types.ObjectId,
        ref: 'post'
    }],
    metaTitle: String,
    metaDescription: String
}, {
    timestamps: true
});

export default model<Category>('Category', CategorySchema);
