import color from "../../Assets/images/color.svg"
import bluecart from "../../Assets/images/blue_cart.svg"
import blueheart from "../../Assets/images/blue-heat.svg"
import bluepluse from "../../Assets/images/blue-pluse.svg"
import Product from "../../Components/Product"
import { productlist } from '../../Services';
import { useState } from "react"
import useFetch from "../../Hooks/useFetch"
const Productlist = () =>{
const [iszoom, setIsZoom] = useState(false);
const { data } = useFetch<{
        image: string,
        productName:string,
        price:number
        _id:any
}[]>(
    productlist )
const Zooming = () => {
    setIsZoom((prev) => !prev);
  };
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
                <select className="border border-gray-300 mx-2">
                    <option value="BestMarch">BestMarch</option>
                    <option value="BestApril">BestApril</option>
                    <option value="Besttoday">Today</option>
                    <option value="Bestmonth">BestMonth</option>
                </select> </div>
        </div>
    </div>
    <div className="grid grid-cols-4 gap-2 space-y-5 place-items-center">
        {data?.map((product,index)=>(
            <Product key={index} image={product?.image} names={product?.productName} price={product.price} first={bluecart}
            third={bluepluse} color={color} id={product._id}/>  
            ))}     
    </div>
</div>
</>)}
export default Productlist