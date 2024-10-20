import React from "react";
import "../user/ManageMyAcccount.css";
import AdminsideNav from "../../components/nav/AdminsideNav";
import AllProducts from "./product/AllProducts";
import ProductCreate from "./product/ProductCreate";
import AddReview from "./product/AddReview";
import CategoryCreate from "./category/CategoryCreate";
import BrandCreate from "./brand/BrandCreate";
import BannerCreate from "./Slider&Banners/BannerCreate";
import StaticText from "./statictext/StaticText";
import PasswordReset from "./passwordreset/PasswordReset";
import ContactForms from "./activities/ContactForms";
import SubmittedForms from "./activities/SubmittedForms";
import OptinEmails from "./activities/OptinEmails";
import { useLocation } from "react-router-dom/cjs/react-router-dom.min";
import AdminSmallNav from "../../components/nav/AdminSmallNav";

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

export default function AdminPanel() {
  let query = useQuery();
  return (
    <div class="manageacmaincont">
      <div class="manageaccont">
        <AdminsideNav />
        <AdminSmallNav />
        <div class="navrightside">
          {query.get("page") === "AllProducts" && <AllProducts />}
          {query.get("page") === "ProductCreate" && <ProductCreate />}
          {query.get("page") === "AddReview" && <AddReview />}
          {query.get("page") === "CategoryCreate" && <CategoryCreate />}
          {query.get("page") === "BrandCreate" && <BrandCreate />}
          {query.get("page") === "SubmittedForms" && <SubmittedForms />}
          {query.get("page") === "ContactForms" && <ContactForms />}
          {query.get("page") === "OptinEmails" && <OptinEmails />}
          {query.get("page") === "BannerCreate" && <BannerCreate />}
          {query.get("page") === "StaticText" && <StaticText />}
          {query.get("page") === "PasswordReset" && <PasswordReset />}
        </div>
      </div>
    </div>
  );
}
