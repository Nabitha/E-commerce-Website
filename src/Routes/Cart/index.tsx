import silverbag from "../../Assets/images/silver bag.svg"
import check from "../../Assets/images/check.svg"
import closebutton from "../../Assets/images/xbutton.svg"
import { useState } from "react"
import Button from "../../Components/Button"
const Cart = () => {
    const [cartitem,setCartItem]=useState([
        {
            image: silverbag,
            name:"Ut diam consequat",
            color:"ColorBrown",
            size:"XL",
            price:"32.00",
            total:"219.00"

        },        {
            image: silverbag,
            name:"Ut diam consequat",
            color:"ColorBrown",
            size:"XL",
            price:"32.00",
            total:"219.00"

        },        {
            image: silverbag,
            name:"Ut diam consequat",
            color:"ColorBrown",
            size:"XL",
            price:"32.00",
            total:"219.00"

        },        {
            image: silverbag,
            name:"Ut diam consequat",
            color:"ColorBrown",
            size:"XL",
            price:"32.00",
            total:"219.00"

        }
    ])
    return (    
    <div className="flex justify-center">
        <div className="grid " >
           <div className="grid grid-cols-5 place-items-center text-indigo-900 font-medium pb-5">
             <span>Product</span>
             <span>Price</span>
             <span>Quantity</span>
             <span>Total</span>
            </div>
            <div className="grid grid-cols-5 place-items-center gap-2 border-b border-gray-200  ">
            {cartitem.map((setCart,index)=>(<>                
             <span className="relative flex gap-2"><img src={setCart.image}/> 
             <span>
               <span>{setCart.name}</span>  <div className="text-gray-400 font-light">{setCart.color}</div>
                <div className="text-gray-400 font-light">Size:{setCart.size}</div>
             </span></span>
             <span className="text-indigo-900 font-light">${setCart.price}</span>
             <span className="text-indigo-900 font-light">
                <button>-</button><input className="w-8" type="number"/><button>+</button>
             </span>
             <span className=" flex text-indigo-900 font-light">${setCart.total} 
             </span>
             <span><img className="w-5" src={closebutton}/></span>
             </>))}
            </div>
            <div className="flex place-self-end mt-4 w-52  pr-20">
            <Button label="Clear Cart" type="Primary"></Button>
            </div>
        </div>
        <div>
            <div className="text-center  text-indigo-900 font-medium pb-5">Cart Totals</div>
            <div className="grid gap-2 bg-violet-50 p-4">
                <div className="text-indigo-900 font-semibold flex justify-between py-4"><span>Subtotals:</span><span>$219.00</span></div>
                <div className="text-indigo-900 font-semibold flex justify-between py-4"><span>Totals:</span><span>$325.00</span></div>
                <div className="text-gray-400 font-normal flex"><img src={check} className="w-3 mx-2"/>Shipping & taxes calculated at checkout</div>
                <button className="bg-green-500 w-full text-white p-1 rounded">Proceed To Checkout</button>
            </div>
        </div>
    </div>
    )}
export default Cart