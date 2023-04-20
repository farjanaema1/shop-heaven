import { Link } from 'react-router-dom';
import './discount.css'

const Discount = () => { 
    return (
<section className="mt-16">
    <h1 className='text-5xl text-center mt-16 mb-16'>DISCOUNT GOING ON</h1>
<div className="hero ">
  <div className="hero-content flex-col lg:flex-row">
    <div className="text-add">
        
       
       <Link to='/login'>
       <img src="https://i.ibb.co/Cvdsk14/1.webp" className="rounded-lg shadow-2xl mr-8 photo">
        
        </img>
        </Link>
       

        <div className="text-block">
        <h4 className='text-3xl font-bold'>Enjoy</h4>
    <p className='text-3xl font-bold'>Flat 25% off</p>
    {/* <Link to='/login' className="btn btn-circle">❯</Link> */}
        </div>
        
    </div>
    
    <div className="w-1/2">
     <div  className="text-add">
     <img className="rounded-lg shadow-2xl ml-16 photo" src="https://i.ibb.co/R9tLsC5/istockphoto-1162621510-612x612.jpg" alt="" />
     <div className="text-block">
        <h4 className='text-3xl font-bold'>Enjoy</h4>
    <p className='text-3xl font-bold'>Flat 75% off</p>
        </div>
     </div>
     
    </div>
  </div>
</div>
   
</section>
    )
}
export default Discount;

//<img src="https://i.ibb.co/h1f8Th6/27631ac4f6120173c0cfa3227a690ce8.jpg" alt="" />