import { useParams } from "react-router-dom";
import useProductDisplay from "../../Utils/useProductDisplay";
import "./ProductDisplay.css";
import { useState } from "react";
import ImagePopup from "./ImagePopup";
import { useDispatch } from "react-redux";
import { addItem } from "../../Utils/slice/cartSlice";

const ProductDisplay = () => {
  const { id } = useParams();
  const data = useProductDisplay(id);

  const product = data
    ? data.find((item) => item.id === parseInt(id, 10))
    : null;

  const [popupVisible, setPopupVisible] = useState(false);
  const [popupImage, setPopupImage] = useState("");
  const [selectedSize, setSelectedSize] = useState("");
  const [quantity, setQuantity] = useState(1);
  const dispatch = useDispatch();

  const handleImageClick = (image) => {
    setPopupImage(image);
    setPopupVisible(true);
  };
 
  const handleSizeSelect = (size) => {
    setSelectedSize(size);
  };

  const handleQuantityChange = (amount) => {
    setQuantity((prev) => Math.max(1, prev + amount));
  };

  const handleButton = (item) => {
    if (selectedSize) {
      dispatch(addItem({ ...item, size: selectedSize, quantity }));
    }
  };

  if (!product) {
    return <p>Loading...</p>;
  }

  const { title, price, description, category, image, rating } = product;
  const images = [image, image, image, image];

  return (
    <div className="product-details">
      <div className="product-images">
        <img
          src={images[0]}
          alt={title}
          className="product-image-large"
          onClick={() => handleImageClick(images[0])}
        />
        <div className="product-thumbnails">
          {images.slice(1).map((img, index) => (
            <img
              key={index}
              src={img}
              alt={title}
              className="product-thumbnail"
              onClick={() => handleImageClick(img)}
            />
          ))}
        </div>
      </div>
      <div className="product-info">
        <h1>{title}</h1>
        <p>Price: ${price}</p>
        <p>{description}</p>
        <p>Category: {category}</p>
        <div className="product-rating">
          <span>Rating: {rating.rate}</span>
          <span>({rating.count} reviews)</span>
        </div>
        <h3>Select Size</h3>
        <div className="size-buttons">
          {["S", "M", "L", "XL"].map((size) => (
            <button
              key={size}
              className={`size-button ${selectedSize === size ? "selected" : ""}`}
              onClick={() => handleSizeSelect(size)}
            >
              {size}
            </button>
          ))}
        </div>
        {!selectedSize && <p className="size-warning">Please select a size.</p>}
        <div className="quantity-selection">
          <button
            className="quantity-button"
            onClick={() => handleQuantityChange(-1)}
          >
            -
          </button>
          <span>{quantity}</span>
          <button
            className="quantity-button"
            onClick={() => handleQuantityChange(1)}
          >
            +
          </button>
        </div>
        <div className="add-to-cart">
          <button
            className="cart-button"
            onClick={() => handleButton(product)}
            disabled={!selectedSize}
          >
            Add to Cart
          </button>
        </div>
      </div>
      {popupVisible && (
        <ImagePopup
          images={images}
          initialImage={popupImage}
          onClose={() => setPopupVisible(false)}
        />
      )}
    </div>
  );
};

export default ProductDisplay;
