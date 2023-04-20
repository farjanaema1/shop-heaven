const SingleProduct = (props) => {
    const{name,img,stock,price} = props.product
    return (
        <div>
   <div className="card w-96 bg-base-100 shadow-xl">
  <figure >
    <img src={img} alt="Shoes" className="rounded-xl p-5" />
  </figure>
  <div className="card-body ">
    <h2 className="card-title">{name}</h2>
    <p>price : {price}</p>
    <div className="card-actions">
      <button onClick={() => props.handelAddToCart(props.product)} className="btn btn-outline btn-warning">Add to cart</button>
    </div>
  </div>
</div>
        </div>
    )
}
export default SingleProduct