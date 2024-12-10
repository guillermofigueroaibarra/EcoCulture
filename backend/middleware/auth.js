import jwt from "jsonwebtoken";

const authUser = async (req, res, next) => {
  const { token } = req.headers;

  // if token not available display error message
  if (!token) {
    return res.json({ success: false, message: "not authorized login again" });
  }

  try {
    const token_decode = jwt.verify(token, process.env.JWT_SECRET); // DECODING TOKEN
    req.body.userId = token_decode.id; // add user id property
    next();
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: error.message });
  }
};

export default authUser;
