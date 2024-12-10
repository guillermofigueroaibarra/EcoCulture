import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ShopContext } from "../context/ShopContext";
import ImgGallery from "../Components/ImgGallery/ImgGallery";
import "./PagesStyles/Product.css";
import { toast } from "react-toastify";

function Product() {
  const { productId } = useParams();
  const { products, addItemToCart, cartItems, token } = useContext(ShopContext); // Access cartItems
  const [productData, setProductData] = useState(null);

  const fetchProductData = () => {
    const product = products.find((item) => item._id === productId);
    if (product) {
      setProductData(product);
    }
  };

  useEffect(() => {
    if (products.length > 0) {
      fetchProductData(); // Fetch data only when products are populated
    }
  }, [productId, products]);

  const handleAddToCart = () => {
    // if user is logged in allow to add item to cart
    if (token) {
      addItemToCart(productData._id);
      // else ask user to login
    } else {
      toast.error("Please log in to add items to cart!");
    }
  };

  // Calculate remaining quantity dynamically
  const remainingQuantity = productData
    ? productData.quantity - (cartItems[productId] || 0)
    : 0;

  return productData ? (
    <div className="product-page">
      <div className="product-page-container">
        <div className="product-gallery">
          <ImgGallery images={productData.image} />
        </div>
        <div className="product-info">
          <h2>{productData.name}</h2>

          <p className="descriptionText">{productData.description}</p>
          <p>Quantity available: {remainingQuantity}</p>
          <button onClick={handleAddToCart}>ADD TO CART</button>
        </div>
      </div>
    </div>
  ) : (
    <div className="loading-placeholder">Loading product...</div>
  );
}

export default Product;
