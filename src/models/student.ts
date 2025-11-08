import mongoose, { Schema, Document } from 'mongoose';

// student interface
export interface StudentDetail extends Document {
  name: string,
  age: number,
  place: string
}

// student schema
const StudentSchema: Schema = new Schema({
  name: {type: String, required: true},
  age: {type: Number, required: true},
  place: {type: String,required: true}
});

export const Student = mongoose.model<StudentDetail>('Student',StudentSchema);