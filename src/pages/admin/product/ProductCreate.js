import React, { useState, useEffect } from "react";
import { toast } from "react-hot-toast";
import { useSelector } from "react-redux";
import { createProduct } from "../../../functions/product";
import ProductCreateForm from "../../../components/forms/ProductCreateForm";
import { getCategories } from "../../../functions/category";
import FileUpload from "../../../components/forms/FileUpload";
import { LoadingOutlined } from "@ant-design/icons";
import { getBrands } from "../../../functions/brands";

const initialState = {
  art: "",
  title: "Macbook Pro",
  description: "This is the best Apple product",
  shippingcharges: "0",
  categories: [],
  category: "",
  images: [],
  brands: [],
};

const ProductCreate = () => {
  const [values, setValues] = useState(initialState);
  const [desattributes, setDesattributes] = useState([{}]);
  const [loading, setLoading] = useState(false);

  // redux
  const { user } = useSelector((state) => ({ ...state }));

  useEffect(() => {
    const fetchData = async () => {
      await loadCategories();

      const brandsData = await getBrands();
      setValues((prevValues) => ({
        ...prevValues,
        brands: brandsData.data.map((item) => item.name),
      }));
    };

    fetchData();
  }, []);

  const loadCategories = () =>
    getCategories().then((c) => setValues({ ...values, categories: c.data }));

  const handleSubmit = (e) => {
    e.preventDefault();
    const payload = { ...values, desattributes };
    createProduct(payload, user.token)
      .then((res) => {
        window.alert(`"${res.data.title}" is created`);
        window.location.reload();
      })
      .catch((err) => {
        console.log(err);
        toast.error(err.response.data.error);
      });
  };

  const handleChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
    if (e.target.name === "onSale" && e.target.value === "No")
      setValues({ ...values, onSale: "No", saleTime: "" });
  };

  const handleCatagoryChange = (e) => {
    e.preventDefault();
    setValues({ ...values, category: e.target.value });
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
    <div className="col-md-10">
      {loading ? (
        <LoadingOutlined className="text-danger h1" />
      ) : (
        <h4>Product create</h4>
      )}
      <hr />

      <div className="p-3">
        <FileUpload
          values={values}
          setValues={setValues}
          setLoading={setLoading}
        />
      </div>
      <ProductCreateForm
        handleSubmit={handleSubmit}
        handleChange={handleChange}
        setValues={setValues}
        values={values}
        handleCatagoryChange={handleCatagoryChange}
        addDesAttribute={addDesAttribute}
        desattributes={desattributes}
        setDesattributes={setDesattributes}
        handleDesAttributeChange={handleDesAttributeChange}
      />
    </div>
  );
};

export default ProductCreate;
