import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./searchstyle.css";
import "../../components/ProductCards/ProductCardsAll.css";
import _ from "lodash";
import FlashsaleProductCard from "../../components/ProductCards/FlashsaleProductCard";
import SearchFilter from "../../components/searchfilter/SearchFilter";
import SideDrawer from "../../components/SideDrawer/SideDrawer";
import NoItemFound from "../../components/cards/NoItemFound/NoItemFound";
import { Pagination } from "antd";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom/cjs/react-router-dom.min";
import {
  getProductsByPage,
  fetchProductsByFilter,
} from "../../functions/product";
import { ReactComponent as Crosssvg } from "../../images/admin/cross.svg";
import CatenameSkull from "../../components/Skeletons/CatenameSkull";
import Searchloader from "../../components/searchloader/Searchloader";

const Shop = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [contwidth, setContwidth] = useState(0);
  const [FilterDrawervisible, setFilterDrawervisible] = useState(false);
  const [page, setPage] = useState(1); // page number
  const [perPage, setPerpage] = useState(5); // per page Size
  const [productsCount, setProductsCount] = useState(0);
  const [isDesktop, setIsDesktop] = useState(window.innerWidth > 700); // Determine if screen width is greater than 700px
  const [brand, setBrand] = useState("");
  const [category, setCategory] = useState("");
  const [categoryname, setCategoryname] = useState("");
  const [entry, setEntry] = useState(true);

  const { mobileSideNav } = useSelector((state) => ({ ...state }));
  const dispatch = useDispatch();
  let { search } = useSelector((state) => ({ ...state }));
  const { text } = search;

  function useQuery() {
    return new URLSearchParams(useLocation().search);
  }
  let query = useQuery();
  let categoryslug = query.get("category");

  useEffect(() => {
    const proarea = document.querySelector(".productsarea");
    const contwidth = proarea.clientWidth;
    setContwidth(contwidth);

    // Handle screen resizing
    const handleResize = () => {
      setIsDesktop(window.innerWidth > 700);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    if (categoryslug && entry) {
      setCategory(categoryslug);
      fetchProducts({ category: categoryslug });
      setEntry(false);
      //reset
      // setCategory("");
      setBrand("");
    } else {
      loadAllProducts();
    }
  }, [page, categoryslug]);

  useEffect(() => {
    setPage(1);
  }, [text]);

  const fetchProducts = (arg) => {
    setLoading(true);
    fetchProductsByFilter({ arg, page, perPage }).then((res) => {
      setProducts(res.data.products);
      setLoading(false);
      if (res.data.products.length > 0) {
        setCategoryname(res.data.products[0].category.name);
      }
      setProductsCount(res.data.totalProducts);
    });
  };

  const loadAllProducts = async () => {
    try {
      setLoading(true);
      const { data } = await getProductsByPage({ page, perPage });
      window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
      setProducts(data.products);
      setProductsCount(data.totalProducts);
    } catch (err) {
      console.error(err);
      // toast.error("Failed to load products");
    } finally {
      setLoading(false);
    }
  };

  const close = () => {
    // setFilterDrawervisible(false);
    dispatch({
      type: "SET_SIDENAV_VISIBLE",
      payload: false,
    });
  };

  // handle check for categories
  const handleCheck = async (e) => {
    dispatch({
      type: "SEARCH_QUERY",
      payload: { text: "" },
    });
    dispatch({
      type: "SET_SIDENAV_VISIBLE",
      payload: false,
    });
    // reset
    setBrand("");
    setCategory(e.target.value);
    setCategoryname(e.target.name);
    fetchProducts({ category: e.target.value });
  };

  // const handleBrand = (e) => {
  //   dispatch({
  //     type: "SEARCH_QUERY",
  //     payload: { text: "" },
  //   });
  //   dispatch({
  //     type: "SET_SIDENAV_VISIBLE",
  //     payload: false,
  //   });
  //   setCategory("");
  //   setBrand(e.target.value);
  //   fetchProducts({ brand: e.target.value });
  // };

  const Clearfilter = () => {
    loadAllProducts();
    setEntry(false);
    dispatch({
      type: "SEARCH_QUERY",
      payload: { text: "" },
    });
    // reset
    setCategory("");
    setBrand("");
  };

  // Calculate start and end of the current page range
  const start = (page - 1) * perPage + 1;
  const end = Math.min(start + perPage - 1, productsCount);

  return (
    <>
      <div className="searchcontainer">
        {isDesktop ? (
          <div className="searchfilterleft">
            <SearchFilter
              handleCheck={handleCheck}
              category={category}
              brand={brand}
              text={text}
              // handleBrand={handleBrand}
              Clearfilter={Clearfilter}
            />
          </div>
        ) : (
          <SideDrawer Open={mobileSideNav} close={close} Drawer="Filter">
            <SearchFilter
              handleCheck={handleCheck}
              category={category}
              brand={brand}
              text={text}
              // handleBrand={handleBrand}
              Clearfilter={Clearfilter}
            />
          </SideDrawer>
        )}

        <div className="filterproright">
          <div className="filterproup">
            <div className="rightsideheadercont">
              <div className="headingname">
                <div className="foundpros">
                  {!category && productsCount > 0 ? (
                    <p>
                      {start}-{end} of over {productsCount} results
                    </p>
                  ) : !categoryname ? (
                    <CatenameSkull />
                  ) : (
                    <div className="cateselect" onClick={Clearfilter}>
                      Results: {categoryname}{" "}
                      <span>
                        <Crosssvg />
                      </span>{" "}
                    </div>
                  )}
                </div>
                {/* <div className="foundpros">
                {productsCount} {productsCount > 1 ? "Products" : "Product"}{" "}
                found
              </div> */}
              </div>
              <div className="headingright">
                <span>Sort By: </span>
                <span className="sortoptions">Popularity</span>
              </div>
            </div>

            <div className="contentcont">
              <div className="productsarea">
                {loading ? (
                  <Searchloader />
                ) : products.length < 1 ? (
                  <NoItemFound />
                ) : (
                  products.map((prod) => (
                    <FlashsaleProductCard
                      key={prod._id}
                      product={prod}
                      contWidth={contwidth}
                      WidthIdea={"Seachpagewidth"}
                    />
                  ))
                )}
              </div>
            </div>
          </div>
          <div className="productreviewbottom searchpagi">
            <div className="previewpagination">
              <Pagination
                current={page}
                total={productsCount}
                pageSize={perPage}
                onChange={(value) => setPage(value)}
                showSizeChanger={false}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Shop;
