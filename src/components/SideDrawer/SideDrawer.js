import React, { useState } from "react";
// import classes from "./SideDrawer.module.css";
import "./SideDrawer.css";
import { Link } from "react-router-dom";
import Backdrop from "../Backdrop/Backdrop";
import { CloseOutlined } from "@ant-design/icons";
import { ReactComponent as Logotextblack } from "../../images/headersvgs/logotextblack.svg";
import { ReactComponent as Tickchecksvg } from "../../images/manageacUser/tickcheck.svg";
import { ReactComponent as Personsvg } from "../../images/headersvgs/Personsvg.svg";
import { useSelector } from "react-redux";

//small size left drawer - outer layer with children  (children is NavItems.js)
export default function SideDrawer(props) {
  const { user } = useSelector((state) => ({ ...state }));

  return (
    <>
      <Backdrop show={props.Open} closeModel={props.close} />
      <div className={`SideDrawer ${props.Open ? "Open" : "Close"}`}>
        {props.Drawer !== "Filter" && (
          <div className="SideDrawerHeader">
            <div className="sidedrawertop">
              <div class="logodiv">
                <div className="logo-txtsize">
                  <Logotextblack />
                </div>
                <div className="logo-sampletxt">Sharp Edge Packaging</div>
              </div>
              <CloseOutlined onClick={props.close} className="clear" />
            </div>
          </div>
        )}
        {props.children}
      </div>
    </>
  );
}
