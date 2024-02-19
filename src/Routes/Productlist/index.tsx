import chair from "../../Assets/images/chair.svg"
import soba from "../../Assets/images/soba.svg"
import watch from "../../Assets/images/watch.svg"
import whitechair from "../../Assets/images/whiteChair.svg"
import bag from "../../Assets/images/bag.svg"
import color from "../../Assets/images/color.svg"
import bluecart from "../../Assets/images/blue_cart.svg"
import blueheart from "../../Assets/images/blue-heat.svg"
import bluepluse from "../../Assets/images/blue-pluse.svg"
import { useState } from "react"
const Productlist = () =>{
const [hoveritem,setHoveritem]=useState([
    {image:bluecart
    },
    {image:blueheart
    },
    {image:bluepluse
    },
])
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
    <div className="flex gap-36 justify-center p-4">
        <div>
            <div className="text-indigo-900 font-medium text-lg">Ecommerce Acceories & Fashion item </div><div className="text-gray-400 font-normal text-sm         ">About 9,620 results (0.62 seconds)</div>
        </div>
        <div className="flex gap-20 text-blue-800 font-normal">
            <div>Per Page: <input type="number" className="w-16 border border-gray-300"/> </div>
            <div>
                <label >Sort By:</label>
                <select name="sort" id="sort" className="border border-gray-300 mx-2">
                    <option value="BestMarch">BestMarch</option>
                    <option value="BestApril">BestApril</option>
                    <option value="Besttoday">Today</option>
                    <option value="Bestmonth">BestMonth</option>
                </select> </div>
        </div>
    </div>
    <div className="grid grid-cols-4 gap-2 space-y-5 place-items-center">
        {productitem.map((setProduct,index)=>(
        <div>
            <div className="group relative bg-gray-100 grid place-items-center hover:bg-gray-300 h-60 w-60 ">
          <div className="absolute left-4 bottom-3 grid space-y-2 hidden group-hover:grid ">
            {hoveritem.map((setHoveritem,i)=>(
            <img src={setHoveritem.image} className="rounded-full hover:bg-white p-2"/>
             ))}
          </div>
          <img src={setProduct.image} className="w-44"/>
          </div>
            <div className="grid place-items-center ">
                <div className="text-indigo-900 font-bold">{setProduct.name}</div>
                <div><img src={color} /></div>
                <div><span className="text-indigo-900 font-normal">${setProduct.price} </span><span className="text-pink-500">${setProduct.oldprice}</span></div>
            </div>
        </div>  ))}     
    </div>
</div>
</>)}
export default Productlist