// import { Routes, Route } from "react-router-dom";
// import React from "react";
// import Form from "../pages/Form";
// import Table from "../pages/Table";
// import Login from "../pages/login";
// import SignUp from "../pages/signup";
// import { useState, useEffect } from "react";
// export default function Routing() {

//   return (
    
//     <Routes>
//       <Route path="/table" element={<Table />} />
//       <Route path="/Form" element={<Form />} />
//       <Route path="/" element={<Login />} />
//       <Route path="/signup" element={<SignUp />} />
//     </Routes>
//   );
// }

// import { Routes, Route } from "react-router-dom";
// import React from "react";
// import Form from "../pages/Form";
// import Table from "../pages/Table";
// import Login from "../pages/login";
// import SignUp from "../pages/signup";
// export default function Routing() {
  
//   return (
//     <>
//       {token ? (
//         <Routes>
//           <Route path="/table" element={<Table />} />
//           <Route path="/Form" element={<Form />} />
//         </Routes>
//       ) : (
//         <Routes>
//           <Route path="/" element={<Login />} />
//           <Route path="/signup" element={<SignUp />} />
//         </Routes>
//       )}
//     </>
//   );
// }
// function Timer() {
//   const [count, setCount] = useState(0);

// useEffect(() => {
//   console.log(useEffect,"function");
// <button className="btn" type="button" onClick ={handleFunction}>Register</button>
          
//   setTimeout(() => {
//     setCount((count) => count + 1);
//   }, 1000);
// });



import { Routes, Route, Navigate } from "react-router-dom";
import React from "react";
import { useSelector } from "react-redux";
import Form from "../pages/Form";
import Table from "../pages/Table";
import Login from "../pages/login";
import SignUp from "../pages/signup";
import { selectToken } from "../../src/redux/slice/auth";

export default function Routing() {
  const token = useSelector(selectToken);

  return (
    <Routes>
      {token ? (
        <>
          <Route path="/table" element={<Table />} />
          <Route path="/form" element={<Form />} />
         
        </>
      ) : (
        <>
          <Route path="/" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
        </>
      )}
    </Routes>
  );
}


// import { Routes, Route, Navigate } from "react-router-dom";
// import React from "react";
// import { useSelector } from "react-redux";
// import Form from "../pages/Form";
// import Table from "../pages/Table";
// import Login from "../pages/login";
// import SignUp from "../pages/signup";
// import { selectToken } from "../../src/redux/slice/auth";

// export default function Routing() {
//   const token = useSelector(selectToken);

//   useEffect(() => {
//     if (!token) {
//       window.location.href = "/login"; // Redirect to login page if token is not present
//     }
//   }, [token]);

//   return (
//     <Routes>
//       <Route path="/login" element={<Login />} />
//       <Route path="/signup" element={<SignUp />} />
//       {token ? (
//         <>
//           <Route path="/table" element={<Table />} />
//           <Route path="/form" element={<Form />} />
//           <Route path="/" element={<Navigate to="/table" />} />
//         </>
//       ) : null}
//     </Routes>
//   );
// }



