import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import "./Footer.css";
import { Link } from "react-router-dom";
import { toast } from "react-hot-toast";
import { createOptinEmail } from "../../functions/optinEmail";
import { getRelatedStaticText } from "../../functions/staticText";
import { useFormik } from "formik";
import { optinSchema } from "../../schemas";
import { ReactComponent as Logotextblack } from "../../images/headersvgs/logotextblack.svg";

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
                <Logotextblack />
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
                    <Link to="/ManageMyAc?page=Manageac" class="col-li">
                      Manage Account
                    </Link>
                  </li>
                  <li>
                    <Link to="/ManageMyAc?page=userOrders" class="col-li">
                      My Orders
                    </Link>
                  </li>
                  <li>
                    <Link to="/ManageMyAc?page=userReviews" class="col-li">
                      My Reviews
                    </Link>
                  </li>
                  <li>
                    <Link to="/ManageMyAc?page=userReturns" class="col-li">
                      My Returns
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
                    <Link to="/HelpCenter?page=Payments" class="col-li">
                      Help Center
                    </Link>
                  </li>
                  <li>
                    <Link to="/HelpCenter?page=Place" class="col-li">
                      Place an Order
                    </Link>
                  </li>
                  <li>
                    <Link to="/HelpCenter?page=Pay" class="col-li">
                      Pay for Order
                    </Link>
                  </li>
                  <li>
                    <Link to="/ReturnandRefundPolicy" class="col-li">
                      Returns & Refunds
                    </Link>
                  </li>

                  <li>
                    <Link to="/ContactUs" class="col-li">
                      Contact Us
                    </Link>
                  </li>
                </ul>
              </div>
            </div>

            <div class="footer-colum">
              <div class="col-heading">AppliaceBazar</div>
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
