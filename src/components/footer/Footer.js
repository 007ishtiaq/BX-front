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
  const [footertag, setFootertag] = useState([
    {
      _id: "6677bed768337be7bf9c7d0d",
      identity: "footertag",
      serialNum: 1,
      info1:
        "Let us help you yield your true academic potential for foreign education. To configure and discover an apt international enrolment strategy, get in touch!",
      slug: "let-us-help-you-yield-your-true-academic-potential-for-foreign-education.-to-configure-and-discover-an-apt-international-enrolment-strategy-get-in-touch!",
      info2: "",
      info3: "",
      createdAt: "2024-06-23T06:21:11.350Z",
      updatedAt: "2024-06-23T06:21:11.350Z",
      __v: 0,
    },
    {
      _id: "6677c07f68337be7bf9c7d54",
      identity: "footertag",
      serialNum: 2,
      info1:
        "Copyright © 2023 Study Guide International, LLC. All rights reserved.",
      slug: "copyright-(c)-2023-Study-Guide-llc.-all-rights-reserved.",
      info2: "",
      info3: "",
      createdAt: "2024-06-23T06:28:15.070Z",
      updatedAt: "2024-06-23T06:29:00.836Z",
      __v: 0,
    },
  ]);
  const [sociallinks, setSociallinks] = useState([
    {
      _id: "6677c14c68337be7bf9c7da0",
      identity: "footerSocialLink",
      serialNum: 1,
      info1:
        '<svg                     class="fbsvg"                     xmlns="http://www.w3.org/2000/svg"                     viewBox="0 0 320 512"                   >                     <path d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z" />                   </svg>',
      slug: 'lesssvg-class"fbsvg"-xmlns"http:www.w3.org2000svg"-viewbox"0-0-320-512"-greater-lesspath-d"m279.14-288l14.22-92.66h-88.91v-60.13c0-25.35-12.42-50.06-52.24-50.06h40.42v6.26s260.43-0-225.36-0c-73.22-0-121.08-44.38-121.08-124.72v70.62h22.89v288h81.39v224h100.17v288z"-greater-lesssvggreater',
      info2: "facebook",
      info3: "facebook.com/",
      createdAt: "2024-06-23T06:31:40.831Z",
      updatedAt: "2024-06-23T06:31:40.831Z",
      __v: 0,
    },
    {
      _id: "6677c18768337be7bf9c7db6",
      identity: "footerSocialLink",
      serialNum: 2,
      info1:
        '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">                     <path d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z" />                   </svg>',
      slug: 'lesssvg-xmlns"http:www.w3.org2000svg"-viewbox"0-0-512-512"greater-lesspath-d"m459.37-151.716c.325-4.548.325-9.097.325-13.645-0-138.72-105.583-298.558-298.558-298.558-59.452-0-114.68-17.219-161.137-47.106-8.447.974-16.568-1.299-25.34-1.299-49.055-0-94.213-16.568-130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772-6.498.974-12.995-1.624-19.818-1.624-9.421-0-18.843-1.3-27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969-7.797-30.214-12.67-47.431-13.319-28.264-18.843-46.781-51.005-46.781-87.391-0-19.492-5.197-37.36-14.294-52.954-51.655-63.675-129.3-105.258-216.365-109.807-1.624-7.797-2.599-15.918-2.599-24.04-0-57.828-46.782-104.934-104.934-104.934-30.213-0-57.502-12.67-76.67-33.137-23.715-4.548-46.456-13.32-66.599-25.34-7.798-24.366-24.366-44.833-46.132-57.827-21.117-2.273-41.584-8.122-60.426-16.243-14.292-20.791-32.161-39.308-52.628-54.253z"-greater-lesssvggreater',
      info2: "twitter",
      info3: "twitter.com/",
      createdAt: "2024-06-23T06:32:39.818Z",
      updatedAt: "2024-06-23T06:32:39.818Z",
      __v: 0,
    },
    {
      _id: "6677c12868337be7bf9c7d9c",
      identity: "footerSocialLink",
      serialNum: 3,
      info1:
        '<svg                     class="linkedinsvg"                     xmlns="http://www.w3.org/2000/svg"                     viewBox="0 0 448 512"                   >                     <path d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z" />                   </svg>',
      slug: 'lesssvg-class"linkedinsvg"-xmlns"http:www.w3.org2000svg"-viewbox"0-0-448-512"-greater-lesspath-d"m100.28-448h7.4v148.9h92.88zm53.79-108.1c24.09-108.1-0-83.5-0-53.8a53.79-53.79-0-0-1-107.58-0c0-29.7-24.1-54.3-53.79-54.3zm447.9-448h-92.68v302.4c0-34.7-.7-79.2-48.29-79.2-48.29-0-55.69-37.7-55.69-76.7v448h-92.78v148.9h89.08v40.8h1.3c12.4-23.5-42.69-48.3-87.88-48.3-94-0-111.28-61.9-111.28-142.3v448z"-greater-lesssvggreater',
      info2: "linkedin",
      info3: "linkedin.com/",
      createdAt: "2024-06-23T06:31:04.925Z",
      updatedAt: "2024-06-23T06:31:04.925Z",
      __v: 0,
    },
    {
      _id: "6677c1ac68337be7bf9c7dba",
      identity: "footerSocialLink",
      serialNum: 4,
      info1:
        '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">                     <path d="M549.655 124.083c-6.281-23.65-24.787-42.276-48.284-48.597C458.781 64 288 64 288 64S117.22 64 74.629 75.486c-23.497 6.322-42.003 24.947-48.284 48.597-11.412 42.867-11.412 132.305-11.412 132.305s0 89.438 11.412 132.305c6.281 23.65 24.787 41.5 48.284 47.821C117.22 448 288 448 288 448s170.78 0 213.371-11.486c23.497-6.321 42.003-24.171 48.284-47.821 11.412-42.867 11.412-132.305 11.412-132.305s0-89.438-11.412-132.305zm-317.51 213.508V175.185l142.739 81.205-142.739 81.201z" />                   </svg>',
      slug: 'lesssvg-xmlns"http:www.w3.org2000svg"-viewbox"0-0-576-512"greater-lesspath-d"m549.655-124.083c-6.281-23.65-24.787-42.276-48.284-48.597c458.781-64-288-64-288-64s117.22-64-74.629-75.486c-23.497-6.322-42.003-24.947-48.284-48.597-11.412-42.867-11.412-132.305-11.412-132.305s0-89.438-11.412-132.305c6.281-23.65-24.787-41.5-48.284-47.821c117.22-448-288-448-288-448s170.78-0-213.371-11.486c23.497-6.321-42.003-24.171-48.284-47.821-11.412-42.867-11.412-132.305-11.412-132.305s0-89.438-11.412-132.305zm-317.51-213.508v175.185l142.739-81.205-142.739-81.201z"-greater-lesssvggreater',
      info2: "Youtube",
      info3: "Youtube.com/",
      createdAt: "2024-06-23T06:33:16.234Z",
      updatedAt: "2024-06-23T06:33:16.234Z",
      __v: 0,
    },
  ]);

  const dispatch = useDispatch();

  // useEffect(() => {
  //   getRelatedStaticText("footertag").then((t) => {
  //     setFootertag(t.data);
  //     console.log("footertag", t.data);
  //   });
  //   getRelatedStaticText("footerSocialLink").then((res) => {
  //     console.log("footerSocialLink", res.data);
  //     setSociallinks(res.data);
  //   });
  // }, []);

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
