import React, { useState } from "react";
import { assets } from "../assets/assets";
import axios from "axios";
import { backendUrl } from "../App";
import { toast } from "react-toastify";

import "./Add.css";

function Add({ token }) {
  // state variables for images
  const [image1, setImage1] = useState(false);
  const [image2, setImage2] = useState(false);
  const [image3, setImage3] = useState(false);
  const [image4, setImage4] = useState(false);

  // state variables for other form inputs
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState("");

  const onSubmitHandler = async (e) => {
    e.preventDefault(); // to avoid page to be reloaded when submitting form
    try {
      const formData = new FormData();

      formData.append("name", name);
      formData.append("description", description);
      formData.append("price", price);
      formData.append("category", category);

      // check if image x is available then append it else don't include it
      image1 && formData.append("image1", image1);
      image2 && formData.append("image2", image2);
      image3 && formData.append("image3", image3);
      image4 && formData.append("image4", image4);

      // api call
      const response = await axios.post(
        backendUrl + "/api/donation/add",
        formData,
        { headers: { token } }
      );

      // if donation was added then reset form
      if (response.data.success) {
        toast.success(response.data.mesage);
        setName("");
        setDescription("");
        setImage1(false);
        setImage2(false);
        setImage3(false);
        setImage4(false);
        setPrice("");
      } else {
        // if not succesfully added display error message
        toast.error(response.data.mesage);
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      toast.error(error.mesage);
    }
  };
  return (
    <form className="uploadForm" onSubmit={onSubmitHandler}>
      <div>
        <h1>UPLOAD IMAGE</h1>
      </div>
      <div className="image-grid">
        <label htmlFor="image1">
          <img
            src={!image1 ? assets.upload_area : URL.createObjectURL(image1)}
            alt=""
          />
          <input
            onChange={(e) => setImage1(e.target.files[0])}
            type="file"
            id="image1"
            hidden
          />
        </label>

        <label htmlFor="image2">
          <img
            src={!image2 ? assets.upload_area : URL.createObjectURL(image2)}
            alt=""
          />
          <input
            onChange={(e) => setImage2(e.target.files[0])}
            type="file"
            id="image2"
            hidden
          />
        </label>

        <label htmlFor="image3">
          <img
            src={!image3 ? assets.upload_area : URL.createObjectURL(image3)}
            alt=""
          />
          <input
            onChange={(e) => setImage3(e.target.files[0])}
            type="file"
            id="image3"
            hidden
          />
        </label>

        <label htmlFor="image4">
          <img
            src={!image4 ? assets.upload_area : URL.createObjectURL(image4)}
            alt=""
          />
          <input
            onChange={(e) => setImage4(e.target.files[0])}
            type="file"
            id="image4"
            hidden
          />
        </label>
      </div>

      <div>
        <p>Product Name</p>
        <input
          onChange={(e) => setName(e.target.value)} // event set name function
          value={name}
          type="text"
          placeholder="type here"
          required
        />
      </div>

      <div>
        <p>Product Description</p>
        <input
          onChange={(e) => setDescription(e.target.value)} // event set name function
          value={description}
          type="text"
          placeholder="write description here"
          required
        />
      </div>

      <div>
        <div>
          <p>Product Category</p>
          <select
            onChange={(e) => setCategory(e.target.value)} // event set name function
            value={category}
          >
            <option value=""></option>
            <option value="Clothes">Clothes</option>
            <option value="Furniture">Furniture</option>
            <option value="Electronics">Electronics</option>
            <option value="Books">Books</option>
            <option value="Food">Food</option>
            <option value="Houseware">Houseware</option>
            <option value="Shoes">Shoes</option>
            <option value="Others">Others</option>
          </select>
        </div>

        <div>
          <p>Product Price</p>
          <input
            onChange={(e) => setPrice(e.target.value)} // event set name function
            value={price}
            type="Number"
            placeholder="0"
          />
        </div>
      </div>
      <button type="submit">ADD</button>
    </form>
  );
}

export default Add;
