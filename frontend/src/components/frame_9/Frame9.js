import React from "react";
import { useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import { useEffect, useState } from "react";
import axios from "axios";
import { deliverySchema } from "../../schemas";

const Frame9 = (props) => {
  const initialValues = {
    name: "",
    street: "",
    city: "",
    state: "",
    zip: "",
    country: "",
    mobile: "",
    email: "",
  };

  const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
    useFormik({
      initialValues: initialValues,
      validationSchema: deliverySchema,
      onSubmit: (values) => {
        // console.log(values);

        axios
          .post("https://hair-care.herokuapp.com/address", {
            name:values.name,
            street: values.street,
    city:values.city,
    state: values.state,
    zip: values.zip,
    country: values.country,
    mobile: values.mobile,
    email: values.email,
          })
          .then((res) => console.log(res))
          .catch((error) => console.log(error));
          Navigate("/frame9")
      },


    });
 


  const Navigate = useNavigate();
  const frameNavigate = () => {
    Navigate("/frame7");
  };

  return (
    <div>
     
      <div class="shadow-sm p-3 mb-5 rounded " onClick={frameNavigate}>
        <i class="fa-solid fa-arrow-left-long"> back</i>
        {/* <h4>Back</h4> */}
      </div>
      <div className="row">
        <div className="col-sm-2"></div>
        <div className="col-sm-8">
          <form onSubmit={handleSubmit}>
            <div class="container bg-light text-secondary ">
              <h3 class="text-center "> Delivery Details</h3>
              <div class="contact-form">
                <div class="first p-3 mb-3">
                  <label for="formGroupExampleInput" class="form-label">
                    what is your name?
                  </label>
                  <input
                    type="text"
                    class="form-control frame_9_input bg-light"
                    id="formGroupExampleInput "
                    placeholder="Enter your Name"
                    name="name"
                    value={values.name}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                  {errors.name && touched.name ? (
                    <p className="form-error" style={{ color: "red" }} >
                      {errors.name}
                    </p>
                  ) : null}
                </div>

                {/* <hr> */}
                <div class="row p-3 mb-1">
                  <div class="col-md-6 ">
                    <h6>Delevery Address</h6>
                    <label for="formGroupExampleInput" class="form-label">
                      Street
                    </label>
                    <input
                      class="form-control frame_9_input bg-light "
                      id="formGroupExampleInput "
                      placeholder="Enter Your Street"
                      name="street"
                      type="text"
                      value={values.street}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                    {errors.street && touched.street ? (
                      <p className="form-error" style={{ color: "red" }}>
                        {errors.street}
                      </p>
                    ) : null}
                  </div>
                  <div class="col-md-6 pt-5">
                    <label for="formGroupExampleInput" class="form-label">
                      City/Subrub*
                    </label>
                    <input
                      class="form-control frame_9_input bg-light"
                      id="formGroupExampleInput "
                      name="city"
                      placeholder=""
                      type="text"
                      value={values.city}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                    {errors.city && touched.city ? (
                      <p className="form-error" style={{ color: "red" }}>
                        {errors.city}
                      </p>
                    ) : null}
                  </div>

                  <div class="col-md-6">
                    <label for="formGroupExampleInput" class="form-label">
                      State
                    </label>
                    <input
                     class="form-control frame_9_input bg-light "
                     id="formGroupExampleInput "
                      type="text"
                      name="state"
                      placeholder="Enter Your State name"
                      value={values.state}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                    {errors.state && touched.state ? (
                      <p className="form-error" style={{ color: "red" }}>
                        {errors.state}
                      </p>
                    ) : null}
                  </div>
                  <div class="col-md-6">
                    <label for="formGroupExampleInput" class="form-label">
                      Zip/post code
                    </label>
                    <input
                      class="form-control frame_9_input bg-light"
                      id="formGroupExampleInput "
                      type="text"
                      value={values.zip}
                      placeholder="Enter Your Zip Code"
                      name="zip"
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                    {errors.zip && touched.zip ? (
                      <p className="form-error" style={{ color: "red" }}>
                        {errors.zip}
                      </p>
                    ) : null}
                  </div>
                </div>
                <div class="p-3">
                  <p>Country</p>
                  <input
                   class="form-control frame_9_input bg-light "
                   id="formGroupExampleInput "
                    type="text"
                    name="country"
                    placeholder="Enter Your Country Name "
                    value={values.country}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                  {errors.country && touched.country ? (
                    <p className="form-error" style={{ color: "red" }}>
                      {errors.country}
                    </p>
                  ) : null}

                  <hr />
                  <label for="formGroupExampleInput" class="form-label">
                    Delevery Contact Phone Number
                  </label>
                  <input
                    class="form-control frame_9_input bg-light"
                    id="formGroupExampleInput "
                    placeholder="Enter your Phone Number"
                    type="text"
                    name="mobile"
                    value={values.mobile}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                  {errors.mobile && touched.mobile ? (
                    <p className="form-error" style={{ color: "red" }}>
                      {errors.mobile}
                    </p>
                  ) : null}
                  <hr />

                  <label for="formGroupExampleInput" class="form-label">
                    Delivery Contact Email Address*
                  </label>
                  <input
                    class="form-control frame_9_input bg-light"
                    id="formGroupExampleInput "
                    placeholder="Enter your Email Address"
                    type="email"
                    name="email"
                    value={values.email}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                  {errors.email && touched.email ? (
                    <p className="form-error" style={{ color: "red" }}>
                      {errors.email}
                    </p>
                  ) : null}

                  <div id="but" className="d-grid gap-2">
                    {/* <input type="submit" class="bg-info text-white butsend" value="Submit@123"/> */}
                    <button class="btn btn-success" type="submit" id="delivery_submit_btn">
                      Submit
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </form>
        </div>
        <div className="col-sm-2"></div>
      </div>
    </div>
  );
};

export default Frame9;





