import React, { useState, useEffect } from "react";
import "./Header.css";
import { Link, useLocation } from "react-router-dom";
import "firebase/auth"; // Import the Firebase Authentication module
import { Detector } from "react-detect-offline";
import { useDispatch, useSelector } from "react-redux";
import { ReactComponent as Logotextblack } from "../../images/headersvgs/logotextblack.svg";
import { getRelatedStaticText } from "../../functions/staticText";
import BurdermenuSmall from "../SliderDiv/categoriesPanal/BurdermenuSmall";
import "../SliderDiv/SliderDiv.css";
import { ReactComponent as Adminsvg } from "../../images/acnav/admin.svg";
import { ReactComponent as Callsvg } from "../../images/contactUs/calloutlined.svg";
import { ReactComponent as Mailsvg } from "../../images/contactUs/mail.svg";
import { ReactComponent as Clocksvg } from "../../images/headersvgs/clock.svg";
import { ReactComponent as Facebooksvg } from "../../images/social/facebook.svg";
import { ReactComponent as Instagramsvg } from "../../images/social/instagram.svg";
import { ReactComponent as Linkedinsvg } from "../../images/social/linked_in.svg";
import { ReactComponent as Whatsappsvg } from "../../images/social/Whatsapp.svg";

const Header = () => {
  const [staticTexts, setStaticTexts] = useState([]);
  const [contactinfo, setContactinfo] = useState([]);
  const [netconnection, setNetconnection] = useState(true);
  const [hideOnlineText, setHideOnlineText] = useState(true);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

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
    { name: "About", path: "/about" },
    { name: "Our Team", path: "/team" },
    {
      name: "Destinations",
      path: "/Destinations",
      subNav: [
        { name: "United Kingdom", path: "/Destinations/United-Kingdom" },
        { name: "Australia", path: "/Destinations/Australia" },
      ],
    },
    { name: "Success Stories", path: "/Stories" },
    { name: "Contact Us", path: "/contact" },
  ];

  return (
    <>
      <div className="headermain">
        <div className="top-header">
          <div className="newsleft">
            <div className="helperlinkcont">
              <Mailsvg className="mailsvgcont" />
              <p className="top_tag_Center">info@Studyguideint.com</p>
            </div>
            <div className="seprator">{"|"}</div>
            <div className="helperlinkcont">
              <Clocksvg />
              <p className="top_tag_Right">10:30 AM To 6:30 PM | Sunday Off</p>
            </div>
            <div className="seprator">{"|"}</div>
            <div className="helperlinkcont">
              <Callsvg /> <Whatsappsvg />
              <p className="top_tag_Right">
                +92 322 5005810, +92 321 0378899, +92 300 8478889
              </p>
            </div>
          </div>
          <div className="newsright">
            <Link to="#" className="helperlinkcont">
              <Facebooksvg />
            </Link>
            <Link to="#" className="helperlinkcont">
              <Instagramsvg />
            </Link>
            <Link to="#" className="helperlinkcont">
              <Linkedinsvg />
            </Link>
            <Link to="#" className="helperlinkcont">
              <Whatsappsvg />
            </Link>
          </div>
        </div>

        <div id="Mainheader" className="middlemainheader">
          <div className="middle-header">
            <div className="binder">
              {windowWidth <= 700 && <BurdermenuSmall />}
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
                      <Link to={item.path}>{item.name}</Link>
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
              <div className="apllyBtn">
                {user && user.role === "admin" ? (
                  <Link
                    to="/AdminPanel?page=AdminDashboard"
                    className="accountlistlinks"
                  >
                    <div className="acsvg">
                      <Adminsvg />
                    </div>
                    Admin Dashboard
                  </Link>
                ) : (
                  <Link to="#">
                    <span>Apply Now</span>
                  </Link>
                )}
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
