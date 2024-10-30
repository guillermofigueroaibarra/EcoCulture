import mongoose from "mongoose";

const donationSchema = new mongoose.Schema({
  name: { type: String, require: true },
  description: { type: String, require: true },
  price: { type: Number, require: true },
  image: { type: Array, require: true },
  category: { type: String, require: true },
  date: { type: Number, require: true },
});

const donationModel =
  mongoose.models.donation || mongoose.model("donation", donationSchema);

export default donationModel;
