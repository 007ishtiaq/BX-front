import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import "./Footer.css";
import { Link } from "react-router-dom";
import { toast } from "react-hot-toast";
import { createOptinEmail } from "../../functions/optinEmail";
import { getRelatedStaticText } from "../../functions/staticText";
import { useFormik } from "formik";
import { optinSchema } from "../../schemas";
import { ReactComponent as Logotexttrans } from "../../images/headersvgs/logotexttrans.svg";
import { ReactComponent as Footerdemotxt } from "../../images/headersvgs/footerdemotxt.svg";

export default function Footer() {
  const [footertag, setFootertag] = useState([]);
  const [sociallinks, setSociallinks] = useState([]);

  const dispatch = useDispatch();

  useEffect(() => {
    getRelatedStaticText("footertag").then((t) => {
      setFootertag(t.data);
      console.log("footertag", t.data);
    });
    getRelatedStaticText("footerSocialLink").then((res) =>
      setSociallinks(res.data)
    );
  }, []);

  const htmlToRender = (htmlString) => {
    return <div dangerouslySetInnerHTML={{ __html: htmlString }} />;
  };

  // ---------formik usage--------

  const initialValues = {
    email: "",
  };

  const {
    values,
    errors,
    touched,
    isSubmitting,
    handleBlur,
    handleChange,
    handleSubmit,
  } = useFormik({
    initialValues: initialValues,
    validationSchema: optinSchema,
    onSubmit: async (values, action) => {
      if (navigator.onLine) {
        toast.promise(createOptinEmail(values.email), {
          loading: "Subscribing to newsletter...",
          success: (res) => {
            action.resetForm();
            return "Successfully Subscribed Newsletter";
          },
          error: (err) => {
            console.log(err);
            return err.response.data.err;
          },
        });
      } else {
        dispatch({
          type: "SET_NETMODAL_VISIBLE",
          payload: true,
        });
      }
    },
  });

  return (
    <footer>
      <div class="optinouter">
        <div class="newsletter">
          <form class="optin-form" onSubmit={handleSubmit}>
            <h3>Get Free Counselling via Email!</h3>
            <div className="optinformcont">
              <div class="footerrow">
                <input
                  name="email"
                  id="email"
                  type="email"
                  value={values.email}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  autoComplete="off"
                  class="optin-input"
                  placeholder="Your Email"
                />
                <button type="submit" class="optinbtn">
                  Submit
                </button>
              </div>
              <div className="errcont">
                {errors.email && touched.email ? (
                  <p className="error-message">{errors.email}</p>
                ) : null}
              </div>
            </div>
          </form>
        </div>
      </div>
      <div class="footerouter">
        <div class="footercol">
          <div class="center-footer footerrow">
            <div class="footer-logo-side">
              <div class="footer-logo">
                <Logotexttrans />
                <div class="footerdemotxt">Study Guide International</div>
              </div>
              <div class="footer-site-desc">
                <p>{footertag && footertag.length > 0 && footertag[0].info1}</p>
              </div>
              <div class="footer-social-icon">
                {sociallinks &&
                  sociallinks.length > 0 &&
                  sociallinks.map((l, i) => (
                    <Link to={l.info3}>
                      <div key={i} class="socialhover">
                        {htmlToRender(l.info1)}
                        <span> {l.info2} </span>
                      </div>
                    </Link>
                  ))}
              </div>
            </div>

            <div class="footer-colum">
              <div class="col-heading">Let Us Help You</div>
              <div class="col-ul">
                <ul>
                  <li>
                    <Link to="#" class="col-li">
                      Team
                    </Link>
                  </li>
                  <li>
                    <Link to="#" class="col-li">
                      Courses
                    </Link>
                  </li>
                  <li>
                    <Link to="#" class="col-li">
                      Career
                    </Link>
                  </li>
                  <li>
                    <Link to="#" class="col-li">
                      About us
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div class="footer-colum">
              <div class="col-heading">Help & Support</div>
              <div class="col-ul">
                <ul>
                  <li>
                    <Link to="#" class="col-li">
                      Service
                    </Link>
                  </li>
                  <li>
                    <Link to="#" class="col-li">
                      Partners
                    </Link>
                  </li>
                  <li>
                    <Link to="#" class="col-li">
                      Apply Now
                    </Link>
                  </li>
                  <li>
                    <Link to="#" class="col-li">
                      Contact us
                    </Link>
                  </li>

                  <li>
                    <Link to="#" class="col-li">
                      News & Events
                    </Link>
                  </li>
                </ul>
              </div>
            </div>

            <div class="footer-colum">
              <div class="col-heading">Study Guide International</div>
              <div class="col-ul">
                <ul>
                  <li>
                    <Link to="/aboutus" class="col-li">
                      About Us
                    </Link>
                  </li>
                  <li>
                    <Link to="/TermsAndConditions" class="col-li">
                      Terms & Conditions
                    </Link>
                  </li>
                  <li>
                    <Link to="/PrivacyPolicy" class="col-li">
                      Privacy Policy
                    </Link>
                  </li>
                  <li>
                    <Link to="/CookiePolicy" class="col-li">
                      Cookie Policy
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div class="below-footer">
            <div class="copyright">
              {footertag &&
                footertag.length > 0 &&
                footertag[1] &&
                footertag[1].info1}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
