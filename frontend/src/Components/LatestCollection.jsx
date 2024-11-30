import React, { useContext, useState, useEffect } from "react";
import { ShopContext } from "../context/ShopContext";
import ProductItem from "./ProductItem/ProductItem";

function LatestCollection() {
  const { products } = useContext(ShopContext);
  const [latestProducts, setLatestProducts] = useState([]);

  useEffect(() => {
    setLatestProducts(products.slice(0, 10));
  }, [products]);

  return (
    <div className="latest-collection">
      {latestProducts.map((item, index) => (
        <ProductItem
          key={index}
          id={item.id}
          image={item.image}
          name={item.name}
          price={item.price}
        />
      ))}
    </div>
  );
}

export default LatestCollection;
