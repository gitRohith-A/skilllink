import { ObjectId } from 'mongodb';
import mongoose, { Document } from 'mongoose';
import { Enterprise } from './Enterprise';

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
        ref: 'users'
  }
}, { timestamps: true });

const RejectedEnterpriseModel = mongoose.model<Enterprise>('RejectedEnterprise', enterpriseSchema);

export default RejectedEnterpriseModel;
