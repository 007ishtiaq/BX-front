import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Scorebanner.css";
import subjectimg from "../../images/scorebanner/subject.jpg";
import ShippingModal from "../../components/modal/ShippingModal";
import ShippingForm from "../../components/forms/ShippingForm";
import { requestUserQuote } from "../../functions/user";
import { useFormik } from "formik";
import { UserQuoteSchema } from "../../schemas";
import { toast } from "react-hot-toast";

export default function Scorebanner() {
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
      <div className="insidecont contentcont scorecardcontainer">
        <div className="scorecardcont">
          <div className="scorecardleft">
            <div className="scorecont">
              <div className="scorecircle">
                <div className="scoreself">5000 +</div>
                <div className="scoretxt">Worked With Clients</div>
              </div>
              <div className="scorecircle">
                <div className="scoreself">4.8</div>
                <div className="scoretxt">Client Rate</div>
              </div>
              <div className="scorecircle">
                <div className="scoreself">6M+</div>
                <div className="scoretxt">Package Realese</div>
              </div>
            </div>
            <div className="scorecontent">
              <p className="scoreheading">
                Top-rated by leading companies and firms with a{" "}
                <span>100% satisfaction rate.</span>
              </p>
              <p className="scoresub">Get a quote for your Brand Now!</p>
              <div className="actionbtncont">
                <ShippingModal
                  onModalok={handleSubmit}
                  onModalcancel={handlecancel}
                  setModalVisible={setMainModalVisible}
                  modalVisible={mainModalVisible}
                  values={values}
                  btnClasses={"apllyBtn btnwide"}
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
          </div>
          <div className="scorecardright">
            <img src={subjectimg} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}
