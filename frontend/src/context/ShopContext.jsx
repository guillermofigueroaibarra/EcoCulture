import { createContext, useEffect, useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";

export const ShopContext = createContext();

const ShopContextProvider = (props) => {
  const currency = "$";
  const backendUrl = "http://localhost:4000";
  const [products, setProducts] = useState([]);
  const [cartItems, setCartItems] = useState({});
  const [remainingQuantities, setRemainingQuantities] = useState({});

  const addItemToCart = async (itemId) => {
    let cartData = structuredClone(cartItems); // Create a copy of cartItems

    // Find the product in the products array
    const product = products.find((item) => item._id === itemId);

    if (!product) {
      toast.error(`Product with ID ${itemId} not found.`);
      return;
    }

    const availableQuantity = product.price; // Using price as the quantity
    const currentQuantityInCart = cartData[itemId] || 0;

    // Check if there's enough quantity available
    if (currentQuantityInCart + 1 > availableQuantity) {
      toast.error(`Not enough quantity available for ${product.name}.`);
      return;
    }

    // Update cart data
    if (cartData[itemId]) {
      cartData[itemId] += 1;
    } else {
      cartData[itemId] = 1;
    }

    setCartItems(cartData);
    toast.success(`${product.name} has been added to your cart.`);
  };

  useEffect(() => {
    console.log(cartItems);
  }, [cartItems]);

  const getCartCount = () => {
    let totalCount = 0;
    for (const itemId in cartItems) {
      if (cartItems.hasOwnProperty(itemId)) {
        totalCount += cartItems[itemId]; // Add the quantity of the current item
      }
    }
    return totalCount;
  };

  // Fetch products from API
  const getProductsData = async () => {
    try {
      const response = await axios.get(backendUrl + "/api/donation/list");
      if (response.data.success) {
        setProducts(response.data.donations); // Set fetched products
      } else {
        toast.error(response.data.message || "Failed to fetch products");
      }
    } catch (error) {
      toast.error(error.message || "An error occurred while fetching products");
      console.error(error);
    }
  };

  useEffect(() => {
    getProductsData(); // Fetch products on mount
  }, []);

  // Value accessible by consuming components
  const value = {
    products,
    currency,
    backendUrl,
    cartItems,
    addItemToCart,
    getCartCount,
    remainingQuantities,
  };

  return (
    <ShopContext.Provider value={value}>{props.children}</ShopContext.Provider>
  );
};

export default ShopContextProvider;
