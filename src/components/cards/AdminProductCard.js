import React, { useState } from "react";
import Img from "../productsSlidable/img/Image";
import { Link } from "react-router-dom";
import _ from "lodash";
import Laptop from "../../images/laptop.png";
import { Card } from "antd";
import { showAverage } from "../../functions/rating";
import Skeleton from "react-loading-skeleton";
import { ReactComponent as Editsvg } from "../../images/edit.svg";
import { ReactComponent as Deletesvg } from "../../images/delete.svg";
import { ReactComponent as Reviewssvg } from "../../images/review.svg";
import "./AdminProductCard.css";

const AdminProductCard = ({
  product,
  contWidth,
  FlashSalesCont,
  WidthIdea,
  handleRemove,
}) => {
  const { _id, title, slug, images } = product;

  const [imageLoaded, setImageLoaded] = useState(false);

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
        <div class="remaincount adminprodcard">
          <div className="actionbtns">
            <div className="smallsvgbtncont">
              <Link to={`/AdminPanel?page=AddReview&productID=${_id}`}>
                <Reviewssvg className="smallsvgbtn" />
              </Link>
            </div>
            <div className="smallsvgbtncont">
              <Deletesvg
                onClick={() => handleRemove(slug, images)}
                className="smallsvgbtn"
              />
            </div>
            <div>
              <Link to={`/admin/product/${slug}`}>
                <div className="smallsvgbtncont">
                  <Editsvg className="smallsvgbtn" />
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminProductCard;
