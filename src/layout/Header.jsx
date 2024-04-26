import React from 'react'
import Notification from "../assets/image/notifications.svg";
import Profilepic from "../assets/image/Avatar.svg";
import "./Header.scss";

 function Header() {
  return (
   
    <>
    <div className="h-top ">
        <div className="header-one d-flex justify-content-between  ">
          <h2 style={{padding:20  }}>Customers</h2>
          <div className=" d-flex justify-content-end" style={{ gap: 20,  marginRight:'30px', marginTop:'15px'}}>
            <img src={Notification} alt="Logo" width={40} height={40}  />
            <img src={Profilepic} alt="Logo"width={40} height={40} />
          </div>
        </div>
        </div>
    </>
 
  )
}

export default Header;