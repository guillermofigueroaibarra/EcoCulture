import express from "express";
import authUser from "../middleware/auth.js";
import {
  loginUser,
  registerUser,
  adminLogin,
  updateEmail,
  updatePassword,
} from "../controllers/userController.js";

const userRouter = express.Router();

userRouter.post("/register", registerUser);
userRouter.post("/login", loginUser);
userRouter.post("/admin", adminLogin);

userRouter.post("/update-email", authUser, updateEmail);
userRouter.post("/update-password", authUser, updatePassword);
export default userRouter;
