 import './bestseller.css';
 import { FaShoppingCart } from 'react-icons/fa';
 
 const BestSeller = ({bestseller}) => {
    const { name,id,img,stock} = bestseller;

    return (
            <div>
        <div style={{
            height:500,
           

        }} className="card bg-base-100 shadow-2xl p-3 ">
        <figure><img className="photo" style={{height:300
    }}

         src={img} alt="Shoes" /></figure>
        
        <div className="card-body">
          <h2 className="card-title ">{name}</h2>
          <h2>Available : {stock}</h2>
         <div className='flex'>
      <button className="btn btn-outline btn-warning mt-4"><h1 className='mr-4'>Add to Cart</h1>  <FaShoppingCart/> </button> :
      
         </div>
         
        </div>
      </div>
      </div>
      
       
    )
}
export default BestSeller;