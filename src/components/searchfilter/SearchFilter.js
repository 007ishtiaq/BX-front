import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Menu, Radio } from "antd";
import {
  getProductsByPage,
  fetchProductsByFilter,
} from "../../functions/product";
import "../../pages/shop/searchstyle.css";
import { getCategories } from "../../functions/category";
import { getBrands } from "../../functions/brands";
import { ReactComponent as Clearsvg } from "../../images/clear.svg";

const { SubMenu, ItemGroup } = Menu;

export default function SearchFilter({
  setProducts,
  page,
  setPage,
  perPage,
  setProductsCount,
  categoryslug,
}) {
  const [categories, setCategories] = useState([]); // to show the available list of categories
  const [category, setCategory] = useState(categoryslug || "");
  const [brands, setBrands] = useState([]); // to show the available list of brands
  const [brand, setBrand] = useState("");

  let dispatch = useDispatch();
  let { search } = useSelector((state) => ({ ...state }));
  const { text } = search;

  useEffect(() => {
    getCategories().then((res) => setCategories(res.data));

    getBrands().then((b) => {
      setBrands(b.data.map((item) => item.name));
    });
  }, []);

  const fetchProducts = (arg) => {
    fetchProductsByFilter({ arg, page, perPage }).then((res) => {
      setProducts(res.data.products);
      setProductsCount(res.data.totalProducts);
    });
  };

  const loadAllProducts = async () => {
    try {
      // setLoading(true);
      const { data } = await getProductsByPage({ page, perPage });
      setProducts(data.products);
      setProductsCount(data.totalProducts);
    } catch (err) {
      console.error(err);
      // toast.error("Failed to load products");
    } finally {
      // setLoading(false);
    }
  };

  useEffect(() => {
    if (category) {
      fetchProducts({ category: category });
      //reset
      // setCategory("");
      setBrand("");
    } else {
      loadAllProducts();
    }
  }, [page, text]);

  useEffect(() => {
    setPage(1);
  }, [text]);

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

  // handle check for categories
  const handleCheck = async (e) => {
    dispatch({
      type: "SEARCH_QUERY",
      payload: { text: "" },
    });
    // reset
    setBrand("");
    setCategory(e.target.value);
    fetchProducts({ category: e.target.value });
  };

  // 7. show products based on brand name
  const showBrands = () =>
    brands.map((b) => (
      <Radio
        key={b}
        value={b}
        name={b}
        checked={b === brand}
        onChange={handleBrand}
        className="pb-1 pl-4 pr-4"
      >
        {b}
      </Radio>
    ));

  const handleBrand = (e) => {
    dispatch({
      type: "SEARCH_QUERY",
      payload: { text: "" },
    });
    setCategory("");
    setBrand(e.target.value);
    fetchProducts({ brand: e.target.value });
  };

  const Clearfilter = () => {
    loadAllProducts();
    dispatch({
      type: "SEARCH_QUERY",
      payload: { text: "" },
    });
    // reset
    setCategory("");
    setBrand("");
  };

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
          title={<div class="filterheading">CATEGORY</div>}
        >
          <div style={{ maringTop: "10px" }}>{showCategories()}</div>
        </SubMenu>

        <SubMenu
          class="filtercont"
          key="2"
          title={<div class="filterheading">BRAND</div>}
        >
          <div style={{ maringTop: "-10px" }}>{showBrands()}</div>
        </SubMenu>
      </Menu>
    </div>
  );
}
