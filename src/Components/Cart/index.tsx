import silverbag from "../../Assets/images/silver bag.svg"
import check from "../../Assets/images/check.svg"
import xbtn from "../../Assets/images/xbutton.svg"
import { useState } from "react"
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
    <div className="flex  justify-center">
        {/* cart  */}
        <div className="grid" >
          {/* heading  */}
           <div className="grid grid-cols-4 place-items-center text-indigo-900 font-medium ">
             <span>Product</span>
             <span>Price</span>
             <span>Quantity</span>
             <span>Total</span>
            </div>
              {/* datas */}
            <div className="grid grid-cols-4 place-items-center gap-2 border-b border-gray-200  ">
            {cartitem.map((setCart,index)=>(<>                
             <span className="relative flex"><img className="" src={setCart.image}/> 
             <span className="mx-2">
               <span>{setCart.name}</span>  <div className="text-gray-400 font-light">{setCart.color}</div> <div className="text-gray-400 font-light">Size:{setCart.size}</div>
             </span></span>
             <span className="text-indigo-900 font-light">${setCart.price}</span>
             <span className="text-indigo-900 font-light">
                <button>-</button><input className="w-8" type="number"/><button>+</button>
             </span>
             <span className="relative flex text-indigo-900 font-light">${setCart.total} <img className="absolute left-20 w-5" src={xbtn}/></span>
             
             </>))}
            </div>
            <div className="flex justify-end px-20">
            <button className="bg-pink-500  text-white h-10 p-2 mt-4 rounded ">Clear cart</button>
            </div>
        </div>
        {/* right items  */}
        <div>
            <div className="text-center  text-indigo-900 font-medium">Cart Totals</div>
            {/* first box  */}
            <div className="bg-violet-50 p-4">
                
                <div className="text-indigo-900 font-semibold flex space-x-36 py-4"><span>Subtotals:</span><span>$219.00</span></div>
                <div className="text-indigo-900 font-semibold flex space-x-44 py-4"><span>Totals:</span><span>$325.00</span></div>
                <div className="text-gray-400 font-normal flex"><img src={check} className="w-3 mx-2"/>Shipping & taxes calculated at checkout</div><br/>
                <button className="bg-green-500 w-full text-white p-1 rounded">Proceed To Checkout</button>
            </div>
        </div>
    </div>)}
export default Cart