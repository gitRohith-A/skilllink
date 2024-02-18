import mongoose, { Document, Schema } from 'mongoose';

export interface IUser extends Document {
    email: string;
    name?: string;
    password?: string;
    date: Date;
    isAdmin?: string;
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
    name: String,
    password: String,
    date: {
        type: Date,
        default: Date.now
    },
    isAdmin: String,
    boardingStatus: Number,
    categories: String,
    occupation: String,
    otps: String
});

const User = mongoose.model('users', UserSchema);
export default User;
