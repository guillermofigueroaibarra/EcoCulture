import { createContext, useEffect, useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

export const ShopContext = createContext();

const ShopContextProvider = (props) => {
  const backendUrl = "http://localhost:4000";
  const [products, setProducts] = useState([]);
  const [cartItems, setCartItems] = useState({});
  const [remainingQuantities, setRemainingQuantities] = useState({});
  const navigate = useNavigate();
  const [token, setToken] = useState(""); // user token

  const addItemToCart = async (itemId) => {
    let cartData = structuredClone(cartItems); // Create a copy of cartItems

    // Find the product in the products array
    const product = products.find((item) => item._id === itemId);

    if (!product) {
      toast.error(`Product with ID ${itemId} not found.`);
      return;
    }

    const availableQuantity = product.quantity; // Using quantity as the quantity
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

    if (token) {
      try {
        // call api and provide item id and token as parameters
        await axios.post(
          backendUrl + "/api/cart/add",
          { itemId },
          { headers: { token } }
        );
      } catch (error) {
        console.log(error);
        toast.error(error.message);
      }
    }
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

  const updateCart = async (itemId, quantity) => {
    let cartData = structuredClone(cartItems); // copy cart items
    cartData[itemId] = quantity;
    setCartItems(cartData);

    if (token) {
      try {
        await axios.post(
          backendUrl + "/api/cart/update",
          { itemId, quantity },
          { headers: { token } }
        );
      } catch (error) {
        console.log(error);
        toast.error(error.message);
      }
    }
  };

  const getUserCart = async (token) => {
    // get cart items from data base
    try {
      const response = await axios.post(
        backendUrl + "/api/cart/get",
        {},
        { headers: { token } }
      );

      if (response.data.success) {
        setCartItems(response.data.cartData);
      }
    } catch (error) {
      console.log(error);
      toast.error(error.message);
    }
  };

  useEffect(() => {
    // if token not found then check local storage
    if (!token && localStorage.getItem("token")) {
      // if not token found in state but found in localStorage then set token
      setToken(localStorage.getItem("token"));
      getUserCart(localStorage.getItem("token")); // pass token as parameter and check number of items in cart from database
    }
  }, []);

  // Value accessible by consuming components
  const value = {
    products,
    setCartItems,
    backendUrl,
    cartItems,
    addItemToCart,
    getCartCount,
    remainingQuantities,
    updateCart,
    navigate,
    setToken,
    token,
  };

  return (
    <ShopContext.Provider value={value}>{props.children}</ShopContext.Provider>
  );
};

export default ShopContextProvider;
