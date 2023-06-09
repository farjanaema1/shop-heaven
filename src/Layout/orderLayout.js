import { Link, Outlet } from "react-router-dom";
import Navbar from "../pages/Shared/navbar/navbar";

const OrderLayout = () => {
    return (
        <div>
       <Navbar></Navbar>
      
       <div className="drawer drawer-mobile">
  <input id="dashboard-drawer" type="checkbox" className="drawer-toggle" />
  <div className="drawer-content ">
 <Outlet></Outlet>
    {/* <label htmlFor="dashboard-drawer" className="btn btn-primary drawer-button lg:hidden">Open drawer</label> */}
  
  </div> 
  <div className="drawer-side">
    <label htmlFor="dashboard-drawer" className="drawer-overlay"></label> 
    <ul className="menu p-4 w-80 bg-base-100 text-base-content">
     
      <li><Link to='/order'>ShoppingCart</Link></li>
      <li><Link to='/order/allOrder'>All order</Link></li>
    </ul>
  
  </div>
</div>
        </div>


    )
}
export default OrderLayout;