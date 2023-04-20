import { Link } from "react-router-dom";

const Navbar = () => {
    const menuItems = <>
    <li><Link to='/'>Home</Link></li>
    <li><Link to='/login'>LogIn</Link></li>
    <li><Link to='/men'>Men</Link></li>
    <li><Link to='/women'>Women</Link></li>
    
    <li><Link to='/order'>Orders</Link></li>
    
   
   
   
   </>

    return (
        <div>
   <div className="navbar bg-base-100 flex justify-between">
  <div className="navbar-start">
    <div className="dropdown">
      <label tabIndex={1} className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
       {
        menuItems
       }
      </ul>
    </div>
    <Link className="btn btn-ghost normal-case text-2xl font-bold text-secondary">Shop Heaven</Link>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
     {menuItems}
    </ul>
  </div>
  <div className="navbar-end">
  
  </div>
</div>
<label htmlFor="dashboard-drawer" tabIndex={2} className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>

        </div>
    )
} 
 export default Navbar;