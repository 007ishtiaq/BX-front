import React, { useState, useEffect } from "react";
import Sliderdiv from "../components/SliderDiv/Sliderdiv";
import { Online } from "react-detect-offline";
import { getRelatedBanners } from "../functions/banner";
import ProductsGroup from "../components/productsSlidable/productGroup/ProductsGroup";
import CategoriesCard from "../components/categoriesCard/CategoriesCard";
import CommonProductsCont from "../components/CommonProductsCont/CommonProductsCont";
import Partnersbanner from "../components/partnersbanner/Partnersbanner";
import Reviewsbox from "../components/reviewsbox/Reviewsbox";
import Scorebanner from "../components/scorebanner/Scorebanner";
import MegaSlide from "../components/megaslide/MegaSlide";
import Trustbox from "../components/trustbox/Trustbox";
import Peoplelove from "../components/peoplelove/Peoplelove";
import Workintro from "../components/workintro/Workintro";

const Home = () => {
  // const [banners, setBanners] = useState([]);
  // const [loading, setLoading] = useState(true);p

  // useEffect(() => {
  //   if (navigator.onLine) {
  //     loadBannerData();
  //   }
  // }, [navigator.onLine, Online]);

  // const loadBannerData = () => {
  //   getRelatedBanners("FlashSaleBanner")
  //     .then((res) => {
  //       setBanners(res.data);
  //       console.log(res.data);
  //       setLoading(false);
  //     })
  //     .catch((error) => {
  //       console.error("Error:", error);
  //       setLoading(false);
  //     });
  // };

  return (
    <>
      {/* <Sliderdiv /> */}
      <MegaSlide />
      <div className="centercont">
        <Trustbox />
        <Scorebanner />
        <Partnersbanner />
        <CategoriesCard />
        <ProductsGroup />
        <CommonProductsCont WidthIdea={"Fullwidth"} />
        {/* <Workintro /> */}
        {/* <Peoplelove /> */}
        <Reviewsbox />
      </div>
    </>
  );
};

export default Home;
