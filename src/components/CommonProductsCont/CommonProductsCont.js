import React, { useState, useEffect } from "react";
import "../ProductCards/ProductCardsAll.css";
import { getProductsByCount } from "../../functions/product";
import FlashsaleProductCard from "../ProductCards/FlashsaleProductCard";
import ProductCardSkull from "../Skeletons/ProductCardSkull";
import { toast } from "react-hot-toast";

export default function CommonProductsCont({ WidthIdea }) {
  const [products, setProducts] = useState([]);
  const [contwidth, setContwidth] = useState(0);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const proarea = document.querySelector(".productsarea");
    const contwidth = proarea.clientWidth;
    setContwidth(contwidth);

    loadAllProducts();
  }, []);

  const loadAllProducts = () => {
    getProductsByCount(6)
      .then((p) => {
        setLoading(false);
        setProducts(p.data);
      })
      .catch((error) => {
        if (error.response && error.response.status === 500) {
          toast.error(error.response.data.error);
        } else {
          // Handle other errors
          toast.error("Something went wrong");
          // console.error("Error fetching Product:", error);
        }
      });
  };

  return (
    <div class="cardcontainer">
      <div class="insidecont">
        <div className="commonhead">
          <p>
            Wholesale printed custom boxes <br /> at
            <span> discounted price.</span>
          </p>
        </div>

        <div class="contentcont">
          <div class="productsarea">
            {loading ? (
              <ProductCardSkull clone={6} contWidth={contwidth} />
            ) : (
              products &&
              products.map((prod) => (
                <FlashsaleProductCard
                  key={prod._id}
                  product={prod}
                  contWidth={contwidth}
                  WidthIdea={WidthIdea}
                />
              ))
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
