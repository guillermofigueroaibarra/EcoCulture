import orderModel from "../models/orderModel.js";
import userModel from "../models/userModel.js";

// Place order using COD method
const placeOrder = async (req, res) => {
  try {
    const { userId, items, address } = req.body;
    const orderData = {
      userId,
      items,
      address,
      date: Date.now(),
    };

    const newOrder = new orderModel(orderData); // create an order object
    await newOrder.save(); // save in data base
    await userModel.findByIdAndUpdate(userId, { cartData: {} }); // empty cart after order has been placed
    res.json({ success: true, message: "Order Placed" });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: error.message });
  }
};

// all orders data for admin panel
const allOrders = async (req, res) => {
  try {
    const orders = await orderModel.find({});
    res.json({ success: true, orders });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: error.message });
  }
};

// User order data frontend
const userOrders = async (req, res) => {
  try {
    const { userId } = req.body; // get user id
    const orders = await orderModel.find({ userId }); // find order with user id
    res.json({ success: true, orders });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: error.message });
  }
};

// update order status from admin panel
const updateStatus = async (req, res) => {
  try {
    const { orderId, status } = req.body; // send this info when calling api
    await orderModel.findByIdAndUpdate(orderId, { status });
    res.json({ success: true, message: "Status Updated" });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: error.message });
  }
};

export { placeOrder, allOrders, userOrders, updateStatus };
