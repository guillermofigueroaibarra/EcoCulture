import express from "express";
import authUser from "../middleware/auth.js";

// import functions from cartController.js
import {
  addWish,
  removeWish,
  displayWish,
} from "../controllers/wishController.js";

const wishRouter = express.Router();

cartRouter.post("/add", authUser, addWish); // send data to api and check authuser
cartRouter.post("/remove", authUser, removeWish); // send data to api  and check authuser
cartRouter.post("/display", authUser, displayWish); // send data to api  and check authuser

export default wishRouter;
