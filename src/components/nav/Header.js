import React, { useState, useEffect } from "react";
import "./Header.css";
import { Link, useLocation } from "react-router-dom";
import "firebase/auth"; // Import the Firebase Authentication module
import { Detector } from "react-detect-offline";
import { useDispatch, useSelector } from "react-redux";
import { ReactComponent as Logotextblack } from "../../images/headersvgs/logotextblack.svg";
import { getRelatedStaticText } from "../../functions/staticText";
import "../SliderDiv/SliderDiv.css";
import { ReactComponent as Adminsvg } from "../../images/acnav/admin.svg";
import { ReactComponent as Callsvg } from "../../images/contactUs/calloutlined.svg";
import { ReactComponent as Mailsvg } from "../../images/contactUs/mail.svg";
import { ReactComponent as Clocksvg } from "../../images/headersvgs/clock.svg";
import { ReactComponent as Facebooksvg } from "../../images/social/facebook.svg";
import { ReactComponent as Instagramsvg } from "../../images/social/instagram.svg";
import { ReactComponent as Linkedinsvg } from "../../images/social/linked_in.svg";
import { ReactComponent as Whatsappsvg } from "../../images/social/Whatsapp.svg";
import { ReactComponent as Whatsappthin } from "../../images/social/whatsappthin.svg";
import { ReactComponent as DownArrow } from "../../images/productpage/downbtn.svg";
import ShippingModal from "../../components/modal/ShippingModal";
import ShippingForm from "../../components/forms/ShippingForm";
import { saveUserForm } from "../../functions/user";
import { useFormik } from "formik";
import { ApplyNowSchema } from "../../schemas";
import { toast } from "react-hot-toast";
import NoNetModal from "../../components/NoNetModal/NoNetModal";

