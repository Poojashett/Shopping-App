import { useContext, useState } from "react";
import { ShopContext } from "../../Context/ShopContext";
import { useParams } from "react-router-dom";
import ItemCard from "../Items/ItemCard";
import "./ProductList.css";

const ProductList = () => {
  const { category } = useParams();
  const data = useContext(ShopContext);
  const [isOpen, setIsOpen] = useState(false);
  const [sortOption, setSortOption] = useState("");

  const filteredData = data
    ? data.filter(
        (item) => item.category.toLowerCase() === category.toLowerCase()
      )
    : [];

  const sortedData = [...filteredData].sort((a, b) => {
    if (sortOption === "priceHighToLow") {
      return b.price - a.price;
    } else if (sortOption === "priceLowToHigh") {
      return a.price - b.price;
    } else if (sortOption === "customerRating") {
      return b.rating.rate - a.rating.rate;
    } else {
      return 0;
    }
  });

  const handleSelect = (e) => {
    setSortOption(e.target.value);
    setIsOpen(false);
  };

  return (
    <div>
      <div className="dropdown-main">
        <div className={`dropdown-container ${isOpen ? "open" : ""}`}>
          <select
            className="dropdown"
            onChange={handleSelect}
            onFocus={() => setIsOpen(true)}
            onBlur={() => setIsOpen(false)}
          >
            <option value="priceHighToLow" className="option">
              Price: High to Low
            </option>
            <option value="priceLowToHigh" className="option">
              Price: Low to High
            </option>
            <option value="customerRating" className="option">
              Customer Rating
            </option>
          </select>
          <div className="dropdown-arrow">▼</div>
        </div>
      </div>

      <div className="product-list">
        {sortedData.map((ele) => {
          return (
            <ItemCard
              key={ele.id}
              title={ele.title}
              rate={ele.rating.rate}
              price={ele.price}
              img={ele.image}
              id={ele.id}
            />
          );
        })}
      </div>
    </div>
  );
};

export default ProductList;
