import React, { useState } from "react";
import "./ImagePopup.css";

const ImagePopup = ({ images, initialImage, onClose }) => {
  const [currentImageIndex] = useState(images.indexOf(initialImage));

  return (
    <div className="image-popup">
      <div className="image-container">
        <div className="image-popup-content">
          <span className="close" onClick={onClose}>
            &times;
          </span>
          <img
            src={images[currentImageIndex]}
            alt="Product"
            className="popup-image"
          />
        </div>
      </div>
    </div>
  );
};

export default ImagePopup;
