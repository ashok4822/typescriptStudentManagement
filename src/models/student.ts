import mongoose, { Schema, Document, Types } from "mongoose";

// student interface
export interface StudentDetail extends Document {
  _id: Types.ObjectId; // ✅ explicitly define the _id field
  name: string;
  age: number;
  place: string;
}

// student schema
const StudentSchema: Schema = new Schema({
  name: { type: String, required: true },
  age: { type: Number, required: true },
  place: { type: String, required: true },
});

export const Student = mongoose.model<StudentDetail>("Student", StudentSchema);
