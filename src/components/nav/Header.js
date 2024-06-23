import React, { useState, useEffect } from "react";
import "./Header.css";
import { Link } from "react-router-dom";
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

  return (
    <>
      <div class="headermain">
        <div class="top-header">
          <div class="newsleft">
            <div className="helperlinkcont">
              <Mailsvg className="mailsvgcont"></Mailsvg>
              <p class="top_tag_Center">
                info@Studyguideint.com
                {/* {htmlToRender(
                staticTexts && staticTexts.length > 0 && staticTexts[0].info1
                )} */}
              </p>
            </div>
            <div className="seprator">{"|"}</div>
            <div className="helperlinkcont">
              <Clocksvg></Clocksvg>
              <p className="top_tag_Right">
                10:30 AM To 6:30 PM | Sunday Off
                {/* {contactinfo && contactinfo.length > 0 && contactinfo[0].info1} */}
              </p>
            </div>
            <div className="seprator">{"|"}</div>
            <div className="helperlinkcont">
              <Callsvg></Callsvg>
              <p className="top_tag_Right">
                +92 322 5005810
                {/* {contactinfo && contactinfo.length > 0 && contactinfo[0].info1} */}
              </p>
            </div>
          </div>
          <div class="newsright">
            <Link to="/HelpCenter" className="helperlinkcont">
              <Facebooksvg></Facebooksvg>
            </Link>
            <Link to="/HelpCenter" className="helperlinkcont">
              <Instagramsvg></Instagramsvg>
            </Link>
            <Link to="/HelpCenter" className="helperlinkcont">
              <Linkedinsvg></Linkedinsvg>
            </Link>
            <Link to="/HelpCenter" className="helperlinkcont">
              <Whatsappsvg></Whatsappsvg>
            </Link>
          </div>
        </div>

        <div id="Mainheader" className="middlemainheader">
          <div class="middle-header">
            <div class="binder">
              {windowWidth <= 700 && <BurdermenuSmall />}
              <Link to="/">
                <div class="logodiv">
                  <div class="logo-txtsize">
                    <Logotextblack />
                  </div>
                  <div class="logo-sampletxt">Study Guide International</div>
                </div>
              </Link>
            </div>

            <div class={`middleheaderrightside`}>
              <div class="middleheadercenterside">
                <ul class="centernavbar">
                  <li>
                    <Link to="#">Home</Link>{" "}
                  </li>
                  <li>
                    <Link to="#">About</Link>{" "}
                  </li>
                  <li>
                    <Link to="#">Services</Link>{" "}
                  </li>
                  <li>
                    <Link to="#">Porfolio</Link>{" "}
                  </li>
                  <li>
                    <Link to="#">Team</Link>{" "}
                  </li>
                  <li>
                    <Link to="#">Contact</Link>{" "}
                  </li>
                </ul>
              </div>{" "}
              <div class="apllyBtn">
                {user && user.role === "admin" ? (
                  <>
                    <Link
                      to="/AdminPanel?page=AdminDashboard"
                      class="accountlistlinks"
                    >
                      <div className="acsvg">
                        <Adminsvg />
                      </div>
                      Admin Dashboard
                    </Link>
                  </>
                ) : (
                  <>
                    <Link to="#">
                      <span>Apply Now</span>
                    </Link>
                  </>
                )}
              </div>
            </div>
          </div>
          <div
            className={` netnotifier ${
              netconnection ? "connected" : "notconnected"
            } ${hideOnlineText ? "hideonline" : "showonline"}
             `}
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
