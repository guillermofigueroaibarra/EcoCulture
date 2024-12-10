import React, { useContext, useEffect, useState } from "react";
import { ShopContext } from "../context/ShopContext";
import "./PagesStyles/Cart.css";
import trashIcon from "../assets/trashIcon.png";
function Cart() {
  const { products, cartItems, updateCart, navigate, token } =
    useContext(ShopContext);

  const [cartData, setCartData] = useState([]);

  useEffect(() => {
    if (products.length > 0) {
      const tempData = [];
      for (const itemId in cartItems) {
        if (cartItems[itemId] > 0) {
          // Find the product details using the ID
          const product = products.find((prod) => prod._id === itemId);
          if (product) {
            tempData.push({
              _id: itemId,
              name: product.name, // Include name from products
              image: product.image, // Include image from products
              quantity: cartItems[itemId],
            });
          }
        }
      }
      setCartData(tempData); // Update state with enriched cart data
    }
  }, [cartItems, products]); // Re-run effect when cartItems or products change

  return (
    <>
      <h1>Cart</h1>

      {/* Table Headers */}
      <div className="list-container">
        <div className="list-header">
          <b>Image</b>
          <b>Name</b>
          <b>Quantity</b>
        </div>

        {cartData.length > 0 ? (
          cartData.map((item) => (
            <div className="list-item" key={item._id}>
              <img src={item.image[0]} alt={item.name} />
              <div>
                <p>{item.name}</p>
              </div>

              <div>
                <p>{item.quantity}</p>
              </div>
              <img
                onClick={() => updateCart(item._id, 0)} // update cart quantity by setting it to 0
                src={trashIcon}
                alt=""
              />
            </div>
          ))
        ) : (
          <div className="list-item">
            <p>none</p>
            <div>
              <p>cart is empty</p>
            </div>

            <div>
              <p>0</p>
            </div>
          </div>
        )}
      </div>

      <button onClick={() => navigate("/place-order")}>Request Items</button>
    </>
  );
}

export default Cart;
