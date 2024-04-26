import { Routes, Route } from "react-router-dom";
import React from "react";
import Form from "../pages/Form";
import Table from "../pages/Table";
import Login from "../pages/login";
import SignUp from "../pages/signup";
export default function Routing() {

  return (
    
    <Routes>
      <Route path="/table" element={<Table />} />
      <Route path="/Form" element={<Form />} />
      <Route path="/" element={<Login />} />
      <Route path="/signup" element={<SignUp />} />
    </Routes>
  );
}
