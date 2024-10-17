import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import "./ProductInfo.css";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Link } from "react-router-dom";
import { toast } from "react-hot-toast";
import _ from "lodash";
import { useSelector, useDispatch } from "react-redux";
// import { useHistory } from "react-router-dom";
import { requestUserQuote, getUserAddress } from "../../functions/user";
import ProductsSlider from "../productsSlidable/productSlider/ProductsSlider";
import Img from "../Image";
import { ReactComponent as Noimage } from "../../images/productpage/noimage.svg";
import ShippingForm from "../../components/forms/ShippingForm";
import Mystars from "../ratingstars/Mystars";
import { useFormik } from "formik";
import { UserQuoteSchema } from "../../schemas";
import Skeleton from "react-loading-skeleton";
import ProductCardSkull from "../../components/Skeletons/ProductCardSkull";
import FlashsaleProductCard from "../ProductCards/FlashsaleProductCard";

export default function ProductInfo({
  product,
  similarProduct,
  relatedProduct,
  avgRating,
  reviewsCount,
}) {
  const {
    art,
    title,
    slug,
    images,
    description,
    disprice,
    shippingcharges,
    price,
    brand,
    color,
    category,
    attributes,
    quantity,
    sold,
    onSale,
  } = product;

  const [qty, setQty] = useState(1);
  const [loading, setLoading] = useState(false);

  // redux
  const { user } = useSelector((state) => ({ ...state }));

  const history = useHistory();
  const dispatch = useDispatch();

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
          cart.map((prod, i) => {
            if (prod._id == product._id) {
              cart[i].count = qty;
              toast.success("Added to Cart");
            }
          });
        } else {
          cart.push({
            ...product,
            count: qty,
          });
          toast.success("Added to Cart");
        }
      } else {
        cart.push({
          ...product,
          count: qty,
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

  const handleBuynow = () => {
    if (product.quantity < 1) {
      toast.error("Out of Stock");
      return;
    }
    handleAddToCart();
    history.push("/cart");
  };

  // ---------formik usage--------

  const initialValues = {
    ProductType: "",
    Quantity: "",
    Units: "",
    Height: "",
    Width: "",
    Depth: "",
    Colors: "",
    SheetType: "",
    Name: "",
    PhoneNum: "",
    Email: "",
    Details: "",
  };

  const {
    values,
    errors,
    touched,
    isSubmitting,
    handleBlur,
    handleChange,
    handleSubmit,
    setValues,
  } = useFormik({
    initialValues: initialValues,
    validationSchema: UserQuoteSchema,
    onSubmit: async (values, action) => {
      if (navigator.onLine) {
        try {
          requestUserQuote(values)
            .then((res) => {
              if (res.data.ok) {
                toast.success(
                  "Request submitted! We will redirect you shortly."
                );
                action.resetForm();
              }
            })
            .catch((err) => console.log("Request submittion err", err));
        } catch (error) {
          console.error(error);
          // Handle errors if necessary
        }
      } else {
        dispatch({
          type: "SET_NETMODAL_VISIBLE",
          payload: true,
        });
      }
    },
  });

  useEffect(() => {
    if (user && user.token) {
      getUserAddress(user.token).then((a) => {
        setValues({ ...initialValues, ...a.data });
      });
    }
  }, [user]);

  return (
    <div className="productcontainer">
      <div className="productcontleftmain">
        <div className="leftproinfo">
          <div className="productcontleft">
            {images && images.length ? (
              <Carousel
                showArrows={true}
                autoPlay
                infiniteLoop
                className="mycarosel"
              >
                {images &&
                  images.map((i) => <img src={i.url} key={i.public_id} />)}
              </Carousel>
            ) : (
              <div className="noimagecont">
                <Noimage></Noimage>
              </div>
            )}
          </div>

          <div className="productcontcenter">
            <div className="titlepart">
              <div className="productname namesize">
                {title ? title : <Skeleton count={2} />}
              </div>
            </div>
            <div className="publicremarkcont">
              <div className="publicremark">
                {avgRating ? (
                  // showAverage(product)
                  <div>
                    <Mystars
                      rating={avgRating}
                      containerclass={"prostarsspan"}
                      StarFullclass={"prostars"}
                      StarHalfclass={"prostars star-half"}
                      StarEmptyclass={"prostars star-empty"}
                    ></Mystars>
                    <span class="prototalavg">{avgRating}</span>
                  </div>
                ) : (
                  <div className="">
                    <Mystars
                      rating={0}
                      containerclass={"prostarsspan"}
                      StarFullclass={"prostars"}
                      StarHalfclass={"prostars star-half"}
                      StarEmptyclass={"prostars star-empty"}
                    ></Mystars>
                  </div>
                )}
                <div className="">
                  {title ? (
                    avgRating ? (
                      <>
                        <span className="">{reviewsCount} </span>
                        <span>Review(s)</span>
                      </>
                    ) : (
                      <div className="">0 Reviews</div>
                    )
                  ) : (
                    <Skeleton width={80} count={1} />
                  )}
                </div>
                {/* <div className="orderscont">
                {product && product.sold && product.sold > 0 ? (
                  <>
                    <span> {product.sold}+ </span>
                    <span>Order(s)</span>
                  </>
                ) : (
                  ""
                )}
              </div> */}
              </div>
              {title ? (
                <div className="artnum">
                  <p> Article No: {art}</p>
                </div>
              ) : (
                <Skeleton width={65} height={18} count={1} />
              )}
            </div>

            <hr />
            <div className="desc_ul">
              {title ? (
                <ul>
                  {product.desattributes &&
                    product.desattributes.map((desattr, index) => (
                      <li key={index} className="desc_li">
                        <div className="li_head">{Object.keys(desattr)[0]}</div>
                        <div className="li_sub">
                          {Object.values(desattr)[0]}
                        </div>
                      </li>
                    ))}

                  {category && (
                    <li className="desc_li">
                      <div className="li_head">Category</div>
                      <div className="li_sub">
                        <Link to={`/category/?category=${category.slug}`}>
                          {category.name}
                        </Link>
                      </div>
                    </li>
                  )}
                  <li className="desc_li">
                    <div className="li_head">Color</div>
                    <div className="li_sub">{color}</div>
                  </li>
                  {shippingcharges === 0 && (
                    <li className="desc_li">
                      <div className="li_head">Shipping</div>
                      <div className="li_sub">Free Shipping*</div>
                    </li>
                  )}
                </ul>
              ) : (
                <Skeleton width={150} count={2} />
              )}
            </div>

            {relatedProduct.length > 0 && (
              <div className="similer">
                <hr />
                <p>Related Products</p>
                <ProductsSlider
                  containerwidth={481}
                  elementwidth={100}
                  step={200}
                >
                  {relatedProduct.map((p, i) => (
                    <Img
                      className="similerImg"
                      key={i}
                      onClick={() => history.push(`/product/${p.slug}`)}
                      src={p.images[0].url}
                      alt={p.title}
                    />
                  ))}
                </ProductsSlider>
              </div>
            )}
          </div>
        </div>
        <div className="productinfobelow">
          <div class="prodownsub">
            <div class="headingcont">Product Description</div>
            <hr />
            <div class="desccontent">
              <div class="desccontentpara">
                {/* <strong>About this item: </strong> */}
                {/* <br /> */}
                <p className="">{`${product.description}`}</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="productcontright">
        {title ? (
          <div className="rightprice">
            <span className="pricesize">Make Quote</span>
          </div>
        ) : (
          <div className="rightprice">
            <Skeleton width={100} height={18} count={1} />
          </div>
        )}

        <ShippingForm
          values={values}
          errors={errors}
          touched={touched}
          handleBlur={handleBlur}
          handleChange={handleChange}
          formtype="small"
        />

        <div className="pricebtnscont">
          <div className="btnscont">
            <button
              onClick={handleSubmit}
              className="mybtn btnprimary buynowbtn"
            >
              Submit Request
            </button>
          </div>
        </div>

        <div className="infobelowright">
          <div className="badgescont">
            <div className="trustbadge">
              <div className="trustbadgehead">
                <svg
                  className="trustbadgesvg"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 64 64"
                  width="48px"
                  height="48px"
                >
                  <path d="M 32 9 C 24.832 9 19 14.832 19 22 L 19 27.347656 C 16.670659 28.171862 15 30.388126 15 33 L 15 49 C 15 52.314 17.686 55 21 55 L 43 55 C 46.314 55 49 52.314 49 49 L 49 33 C 49 30.388126 47.329341 28.171862 45 27.347656 L 45 22 C 45 14.832 39.168 9 32 9 z M 32 13 C 36.963 13 41 17.038 41 22 L 41 27 L 23 27 L 23 22 C 23 17.038 27.037 13 32 13 z" />
                </svg>
                <span className="txtheading">Secure transection</span>
              </div>
              <div className="trustbadgesub">
                Sucure transection process with end to end encryption, varified
                by multiple layers of protect.
              </div>
            </div>
            <div className="returnscont">
              <div className="returnstxthead">
                <svg
                  className="returnssvg"
                  id="Layer_1"
                  data-name="Layer 1"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 112.62 120.72"
                >
                  <title>circle arrow</title>
                  <path d="M11.64,100.12l-.4-.47-1.06,8.63a5.08,5.08,0,0,1-1.92,3.41A5.11,5.11,0,0,1,0,107L2.79,84.65v-.07a3.28,3.28,0,0,1,.08-.41h0A5.09,5.09,0,0,1,9,80.39q11.22,2.53,22.42,5.15a5,5,0,0,1,3.17,2.25,5.14,5.14,0,0,1,.64,3.84v0a5,5,0,0,1-2.25,3.16,5.08,5.08,0,0,1-3.83.65c-3.31-.75-6.62-1.52-9.92-2.28a40.71,40.71,0,0,0,2.84,3,50.09,50.09,0,0,0,26.23,13.49,48.67,48.67,0,0,0,14.71.34A47.35,47.35,0,0,0,77,106h0q2.52-1.19,4.83-2.54c1.56-.93,3.07-1.92,4.51-3a50.8,50.8,0,0,0,8.56-7.88,48.92,48.92,0,0,0,6.39-9.45l.56-1.1,10,2.69-.8,1.66a58.64,58.64,0,0,1-7.9,12.24,61.28,61.28,0,0,1-10.81,10.1c-1.68,1.23-3.46,2.4-5.32,3.5s-3.73,2.07-5.74,3a58,58,0,0,1-17,5,58.56,58.56,0,0,1-17.79-.39,60.21,60.21,0,0,1-31.58-16.26c-1.2-1.16-2.26-2.31-3.24-3.45ZM101,20.6l.4.47,1-8.63a5.11,5.11,0,1,1,10.14,1.26l-2.74,22.37,0,.07c0,.13,0,.27-.07.41h0a5.09,5.09,0,0,1-6.08,3.78c-7.47-1.69-15-3.4-22.42-5.15a5,5,0,0,1-3.16-2.25,5.1,5.1,0,0,1-.65-3.84v0a5,5,0,0,1,2.25-3.16,5.1,5.1,0,0,1,3.84-.65c3.31.75,6.61,1.52,9.92,2.28-.84-1-1.77-2-2.84-3.05a50.09,50.09,0,0,0-12.13-8.73A49.49,49.49,0,0,0,64.37,11a48.6,48.6,0,0,0-14.7-.34,47.26,47.26,0,0,0-14,4.1h0q-2.53,1.18-4.83,2.54c-1.57.93-3.07,1.92-4.52,3a50.34,50.34,0,0,0-8.55,7.88,48,48,0,0,0-6.39,9.45l-.57,1.1L.76,36l.8-1.66A58.9,58.9,0,0,1,9.46,22.1,61.63,61.63,0,0,1,20.27,12q2.54-1.85,5.32-3.5c1.81-1.06,3.73-2.07,5.74-3a58,58,0,0,1,17-5A58.56,58.56,0,0,1,66.16.89a59.77,59.77,0,0,1,17,5.74A60.4,60.4,0,0,1,97.75,17.15c1.19,1.16,2.26,2.31,3.24,3.45Z" />
                </svg>
                <div className="txtheading">Returns</div>
              </div>
              <div className="returnssub">
                Product is Eligible for Return, Refund or Replacement within 30
                days of receipt.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
