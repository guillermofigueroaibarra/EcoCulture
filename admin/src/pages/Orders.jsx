import React, { useEffect, useState } from "react";
import axios from "axios";
import { backendUrl } from "../App";
import { toast } from "react-toastify";
import "./Orders.css";

import parcel from "../assets/parcel_icon.svg";
function Orders({ token }) {
  const [orders, setOrders] = useState([]); // state variable to save orders

  const fetchOrders = async () => {
    if (!token) {
      return null;
    }

    try {
      const response = await axios.post(
        backendUrl + "/api/order/list",
        {},
        { headers: { token } }
      );
      if (response.data.success) {
        setOrders(response.data.orders.reverse()); // reverse orders to display them from latest order first
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      toast.error(error.message);
    }
  };

  // function to get status and change status p tag color depending on status
  const orderStatusPTag = (status) => {
    switch (status) {
      case "Order Placed":
        return "Blue";
      case "Confirmed":
        return "Purple";
      case "Ready for pick up":
        return "green";

      case "Picked up":
        return "black";

      case "Order Expired":
        return "gray";
      case "Out of stock":
        return "red";
      default:
        return "";
    }
  };

  const statusHandler = async (event, orderId) => {
    try {
      const response = await axios.post(
        backendUrl + "/api/order/status",
        {
          orderId,
          status: event.target.value, // get status value
        },
        { headers: { token } } //admin token
      );

      if (response.data.success) {
        await fetchOrders(); // to update status for all orders
      }
    } catch (error) {
      console.log(error);
      toast.error(response.data.message);
    }
  };

  // Function to calculate the total quantity of items in an order
  const calculateTotalItems = (items) => {
    return items.reduce((total, item) => total + item.quantity, 0);
  };

  useEffect(() => {
    fetchOrders();
  }, [token]);

  return (
    <div className="orders-container">
      <h1>Order Page</h1>
      <div>
        {orders.map((order, index) => (
          <div className="order-card" key={index}>
            <img className="order-image" src={parcel} alt="" />
            <h2 className="order-address">{order.address.name + " "}</h2>
            <div className="order-details">
              <div className="order-items">
                {order.items.map((item, index) => {
                  if (index === order.items.length - 1) {
                    // if this is the last item, display item with no comma at the end
                    return (
                      <p className="info" key={index}>
                        {item.name} x {item.quantity}
                      </p>
                    );
                  } else {
                    // else display comma
                    return (
                      <p className="info" key={index}>
                        {item.name} x {item.quantity},
                      </p>
                    );
                  }
                })}
              </div>

              <div>
                {/* Calculate total number of items based on quantity */}
                <p className="info">
                  Total Number of Items: {calculateTotalItems(order.items)}
                </p>

                <p className="info">
                  Date: {new Date(order.date).toLocaleDateString()}
                </p>
                <p
                  style={{
                    color: orderStatusPTag(order.status),
                    fontWeight: "bold",
                  }}
                >
                  Status: {order.status}
                </p>
              </div>

              <select
                className="order-select"
                onChange={(event) => statusHandler(event, order._id)}
                value={order.status}
              >
                <option value="Order Placed">Order Placed</option>
                <option value="Confirmed">Confirmed</option>
                <option value="Ready for pick up">Ready for pick up</option>
                <option value="Picked Up">Picked Up</option>
                <option value="Order Expired">Order Expired</option>
                <option value="Out of stock">Out of stock</option>
              </select>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Orders;
