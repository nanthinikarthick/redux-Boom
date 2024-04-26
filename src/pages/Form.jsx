import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { useDispatch } from "react-redux";

import { postAction, updateAction } from "../redux/action/action";

import Vector from "../assets/image/Vector.svg";
import Dropdown from "../COMPONENT/dropdwon/Dropdown";
import TextField from "../COMPONENT/textfield/Textfield";

const Country = [
  "Algeria",
  "American Samoa",
  "Angola",
  "Anguilla",
  "Antartica",
  "Antigua and Barbuda",
  "Argentina",
  "Armenia",
  "Aruba",
  "Ashmore and Cartier Island",
  "Australia",
];
const State = [
  "Alabama",
  "Alaska",
  "American Samoa",
  "Arizona",
  "Arkansas",
  "California",
  "Colorado",
  "Connecticut",
  "Delaware",
  "District of Columbia",
  "Federated States of Micronesia",
  "Florida",
];

function Form() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();
  const { user, isUpdate, isView } = location.state || {};

  console.log(user);

  useEffect(() => {
    if (isUpdate || isView) {
      setFormData(user);
    }
  }, [isUpdate, isView, user]);
  const [formData, setFormData] = useState({
    CustomerName: "",
    CustomerEmail: "",
    CustomerContact: "",
    FirstName: "",
    LastName: "",
    AlternateContact: "",
    AddresslineOne: "",
    AddresslineTwo: "",
    Country: "",
    State: "",
    City: "",
    Pincode: "",
    image: " ",
  });

  const handleChange = (e) => {
    console.log("e, fieldName", e.target);
    if (!isView || isUpdate) {
      // Fields are editable if not in view mode or in update mode
      const value = e.target.value || "";
      const updatedFormData = { ...formData, [e.target.name]: value };
      setFormData(updatedFormData);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    //put
    if (isUpdate) {
      dispatch(updateAction(formData))
        .then(() => {
          navigate("/table");
        })
        .catch((error) => {
          console.error("Error is updating data:", error);
        });
    } else {
      dispatch(postAction(formData))
        .then(() => {
          setFormData({
            CustomerName: "",
            CustomerEmail: "",
            CustomerContact: "",
            FirstName: "",
            LastName: "",
            AlternateContact: "",
            AddresslineOne: "",
            AddresslineTwo: "",
            Country: "",
            State: "",
            City: "",
            Pincode: "",
            image: " ",
          });
          navigate("/table");
        })
        .catch((error) => {
          console.error("Error logging in:", error);
        });
    }
  };

  const handleNavigation = (e) => {
    e.preventDefault();
    navigate("/table");
  };
  console.log("formData", formData);
  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className="h-body ">
          <div className="Addcoustomer  ">
            <p>Customer</p>
            <img src={Vector}></img>
            {!isUpdate && !isView && <p>Add customer</p>}
            {isView && <p> overView of {formData.CustomerName}</p>}
            {isUpdate && <p> Edit Customer</p>}
          </div>
          {isView && (
            <>
              <div className="general">
                <h3>General Details</h3>
              </div>
              <div
                className="single-view d-flex bg-light"
                style={{ width: "1322px", gap: "30px" }}
              >
                <img
                  src={formData.image}
                  alt="profile"
                  width={65}
                  height={65}
                />
                <div className="txt-box ">
                  <h3>{formData.CustomerName}</h3>
                  <p>Customer ID: {formData.id}</p>
                </div>
              </div>
            </>
          )}
          <div className="page bg-light mr-3">
            <div className="detail  ">
              <h2>Basic details</h2>
            </div>
            <div className="page-one text-left row">
              <div className="menus col">
                <TextField
                  value={formData.CustomerName}
                  name={"CustomerName"}
                  onChange={handleChange}
                  label={"Customer Name"}
                  disabled={isView}
                />
              </div>
              <div className="col">
                <div className="menus">
                  <TextField
                    value={formData.CustomerEmail}
                    name={"CustomerEmail"}
                    onChange={handleChange}
                    label={"Customer Email"}
                    disabled={isView}
                  />
                </div>
              </div>
              <div className="col">
                <div className="menus">
                  <TextField
                    value={formData.CustomerContact}
                    name={"CustomerContact"}
                    onChange={handleChange}
                    label={"Customer Phone Number"}
                    disabled={isView}
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="page-one bg-light mt-3 ">
            <div className=" ">
              <h2>Address details</h2>
            </div>

            <div class="">
              <div class="row">
                <div className="Addmenus col-4 p-3">
                  <TextField
                    value={formData.FirstName}
                    name={"FirstName"}
                    onChange={handleChange}
                    label={"First Name"}
                    disabled={isView}
                  />
                </div>

                <div className="Addmenus col-4 p-3">
                  <TextField
                    value={formData.LastName}
                    name={"LastName"}
                    onChange={handleChange}
                    label={"Last Name"}
                    disabled={isView}
                  />
                </div>

                <div className="Addmenus col-4 p-3">
                  <TextField
                    value={formData.AlternateContact}
                    name={"AlternateContact"}
                    onChange={handleChange}
                    label={"Alternative Phone Number"}
                    disabled={isView}
                  />
                </div>
              </div>
            </div>

            <div className="">
              <div className="row">
                <div className="Addmenus col-4 p-3">
                  <TextField
                    value={formData.AddresslineOne}
                    name={"AddressLine1"}
                    onChange={handleChange}
                    label={"Address Line  1"}
                    disabled={isView}
                  />
                </div>

                <div className="Addmenus col-4 p-3">
                  <TextField
                    value={formData.AddresslineTwo}
                    name={"AddressLine2"}
                    onChange={handleChange}
                    label={"Address Line 2"}
                    disabled={isView}
                  />
                </div>

                <div className="Select-box col-4 p-2">
                  <Dropdown data={Country} label={"Country"} />
                </div>
              </div>
            </div>

            <div className="">
              <div className="row">
                <div className="select-box col-4 p-2">
                  <Dropdown data={State} label={"State"} />
                  
                </div>

                <div className="Addmenus col-4 p-3">
                  <TextField
                    value={formData.City}
                    name={"City"}
                    onChange={handleChange}
                    label={"City"}
                    disabled={isView}
                  />
                </div>

                <div className="Addmenus col-4 p-3">
                  <TextField
                    value={formData.Pincode}
                    name={"Pincode"}
                    onChange={handleChange}
                    label={"Pincode"}
                    disabled={isView}
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="f-last">
            <div
              className="footer d-flex justify-content-end"
              style={{ gap: 20, padding: 20 }}
            >
              <button className="primary-btn" onClick={handleNavigation}>
                Go Back
              </button>

              {!isView && (
                <button
                  type="submit"
                  onClick={handleSubmit}
                  className="secondary-btn  save-btn"
                >
                  {isUpdate ? "Update" : "Save"}
                </button>
              )}
            </div>
          </div>
        </div>
      </form>
    </>
  );
}

export default Form;
