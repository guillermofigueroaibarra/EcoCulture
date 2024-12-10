import { v2 as cloudinary } from "cloudinary";
import donationModel from "../models/donationModel.js";

// functions to add donation
const addDonation = async (req, res) => {
  try {
    // variable for item info
    const { name, description, quantity, category } = req.body;

    // if image is available, then store it in corresponding variables
    const image1 = req.files.image1 && req.files.image1[0];
    const image2 = req.files.image2 && req.files.image2[0];
    const image3 = req.files.image3 && req.files.image3[0];
    const image4 = req.files.image4 && req.files.image4[0];

    // if image was uploaded then we'll store it
    const images = [image1, image2, image3, image4].filter(
      (item) => item !== undefined
    );

    // upload images to cloudinary by getting images url
    let imagesUrl = await Promise.all(
      images.map(async (item) => {
        let result = await cloudinary.uploader.upload(item.path, {
          resource_type: "image",
        });
        return result.secure_url;
      })
    );

    // add donation to mongo
    const donationData = {
      name,
      description,
      quantity: Number(quantity),
      image: imagesUrl,
      category,
      date: Date.now(),
    };

    // save donation to database
    console.log(donationData);
    const donation = new donationModel(donationData);
    await donation.save();

    res.json({ success: true, message: "Donation added" });
  } catch (error) {
    res.json({ success: false, message: error.message });
  }
};

const listDonation = async (req, res) => {
  try {
    const donations = await donationModel.find({});
    res.json({ success: true, donations });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: error.message });
  }
};

const removeDonation = async (req, res) => {
  try {
    await donationModel.findByIdAndDelete(req.body.id);
    res.json({ success: true, message: "Donation removed" });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: error.message });
  }
};

const donationInfo = async (req, res) => {
  try {
    const { donationId } = req.body;
    const donation = await donationModel.findById(donationId);
    res.json({ success: true, donation });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: error.message });
  }
};

const updateDonationQuantity = async (req, res) => {
  try {
    const { id, quantity } = req.body;

    // Validate that the quantity is a valid number and is positive
    if (isNaN(quantity) || quantity < 0) {
      return res.json({
        success: false,
        message: "Quantity must be a valid positive number",
      });
    }

    // Find the donation by ID and update its quantity
    const donation = await donationModel.findByIdAndUpdate(
      id,
      { quantity: Number(quantity) },
      { new: true } // Return the updated document
    );

    if (!donation) {
      return res.json({ success: false, message: "Donation not found" });
    }

    res.json({ success: true, message: "Quantity updated", donation });
  } catch (error) {
    console.error(error);
    res.json({ success: false, message: error.message });
  }
};

export {
  addDonation,
  listDonation,
  removeDonation,
  donationInfo,
  updateDonationQuantity,
};
