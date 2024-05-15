import { ObjectId } from 'mongodb';
import mongoose, { Document, Schema } from 'mongoose';

export interface IUser extends Document {
    email: string;
    name?: string;
    password?: string;
    date: Date;
    isAdmin?: string;
    verifyEmail?: Date;
    image?: string,
    review?: ObjectId[];
    about: string,
    backgrounImage?: String,
    location?: string,
    dob: Date,
    boardingStatus?: number;
    categories?: string;
    occupation?: string;
    provider: string;
    otps?: string;
    enterpriseApproval?: string;
    notifications?: Array<Array<any>>;
}

const UserSchema: Schema = new Schema({
    email: {
        type: String,
    },
    review: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Review'
    }],
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
    backgrounImage: String,
    provider: String,
    dob: Date,
    aboutMe: String,
    location: String,
    boardingStatus: {
        type: Number,
        default: 1
    },
    categories: String,
    occupation: String,
    otps: String,
    enterpriseApproval: String,
    notification: Array
});

const User = mongoose.model('users', UserSchema);
export default User;
