import silverbag from "../../Assets/images/silver bag.svg"
import check from "../../Assets/images/check.svg"
const Cart = () => {
    return (<>
    {/* full div  */}
    <div className="flex space-x-4">
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
            <div className="grid grid-cols-4 place-items-center border-b border-gray-200 ">
             <span className="flex"><img className="mx-2" src={silverbag}/>
             <span>
               <span>Ut diam consequat</span>  <div className="text-gray-400 font-light">ColorBrown</div> <div className="text-gray-400 font-light">Size:XL</div>
             </span></span>
             <span className="text-indigo-900 font-light">$32.00</span>
             <span className="text-indigo-900 font-light">
                <button>-</button><input className="w-8" type="number"/><button>+</button>
             </span>
             <span className="text-indigo-900 font-light">$219.00</span>
            </div>
            <button className="bg-pink-500 place-self-end text-white p-2 rounded ">Clear cart</button>
        </div>
        {/* right items  */}
        <div className="grid space-y-5">
            <span className="place-self-center text-indigo-900 font-medium">Cart Totals</span>
            {/* first box  */}
            <div className="bg-violet-50 p-4 pb-6 ">
                <div className="text-indigo-900 font-semibold flex space-x-36 py-4"><span>Subtotals:</span><span>$219.00</span></div>
                <div className="text-indigo-900 font-semibold flex space-x-44 py-4"><span>Totals:</span><span>$325.00</span></div>
                <div className="text-gray-400 font-normal flex"><img src={check} className="w-3 mx-2"/>Shipping & taxes calculated at checkout</div><br/>
                <button className="bg-green-500 w-full text-white p-1 rounded">Proceed To Checkout</button>
            </div>
            <span className="place-self-center text-indigo-900 font-medium">Calculate Shopping</span>
            {/* second box */}
            <div className="bg-violet-50 p-4 pb-6">
            <form className="grid space-y-5">
                <input type="text" placeholder="Bangladesh" className="border-b border-blueGray-200 w-full py-1 bg-transparent"/>
                <input type="text" placeholder="Mirpur Dhaka - 1200" className="border-b border-blueGray-200 w-full py-1 bg-transparent"/>
                <input type="text" placeholder="Postal Code" className="border-b border-blueGray-200 w-full py-1 bg-transparent" />
                <button className="bg-pink-500 text-white p-2 rounded">Calculate Shiping</button>
            </form>
            </div>
        </div>
    </div>
    
    
    </>)}
export default Cart