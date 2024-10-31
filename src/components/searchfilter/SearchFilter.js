import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Menu, Radio } from "antd";
import "../../pages/shop/searchstyle.css";
import { getCategories } from "../../functions/category";
import { getBrands } from "../../functions/brands";
import { ReactComponent as Clearsvg } from "../../images/clear.svg";

const { SubMenu, ItemGroup } = Menu;

export default function SearchFilter({
  handleCheck,
  category,
  brand,
  text,
  // handleBrand,
  Clearfilter,
}) {
  const [categories, setCategories] = useState([]); // to show the available list of categories
  // const [brands, setBrands] = useState([]); // to show the available list of brands

  useEffect(() => {
    getCategories().then((res) => setCategories(res.data));

    // getBrands().then((b) => {
    //   setBrands(b.data.map((item) => item.name));
    // });
  }, []);

  // 4. load products based on category
  // show categories in a list of checkbox
  const showCategories = () =>
    categories.map((c) => (
      <div key={c._id}>
        <Radio
          value={c._id}
          name="category"
          checked={c._id === category}
          onChange={handleCheck}
          className="pb-1 pl-4 pr-4"
        >
          {c.name}
        </Radio>
        <br />
      </div>
    ));

  // 7. show products based on brand name
  // const showBrands = () =>
  //   brands.map((b) => (
  //     <Radio
  //       key={b}
  //       value={b}
  //       name={b}
  //       checked={b === brand}
  //       onChange={handleBrand}
  //       className="pb-1 pl-4 pr-4"
  //     >
  //       {b}
  //     </Radio>
  //   ));

  return (
    <div class="filtercont">
      <div
        onClick={Clearfilter}
        className={`clearfilter btn btnsecond ${
          (category || brand || text) && "filteractive"
        }`}
      >
        <div className="clearsvgcont">
          <Clearsvg></Clearsvg>
        </div>
        <p>Clear All Filters</p>
      </div>
      <Menu defaultOpenKeys={["1", "2"]} mode="inline">
        <SubMenu
          class="filtercont"
          key="1"
          title={<div class="filterheading">Populer Box Designs</div>}
        >
          <div style={{ maringTop: "10px" }}>{showCategories()}</div>
        </SubMenu>

        {/* <SubMenu
          class="filtercont"
          key="2"
          title={<div class="filterheading">Populer Industories</div>}
        >
          <div style={{ maringTop: "-10px" }}>{showBrands()}</div>
        </SubMenu> */}
      </Menu>
    </div>
  );
}
