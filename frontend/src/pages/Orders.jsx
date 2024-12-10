import React, { useContext, useEffect, useState } from "react";
import { ShopContext } from "../context/ShopContext";
import "./PagesStyles/Orders.css";
import axios from "axios";

function Orders() {
  const { backendUrl, token } = useContext(ShopContext);
  const [orderData, setorderData] = useState([]); // user orders

  const loadOders = async () => {
    try {
      if (!token) {
        return null;
      }

      const response = await axios.post(
        backendUrl + "/api/order/userorders",
        {},
        { headers: { token } }
      );
      if (response.data.success) {
        let allOrdersItem = [];
        response.data.orders.map((order) => {
          order.items.map((item) => {
            item["status"] = order.status;
            item["date"] = order.date;
            allOrdersItem.push(item);
          });
        });

        setorderData(allOrdersItem.reverse()); // set orders and display the latest order with reverse method
      }
    } catch (error) {}
  };

  // whenever token is updated this function will be run
  useEffect(() => {
    loadOders();
  }, [token]);

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

  return (
    <div className="orders-container">
      <div>
        <h1>MY ORDERS</h1>
      </div>
      <div className="status-explanation">
        <div className="status-legend">
          <div className="status-item">
            <span className="status-color status-pending"></span>
            <p>
              Pending: Your order is being processed and will be confirmed soon.
            </p>
          </div>
          <div className="status-item">
            <span className="status-color status-confirmed"></span>
            <p>
              Confirmed: Your order has been confirmed and is ready for
              dispatch.
            </p>
          </div>
          <div className="status-item">
            <span className="status-color status-readyforpickup"></span>
            <p>Ready for Pick Up: Your order is ready to be picked up.</p>
          </div>
          <div className="status-item">
            <span className="status-color status-picked"></span>
            <p>Picked Up: Your order has been successfully picked up.</p>
          </div>
          <div className="status-item">
            <span className="status-color status-expired"></span>
            <p>
              Order Expired: Your order was not collected within the allotted
              time.
            </p>
          </div>
          <div className="status-item">
            <span className="status-color status-canceled"></span>
            <p>Canceled: Your order was canceled due to unavailable items.</p>
          </div>
        </div>
      </div>

      <div>
        {orderData.map((item, index) => (
          <div className="order-item" key={index}>
            <div>
              <img src={item.image[0]} alt={item.name} />
            </div>
            <div className="item-details">
              <p>{item.name}</p>
              <div>
                <p>Quantity: {item.quantity}</p>
              </div>
              <p>
                <span> {new Date(item.date).toDateString()}</span>
              </p>
            </div>

            <div className="order-status">
              <p
                style={{
                  color: orderStatusPTag(item.status),
                  fontWeight: "bold",
                }}
              >
                Status: {item.status}
              </p>
              <button onClick={loadOders}>Order Status</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Orders;
