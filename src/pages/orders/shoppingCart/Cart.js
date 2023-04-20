
const Cart = ( { cart })  => {
   
 console.log(cart);
    let total = 0;
    for (const product of cart) {
        total = total + product.price;
    }
    return(
        <div className="cart">
      
                 
                <p>total price : ${total}</p>
                <p>total shipping : $</p>
                <p>tax : </p>
                <p> grand total  : </p>
        </div>
    )
}
export default Cart;