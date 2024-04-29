
import React, { useState } from 'react';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import 'react-phone-number-input/style.css';
import BoomImage from "../assets/image/boom.svg";
import BackgroundImage from "../assets/image/Background.svg";
import "./signup.scss";
import { useNavigate } from 'react-router-dom'; 
import { useDispatch } from "react-redux";
import PhoneNumberList from "../COMPONENT/countryflag/index";
import { userLogin } from '../redux/action/login';


export default function Signup({ onLogin }) {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [formData, setFormData] = useState({
    business_legal_name:"",
    username: "",
    password: "",
    email:"",

    phone_number: {
      country_code: "",
      number: ""
    },
    
  });

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [errors, setErrors] = useState({});
  
  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData ({
      ...formData,
      [name]: value,
    });
  };

  const handlePhoneNumberChange = (value) => {
    const { country_code, number } = value;
    setFormData ({
      ...formData,
      phone_number: {
        country_code: country_code,
        number: number.replace(/\s/g, ""),
      },
    });
  };
  const validateEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      dispatch(addUser(formData))
        .then(() => {
          console.log("Customer added successfully");
        })
        .catch((error) => {
          console.error("Error adding customer:", error);
        });
       navigate("/");
    }
  };

  const handleFunction = () => {
    dispatch(userLogin(formData))
      .then((res) => {
        console.log("User registered successfully");
        localStorage.setItem('user', res.payload.token);
        navigate('/');
      })
      .catch((err) => {
        console.error(err);
      });
  };
  const validateForm = () => {
    let valid = true;
    let newErrors = {};

    if (!formData.business_legal_name?.trim()) {
      newErrors.business_legal_name = "Legal name is required";
      valid = false;
    }

    if (!formData.username?.trim()) {
      newErrors.username = "User handle is required";
      valid = false;
    }

    if (!formData.email?.trim() || !validateEmail(formData.email)) {
      newErrors.email = "Valid email is required";
      valid = false;
    }

    if (
      !formData.phone_number?.number.trim() ||
      formData.phone_number.number.includes(" ")
    ) {
      newErrors.phone_number = "Phone number required with correct format";
      valid = false;
    }

    if (!formData.password?.trim()) {
      newErrors.password = "Password is required";
      valid = false;
    } else if (formData.password.trim().length < 8) {
      newErrors.password = "Password should be at least 8 characters long";
      valid = false;
    }

    setErrors(newErrors);
    return valid;
  };
  const handleNavigation = () =>
  {
    navigate('/')
  }
  return (
    <>
      <div className="main" style={{ backgroundImage: `url(${BackgroundImage})` }}>
        <div className='boom'>
          <div className='logo'>
            <img src={BoomImage} alt="Boom" />
          </div>
          <div className='Merchant-Registration ' style={{width:'900px'}}>
          
            <h2>Merchant Registration</h2>
            <span>Enter your account details</span>
            <form
          
            onSubmit={handleSubmit}
          >
              <div className="form-page">
                <label>Business Legal Name</label>
                <input type="text" name="business_legal_name" value={formData.business_legal_name} onChange={handleChange} placeholder="Enter" />
                {errors.business_legal_name && (
                <p style={{ color: "red", fontSize: "12px", marginTop: "5px" }}>
                  {errors.business_legal_name}
                </p>
              )}
              </div>
              <div className="form-page">
                <label>Username</label>
                <input type="text" name="username" value={formData.username} onChange={handleChange} placeholder="Enter" />  {errors.username && (
                <p style={{ color: "red", fontSize: "12px", marginTop: "5px" }}>
                  {errors.username}
                </p>
              )}
              </div>
              <div className="form-page" >
                
             
               <label htmlFor="phone_number" className="form-label">
                Phone Number
              </label>
              <div className=" ">
                <PhoneNumberList
                  onPhoneNumberChange={handlePhoneNumberChange}
                />
                {errors.phone_number && (
                  <div className="text-danger">{errors.phone_number}</div>
                )}
             
              
            </div>
              </div>
              <div className="form-page">
                <label>Email Address</label>
                <input type="text" name="email" value={formData.email} onChange={handleChange} placeholder="Enter" /> {errors.email && (
                    <p style={{ color: "red", fontSize: "12px", marginTop: "5px" }}>
                      {errors.email}
                    </p>
                  )}
              </div>

              <div className="page-two">
                <label>Password</label>
                <input type={passwordVisible ? "text" : "password"} name="password" value={formData.password} onChange={handleChange} placeholder="Enter" />
                {passwordVisible ? (
                  <FaEyeSlash style={{ position: 'absolute', color: 'black', right: '10px', top: '70%', cursor: 'pointer' }} onClick={togglePasswordVisibility} />
                ) : (
                  <FaEye style={{ position: 'absolute', color: 'black', right: '10px', top: '70%', cursor: 'pointer' }} onClick={togglePasswordVisibility} />
                 
                )}
                {errors.password && (
                <p
                  style={{ color: "red", fontSize: "12px", marginTop: "-20px" }}
                >
                  {errors.password}
                </p>
              )}
              </div>
              <button className="btn" type="button" onClick ={handleFunction}>Register</button>
          
            <div className="sign-up">
              <p>Already have an account? <span  onClick={handleNavigation} style={{ color: '#FE7720' }}
                >Login Now</span>
              </p>
              </div>
            </form>
            <p style={{ fontSize: "13px", textAlign: "center" }}>
            By creating an account, you agree the{" "}
            <span  style={{ color: "#FE7720", cursor: "pointer" }}>
              Terms and conditions
            </span>
          </p>
          </div>
          
        </div>
      </div>
    </>
  );
}



