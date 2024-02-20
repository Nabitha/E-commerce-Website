import Hoveritem from "../../Components/Hoverimg"
import bluecart from "../../Assets/images/blue_cart.svg"
import blueheart from "../../Assets/images/blue-heat.svg"
import bluepluse from "../../Assets/images/blue-pluse.svg"
import { useState } from "react"
import color from "../../Assets/images/color.svg"
interface PropsTypes{
    image:string,
    names:string,
    price:string,
    first:string,
    second:string,
    third:string
}

const Product = ({image,names,price,first,second,third}:PropsTypes ) => {
    const [iszoom, setIsZoom] = useState(false);
const Zooming = () => {
    setIsZoom((prev) => !prev);
  };
    return(

<div>
<div className="group relative bg-gray-100 grid place-items-center hover:bg-gray-300 h-60 w-60 ">
<div className="absolute left-4 bottom-3 grid space-y-2 hidden group-hover:grid ">
<Hoveritem icon={first}/>
<Hoveritem icon={second}/>
<Hoveritem icon={third} 
onClick={() => {
    (iszoom)?
    setIsZoom(false):setIsZoom(true);              
}}/>
</div>
<img src={image} className={`${(iszoom)?' w-full':'w-44'}`}/>
</div>
<div className="grid place-items-center ">
    <div className="text-indigo-900 font-bold">{names}</div>
    <div><img src={color} /></div>
    <div><span className="text-indigo-900 font-normal">${price} </span>
    </div>
</div>
</div>
)}
export default Product;