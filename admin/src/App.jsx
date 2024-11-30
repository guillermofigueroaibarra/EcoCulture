import React, { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import { Route, Routes } from "react-router-dom";

import Add from "./pages/Add";
import List from "./pages/List";
import Orders from "./pages/Orders";
import Sidebar from "./components/Sidebar";

import Login from "./components/Login";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// export environment variables from .env file so it can be used in any component
export const backendUrl = import.meta.env.VITE_BACKEND_URL;
export const currency = "$";

function App() {
  <ToastContainer />;

  // if token is available in local storage then it will store token in localStorage variable otherwise it will be empty string
  const [token, setToken] = useState(
    localStorage.getItem("token") ? localStorage.getItem("token") : ""
  );

  // function to keep track of updated tokens
  useEffect(() => {
    localStorage.setItem("token", token);
  }, [token]);

  return (
    <div>
      <ToastContainer position="bottom-right" />
      {token === "" ? (
        <Login setToken={setToken} />
      ) : (
        <>
          <Navbar setToken={setToken} />
          <div className="adminLayout">
            <Sidebar />

            <div className="adminContent">
              <Routes>
                <Route path="/add" element={<Add token={token} />} />
                <Route path="/list" element={<List token={token} />} />
                <Route path="/orders" element={<Orders token={token} />} />
              </Routes>
            </div>
          </div>
        </>
      )}
    </div>
  );
}

export default App;
