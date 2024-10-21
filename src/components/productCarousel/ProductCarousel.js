import React, { useState } from "react";
import "./ProductCarousel.css"; // Assuming you have the same CSS

const ProductCarousel = ({ images }) => {
  const [mainImage, setMainImage] = useState(images[0].url);

  // const images = ["1.webp", "2.webp", "3.webp", "4.png"];

  const changeImage = (imageSrc) => {
    setMainImage(imageSrc);
  };

  return (
    <div className="product-slider">
      <div className="main-image">
        <img id="mainImage" src={mainImage} alt="Product Image" />
      </div>
      <div className="thumbnails">
        {images.map((image, index) => (
          <img
            key={index}
            className={`thumbnail ${mainImage === image.url ? "active" : ""}`}
            src={image.url}
            alt={`Thumbnail ${index + 1}`}
            onClick={() => changeImage(image.url)}
          />
        ))}
      </div>
    </div>
  );
};

export default ProductCarousel;
