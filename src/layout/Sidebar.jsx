import React, { useState } from "react";
import Logo from "../assets/image/Logo.svg";
import Cart from "../assets/image/cart.svg";
import Home from "../assets/image/HOME MENU.svg";
import Logout from "../assets/image/logout.svg";
import Offer from "../assets/image/offer.svg";
import Product from "../assets/image/product.svg";
import Profile from "../assets/image/profile.svg";
import Report from "../assets/image/report.svg";
import Review from "../assets/image/review.svg";
import Settings from "../assets/image/settings.svg";
import Support from "../assets/image/support.svg";
import "./Header.scss";


export default function Sidebar() {
  const [activeItem, setActiveItem] = useState(null);
  const handleItemClick = (item) => {
    setActiveItem(item);
  };
  return (
    <div className=" side-menu" >
     <div className="side d-flex flex-column p-3" style={{ gap: 30}}>
      <img
        className={activeItem === "Logo" ? "active" : ""}
        src={Logo}
        alt="logo"
        width={40}
        height={40}
        onClick={() => handleItemClick("Logo")}
      />
      <img
        className={activeItem === "Home" ? "active" : ""}
        src={Home}
        alt="home"
        width={30}
        height={30}
        onClick={() => handleItemClick("Home")}
      />
      <img
        className={activeItem === "Product" ? "active" : ""}
        src={Product}
        alt="product"
        width={30}
        height={30}
        onClick={() => handleItemClick("Product")}
      />
      <img
        className={activeItem === "Cart" ? "active" : ""}
        src={Cart}
        alt="cart"
        width={30}
        height={30}
        onClick={() => handleItemClick("Cart")}
      />
      <img
        className={activeItem === "Offer" ? "active" : ""}
        src={Offer}
        alt="offer"
        width={30}
        height={30}
        onClick={() => handleItemClick("Offer")}
      />
      <img
        className={activeItem === "Profile" ? "active" : ""}
        src={Profile}
        alt="profile"
        width={30}
        height={30}
        onClick={() => handleItemClick("Profile")}
      />
      <img
        className={activeItem === "Home" ? "active" : ""}
        src={Home}
        alt="home"
        width={30}
        height={30}
        onClick={() => handleItemClick("Home")}
      />
      <img
        className={activeItem === "Review" ? "active" : ""}
        src={Review}
        alt="set preferences"
        width={30}
        height={30}
        onClick={() => handleItemClick("Review")}
      />
      <img
        className={activeItem === "Support" ? "active" : ""}
        src={Support}
        alt="Support"
        width={30}
        height={30}
        onClick={() => handleItemClick("Support")}
      />
      <img
        className={activeItem === "Report" ? "active" : ""}
        src={Report}
        alt="report"
        width={30}
        height={30}
        onClick={() => handleItemClick("Report")}
      />
      <img
        className={activeItem === "Settings" ? "active" : ""}
        src={Settings}
        alt="Settings"
        width={30}
        height={30}
        onClick={() => handleItemClick("Settings")}
      />
      <img
        className={activeItem === "Logout" ? "active" : ""}
        src={Logout}
        alt="Logout"
        width={30}
        height={30}
        onClick={() => handleItemClick("Logout")}
      />
    </div>
    </div>
  );
}
