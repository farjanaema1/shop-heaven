import { Outlet } from "react-router-dom";
import Navbar from "../pages/Shared/navbar/navbar";
import Footer from "../pages/Shared/Footer/footer";

const Main = () => {
    return (
        <div>
   <Navbar></Navbar>
   <Outlet></Outlet>
   <Footer></Footer>
        </div>
    )
} 
 export default Main;