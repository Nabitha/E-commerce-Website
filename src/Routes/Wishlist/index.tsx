import chair from "../../Assets/images/chair.svg"
import soba from "../../Assets/images/soba.svg"
import watch from "../../Assets/images/watch.svg"
import whitechair from "../../Assets/images/whiteChair.svg"
import bag from "../../Assets/images/bag.svg"
import bluecart from "../../Assets/images/blue_cart.svg"
import bluedelete from "../../Assets/images/delete-button.svg"
import bluepluse from "../../Assets/images/blue-pluse.svg"
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
        <div>
            <div className="group relative bg-gray-100 grid place-items-center hover:bg-gray-300 h-60 w-60 rounded-2xl ">
          <div className="absolute left-4 bottom-3 grid space-y-2 hidden group-hover:grid  ">
            
            <Hoveritem icon={bluecart}/>
            <Hoveritem icon={bluedelete}/>
            <Hoveritem icon={bluepluse}/>
         
            
          </div>
          <img src={setProduct.image} className="w-44"/>
          </div>
            <div className="grid place-items-center ">
                <div className="text-indigo-900 font-bold">{setProduct.name}</div>
                <div className="text-indigo-900 font-normal">${setProduct.price}</div>
            </div>
        </div>  ))}     
    </div>
</div>
</>)}
export default Wishlist