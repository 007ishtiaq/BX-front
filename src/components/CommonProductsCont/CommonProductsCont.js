import React, { useState, useEffect } from "react";
import "../ProductCards/ProductCardsAll.css";
import { getProductsByCount, getProductsByPage } from "../../functions/product";
import FlashsaleProductCard from "../ProductCards/FlashsaleProductCard";
import ProductCardSkull from "../Skeletons/ProductCardSkull";
import { toast } from "react-hot-toast";
import { Pagination } from "antd";

export default function CommonProductsCont({ WidthIdea }) {
  const [products, setProducts] = useState([]);
  const [contwidth, setContwidth] = useState(0);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1); // page number
  const [perPage, setPerpage] = useState(24); // per page Size
  const [productsCount, setProductsCount] = useState(0);

  useEffect(() => {
    const proarea = document.querySelector(".productsarea");
    const contwidth = proarea.clientWidth;
    setContwidth(contwidth);

    loadAllProducts();
  }, [page]);

  const loadAllProducts = async () => {
    // getProductsByCount(6)
    //   .then((p) => {
    //     setLoading(false);
    //     setProducts(p.data);
    //   })
    try {
      // setLoading(true);
      const { data } = await getProductsByPage({ page, perPage });
      setProducts(data.products);
      setProductsCount(data.totalProducts);
    } catch (err) {
      console.error(err);
      // toast.error("Failed to load products");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div class="cardcontainer">
      <div class="insidecont">
        <div className="commonhead">
          <p>
            Wholesale printed custom boxes <br /> at
            <span> discounted price.</span>
          </p>
        </div>

        <div class="contentcont">
          <div class="productsarea">
            {loading ? (
              <ProductCardSkull clone={6} contWidth={contwidth} />
            ) : (
              products &&
              products.map((prod) => (
                <FlashsaleProductCard
                  key={prod._id}
                  product={prod}
                  contWidth={contwidth}
                  WidthIdea={WidthIdea}
                />
              ))
            )}
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
    </div>
  );
}
