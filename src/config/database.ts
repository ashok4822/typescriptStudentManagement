import mongoose from "mongoose";

const connectDB = async () => {
  try {
    await mongoose.connect(
      "mongodb+srv://students:studentspassword@cluster0.i11nwvu.mongodb.net/students"
    );
    console.log(`MongoDB connected successfully ${mongoose.connection.host}`);
  } catch (error) {
    console.log(`MongoDB connection failed: ${error}`);
  }
};
export default connectDB;
