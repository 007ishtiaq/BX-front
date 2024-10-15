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
            <label htmlFor="CountryInterestedIn">Product Type:</label>
            <select
              name="CountryInterestedIn"
              id="CountryInterestedIn"
              value={values.CountryInterestedIn}
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
          </div>

          {/* {JSON.stringify(values)} */}
          <div class={`singleinput ${formtype === "small" && "sideinputfull"}`}>
            <label for="full-name">Required Quantity:</label>
            <input
              id="full-name"
              type="text"
              placeholder="Full Name* (required)"
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
            className={`singleinput inputsmallwidth ${
              formtype === "small" && "sideinputhalf"
            }`}
          >
            <label htmlFor="CountryInterestedIn">Units:</label>
            <select
              name="CountryInterestedIn"
              id="CountryInterestedIn"
              value={values.CountryInterestedIn}
              onBlur={handleBlur}
              onChange={handleChange}
            >
              <option value="" label="Please Select Unit Of Measure" />
              <option value="Sweden" label="Sweden" />
              <option value="Australia" label="Australia" />
              <option value="United-Kingdom" label="United Kingdom" />
              <option value="Denmark" label="Denmark" />
              <option value="Finland" label="Finland" />
            </select>
          </div>

          <div
            class={`singleinput inputsmallwidth ${
              formtype === "small" && "sideinputhalf"
            }`}
          >
            <label for="full-name">Height:</label>
            <input
              id="full-name"
              type="text"
              placeholder="Full Name* (required)"
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
              formtype === "small" && "sideinputhalf"
            }`}
          >
            <label for="full-name">Width:</label>
            <input
              id="full-name"
              type="text"
              placeholder="Full Name* (required)"
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
              formtype === "small" && "sideinputhalf"
            }`}
          >
            <label for="full-name">Depth:</label>
            <input
              id="full-name"
              type="text"
              placeholder="Full Name* (required)"
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
            className={`singleinput ${formtype === "small" && "sideinputfull"}`}
          >
            <label htmlFor="CountryInterestedIn">Print Colors:</label>
            <select
              name="CountryInterestedIn"
              id="CountryInterestedIn"
              value={values.CountryInterestedIn}
              onBlur={handleBlur}
              onChange={handleChange}
            >
              <option value="" label="Please Select Color" />
              <option value="Sweden" label="1 Color" />
              <option value="Australia" label="2 Colors" />
              <option value="United-Kingdom" label="3 Colors" />
              <option value="Denmark" label="4 Colors" />
            </select>
          </div>
          <div
            className={`singleinput ${formtype === "small" && "sideinputfull"}`}
          >
            <label htmlFor="CountryInterestedIn">Sheet Type:</label>
            <select
              name="CountryInterestedIn"
              id="CountryInterestedIn"
              value={values.CountryInterestedIn}
              onBlur={handleBlur}
              onChange={handleChange}
            >
              <option value="" label="Please Select Type" />
              <option value="Sweden" label="Cardboard Stock" />
              <option value="Australia" label="Kraft Stock" />
              <option value="United-Kingdom" label="Corrugated Stock" />
              <option value="Denmark" label="Rigid Stock" />
            </select>
          </div>

          <div
            class={`singleinput inputsmallwidth ${
              formtype === "small" && "sideinputfull"
            }`}
          >
            <label for="full-name">Full Name:</label>
            <input
              id="full-name"
              type="text"
              placeholder="Full Name* (required)"
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
              placeholder="Phone Number* (required)"
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
            <label for="Contact">Email Address:</label>
            <input
              name="Email"
              id="Email"
              type="text"
              placeholder="Email Address* (required)"
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
            <label for="AnyQuery">Describe Your Packaging Needs:</label>
            <input
              type="text"
              placeholder=""
              name="AnyQuery"
              id="AnyQuery"
              value={values.AnyQuery}
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
