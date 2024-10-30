import express from "express";
import {
  addDonation,
  listDonation,
  removeDonation,
  donationInfo,
} from "../controllers/donationsController.js";
import upload from "../middleware/multer.js";

const donationRouter = express.Router();

//using functions from multer.js execute them
donationRouter.post(
  "/add",
  upload.fields([
    { name: "image1", maxCount: 1 },
    { name: "image2", maxCount: 1 },
    { name: "image3", maxCount: 1 },
    { name: "image4", maxCount: 1 },
  ]),
  addDonation
);
donationRouter.post("/remove", removeDonation);
donationRouter.post("/single", donationInfo);
donationRouter.get("/list", listDonation);

export default donationRouter;
