import { useState } from "react";
import {cartupdate} from "../../Services"
interface PropsTypes{
    quantity:number
    id:any
}
const quantity =({quantity,id}:PropsTypes)=>{
    const [value, setValue] = useState<number>(quantity);
    const handleCartCount = async(itemCount:number) => {
        const res = await cartupdate(id,itemCount)
        if (res.status)
            setValue(itemCount);
    };
    return(
        <span className="text-indigo-900 font-light flex gap-1">
        <button className="border px-2 rounded-full"
         onClick={()=>handleCartCount(value-1)} >-</button>
        <input type="number"  value={value}
         onChange={(e) => setValue(Number(e.target.value))}
 
           className="w-8 text-center border rounded"/>
        <button className="border border px-2 rounded-full" onClick={()=>handleCartCount(value+1)}>+</button>
      </span>
    )
}
export default quantity