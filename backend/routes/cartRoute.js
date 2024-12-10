import express from "express";
import authUser from "../middleware/auth.js";

// import functions from cartController.js
import {
  addToCart,
  getUserCart,
  updateCart,
} from "../controllers/cartController.js";

const cartRouter = express.Router();

cartRouter.post("/get", authUser, getUserCart); // send data to api and check authuser
cartRouter.post("/add", authUser, addToCart); // send data to api  and check authuser
cartRouter.post("/update", authUser, updateCart); // send data to api  and check authuser

export default cartRouter;
