import { ObjectId } from 'mongodb';
import mongoose, { Document } from 'mongoose';

export interface Enterprise extends Document {
  enterpriseName?: string;
  icon?:string;
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
  approved?:boolean;
  user_id?:ObjectId;
}

const enterpriseSchema = new mongoose.Schema({
  icon:{type:String},
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
  additionalNotes: { type: String },
  adminnote: { type: String },
  approved:{type:Boolean},
  user_id:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user'
  }
}, { timestamps: true });

const EnterpriseModel = mongoose.model<Enterprise>('Enterprise', enterpriseSchema);

export default EnterpriseModel;
