import express from "express";
import cors from "cors";
import "dotenv/config";
import connectDB from "./config/mongodb.js";
import connectCloudinary from "./config/cloudinary.js";
import userRouter from "./routes/userRoute.js";
import donationRouter from "./routes/donationRoute.js";
import cartRouter from "./routes/cartRoute.js";
import orderRouter from "./routes/orderRoute.js";

// App configuration
const app = express();
const port = process.env.PORT || 4000;
connectDB();
connectCloudinary();

// MIDDLEWARE COMMANDS
app.use(express.json());
app.use(cors());

// API endpoints
app.use("/api/user", userRouter);
app.use("/api/donation", donationRouter);
app.use("/api/cart", cartRouter);
app.use("/api/order", orderRouter);

app.get("/", (req, res) => {
  res.send("Api is working");
});

app.listen(port, () => console.log("Server started on port: " + port));
