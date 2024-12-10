import React, { useContext } from "react";
import { ShopContext } from "../../context/ShopContext";
import { Link } from "react-router-dom";
import "./ProductItem.css"; // Import the CSS file

function ProductItem({ id, image, name, quantity }) {
  const { currency } = useContext(ShopContext);
  return (
    <Link to={`/product/${id}`} className="product-item">
      <div>
        <div className="product-item-image">
          <img src={image[0]} alt={name} />
        </div>
        <p className="product-item-name">{name}</p>
        <p className="product-item-name">Quantity: {quantity}</p>
      </div>
    </Link>
  );
}

export default ProductItem;
