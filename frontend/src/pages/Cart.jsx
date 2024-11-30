import React, { useContext, useEffect, useState } from "react";
import { ShopContext } from "../context/ShopContext";

function Cart() {
  const { cartItems } = useContext(ShopContext);
  const [cartData, setCartData] = useState([]);

  useEffect(() => {
    const tempData = [];
    for (const itemId in cartItems) {
      if (cartItems[itemId] > 0) {
        tempData.push({
          _id: itemId,
          quantity: cartItems[itemId],
        });
      }
    }
    setCartData(tempData); // Update state with the new cart data
    console.log(tempData); // Log the tempData array to the console
  }, [cartItems]);

  return (
    <div>
      <h1>Cart</h1>
      {cartData.length > 0 ? (
        cartData.map((item) => (
          <div key={item._id}>
            <p>Item ID: {item._id}</p>
            <p>Quantity: {item.quantity}</p>
          </div>
        ))
      ) : (
        <p>Your cart is empty.</p>
      )}
    </div>
  );
}

export default Cart;
