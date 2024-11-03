import React, { useEffect, useState } from "react";
import FlashsaleProductCard from "../../ProductCards/FlashsaleProductCard";
import ProductsSlider from "../productSlider/ProductsSlider";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import ProductCardSkull from "../../Skeletons/ProductCardSkull";
import { getCategory } from "../../../functions/category";
import { toast } from "react-hot-toast";
import { Online } from "react-detect-offline";

const ProductsGroup = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [contwidth, setContwidth] = useState(0);
  const [elementwidth, setElementwidth] = useState(0);
  const dispatch = useDispatch();

  let slug = "product-labels";

  useEffect(() => {
    if (navigator.onLine) {
      loadCategoryproducts();
    } else {
      dispatch({
        type: "SET_NETMODAL_VISIBLE",
        payload: true,
      });
    }
  }, [navigator.onLine, Online]);

  const loadCategoryproducts = () => {
    getCategory(slug)
      .then((res) => {
        setProducts(res.data.products);
        setLoading(false);
      })
      .catch((error) => {
        if (error.response && error.response.status === 404) {
          toast.error(error.response.data.error);
          // console.error("Brand not found:", error);
        } else {
          // Handle other errors
          toast.error("Error fetching category");
          console.error("Error fetching category:", error);
          setLoading(false);
        }
      });
  };

  useEffect(() => {
    const proarea = document.querySelector(".productsarea");
    const contwidth = proarea.clientWidth;
    setContwidth(contwidth);
    const rootwidth = document.getElementById("root").clientWidth;
    if (rootwidth >= 1113) {
      setElementwidth((contwidth * 16.32) / 100 - 4 + 8);
    } else if (rootwidth >= 975) {
      setElementwidth((contwidth * 16.29) / 100 - 4 + 8);
    } else if (rootwidth >= 745) {
      setElementwidth((contwidth * 19.5) / 100 - 4 + 7);
    } else if (rootwidth >= 659) {
      setElementwidth((contwidth * 24.5) / 100 - 4 + 7);
    } else if (rootwidth >= 602) {
      setElementwidth((contwidth * 24.4) / 100 - 4 + 6.4);
    } else if (rootwidth >= 457) {
      setElementwidth((contwidth * 32.5) / 100 - 4 + 6.4);
    } else if (rootwidth <= 456) {
      setElementwidth((contwidth * 48.5) / 100 - 4 + 6.4);
    }
  }, [contwidth]);

  return (
    <>
      <div class="cardcontainer">
        <div class="insidecont">
          <div class="mainhead flashhead">
            <div class="colorheading">Boxes By Designs</div>

            <Link to={`/shop`}>
              <div class="colormore">SEE MORE</div>
            </Link>
          </div>
          <div class="contentcont">
            <div class="productsarea">
              <ProductsSlider
                elementwidth={elementwidth}
                containerwidth={contwidth}
                step={elementwidth * 3}
              >
                {loading ? (
                  <ProductCardSkull
                    clone={6}
                    contWidth={contwidth}
                    FlashSalesCont={true}
                  />
                ) : (
                  products &&
                  products.map((prod) => (
                    <FlashsaleProductCard
                      key={prod._id}
                      product={prod}
                      contWidth={contwidth}
                      FlashSalesCont={true}
                    />
                  ))
                )}
              </ProductsSlider>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default React.memo(ProductsGroup);
