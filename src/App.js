import React, { useEffect, lazy, Suspense, useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Toaster } from "react-hot-toast";
import { currentUser } from "./functions/auth";
import Footer from "./components/footer/Footer";
import NoNetModal from "./components/NoNetModal/NoNetModal";
import { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import "./loader.css";
import ScrollToTop from "./components/Scroll/ScrollToTop";
import GoToTop from "./components/Scroll/GoToTop";
import Livechat from "./components/livechat/Livechat";
import Pixel from "./components/pixel/Pixel";

// using lazy
const Login = lazy(() => import("./pages/auth/Login"));
const Register = lazy(() => import("./pages/auth/Register"));
const OtpVerification = lazy(() => import("./pages/auth/OtpVerification"));
const Home = lazy(() => import("./pages/Home"));
const Product = lazy(() => import("./pages/Product"));
const ProductUpdate = lazy(() => import("./pages/admin/product/ProductUpdate"));
const CategoryUpdate = lazy(() =>
  import("./pages/admin/category/CategoryUpdate")
);
const Header = lazy(() => import("./components/nav/Header"));
const NotFound = lazy(() => import("./pages/NotFound/NotFound"));
const RegisterComplete = lazy(() => import("./pages/auth/RegisterComplete"));
const AdminRoute = lazy(() => import("./components/routes/AdminRoute"));
const AdminPanel = lazy(() => import("./pages/admin/AdminPanel"));
const BannerUpdate = lazy(() =>
  import("./pages/admin/Slider&Banners/BannerUpdate")
);
const StaticTextupdate = lazy(() =>
  import("./pages/admin/statictext/StaticTextupdate")
);
const Shop = lazy(() => import("./pages/shop/Shop"));
const AboutUs = lazy(() => import("./pages/AboutUs/AboutUs"));
const ContactUs = lazy(() => import("./pages/contactUs/ContactUs"));
const ContactFormSingle = lazy(() =>
  import("./pages/admin/activities/ContactFormSingle")
);
const PrivacyPolicy = lazy(() => import("./pages/policies/PrivacyPolicy"));
const ReturnandRefundPolicy = lazy(() =>
  import("./pages/policies/ReturnandRefundPolicy")
);
const TermsAndConditions = lazy(() =>
  import("./pages/policies/TermsAndConditions")
);
const ApplyFormSingle = lazy(() =>
  import("./pages/admin/activities/ApplyFormSingle")
);

const App = () => {
  const [noNetModalshow, setNoNetModalshow] = useState(false);

  const { noNetModal } = useSelector((state) => ({ ...state }));

  const dispatch = useDispatch();

  useEffect(() => {
    noNetModal && setNoNetModalshow(true);
  }, [noNetModal]);

  useEffect(() => {
    const handleOnlineStatus = () => {
      if (navigator.onLine) {
        setNoNetModalshow(false);
        dispatch({
          type: "SET_NETMODAL_VISIBLE",
          payload: false,
        });
      }
    };
    window.addEventListener("online", handleOnlineStatus);
    return () => {
      window.removeEventListener("online", handleOnlineStatus);
    };
  }, []);

  useEffect(() => {
    import("antd/dist/antd.css").then((module) => {
      const node = document.createElement("style");
      node.innerHTML = module.default;
      document.head.appendChild(node);
    });
    // Fetch and append boot.css from public folder
    fetch("/boot.css")
      .then((response) => response.text())
      .then((css) => {
        const node = document.createElement("style");
        node.innerHTML = css;
        document.head.appendChild(node);
      })
      .catch((error) => console.error("Error loading boot.css:", error));
  }, []);

  const handleRetry = async (e) => {
    // e.preventDefault();
  };

  // to check firebase auth state
  useEffect(() => {
    let unsubscribe;

    const loadAuthModule = async () => {
      const { auth } = await import("./firebase");
      unsubscribe = auth.onAuthStateChanged(async (user) => {
        if (user) {
          const idTokenResult = await user.getIdTokenResult();

          try {
            const res = await currentUser(idTokenResult.token);
            dispatch({
              type: "LOGGED_IN_USER",
              payload: {
                name: res.data.name,
                email: res.data.email,
                token: idTokenResult.token,
                role: res.data.role,
                _id: res.data._id,
              },
            });
          } catch (err) {
            console.log(err);
          }
        }
      });
    };

    loadAuthModule();

    // Cleanup
    return () => {
      if (unsubscribe) {
        unsubscribe();
      }
    };
  }, [dispatch]);

  return (
    <Suspense
      fallback={
        <div className="mainloadercont">
          <div class="loadingio-spinner-double-ring-2by998twmg8">
            <div class="ldio-yzaezf3dcmj">
              <div></div>
              <div></div>
              <div>
                <div></div>
              </div>
              <div>
                <div></div>
              </div>
            </div>
          </div>
        </div>
      }
    >
      <SkeletonTheme baseColor="#d9d9d9" highlightColor="#bfbfbf">
        <Router>
          <NoNetModal
            classDisplay={`${noNetModalshow && "open-popup"}`}
            setNoNetModal={setNoNetModalshow}
            handleRetry={handleRetry}
          />
          <Pixel />
          <ScrollToTop />
          <Header />
          <Toaster />
          <GoToTop />
          <Livechat />
          <Switch>
            {/* common unprotected Routes */}

            <Route exact path="/" component={Home} />
            <Route exact path="/product/:slug" component={Product} />

            <Route exact path="/PrivacyPolicy" component={PrivacyPolicy} />
            <Route
              exact
              path="/ReturnandRefundPolicy"
              component={ReturnandRefundPolicy}
            />
            <Route
              exact
              path="/TermsAndConditions"
              component={TermsAndConditions}
            />
            <Route exact path="/aboutus" component={AboutUs} />
            <Route exact path="/ContactUs" component={ContactUs} />

            <Route exact path="/login" component={Login} />
            <Route exact path="/register" component={Register} />
            <Route exact path="/otpVerification" component={OtpVerification} />
            <Route
              exact
              path="/register/complete"
              component={RegisterComplete}
            />
            <Route exact path="/shop" component={Shop} />
            <Route exact path="/shop?category=:slug" component={Shop} />

            {/* Admin protected Routes */}

            <AdminRoute exact path="/AdminPanel" component={AdminPanel} />
            <AdminRoute
              exact
              path="/AdminPanel?page=:page"
              component={AdminPanel}
            />
            <AdminRoute
              exact
              path="/admin/category/:slug"
              component={CategoryUpdate}
            />
            <AdminRoute
              exact
              path="/admin/banner/:slug"
              component={BannerUpdate}
            />
            <AdminRoute
              exact
              path="/admin/statictext/:slug"
              component={StaticTextupdate}
            />
            <AdminRoute
              exact
              path="/admin/product/:slug"
              component={ProductUpdate}
            />
            <AdminRoute
              exact
              path="/admin/contact/:id"
              component={ContactFormSingle}
            />
            <AdminRoute
              exact
              path="/admin/form/:id"
              component={ApplyFormSingle}
            />
            <Route exact path="*" component={NotFound} />
            <Route component={NotFound} />
          </Switch>
          <Footer />
        </Router>
      </SkeletonTheme>
    </Suspense>
  );
};

export default App;
