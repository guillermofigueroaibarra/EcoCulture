import mongoose, { mongo } from "mongoose";

const userSchema = new mongoose.Schema({
  name: { type: String, require: true },
  email: { type: String, require: true, unique: true },
  password: { type: String, require: true },
  city: { type: String, require: true },
});

const userModel = mongoose.models.user || mongoose.model("user", userSchema);

export default userModel;
