import { useEffect, useState } from "react";
import SingleProduct from "../Shared/singleProduct/singleProduct";
import Cart from "../orders/shoppingCart/Cart";

const Women = () => {
    const[products,setProducts] = useState([]);
    const[cart,setCart] = useState([]);
    useEffect( () => {
        fetch('./womenCollection.json')
        .then(res => res.json())
        .then( data => setProducts(data))
    },[]);
    const handelAddToCart = (product) => {
       console.log(product.name);
       
       const newCart = [...cart,product];
       setCart(newCart);
    }
    return (
        <section>
            <div>
            <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-4 w-4/5 mx-auto">
           {/* <h2>products : {products.length}</h2> */}
           {
            products.map( product => <SingleProduct
            key={product.id}
            product={product}
            handelAddToCart = {handelAddToCart}
          
            
            >

            </SingleProduct>)

           }
        </div>
        <div>
            {/* <h2>{cart.length}</h2> */}
            <Cart cart={cart}>

            </Cart>
        </div>
            </div>
        </section>
    )
}
export default Women;