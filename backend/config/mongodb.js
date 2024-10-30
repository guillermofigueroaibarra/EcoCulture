import mongoose from "mongoose";

const connectDB = async () => {
  // function to show mongoo is connected to project
  mongoose.connection.on("connected", () => {
    console.log("DB Connected");
  });
  await mongoose.connect(`${process.env.MONGODB_URI}/ecoculture`);
};

export default connectDB;
