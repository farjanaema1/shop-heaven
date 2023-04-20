
import './banner.css';

const Banner = () => {
    return (
     <div className='mt-8'>
        <div className="carousel w-4/5 h-3/4 mx-auto">
  <div id="slide1" className="carousel-item relative w-full " >
 
  <img src="https://i.ibb.co/pPnhbdH/photo-1483985988355-763728e1935b.jpg" className="w-full h-3/4" />
 
    <div className="absolute flex justify-between transform -translate-y-1/2   right-5 top-1/2">
      <a href="#slide4" className="btn btn-circle mr-5">❮</a> 
      <a href="#slide2" className="btn btn-circle">❯</a>
    
    </div>
    <div className="absolute flex justify-end mr-5 transform -translate-y-1/2 left-24  top-1/4">
           <h1 className='text-white text-4xl font-bold'>Enjoy<br />
           Up to 75% Off <br />
           
           </h1>
           <br />
          
  </div>
  <div className="absolute flex justify-start mr-5 transform -translate-y-1/2 left-24  top-2/3 w-2/5">
          <button className="btn  mr-5 btn-warning text-white mt-5">See More</button>
      
          </div>
  </div> 
  <div id="slide2" className="carousel-item relative w-full">

    <img src="https://i.ibb.co/fd3Dc0f/istockphoto-955641488-612x612.jpg" className="w-full h-3/4" />
    
    <div className="absolute flex justify-between transform -translate-y-1/2  right-5 top-1/2">
      <a href="#slide1" className="btn btn-circle mr-5">❮</a> 
      <a href="#slide3" className="btn btn-circle">❯</a>
    </div>
    <div className="absolute flex justify-end mr-5 transform -translate-y-1/2 left-20  top-1/2 mb-10 ">
           <h1 className='text-2xl font-bold text-white'>Your everyday <br /> style and comfort <br />
           <br />
         <h1 className='text-white text-3xl'>  Streetwear Collection</h1>
           </h1>
          </div>
          <div className="absolute flex justify-start mr-5 transform -translate-y-1/2 left-20  top-2/3 ">
          <button className="btn  text-white mr-5 btn-warning mt-5">Shop Now</button>
      
          </div>
  {/* <div className="absolute flex justify-start mr-5 transform -translate-y-1/2 left-24  top-1/2 ">
          <button className="btn  mr-5 btn-warning mt-5">Shop Now</button>
      
          </div> */}
  </div> 
  <div id="slide3" className="carousel-item relative w-full">
    <img src="https://i.ibb.co/kqJs6pz/istockphoto-1299704846-612x612.jpg" className="w-full h-3/4" />
    <div className="absolute flex justify-between transform -translate-y-1/2 right-5 top-1/2">
      <a href="#slide2" className="btn btn-circle mr-5">❮</a> 
      <a href="#slide4" className="btn btn-circle">❯</a>
    </div>
    <div className="absolute flex justify-end mr-5 transform -translate-y-1/2 left-20  top-1/2 mb-10 ">
           <h1 className='text-2xl font-bold text-white'>Spring/Summer  2023<br /> comfortable <br />
           <br />
          <h1 className='text-white text-4xl'> Women Collection</h1>
           </h1>
          </div>
          <div className="absolute flex justify-start mr-5 transform -translate-y-1/2 left-20  top-2/3 ">
          <button className=" btn  btn-warning text-white mt-5">Shop Now</button>
      
          </div>
  </div> 
  <div id="slide4" className="carousel-item relative w-full">
    <img src="https://i.ibb.co/qgFD3Q2/360-F-275774887-Xrtg9-Hn8-Cmq-A0lvorwar-BBPF80ql-Pd-Un.jpg" className="w-full h-3/4" />
    <div className="absolute flex justify-between transform -translate-y-1/2  right-5 top-1/2">
      <a href="#slide3" className="btn btn-circle  mr-5">❮</a> 
      <a href="#slide1" className="btn btn-circle">❯</a>
    </div>
    <div className="absolute flex justify-end mr-5 transform -translate-y-1/2 left-20  top-1/2 mb-10 ">
           <h1 className='text-2xl font-bold text-white'>Buy your favourite <br /> accessories <br />
           <br />
          <h1 className='text-white text-4xl'> with flat 25% discount</h1>
           </h1>
          </div>
          <div className="absolute flex justify-start mr-5 transform -translate-y-1/2 left-20  top-2/3 ">
          <button className="btn  text-white mr-5 btn-warning ">Shop Now </button>
      
          </div>
  </div>
</div>
     </div>
    )
}
export default Banner;
