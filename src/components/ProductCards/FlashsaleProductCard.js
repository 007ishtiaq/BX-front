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
  const { title, slug, images } = product;

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
