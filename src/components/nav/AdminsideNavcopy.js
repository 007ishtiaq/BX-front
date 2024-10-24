import React, { useState, useEffect } from "react";
import { ReactComponent as Tickchecksvg } from "../../images/manageacUser/tickcheck.svg";
import "./UsersideNav.css";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { getUserProfile } from "../../functions/user";

export default function AdminsideNavcopy({ currentActive }) {
  const { user } = useSelector((state) => ({ ...state }));

  useEffect(() => {
    const Allactives = document.querySelectorAll(".clsremove");
    Allactives.forEach((Elemactive) => {
      Elemactive.classList.remove("active");
    });
    const default_active = document.querySelector(`.${currentActive}`);
    default_active.classList.add("active");
  }, [currentActive]);

  return (
    <div class="navleftside">
      <div class="namecont">
        <p>Hello, Admin</p>
      </div>
      {user && user.role === "admin" && (
        <div class="varifiedinfocont">
          <div class="varifiedinfo">
            <div class="personvarifiedsvg">
              <Tickchecksvg />
            </div>
            <div class="varifiedinfotext">Admin Account</div>
          </div>
        </div>
      )}
      <Link
        to="/AdminPanel?page=SubmittedForms"
        class="manageacheading clsremove SubmittedForms"
      >
        Submitted Requests
      </Link>
      <ul class="manageacul">
        <Link to="/AdminPanel?page=ContactForms">
          <li class="manageacli clsremove ContactForms">Contact Forms</li>
        </Link>
        <Link to="/AdminPanel?page=OptinEmails">
          <li class="manageacli clsremove OptinEmails">Opt-In Emails</li>
        </Link>
      </ul>
      <Link
        to="/AdminPanel?page=AllProducts"
        class="manageacheading clsremove AllProducts"
      >
        All products
      </Link>
      <ul class="manageacul">
        <Link to="/AdminPanel?page=ProductCreate">
          <li class="manageacli clsremove ProductCreate">Create Product</li>
        </Link>
        <Link to="/AdminPanel?page=AddReview">
          <li class="manageacli clsremove AddReview">Add Review</li>
        </Link>
      </ul>
      <Link
        to="/AdminPanel?page=CategoryCreate"
        class="manageacheading clsremove CategoryCreate"
      >
        Create Category
      </Link>
      <ul class="manageacul">
        <Link to="/AdminPanel?page=BrandCreate">
          <li class="manageacli clsremove BrandCreate">
            Create Industory Type
          </li>
        </Link>
        <Link to="/AdminPanel?page=BannerCreate">
          <li class="manageacli clsremove BannerCreate">Create Banner</li>
        </Link>
        <Link to="/AdminPanel?page=StaticText">
          <li class="manageacli clsremove StaticText">Static Text & Promo</li>
        </Link>
      </ul>
      <Link
        to="/AdminPanel?page=PasswordReset"
        class="manageacheading clsremove PasswordReset"
      >
        Password Reset
      </Link>
    </div>
  );
}
