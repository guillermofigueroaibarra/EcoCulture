import React, { useEffect, useState } from "react";
import axios from "axios";
import { backendUrl, currency } from "../App";
import { toast } from "react-toastify";

import "./List.css";

function List({ token }) {
  const [list, setList] = useState([]);

  const fetchList = async () => {
    try {
      const response = await axios.get(backendUrl + "/api/donation/list");
      if (response.data.success) {
        setList(response.data.donations);
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      toast.error("Failed to fetch list");
    }
  };

  const removeDonation = async (id) => {
    try {
      const response = await axios.post(
        backendUrl + "/api/donation/remove",
        { id },
        { headers: { token } }
      );
      if (response.data.success) {
        toast.success(response.data.message);
        await fetchList(); // Update the list after removing the item
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error("Failed to remove donation");
    }
  };

  useEffect(() => {
    fetchList();
  }, []);

  return (
    <>
      <h1>All Products List</h1>

      {/* Table Headers */}
      <div className="list-container">
        <div className="list-header">
          <b>Image</b>
          <b>Name</b>
          <b>Description</b>
          <b>Price</b>
          <b>Category</b>
        </div>

        {/* Table Content */}
        {list.map((item, index) => (
          <div className="list-item" key={index}>
            <img src={item.image[0]} alt={item.name} />
            <p>{item.name}</p>
            <p>{item.description}</p>
            <p>
              {currency}
              {item.price}
            </p>
            <p>{item.category}</p>

            <p className="remove" onClick={() => removeDonation(item._id)}>
              DELETE
            </p>
          </div>
        ))}
      </div>
    </>
  );
}

export default List;
