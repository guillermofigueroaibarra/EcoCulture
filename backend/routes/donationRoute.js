import express from "express";
import {
  addDonation,
  listDonation,
  removeDonation,
  donationInfo,
  updateDonationQuantity,
} from "../controllers/donationsController.js";
import upload from "../middleware/multer.js";
import adminAuth from "../middleware/adminAuth.js";

const donationRouter = express.Router();

//using functions from multer.js execute them
donationRouter.post(
  "/add",
  adminAuth, //authorized administrator
  upload.fields([
    { name: "image1", maxCount: 1 },
    { name: "image2", maxCount: 1 },
    { name: "image3", maxCount: 1 },
    { name: "image4", maxCount: 1 },
  ]),
  addDonation
);
donationRouter.post("/remove", adminAuth, removeDonation);
donationRouter.post("/single", donationInfo);
donationRouter.get("/list", listDonation);
donationRouter.post("/update-quantity", adminAuth, updateDonationQuantity);

export default donationRouter;
