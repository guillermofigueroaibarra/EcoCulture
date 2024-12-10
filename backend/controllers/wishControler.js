import userModel from "../models/userModel.js";

// add donations to user cart
const addWish = async (req, res) => {
  try {
    const { userId, itemId } = req.body;
    const userData = await userModel.findById(userId);
    let wishListData = await userData.wishListData; // set user wishlist

    if (wishListData[itemId]) {
    } else {
      console.log("no item available");
    }

    await userModel.findByIdAndUpdate(userId, { wishListData }); // send updated list
    res.json({ success: true, message: "Added to Wish list" });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: error.message });
  }
};

// update Cart donations
const updateCart = async (req, res) => {
  try {
    const { userId, itemId } = req.body; // api requirements
    const userData = await userModel.findById(userId); // get user id
    let wishListData = await userData.wishListData; // get cart data

    if (quantity === 0) {
      // If quantity is 0, delete the item from the cart
      delete cartData[itemId];
    } else {
      cartData[itemId] = quantity; // update product quantity
    }

    await userModel.findByIdAndUpdate(userId, { cartData }); // updated cart data
    res.json({ success: true, message: "Cart updated" });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: error.message });
  }
};

// get user cart data
const getUserCart = async (req, res) => {
  try {
    const { userId } = req.body;
    const userData = await userModel.findById(userId); // find user
    let cartData = await userData.cartData; // find data

    res.json({ success: true, cartData });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: error.message });
  }
};

export { addWish, updateCart, getUserCart };
