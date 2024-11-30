import { register } from "module";
import userModel from "../models/userModel.js";
import validator from "validator";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

const createToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET);
};
// routing for users to login
const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await userModel.findOne({ email });

    // if user is not found display error message
    if (!user) {
      return res.json({ success: false, message: "User doesn't exists" });
    }

    // check if password corresponds to email
    const isMatch = await bcrypt.compare(password, user.password);
    if (isMatch) {
      const token = createToken(user._id);
      res.json({ success: true, token });
    } else {
      res.json({ success: false, message: "Invalid Password" });
    }
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: error.message });
  }
};

// routing for user to sign up
const registerUser = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    // check if user exist already
    const exist = await userModel.findOne({ email });
    // if duplica user is found display error message
    if (exist) {
      return res.json({ success: false, message: "User already exists" });
    }

    // validate email format and valid password
    if (!validator.isEmail(email)) {
      // if email is not validate it, return error msg
      return res.json({
        success: false,
        message: "Please enter a valid E-mail",
      });
    }

    // validate email format and valid password
    if (password.length < 8) {
      // if password is not validate it, return error msg
      return res.json({
        success: false,
        message: "Please enter a valid Password",
      });
    }

    // hashing password
    const salt = await bcrypt.genSalt(10);
    // variable with hashed password to store in database
    const hashedPassword = await bcrypt.hash(password, salt);

    const newUser = new userModel({
      name,
      email,
      password: hashedPassword,
    });

    // store new user in database
    const user = await newUser.save();

    // create a token to test under thunder client
    const token = createToken(user._id);
    res.json({ success: true, token });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: error.message });
  }
};

// Route for administrators login
const adminLogin = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (
      email === process.env.ADMIN_EMAIL &&
      password === process.env.ADMIN_PASSWORD
    ) {
      const token = jwt.sign(email + password, process.env.JWT_SECRET);
      res.json({ success: true, token });
    } else {
      res.json({ success: false, message: "Invalid credentials" });
    }
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: error.message });
  }
};

export { loginUser, registerUser, adminLogin };
