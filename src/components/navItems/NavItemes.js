import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";
import { Link, useLocation, useHistory } from "react-router-dom";
import classes from "./NavItemes.module.css";
import "./NavItemes.css";
import {
  AppstoreOutlined,
  CrownOutlined,
  PhoneOutlined,
  QuestionCircleOutlined,
} from "@ant-design/icons";
import { getCategories } from "../../functions/category";
import { getBrands } from "../../functions/brands";
import { Menu } from "antd";
import { ReactComponent as Squaresvg } from "../../images/square.svg";

const { SubMenu } = Menu;

//small size left drawer - chilren component insider data
const NavItemes = () => {
  const [categories, setCategories] = useState([]);
  const [brands, setBrands] = useState([]);
  const [openKeys, setOpenKeys] = useState(["1", "2"]);

  const history = useHistory();
  const location = useLocation();
  let dispatch = useDispatch();

  useEffect(() => {
    getCategories().then((c) => {
      setCategories(c.data);
    });
    getBrands().then((b) => setBrands(b.data));
  }, []);

  // Get the whole path including query parameters
  const currentPath = location.pathname + location.search;

  const handleMenuClick = (e) => {
    history.push(e.key);
  };

  const handleSubMenuOpenChange = (keys) => {
    setOpenKeys(keys);
  };

  return (
    <>
      {/* ant design manu */}
      <div className="sidenavcont">
        <Menu
          mode="inline"
          defaultSelectedKeys={[currentPath]}
          openKeys={openKeys}
          onOpenChange={handleSubMenuOpenChange}
          onClick={handleMenuClick}
        >
          {/* category working */}
          <SubMenu
            key="1"
            title={
              <span>
                <AppstoreOutlined /> Browse Categories
              </span>
            }
          >
            {categories.map((c) => (
              <Menu.Item key={`/category/?category=${c.slug}`}>
                <div className="liitemcont">
                  <div className="navsvgcont">
                    <Squaresvg />
                  </div>
                  <p className="liitemname">{c.name}</p>
                </div>
              </Menu.Item>
            ))}
          </SubMenu>
          {/* Brand working */}
          <SubMenu
            key="2"
            title={
              <span>
                <CrownOutlined /> Popular Industories
              </span>
            }
            className="snavcont"
          >
            {brands.map((b) => (
              <Menu.Item key={`/brand/?brand=${b.slug}`}>
                <div className="liitemcont">
                  <div className="navsvgcont">
                    <Squaresvg />
                  </div>
                  <p className="liitemname">{b.name}</p>
                </div>
              </Menu.Item>
            ))}
          </SubMenu>
        </Menu>
      </div>
      <div className="snavlistcont">
        <ul className={classes.NavItemes}>
          <li>
            <NavLink to="/aboutus" exact activeClassName={classes.active}>
              <p>About Us</p>{" "}
              <QuestionCircleOutlined className={classes.Icon} />{" "}
            </NavLink>
          </li>
          <li>
            <NavLink to="/ContactUs" exact activeClassName={classes.active}>
              <p> Contact Us</p> <PhoneOutlined className={classes.Icon} />{" "}
            </NavLink>
          </li>
        </ul>
      </div>
    </>
  );
};

export default NavItemes;
