import React, { useState } from "react";
import "./MegaSlide.css";
import bannerimage from "../../images/megabanner/1.webp";
import ShippingModal from "../../components/modal/ShippingModal";
import ShippingForm from "../../components/forms/ShippingForm";
import { requestUserQuote } from "../../functions/user";
import { useFormik } from "formik";
import { UserQuoteSchema } from "../../schemas";
import { toast } from "react-hot-toast";
import { Link } from "react-router-dom";

export default function MegaSlide() {
  const [mainModalVisible, setMainModalVisible] = useState(false);
  const [noNetModal, setNoNetModal] = useState(false);

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
    <div className="megaslidecont">
      <div className="megaslideoverlay"></div>
      <div className="megaslideleft">
        <div className="mshead">
          <p className="headspan1">Custom</p>
          <p className="headspan2">Packaging</p>
          <p className="headspan3">with your Custom Logo</p>
        </div>
        <div className="mssub">
          <p className="subp">
            Elevate Your Brand Packaging with Sharp Edge's Expertise and
            Creativity
          </p>
        </div>
        <div className="msctacont">
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
          <Link to="/shop">
            <button className="apllyBtn shopBtn">Explore</button>
          </Link>
        </div>
      </div>
      <div className="megaslideright">
        <div className="megaslideimgcont">
          <img src={bannerimage} alt="" />
        </div>
      </div>
    </div>
  );
}
