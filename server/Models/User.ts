import mongoose, { Document, Schema } from 'mongoose';

export interface IUser extends Document {
    email: string;
    name?: string;
    password?: string;
    date: Date;
    isAdmin?: string;
    verifyEmail: Date;
    image: string,
    boardingStatus?: number;
    categories?: string;
    occupation?: string;
    provider: string;
    otps?: string;
}

const UserSchema: Schema = new Schema({
    email: {
        type: String,
        unique: true
    },
    name: String,
    password: String,
    date: {
        type: Date,
        default: Date.now
    },
    isAdmin: String,
    verifyEmail: {
        type: Date,
        default: Date.now
    },
    image: String,
    provider: String,
    boardingStatus: Number,
    categories: String,
    occupation: String,
    otps: String
});

const User = mongoose.model('users', UserSchema);
export default User;
