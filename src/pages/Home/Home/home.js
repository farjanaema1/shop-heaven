import Discount from "../discount/discounts";
import Banner from "./banner/banner";
import BestSellers from "./bestSeller/bestsellers";


const Home = () => {
    return (
        <div>
   <Banner></Banner>
   <div className="divider"></div> 
 <BestSellers></BestSellers>
 <Discount></Discount>
        </div>
    )
} 
 export default Home;