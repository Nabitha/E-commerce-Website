import chair from "../../Assets/images/chair.svg"
import soba from "../../Assets/images/soba.svg"
import watch from "../../Assets/images/watch.svg"
import whitechair from "../../Assets/images/whiteChair.svg"
import bag from "../../Assets/images/bag.svg"
import bluecart from "../../Assets/images/blue_cart.svg"
import bluedelete from "../../Assets/images/delete-button.svg"
import bluepluse from "../../Assets/images/blue-pluse.svg"
import Product from "../../Components/Product"
import { useState } from "react"
import Hoveritem from "../../Components/Hoverimg"
const Wishlist = () =>{
const [productitem,setProductItem]=useState([
            {
                image: chair,
                name:"Vel elit euismod",
                color:"ColorBrown",
                price:"26.00",
                oldprice:"42.00"
    
            },            {
                image: soba,
                name:"Ultricies condimentum imperdiet",
                color:"ColorBrown",
                price:"26.00",
                oldprice:"42.00"
    
            },            {
                image: whitechair,
                name:"Vitae suspendisse sed",
                color:"ColorBrown",
                price:"26.00",
                oldprice:"42.00"
    
            },            {
                image: bag,
                name:"Sed at fermentum",
                color:"ColorBrown",
                price:"26.00",
                oldprice:"42.00"
    
            },            {
                image: watch,
                name:"Fusce pellentesque at",
                color:"ColorBrown",
                price:"26.00",
                oldprice:"42.00"
            }
        ])
    return(<>
<div>
    <div className="grid grid-cols-4 gap-2 space-y-5 place-items-center">
        {productitem.map((setProduct,index)=>(
      <Product image={setProduct.image} names={setProduct.name} price={setProduct.price} first={bluecart}
      second={bluedelete} third={bluepluse}/>  
      ))}     
    </div>
</div>
</>)}
export default Wishlist