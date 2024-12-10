import express from "express";
import adminAuth from "../middleware/auth.js"; // admin authentication
import authUser from "../middleware/auth.js"; // user authentication
import {
  placeOrder,
  allOrders,
  userOrders,
  updateStatus,
} from "../controllers/OrderController.js";

const orderRouter = express.Router();

// Admin features
orderRouter.post("/list", adminAuth, allOrders); // endpoint to list orders
orderRouter.post("/status", adminAuth, updateStatus); // endpoint to update status

// User Features
orderRouter.post("/place", authUser, placeOrder);

// displays user orders
orderRouter.post("/userorders", authUser, userOrders);

export default orderRouter;
