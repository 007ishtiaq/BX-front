import React, { useEffect } from "react";
import "./shippingForm.css";

export default function ShippingForm(props) {
  const { values, errors, touched, handleBlur, handleChange } = props;

  return (
    <div class="shippingsubcont">
      <form className="form shippingform">
        <div class="formsubcont formsubcont2">
          {/* {JSON.stringify(values)} */}
          <div class="singleinput">
            <label for="full-name">Full Name:</label>
            <input
              id="full-name"
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

          <div class="singleinput">
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
          <div class="singleinput">
            <label for="Contact">Email Address:</label>
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
          <div className="singleinput">
            <label>Gender:</label>
            <div role="group" aria-labelledby="gender-group">
              <label>
                <input
                  type="radio"
                  name="Gender"
                  value="male"
                  checked={values.Gender === "male"}
                  onChange={handleChange}
                />
                Male
              </label>
              <label>
                <input
                  type="radio"
                  name="Gender"
                  value="female"
                  checked={values.Gender === "female"}
                  onChange={handleChange}
                />
                Female
              </label>
            </div>
            {errors.Gender && touched.Gender ? (
              <p className="helperline errorstate">{errors.Gender}</p>
            ) : null}
          </div>

          <div class="singleinput inputfullwidth">
            <label for="Address">Home Address:</label>
            <input
              name="Address"
              id="Address"
              type="text"
              placeholder="Complete Address*"
              value={values.Address}
              onBlur={handleBlur}
              onChange={handleChange}
              autoComplete="off"
            />
            {errors.Address && touched.Address ? (
              <p class="helperline errorstate">{errors.Address}</p>
            ) : null}
          </div>

          <div class="singleinput">
            <label for="Qualification">Qualification:</label>
            <input
              name="Qualification"
              id="Qualification"
              type="text"
              placeholder="Qualification*"
              value={values.Qualification}
              onBlur={handleBlur}
              onChange={handleChange}
              autoComplete="off"
            />
            {/* {errors.Qualification && touched.Qualification ? (
              <p class="helperline errorstate">{errors.Qualification}</p>
            ) : null} */}
          </div>
          <div class="singleinput">
            <label for="Institution">Institution:</label>
            <input
              name="Institution"
              id="Institution"
              type="text"
              placeholder="Institution*"
              value={values.Institution}
              onBlur={handleBlur}
              onChange={handleChange}
              autoComplete="off"
            />
            {/* {errors.Institution && touched.Institution ? (
              <p class="helperline errorstate">{errors.Institution}</p>
            ) : null} */}
          </div>
          <div class="singleinput">
            <label for="City">CGPA:</label>
            <input
              name="CGPA"
              id="CGPA"
              type="text"
              placeholder="CGPA*"
              value={values.CGPA}
              onBlur={handleBlur}
              onChange={handleChange}
              autoComplete="off"
            />
            {/* {errors.CGPA && touched.CGPA ? (
              <p class="helperline errorstate">{errors.CGPA}</p>
            ) : null} */}
          </div>

          <div class="singleinput">
            <label for="PassingYear">Last Degree passing Year:</label>
            <input
              name="PassingYear"
              id="PassingYear"
              type="text"
              placeholder="Passing Year*"
              value={values.PassingYear}
              onBlur={handleBlur}
              onChange={handleChange}
              autoComplete="off"
            />
            {/* {errors.PassingYear && touched.PassingYear ? (
              <p class="helperline errorstate">{errors.PassingYear}</p>
            ) : null} */}
          </div>

          <div className="singleinput">
            <label htmlFor="CountryInterestedIn">Country Interested in:</label>
            <select
              name="CountryInterestedIn"
              id="CountryInterestedIn"
              value={values.CountryInterestedIn}
              onBlur={handleBlur}
              onChange={handleChange}
            >
              <option value="" label="Select country" />
              <option value="Sweden" label="Sweden" />
              <option value="Australia" label="Australia" />
              <option value="United-Kingdom" label="United Kingdom" />
              <option value="Denmark" label="Denmark" />
              <option value="Finland" label="Finland" />
              <option value="Ireland" label="Ireland" />
              <option value="France" label="France" />
              <option value="Belgium" label="Belgium" />
              <option value="Cyprus" label="Cyprus" />
            </select>
          </div>

          <div className="singleinput">
            <label htmlFor="ApplyingForVisaType">Applying For:</label>
            <select
              name="ApplyingForVisaType"
              id="ApplyingForVisaType"
              value={values.ApplyingForVisaType}
              onBlur={handleBlur}
              onChange={handleChange}
            >
              <option value="" label="Select visa type" />
              <option value="Study-Visa" label="Study Visa" />
              <option value="Work-Permit" label="Work Permit" />
              <option value="Spousal-Visa" label="Spousal Visa" />
            </select>
          </div>

          <div className="singleinput">
            <label> Have you ever taken any English Language Test?</label>
            <div role="group" aria-labelledby="gender-group">
              <label>
                <input
                  type="radio"
                  name="EnglishLanguageTest"
                  value="Yes"
                  checked={values.EnglishLanguageTest === "Yes"}
                  onChange={handleChange}
                />
                Yes
              </label>
              <label>
                <input
                  type="radio"
                  name="EnglishLanguageTest"
                  value="No"
                  checked={values.EnglishLanguageTest === "No"}
                  onChange={handleChange}
                />
                No
              </label>
            </div>
            {/* {errors.EnglishLanguageTest && touched.EnglishLanguageTest ? (
              <p className="helperline errorstate">{errors.EnglishLanguageTest}</p>
            ) : null} */}
          </div>

          <div className="singleinput">
            <label htmlFor="TestName">Which Test?</label>
            <select
              name="TestName"
              id="TestName"
              value={values.TestName}
              onBlur={handleBlur}
              onChange={handleChange}
            >
              <option value="" label="Select a test" />
              <option value="IELTS" label="IELTS" />
              <option value="TOEFL" label="TOEFL" />
              <option value="PTE" label="PTE" />
              <option value="ESOL" label="ESOL" />
              <option value="UKVI" label="UKVI" />
            </select>
          </div>

          <div class="singleinput">
            <label for="TestMarks">Overall Marks:</label>
            <input
              type="text"
              placeholder="Obtained Marks (optional)"
              name="TestMarks"
              id="TestMarks"
              value={values.TestMarks}
              onBlur={handleBlur}
              onChange={handleChange}
              autoComplete="off"
            />
          </div>

          <div className="singleinput">
            <label> Estimated Budget:</label>
            <div role="group" aria-labelledby="gender-group">
              <label>
                <input
                  type="radio"
                  name="EstimatedBudget"
                  value="1M"
                  checked={values.EstimatedBudget === "1M"}
                  onChange={handleChange}
                />
                Under 1 Million
              </label>
              <label>
                <input
                  type="radio"
                  name="EstimatedBudget"
                  value="2M"
                  checked={values.EstimatedBudget === "2M"}
                  onChange={handleChange}
                />
                2 to 3 Million
              </label>
              <label>
                <input
                  type="radio"
                  name="EstimatedBudget"
                  value="3M"
                  checked={values.EstimatedBudget === "3M"}
                  onChange={handleChange}
                />
                More then 3 Million
              </label>
            </div>
          </div>

          <div class="singleinput inputfullwidth">
            <label for="AnyQuery">Any Query:</label>
            <input
              type="text"
              placeholder="Drop here (optional)"
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
