import BestSeller from "./bestseller";

const BestSellers = () => {
    const sellerData = [
        {
            id :1,
            name : 'WHITE BASIC SWEATSHIRT',
             img: 'https://i.ibb.co/QfFzvn6/Ucaebd504ff2245628ecc12dd3b94a64eo.jpg',
            stock:15
        },
        {
            id :2,
            name : 'PURPLE T-SHIRT',
          
            img:'https://i.ibb.co/4mpBxxS/IMG-0055-aacdad05-1d72-4a19-9874-84caad561d72.webp',
            stock:11
        },
        {
            id :3,
            name : 'CLASIC PANT',
            img:'https://i.ibb.co/x8ycYHh/8cf32f81304208d1614ce1cfe592d0d3-jpg-720x720-jpg.webp',
            stock:22
        },
        {
            id :4,
            name : '',
            img:'https://i.ibb.co/CQSb7BT/western-ladies-tops-1580826822-5285043.jpg',
            stock:9
           
        },
        {
            id :5,
            name : 'FLORAL CASUAL TOP',
            img:'https://i.ibb.co/55KzzzP/1-1.webp'
           
        },
    ]
    return (
        <section>
       <h1 className="text-4xl  text-center">OUR BESTSELLER</h1>
        
        <div className="grid lg:grid-cols-4 md:grid-cols-3 gap-4 mt-8 ">
        {
           sellerData.map( bestseller => <BestSeller
           key={bestseller.id}
           bestseller = {bestseller}
           
           ></BestSeller>)
        }
        </div>
           </section>
    )
}
export default BestSellers;