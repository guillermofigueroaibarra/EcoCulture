import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ShopContext } from "../context/ShopContext";
import ImgGallery from "../Components/ImgGallery/ImgGallery";
import "./PagesStyles/Product.css";

function Product() {
  const { productId } = useParams();
  const { products, addItemToCart, cartItems } = useContext(ShopContext); // Access cartItems
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

  // Calculate remaining quantity dynamically
  const remainingQuantity = productData
    ? productData.price - (cartItems[productId] || 0)
    : 0;

  return productData ? (
    <div className="product-page">
      <div className="product-page-container">
        <div className="product-gallery">
          <ImgGallery images={productData.image} />
        </div>
        <div className="product-info">
          <h1>{productData.name}</h1>
          <p>Quantity available: {remainingQuantity}</p>
          <p>{productData.description}</p>
          <button onClick={() => addItemToCart(productData._id)}>
            ADD TO CART
          </button>
        </div>
      </div>
    </div>
  ) : (
    <div className="loading-placeholder">Loading product...</div>
  );
}

export default Product;
