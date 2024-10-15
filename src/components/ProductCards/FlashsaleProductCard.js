import React, { useState } from "react";
import Img from "../productsSlidable/img/Image";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import _ from "lodash";
import Laptop from "../../images/laptop.png";
import { Card } from "antd";
import { toast } from "react-hot-toast";
import Skeleton from "react-loading-skeleton";

const FlashsaleProductCard = ({
  product,
  contWidth,
  FlashSalesCont,
  WidthIdea,
}) => {
  const { title, slug, price, quantity, sold, images, disprice, onSale } =
    product;

  const [imageLoaded, setImageLoaded] = useState(false);

  const dispatch = useDispatch();

  const widthadjust = () => {
    const rootwidth = document.getElementById("root").clientWidth;

    if (rootwidth >= 1113) {
      return { width: `${(contWidth * 16.32) / 100 - 4}px` };
    }
    if (rootwidth >= 975) {
      return { width: `${(contWidth * 16.29) / 100 - 4}px` };
    }
    if (rootwidth >= 750) {
      return { width: `${(contWidth * 19.5) / 100 - 4}px` };
    }
    if (rootwidth >= 701) {
      return { width: `${(contWidth * 24.5) / 100 - 4}px` };
    }
    if (rootwidth >= 530) {
      return { width: `${(contWidth * 28.0) / 100 - 4}px` };
    }
    if (rootwidth >= 320) {
      return { width: `${(contWidth * 38.8) / 100 - 4}px` };
    }

    // Default case if none of the conditions are met
    return {};
  };

  const handleAddToCart = () => {
    if (product.quantity < 1) {
      toast.error("Out of Stock");
      return;
    }
    // create cart array
    let cart = [];
    if (typeof window !== "undefined") {
      // if cart is in local storage GET it
      if (localStorage.getItem("cart")) {
        cart = JSON.parse(localStorage.getItem("cart"));
      }

      if (cart.length) {
        let foundItem = cart.find((item) => {
          return item._id === product._id;
        });
        if (foundItem) {
          toast.success("Item Already in Cart");
        } else {
          cart.push({
            ...product,
            count: 1,
          });
          toast.success("Added to Cart");
        }
      } else {
        cart.push({
          ...product,
          count: 1,
        });
        toast.success("Added to Cart");
      }

      // remove duplicates
      let unique = _.uniqWith(cart, _.isEqual);
      // save to local storage
      // console.log('unique', unique)
      localStorage.setItem("cart", JSON.stringify(unique));

      // add to reeux state
      dispatch({
        type: "ADD_TO_CART",
        payload: unique,
      });
    }
  };

  return (
    <div
      style={FlashSalesCont ? widthadjust() : {}}
      class={`itemcolum ${WidthIdea === "Seachpagewidth" && "searchitemcol"}`}
    >
      <Link class="productanker" to={`/product/${slug}`}>
        {images && images.length ? (
          <>
            <Img
              src={images[0].url}
              alt={title}
              className="imagepart"
              onLoad={() => setImageLoaded(true)}
              style={{ display: imageLoaded ? "block" : "none" }}
              stockstatus={product.quantity < 1 && "imgstockout"}
            />
            {!imageLoaded && (
              <Skeleton
                className="imgskull"
                style={{ display: imageLoaded ? "none" : "inline-block" }}
              />
            )}
          </>
        ) : (
          <span className={product.quantity < 1 && "imgstockout"}>
            <Card cover={<img src={Laptop} />}></Card>
          </span>
        )}
      </Link>
      <div class="textpart">
        <div className={`n-side`}>
          <span>{title}</span>
        </div>
        <div className={`nsub-side`}>
          <span>Explore</span>
        </div>
      </div>
    </div>
  );
};

export default FlashsaleProductCard;
