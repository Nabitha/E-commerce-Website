import check from "../../Assets/images/check.svg"
import closebutton from "../../Assets/images/xbutton.svg"
import { cartdisplay } from '../../Services';
import useFetch from "../../Hooks/useFetch"
import { cartclear } from "../../Services"



import Button from "../../Components/Button"
const Cart = () => {
    
    const { data, reload } = useFetch<{
        image: string,
        productName:string,
        price:number
        total:number
        color:string
        size:string
        quantity:number
        
    }[]>(cartdisplay);

    const onClearCart = async ()=>{
        const res = await cartclear();
        if(res.status){
            reload();
        }
    }
            
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
            {data?.map((Cart,index)=>(<>                
             <span className="relative flex gap-2"><img src={Cart.image} className="w-28 h-28"/> 
             <span>
               <span>{Cart.productName}</span>  <div className="text-gray-400 font-light">{Cart.color}</div>
                <div className="text-gray-400 font-light">Size:{Cart.size}</div>
             </span></span>
             <span className="text-indigo-900 font-light">${Cart.price}</span>
             <span className="text-indigo-900 font-light">
                <button>-</button><input className="w-8 text-center border " value={Cart.quantity} type="number"/><button>+</button>
             </span>
             <span className=" flex text-indigo-900 font-light">${Cart.total} 
             </span>
             <span><img className="w-5" src={closebutton}/></span>
            {console.log("ff",data)}
             </>))}
            </div>
            <div className="flex place-self-end mt-4 w-52  pr-20">
            <Button label="Clear Cart" type="Primary" onClick={onClearCart}></Button>
            </div>
        </div>
        
        <div>
            <div className="text-center  text-indigo-900 font-medium pb-5">Cart Totals</div>
            <div className="grid gap-2 bg-violet-50 p-4 min-w-80">
                <div className="text-indigo-900 font-semibold flex justify-between py-4"><span>Subtotals:</span><span>$219.00</span></div>
                <div className="text-indigo-900 font-semibold flex justify-between py-4"><span>Totals:</span><span>$325.00</span></div>
                <div className="text-gray-400 font-normal flex"><img src={check} className="w-3 mx-2"/>Shipping & taxes calculated at checkout</div>
                <button className="bg-green-500 w-full text-white p-1 rounded">Proceed To Checkout</button>
            </div>
        </div>
    </div>
    )}
    export default Cart



