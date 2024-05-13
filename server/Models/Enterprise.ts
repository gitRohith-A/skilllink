import { ObjectId } from 'mongodb';
import mongoose, { Document } from 'mongoose';

export interface Enterprise extends Document {
  enterpriseName?: string;
  icon?: string;
  phoneNo?: string;
  gstNumber?: string;
  locationLink?: string;
  emailAddress?: string;
  websiteURL?: string;
  contactPersonName?: string;
  industryType?: string;
  numberOfEmployees?: number;
  yearEstablished?: number;
  address?: string;
  additionalNotes?: string;
  adminnote?: string;
  posts?: Array<mongoose.Types.ObjectId>; // Modified type here
  approved?: boolean;
  user_id?: ObjectId;
  categories?: Array<mongoose.Types.ObjectId>; // Modified type here
}

const enterpriseSchema = new mongoose.Schema({
  icon: { type: String },
  enterpriseName: { type: String },
  phoneNo: { type: String },
  gstNumber: { type: String },
  locationLink: { type: String },
  emailAddress: { type: String },
  websiteURL: { type: String },
  contactPersonName: { type: String },
  industryType: { type: String },
  numberOfEmployees: { type: Number },
  yearEstablished: { type: Number },
  address: { type: String },
  posts: [{ type: mongoose.Schema.Types.ObjectId, ref: 'post' }], // Modified schema here
  additionalNotes: { type: String },
  categories: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Category' }], // Modified schema here
  adminnote: { type: String },
  approved: { type: Boolean },
  user_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'users'
  }
}, { timestamps: true });

const EnterpriseModel = mongoose.model<Enterprise>('Enterprise', enterpriseSchema);

export default EnterpriseModel;
