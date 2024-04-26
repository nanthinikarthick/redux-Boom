import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../src/App.css";
import { BrowserRouter } from "react-router-dom";
import MainLayout from "./navigate/main";



function App() {

  return (
    <BrowserRouter>
    <MainLayout/>
      {/* {!isLoggedIn && (
        <Routes>
          
        </Routes>
      )}
      {isLoggedIn && (
        <div className=" content">
          <div className=" " style={{ position: "fixed" }}>
            <Sidebar />
          </div>
          <div className="body-wrapper" style={{ marginLeft: "70px" }}>
            <div className="head-wrapper">
              <Header />
            </div>
            <section style={{ background: "gainsboro" }}>
             
            </section>
          </div>
        </div>
      )} */}
    </BrowserRouter>
  );
}

export default App;
