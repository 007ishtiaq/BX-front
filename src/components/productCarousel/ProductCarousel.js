import React, { useState, useEffect } from "react";
import "./ProductCarousel.css"; // Assuming you have the same CSS

const ProductCarousel = ({ images }) => {
  const [mainImage, setMainImage] = useState(images[0]?.url);

  const changeImage = (imageSrc) => {
    setMainImage(imageSrc);
  };

  // Update mainImage whenever images changes
  useEffect(() => {
    if (images.length > 0) {
      setMainImage(images[0].url);
    }
  }, [images]);

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
