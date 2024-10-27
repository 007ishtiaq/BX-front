import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./searchstyle.css";
import "../../components/ProductCards/ProductCardsAll.css";
import _ from "lodash";
import FlashsaleProductCard from "../../components/ProductCards/FlashsaleProductCard";
import { ReactComponent as Filtersvg } from "../../images/filter.svg";
import SearchFilter from "../../components/searchfilter/SearchFilter";
import SideDrawer from "../../components/SideDrawer/SideDrawer";
import NoItemFound from "../../components/cards/NoItemFound/NoItemFound";
import { Pagination } from "antd";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom/cjs/react-router-dom.min";

const Shop = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [contwidth, setContwidth] = useState(0);
  const [FilterDrawervisible, setFilterDrawervisible] = useState(false);
  const [page, setPage] = useState(1); // page number
  const [perPage, setPerpage] = useState(2); // per page Size
  const [productsCount, setProductsCount] = useState(0);
  const [isDesktop, setIsDesktop] = useState(window.innerWidth > 700); // Determine if screen width is greater than 700px

  const { mobileSideNav } = useSelector((state) => ({ ...state }));
  const dispatch = useDispatch();

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

  function useQuery() {
    return new URLSearchParams(useLocation().search);
  }
  let query = useQuery();
  let categoryslug = query.get("category");

  const close = () => {
    // setFilterDrawervisible(false);
    dispatch({
      type: "SET_SIDENAV_VISIBLE",
      payload: false,
    });
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
              products={products}
              setProducts={setProducts}
              page={page}
              setPage={setPage}
              perPage={perPage}
              setProductsCount={setProductsCount}
              categoryslug={categoryslug}
            />
          </div>
        ) : (
          <SideDrawer Open={mobileSideNav} close={close} Drawer="Filter">
            <SearchFilter
              products={products}
              setProducts={setProducts}
              page={page}
              setPage={setPage}
              perPage={perPage}
              setProductsCount={setProductsCount}
              categoryslug={categoryslug}
            />
          </SideDrawer>
        )}

        <div className="filterproright">
          <div className="rightsideheadercont">
            <div className="headingname">
              <div className="foundpros">
                {productsCount > 0 && (
                  <p>
                    {start}-{end} of over {productsCount} results
                  </p>
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
              {loading && <h4 className="text-danger">Loading...</h4>}

              {products.length < 1 && <NoItemFound />}

              {products &&
                products.map((prod) => (
                  <FlashsaleProductCard
                    key={prod._id}
                    product={prod}
                    contWidth={contwidth}
                    WidthIdea={"Seachpagewidth"}
                  />
                ))}
            </div>
          </div>

          <div className="productreviewbottom searchpagi">
            <div className="previewpagination">
              <Pagination
                current={page}
                total={productsCount}
                pageSize={perPage}
                onChange={(value) => setPage(value)}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Shop;
