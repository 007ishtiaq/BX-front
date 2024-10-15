import React, { useEffect } from "react";
import "./shippingForm.css";

export default function ShippingForm(props) {
  const {
    values,
    errors,
    touched,
    handleBlur,
    handleChange,
    selectedGender,
    handleGenderSelect,
    formtype,
  } = props;

  return (
    <div class="shippingsubcont">
      <form className="shippingform">
        <div
          class={`formsubcont formsubcont2 ${
            formtype === "small" && "sideformsubcont"
          }`}
        >
          <div
            className={`singleinput ${formtype === "small" && "sideinputfull"}`}
          >
            <label htmlFor="ProductType">Product Type:</label>
            <select
              name="ProductType"
              id="ProductType"
              value={values.ProductType}
              onBlur={handleBlur}
              onChange={handleChange}
            >
              <option value="" label="Please Select Product" />
              <option value="Sweden" label="Sweden" />
              <option value="Australia" label="Australia" />
              <option value="United-Kingdom" label="United Kingdom" />
              <option value="Denmark" label="Denmark" />
              <option value="Finland" label="Finland" />
            </select>
            {errors.ProductType && touched.ProductType ? (
              <p className="errorstate">{errors.ProductType}</p>
            ) : null}
          </div>

          {/* {JSON.stringify(values.ProductType)} */}
          <div class={`singleinput ${formtype === "small" && "sideinputfull"}`}>
            <label for="Quantity">Required Quantity:</label>
            <input
              id="Quantity"
              type="text"
              placeholder="Required Quantity*"
              name="Quantity"
              value={values.Quantity}
              onChange={handleChange}
              onBlur={handleBlur}
              autoComplete="off"
            />
            {errors.Quantity && touched.Quantity ? (
              <p className="errorstate">{errors.Quantity}</p>
            ) : null}
          </div>

          <div
            className={`singleinput inputsmallwidth ${
              formtype === "small" && "sideinputhalf"
            }`}
          >
            <label htmlFor="Units">Units:</label>
            <select
              name="Units"
              id="Units"
              value={values.Units}
              onBlur={handleBlur}
              onChange={handleChange}
            >
              <option value="" label="Please Select Unit Of Measure" />
              <option value="Inches" label="Inches" />
              <option value="CM" label="CM" />
              <option value="MM" label="MM" />
            </select>
            {errors.Units && touched.Units ? (
              <p className="errorstate">{errors.Units}</p>
            ) : null}
          </div>

          <div
            class={`singleinput inputsmallwidth ${
              formtype === "small" && "sideinputhalf"
            }`}
          >
            <label for="Height">Height:</label>
            <input
              id="Height"
              type="text"
              placeholder="Height*"
              name="Height"
              value={values.Height}
              onChange={handleChange}
              onBlur={handleBlur}
              autoComplete="off"
            />
            {errors.Height && touched.Height ? (
              <p className="errorstate">{errors.Height}</p>
            ) : null}
          </div>
          <div
            class={`singleinput inputsmallwidth ${
              formtype === "small" && "sideinputhalf"
            }`}
          >
            <label for="Width">Width:</label>
            <input
              id="Width"
              type="text"
              placeholder="Width*"
              name="Width"
              value={values.Width}
              onChange={handleChange}
              onBlur={handleBlur}
              autoComplete="off"
            />
            {errors.Width && touched.Width ? (
              <p className="errorstate">{errors.Width}</p>
            ) : null}
          </div>
          <div
            class={`singleinput inputsmallwidth ${
              formtype === "small" && "sideinputhalf"
            }`}
          >
            <label for="Depth">Depth:</label>
            <input
              id="Depth"
              type="text"
              placeholder="Depth*"
              name="Depth"
              value={values.Depth}
              onChange={handleChange}
              onBlur={handleBlur}
              autoComplete="off"
            />
            {errors.Depth && touched.Depth ? (
              <p className="errorstate">{errors.Depth}</p>
            ) : null}
          </div>

          <div
            className={`singleinput ${formtype === "small" && "sideinputfull"}`}
          >
            <label htmlFor="Colors">Print Colors:</label>
            <select
              name="Colors"
              id="Colors"
              value={values.Colors}
              onBlur={handleBlur}
              onChange={handleChange}
            >
              <option value="" label="Please Select Color" />
              <option value="1-color" label="1 Color" />
              <option value="2-color" label="2 Colors" />
              <option value="3-color" label="3 Colors" />
              <option value="4-color" label="4 Colors" />
            </select>
            {errors.Colors && touched.Colors ? (
              <p className="errorstate">{errors.Colors}</p>
            ) : null}
          </div>

          <div
            className={`singleinput ${formtype === "small" && "sideinputfull"}`}
          >
            <label htmlFor="SheetType">Sheet Type:</label>
            <select
              name="SheetType"
              id="SheetType"
              value={values.SheetType}
              onBlur={handleBlur}
              onChange={handleChange}
            >
              <option value="" label="Please Select Type" />
              <option value="cardboard-stock" label="Cardboard Stock" />
              <option value="kraft-stock" label="Kraft Stock" />
              <option value="corrugated-stock" label="Corrugated Stock" />
              <option value="rigid-stock" label="Rigid Stock" />
            </select>
            {errors.SheetType && touched.SheetType ? (
              <p className="errorstate">{errors.SheetType}</p>
            ) : null}
          </div>

          <div
            class={`singleinput inputsmallwidth ${
              formtype === "small" && "sideinputfull"
            }`}
          >
            <label for="Name">Full Name:</label>
            <input
              id="Name"
              type="text"
              placeholder="Full Name*"
              name="Name"
              value={values.Name}
              onChange={handleChange}
              onBlur={handleBlur}
              autoComplete="off"
            />
            {errors.Name && touched.Name ? (
              <p className="errorstate">{errors.Name}</p>
            ) : null}
          </div>

          <div
            class={`singleinput inputsmallwidth ${
              formtype === "small" && "sideinputfull"
            }`}
          >
            <label for="PhoneNum">Phone number:</label>
            <input
              name="PhoneNum"
              id="PhoneNum"
              type="text"
              placeholder="Phone Number*"
              value={values.PhoneNum}
              onBlur={handleBlur}
              onChange={handleChange}
              autoComplete="off"
            />
            {errors.PhoneNum && touched.PhoneNum ? (
              <p class="helperline errorstate">{errors.PhoneNum}</p>
            ) : null}
          </div>
          <div class={`singleinput ${formtype === "small" && "sideinputfull"}`}>
            <label for="Email">Email Address:</label>
            <input
              name="Email"
              id="Email"
              type="text"
              placeholder="Email Address*"
              value={values.Email}
              onBlur={handleBlur}
              onChange={handleChange}
              autoComplete="off"
            />
            {errors.Email && touched.Email ? (
              <p class="helperline errorstate">{errors.Email}</p>
            ) : null}
          </div>

          <div
            class={`singleinput inputfullwidth ${
              formtype === "small" && "sideinputfull"
            }`}
          >
            <label for="Details">Describe Your Packaging Needs:</label>
            <input
              type="text"
              placeholder=""
              name="Details"
              id="Details"
              value={values.Details}
              onBlur={handleBlur}
              onChange={handleChange}
              autoComplete="off"
            ></input>
          </div>
        </div>
      </form>
    </div>
  );
}
