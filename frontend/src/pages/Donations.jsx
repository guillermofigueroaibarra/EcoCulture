import React, { useContext, useEffect, useState } from "react";
import { ShopContext } from "../context/ShopContext";
import "./PagesStyles/Donations.css";
import dropdown from "../assets/dropdown_icon.png";
import ProductItem from "../Components/ProductItem/ProductItem";
import SearchBar from "../Components/SearchBar/SearchBar"; // Import the SearchBar component

function Donations() {
  const [showFilter, setShowFilter] = useState(true);
  const [filterDonations, setFilterDonations] = useState([]);
  const [category, setCategory] = useState([]);
  const [query, setQuery] = useState(""); // State for the search query
  const { products } = useContext(ShopContext);

  const toggleCategory = (e) => {
    if (category.includes(e.target.value)) {
      setCategory((prev) => prev.filter((item) => item !== e.target.value));
    } else {
      setCategory((prev) => [...prev, e.target.value]);
    }
  };

  const applyFilter = () => {
    let productsCopy = products.slice();

    if (category.length > 0) {
      productsCopy = productsCopy.filter((item) =>
        category.includes(item.category)
      );
    }

    if (query) {
      productsCopy = productsCopy.filter(
        (item) => item.name.toLowerCase().includes(query.toLowerCase()) // Apply the search query
      );
    }

    setFilterDonations(productsCopy);
  };

  useEffect(() => {
    setFilterDonations(products);
  }, [products]);

  useEffect(() => {
    applyFilter();
  }, [category, query, products]); // Reapply filter on query change

  return (
    <div className="donations-container">
      {/* Search Bar Component */}

      {/* Pass the setQuery function as onSearch */}
      <div className="filter-bar">
        <div
          className="filter-bar-header"
          onClick={() => setShowFilter(!showFilter)}
        >
          <p className="filter-bar-title">FILTER</p>
          <img
            src={dropdown}
            className={`filter-dropdown-icon ${showFilter ? "rotate-90" : ""}`}
            alt="dropdown"
          />
        </div>
        {showFilter && (
          <div className="filter-options">
            <div className="filter-category-list">
              <label>
                <input
                  type="checkbox"
                  value="Clothes"
                  onChange={toggleCategory}
                />{" "}
                Clothes and Accesories
              </label>
              <label>
                <input
                  type="checkbox"
                  value="Furniture"
                  onChange={toggleCategory}
                />{" "}
                Furniture
              </label>

              <label>
                <input
                  type="checkbox"
                  value="Electronics"
                  onChange={toggleCategory}
                />{" "}
                Electronics
              </label>
              <label>
                <input
                  type="checkbox"
                  value="Books"
                  onChange={toggleCategory}
                />{" "}
                Books and Media
              </label>
              <label>
                <input type="checkbox" value="Food" onChange={toggleCategory} />{" "}
                Food
              </label>
              <label>
                <input
                  type="checkbox"
                  value="Houseware"
                  onChange={toggleCategory}
                />{" "}
                Houseware
              </label>
              <label>
                <input
                  type="checkbox"
                  value="Shoes"
                  onChange={toggleCategory}
                />{" "}
                Shoes
              </label>

              <label>
                <input
                  type="checkbox"
                  value="PetSupplies"
                  onChange={toggleCategory}
                />{" "}
                Pet Supplies
              </label>

              <label>
                <input
                  type="checkbox"
                  value="Tools"
                  onChange={toggleCategory}
                />{" "}
                Tools
              </label>

              <label>
                <input
                  type="checkbox"
                  value="SportsEquipment"
                  onChange={toggleCategory}
                />{" "}
                Sports Equipment
              </label>

              <label>
                <input
                  type="checkbox"
                  value="Others"
                  onChange={toggleCategory}
                />{" "}
                Others
              </label>
            </div>
          </div>
        )}
      </div>
      <div className="content-section">
        <div className="search-bar">
          <SearchBar onSearch={setQuery} />
        </div>
        <div className="product-display">
          {filterDonations.map((item, index) => (
            <ProductItem
              key={index}
              name={item.name}
              id={item._id}
              quantity={item.quantity}
              image={item.image}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Donations;
