import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../src/App.css";
import { BrowserRouter } from "react-router-dom";
import MainLayout from "./navigate/main";



function App() {

  return (
   
    <BrowserRouter>
    <MainLayout/>
    
    </BrowserRouter>

  );
}

export default App;
