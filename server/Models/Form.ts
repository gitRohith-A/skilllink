import mongoose, { Schema, Document, ObjectId } from 'mongoose';

export interface Iform extends Document {
    user_id?: ObjectId;
    name?: string;
    message: string;
    email: string;
    phone: string;
}

const formSchema: Schema = new Schema({
    user_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Enterprise'
    },
    name: {
        type: String,
    },
    message: {
        type: String,
    },
    email: {
        type: String,
    },
    phone: {
        type: String,
    }
}, { timestamps: true });

const form = mongoose.model<Iform>('form', formSchema);

export default form;
