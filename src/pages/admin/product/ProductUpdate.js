import React, { useState, useEffect } from "react";
import AdminNav from "../../../components/nav/AdminNav";
import { toast } from "react-hot-toast";
import { useSelector } from "react-redux";
import { getProductAdmin, updateProduct } from "../../../functions/product";
import { getCategories, getCategorySubs } from "../../../functions/category";
import { getSubsSub2 } from "../../../functions/sub";
import FileUpload from "../../../components/forms/FileUpload";
import { LoadingOutlined } from "@ant-design/icons";
import ProductUpdateForm from "../../../components/forms/ProductUpdateForm";
import AdminsideNavcopy from "../../../components/nav/AdminsideNavcopy";
import { getBrands } from "../../../functions/brands";
import { getColors } from "../../../functions/color";

const initialState = {
  art: "",
  title: "",
  description: "",
  shippingcharges: "0",
  category: "",
  images: [],
  brand: "",
};

const ProductUpdate = ({ match, history }) => {
  // state
  const [values, setValues] = useState(initialState);
  const [desattributes, setDesattributes] = useState([]);
  const [loading, setLoading] = useState(false);
  const [categories, setCategories] = useState([]);
  const [brands, setBrands] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("");

  const { user } = useSelector((state) => ({ ...state }));
  const { slug } = match.params;

  useEffect(() => {
    loadProduct();
    getBrands().then((b) => {
      setBrands(b.data.map((item) => item.name));
    });
    loadCategories();
  }, []);

  const loadProduct = () => {
    getProductAdmin(slug, user.token).then((p) => {
      setValues({ ...values, ...p.data });
      setDesattributes(p.data.desattributes);
    });
  };

  const loadCategories = () =>
    getCategories().then((c) => {
      setCategories(c.data);
    });

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    values.category = selectedCategory ? selectedCategory : values.category;

    const payload = { ...values, desattributes };
    updateProduct(slug, payload, user.token)
      .then((res) => {
        setLoading(false);
        toast.success(`"${res.data.title}" is updated`);
        history.push("/AdminPanel?page=AllProducts");
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
        toast.error(err.response.data.error);
      });
  };

  const handleChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const handleCategoryChange = (e) => {
    e.preventDefault();
    setSelectedCategory(e.target.value);
  };

  const addDesAttribute = () => {
    setDesattributes([...desattributes, {}]);
  };

  const handleDesAttributeChange = (index, key, value) => {
    const updatedDesattributes = [...desattributes];
    updatedDesattributes[index] = { [key]: value };
    setDesattributes(updatedDesattributes);
  };

  return (
    <div class="manageacmaincont">
      <div class="manageaccont">
        <AdminsideNavcopy currentActive="AllProducts" />
        <div class="navrightside">
          <div className="col-md-10">
            {loading ? (
              <LoadingOutlined className="text-danger h1" />
            ) : (
              <h4>Product update</h4>
            )}

            {/* {JSON.stringify(values)} */}

            <div className="p-3">
              <FileUpload
                values={values}
                setValues={setValues}
                setLoading={setLoading}
              />
            </div>
            <ProductUpdateForm
              handleSubmit={handleSubmit}
              handleChange={handleChange}
              setValues={setValues}
              values={values}
              brands={brands}
              handleCategoryChange={handleCategoryChange}
              addDesAttribute={addDesAttribute}
              categories={categories}
              desattributes={desattributes}
              selectedCategory={selectedCategory}
              handleDesAttributeChange={handleDesAttributeChange}
            />
            <hr />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductUpdate;