const Header = () => {
  const [staticTexts, setStaticTexts] = useState([]);
  const [contactinfo, setContactinfo] = useState([]);
  const [netconnection, setNetconnection] = useState(true);
  const [hideOnlineText, setHideOnlineText] = useState(true);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [modalVisible, setModalVisible] = useState(false);
  const [noNetModal, setNoNetModal] = useState(false);

  let dispatch = useDispatch();
  let { user } = useSelector((state) => ({ ...state }));
  let location = useLocation();

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    getRelatedStaticText("topcouponbar").then((t) => setStaticTexts(t.data));
    getRelatedStaticText("contactpageinfo").then((t) => setContactinfo(t.data));
  }, []);

  const htmlToRender = (htmlString) => {
    return <div dangerouslySetInnerHTML={{ __html: htmlString }} />;
  };

  const navItems = [
    { name: "Home", path: "/" },
    { name: "About", path: "/aboutus" },
    {
      name: "Destinations",
      subNav: [
        { name: "Sweden", path: "/Destinations/sweden" },
        { name: "Australia", path: "/Destinations/Australia" },
        { name: "United Kingdom", path: "/Destinations/United-Kingdom" },
        { name: "Denmark", path: "/Destinations/Denmark" },
        { name: "Finland", path: "/Destinations/Finland" },
        { name: "Ireland", path: "/Destinations/Ireland" },
        { name: "France", path: "/Destinations/France" },
        { name: "Belgium", path: "/Destinations/Belgium" },
        { name: "Cyprus", path: "/Destinations/Cyprus" },
      ],
    },
    { name: "Success Stories", path: "/Stories" },
    { name: "Contact Us", path: "/ContactUs" },
  ];

  // ------apply form working------

  const initialValues = {
    Name: "",
    PhoneNum: "",
    Email: "",
    Gender: "",
    Address: "",
    Qualification: "",
    Institution: "",
    CGPA: "",
    PassingYear: "",
    CountryInterestedIn: "",
    ApplyingForVisaType: "",
    EnglishLanguageTest: "",
    TestName: "",
    TestMarks: "",
    EstimatedBudget: "",
    AnyQuery: "",
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
    validationSchema: ApplyNowSchema,
    onSubmit: async (values, action) => {
      if (navigator.onLine) {
        try {
          // console.log("values we have", values);
          saveUserForm(values)
            .then((res) => {
              // console.log("form sent");
              if (res.data.ok) {
                toast.success("Form Submitted");
                setModalVisible(false);
              }
            })
            .catch((err) => console.log("Form Submitted Error", err));
        } catch (error) {
          console.error(error);
          setModalVisible(false);
          // Handle errors if necessary
        }
      } else {
        setModalVisible(false);
        setNoNetModal(true);
      }
    },
  });

  const handlecancel = () => {
    setModalVisible(false);
  };

  return (
    <>
      <div className="headermain">
        <div className="top-header">
          <div className="newsleft">
            <div className="helperlinkcont topemail">
              <Mailsvg className="mailsvgcont" />
              <p className="top_tag_Center">Info@Studyguideint.com</p>
            </div>
            <div className="seprator">{"|"}</div>
            <div className="helperlinkcont toptiming">
              <Clocksvg />
              <p className="top_tag_Right">10:00 AM To 6:00 PM | Sunday Off</p>
            </div>
            <div className="seprator">{"|"}</div>
            <a
              href={`https://api.whatsapp.com/send?phone=00923455005810`}
              className="helperlinkcont"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="helperlinkcont">
                <Callsvg /> <Whatsappthin className="wpthinsvg" />
                <p className="top_tag_Right">
                  +92 322 5005810, +92 321 0378899, +92 300 8478889
                </p>
              </div>
            </a>
          </div>
          <div className="newsright">
            <a
              href="https://www.facebook.com/profile.php?id=100069348382258&mibextid=ZbWKwL"
              className="helperlinkcont"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Facebooksvg />
            </a>
            <a
              href="https://www.instagram.com/stud_yguideinternational?igsh=aHBlYWNiNHlkaW1i"
              className="helperlinkcont"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Instagramsvg />
            </a>
            <Link to="#" className="helperlinkcont linkedinsvg toplinkedinsvg">
              <Linkedinsvg />
            </Link>
            <a
              href={`https://api.whatsapp.com/send?phone=00923455005810`}
              className="helperlinkcont"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Whatsappsvg />
            </a>
            {user && user.role === "admin" && (
              <Link
                to="/AdminPanel?page=AdminDashboard"
                className="accountlistlinks"
              >
                <div className="acsvg">
                  <Adminsvg />
                </div>
                Admin
              </Link>
            )}
          </div>
        </div>

        <div id="Mainheader" className="middlemainheader">
          <div className="middle-header">
            <div className="binder">
              <Link to="/">
                <div className="logodiv">
                  <div className="logo-txtsize">
                    <Logotextblack />
                  </div>
                  <div className="logo-sampletxt">
                    Study Guide International
                  </div>
                </div>
              </Link>
              <div className="sencondapplybtn">
                <ShippingModal
                  onModalok={handleSubmit}
                  onModalcancel={handlecancel}
                  setModalVisible={setModalVisible}
                  modalVisible={modalVisible}
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

            <div className="middleheaderrightside">
              <div className="middleheadercenterside">
                <ul className="centernavbar">
                  {navItems.map((item, index) => (
                    <li
                      key={index}
                      className={
                        location.pathname === item.path ? "active" : ""
                      }
                    >
                      <Link to={item.path} className={`${item.name + index}`}>
                        {item.name}
                        {item.subNav && (
                          <DownArrow className="down-arrow-icon" />
                        )}
                      </Link>
                      {item.subNav && (
                        <ul className="subnav">
                          {item.subNav.map((subItem, subIndex) => (
                            <li
                              key={subIndex}
                              className={
                                location.pathname === subItem.path
                                  ? "active"
                                  : ""
                              }
                            >
                              <Link to={subItem.path}>{subItem.name}</Link>
                            </li>
                          ))}
                        </ul>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mainapplybtn">
                <ShippingModal
                  onModalok={handleSubmit}
                  onModalcancel={handlecancel}
                  setModalVisible={setModalVisible}
                  modalVisible={modalVisible}
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
          </div>
          <div
            className={` netnotifier ${
              netconnection ? "connected" : "notconnected"
            } ${hideOnlineText ? "hideonline" : "showonline"}`}
          >
            <Detector
              render={({ online }) => {
                if (online) {
                  setNetconnection(true);
                  setTimeout(() => {
                    setHideOnlineText(true);
                  }, 1800);
                } else {
                  setNetconnection(false);
                  setHideOnlineText(false);
                }
                return online ? <p> Online Back </p> : <p> No Connection </p>;
              }}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
