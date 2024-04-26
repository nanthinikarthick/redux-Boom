import BackgroundImage from "../assets/image/Background.svg";
import BoomImage from "../assets/image/boom.svg";
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { postAction } from "../redux/action/login";
import "./style.scss";

export default function Login() {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [formData, setFormData] = useState({
    login: "",
    password: "",
  });

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleFunction = () => {
      dispatch(postAction(formData))
      .then((res) => {
        if(res.payload && res.payload.token)
        {
          console.log("User login successfully");
        
          localStorage.setItem('user', res.payload.token);
          navigate('/table');
        }
        else 
        {
          console.error("Error")
          console.log('Invalid Username Or Password')
        }
      })
      .catch((err) => {
        console.error(err);
        // Handle error state
      });
  };
  const handleNavigation = () => {
    navigate("/signup");
  };


  return (
    <div className="login-image" style={{ backgroundImage: `url(${BackgroundImage})` }}>
      <div className='login'>
        <img src={BoomImage} alt="Boom" />
        <div className='Merchant-Login'>
          <h4>Merchant Login</h4>
          <p>Enter your account details</p>
          <form>
            <div className="form-page">
              <label>Username</label>
              <input
                type="text"
                name="login"
                value={formData.login}
                onChange={handleChange}
                placeholder="Enter Username"
              />
            </div>
            <div className="page-two">
              <label>Password</label>
              <input
                type={passwordVisible ? "text" : "password"}
                name="password"
                value={formData.password}
                onChange={handleChange}
                placeholder="Enter Password"
              />
              {passwordVisible ? (
                <FaEyeSlash
                  style={{ position: 'absolute', color: 'black', right: '10px', top: '50%', cursor: 'pointer' }}
                  onClick={togglePasswordVisibility}
                />
              ) : (
                <FaEye
                  style={{ position: 'absolute', color: 'black', right: '10px', top: '50%', cursor: 'pointer' }}
                  onClick={togglePasswordVisibility}
                />
              )}
              <div style={{ marginLeft: '10px' }}>
                <p>Forget password?</p>
              </div>
            </div>
            <button className="btn" onClick={handleFunction} type="button">Login</button>
            <p>Not a Merchant yet? <a href="#" onClick={handleNavigation}>Sign up Now</a> </p>

          </form>
        </div>
      </div>
    </div>
  );
}
