import React, { useState, useEffect, useRef } from "react";
import "./Partnersbanner.css";
import uni1 from "../../images/partnerdiv/1.png";
import uni2 from "../../images/partnerdiv/2.png";
import uni3 from "../../images/partnerdiv/3.png";
import uni4 from "../../images/partnerdiv/4.png";
import uni5 from "../../images/partnerdiv/5.png";

import ShippingModal from "../../components/modal/ShippingModal";
import ShippingForm from "../../components/forms/ShippingForm";
import { requestUserQuote } from "../../functions/user";
import { useFormik } from "formik";
import { UserQuoteSchema } from "../../schemas";
import { toast } from "react-hot-toast";

const images = [uni1, uni2, uni3, uni4, uni5];
const delay = 2000;

export default function Partnersbanner() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [mainModalVisible, setMainModalVisible] = useState(false);
  const [noNetModal, setNoNetModal] = useState(false);

  const intervalRef = useRef(null);

  const nextImage = () => {
    setIsTransitioning(true);
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevImage = () => {
    setIsTransitioning(true);
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  useEffect(() => {
    intervalRef.current = setInterval(nextImage, delay);
    return () => clearInterval(intervalRef.current);
  }, []);

  useEffect(() => {
    if (isTransitioning) {
      const timeout = setTimeout(() => setIsTransitioning(false), 500);
      return () => clearTimeout(timeout);
    }
  }, [isTransitioning]);

  // ------apply form working------

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
          // console.log("values we have", values);
          requestUserQuote(values)
            .then((res) => {
              // console.log("form sent");
              if (res.data.ok) {
                toast.success(
                  "Request submitted! We will redirect you shortly."
                );
                setMainModalVisible(false);
                action.resetForm();
              }
            })
            .catch((err) => console.log("Form Submitted Error", err));
        } catch (error) {
          console.error(error);
          setMainModalVisible(false);
          // Handle errors if necessary
        }
      } else {
        setMainModalVisible(false);
        setNoNetModal(true);
      }
    },
  });

  const handlecancel = () => {
    setMainModalVisible(false);
  };

  return (
    <div className="cardcontainer">
      <div className="insidecont contentcont partnercont">
        <div className="partnerright">
          <div className="aboveheading">OUR PREMIUM PARTNERS</div>
          <div className="heading">Trusted By The World</div>
          <div className="subdata">
            Here are the trusted partners we’ve collaborated with, delivering
            quality packaging solutions together.
          </div>
          <ShippingModal
            onModalok={handleSubmit}
            onModalcancel={handlecancel}
            setModalVisible={setMainModalVisible}
            modalVisible={mainModalVisible}
            values={values}
            btnClasses={"apllyBtn"}
          >
            <ShippingForm
              values={values}
              errors={errors}
              touched={touched}
              handleBlur={handleBlur}
              handleChange={handleChange}
            />
          </ShippingModal>
        </div>
        <div className="partnerleft">
          <button className="carousel-btn left" onClick={prevImage}>
            &lt;
          </button>
          <div className="carousel-container">
            <div
              className="carousel-images"
              style={{
                transform: `translateX(-${
                  (currentIndex % images.length) * 25
                }%)`,
                transition: isTransitioning ? "transform 0.5s ease" : "none",
              }}
            >
              {images.concat(images).map((image, index) => (
                <div key={index} className="bennerself">
                  <img
                    className="uniimages"
                    src={image}
                    alt={`Partner ${index % images.length}`}
                  />
                </div>
              ))}
            </div>
          </div>
          <button className="carousel-btn right" onClick={nextImage}>
            &gt;
          </button>
        </div>
      </div>
    </div>
  );
}
