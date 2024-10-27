import React, { useState } from "react";
import "./Workintro.css";
import "../../components/partnersbanner/Partnersbanner.css";
import img1 from "../../images/workintro/1.png";
import img2 from "../../images/workintro/2.png";
import img3 from "../../images/workintro/3.png";
import img4 from "../../images/workintro/4.png";
import ShippingModal from "../../components/modal/ShippingModal";
import ShippingForm from "../../components/forms/ShippingForm";
import { requestUserQuote } from "../../functions/user";
import { useFormik } from "formik";
import { UserQuoteSchema } from "../../schemas";
import { toast } from "react-hot-toast";

export default function Workintro({ aboutus }) {
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
    <div className="cardcontainer">
      <div
        className={`insidecont contentcont partnercont workcont ${
          aboutus && "aboutworkcont"
        }`}
      >
        <div className="partnerright workcontright">
          <div className="aboveheading">About Us</div>
          <div className="heading">
            Providing innovative, sustainable packaging solutions tailored for
            diverse products
          </div>
          <div className="subdata">
            <p>
              Welcome to Sharp Edge Packaging, your trusted partner for
              high-quality packaging solutions with a focus on timely delivery
              and easy modifications to meet your needs. Our flexible return
              policy and commitment to the best customer service ensure a
              seamless experience, making us your reliable choice for all
              packaging requirements.
            </p>
          </div>
          <div className="workbtncont">
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
        </div>
        <div className="partnerleft workinfoleft">
          <div className="workingimgcont">
            <div className="workingimgsub">
              <div className="workingimg">
                <img src={img1} alt="" />
              </div>
              <div className="workingimg">
                <img src={img2} alt="" />
              </div>
            </div>
            <div className="workingimgsub">
              <div className="workingimg workingimg3">
                <img src={img4} alt="" />
              </div>
              <div className="workingimg">
                <img src={img3} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
