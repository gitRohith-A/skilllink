import mongoose, { Document, Schema, Model } from 'mongoose';

export interface IUser extends Document {
    email: string;
    username?: string;
    password?: string;
    date: Date;
    isAdmin?: number;
    boardingStatus?: number;
    categories?: string;
    occupation?: string;
    otps?: string;
}

const UserSchema: Schema = new Schema({
    email: {
        type: String,
        unique: true
    },
    username: String,
    password: String,
    date: {
        type: Date,
        default: Date.now
    },
    isAdmin: Number,
    boardingStatus: Number,
    categories: String,
    occupation: String,
    otps: String
});

const User = mongoose.model('users', UserSchema);
export default User;
