import { useLocation } from "react-router-dom";
import Routing from '../navigate/routing';
import Header from "../layout/Header"
import Sidebar from "../layout/Sidebar";
import '../layout/Header.scss';

 
function MainLayout() {
    const location = useLocation();
 
    const isLoginPage = location.pathname === "/";
 
    const isSignupPage = location.pathname === "/signup";
 
    const shouldDisableHeaderSidebar = isLoginPage || isSignupPage;
 
    const sideBarStyle = {
        display: shouldDisableHeaderSidebar ? 'none' : 'block'
    };
 
    const bodyWrapperStyle = {
        width: isLoginPage|| isSignupPage ? '100%' : '95%',
    
        marginLeft: shouldDisableHeaderSidebar ? '0' : '71px'
    };
 
    return (
        <>
            <div className="side" style={sideBarStyle}>
               <Sidebar/>
            </div>
            <div className="body-wrapper" style={bodyWrapperStyle}>
                <div className="header-one" style={sideBarStyle}>
                    <Header />
                </div>
                <section>
                    <Routing />
                </section>
            </div>
        </>
    );
}
export default MainLayout;
 