import React, { useContext, useState } from "react";
import { ShopContext } from "../context/ShopContext";
import "./PagesStyles/PlaceOrder.css";
import store from "../assets/donationCenter.jpg";
import axios from "axios";
import { toast } from "react-toastify";

function PlaceOrder() {
  const { navigate, backendUrl, token, cartItems, setCartItems, products } =
    useContext(ShopContext);

  const [method, setMethod] = useState("cod");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    address: "",
  });

  const onChangeHandler = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setFormData((data) => ({ ...data, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/orders");
  };

  const onSubmitHandler = async (event) => {
    event.preventDefault(); // prevent page refresh
    try {
      let orderItems = []; // create array for order items
      console.log(cartItems);

      // Iterate through cartItems
      for (const itemId in cartItems) {
        const quantity = cartItems[itemId]; // Get the quantity of current item

        if (quantity > 0) {
          // Only if quantity > 0
          // Find the product with itemId
          const itemInfo = products.find((product) => product._id === itemId);

          if (itemInfo) {
            const itemWithQuantity = structuredClone(itemInfo);
            itemWithQuantity.quantity = quantity; // Add the correct quantity

            // Push the item with quantity into the orderItems array
            orderItems.push(itemWithQuantity);
          }
        }
      }

      let orderData = {
        address: formData,
        items: orderItems,
      };

      // api call
      switch (method) {
        case "cod":
          const response = await axios.post(
            backendUrl + "/api/order/place",
            orderData,
            { headers: { token } }
          );

          if (response.data.success) {
            setCartItems({});
            navigate("/orders");
          } else {
            toast.error(response.data.message);
          }
          break;

        default:
          break;
      }
    } catch (error) {
      console.error(error);
      toast.error(error.message);
    }
  };

  return (
    <div className="place-order-container">
      {/* Left side (form) */}
      <div className="left-side">
        <h1>Request Order</h1>
        <form onSubmit={onSubmitHandler}>
          <div>
            <input
              onChange={onChangeHandler}
              name="name"
              value={formData.name}
              type="text"
              placeholder="Full Name"
              required
            />
            <input
              onChange={onChangeHandler}
              name="email"
              value={formData.email}
              type="email"
              placeholder="Email"
              required
            />
            <input
              onChange={onChangeHandler}
              name="address"
              value={formData.address}
              type="text"
              placeholder="Address"
              required
            />
          </div>
          <button type="submit">Submit Request</button>
        </form>
      </div>

      {/* Right side (pickup location) */}
      <div className="right-side">
        <h1>Pick Up Location</h1>
        <img src={store} className="pOrderImg" alt="Donation Center" />
        <p className="addressinfo">
          Pick Up Location: 342 Salt Lake Street Blvd, Wheaton, IL 60188
        </p>
      </div>
    </div>
  );
}

export default PlaceOrder;
