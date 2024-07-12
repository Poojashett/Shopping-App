import { Link } from "react-router-dom";
import "./ItemCard.css";

const ItemCard = ({ title, rate, price, img, id }) => {
  console.log('id: ', id);
  return (
    <div className="card">
      <Link to={`/product-display/${id}`}>
        <img src={img} alt={title} className="card-image" />
      </Link>
      <div className="card-content">
        <h3 className="card-title">{title}</h3>
        <p className="card-price">${price}</p>
        <div className="card-rating">
          {Array.from({ length: 5 }, (_, index) => (
            <span
              key={index}
              className={`star ${index < rate ? "filled" : ""}`}
            >
              &#9733;
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ItemCard;
