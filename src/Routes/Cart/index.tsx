import check from "../../Assets/images/check.svg";
import closebutton from "../../Assets/images/xbutton.svg";
import buffer from "../../Assets/images/buffer.svg";
import { cartdisplay } from "../../Services";
import useFetch from "../../Hooks/useFetch";
import { cartclear } from "../../Services";
import { checkout } from "../../Services";
import { removecartItem } from "../../Services";
import Button from "../../Components/Button";
import { Fragment, useState } from "react";
import Quantity from "../../Components/Quantity";
import { useNavigate } from "react-router-dom";
import useAppContext from "../../Hooks/useAppContext";

interface DataType{
  image: string;
  productName: string;
  price: number;
  total: number;
  color: string;
  size: string;
  quantity: number;
  _id: any;
}[]
const Cart = () => {
  const { data, reload,loading,error } = useFetch<DataType[]>(cartdisplay);
  const onClearCart = async () => {
    const res = await cartclear();
    if (res.status) {
      reload();
      reloadHeader()
    }
  };
  const {
    reload: reloadHeader
} = useAppContext();
  const navigate = useNavigate();

  const onCheckout = async () => {
    const check =await checkout();
    if(check.status){
      navigate('/ordercompleted');
      reloadHeader()
    }
  };
  const updateCartFn = async (id: string) => {
    const res = await removecartItem(id);
    if (res.status) {
      reload();
      reloadHeader()
    }
  };
  const totalCost = ()=> data?.reduce((a,item)=>item.total+a,0) || 0
  return (
    
    <div className="flex justify-center">
      {data?.length===0 ?<div className='font-medium text-4xl h-56'>Your Cart is Empty!</div>:
      <div className="grid ">
      
        {data&&<div className="grid grid-cols-5 place-items-center text-indigo-900 font-medium pb-5">
          <span>Product</span>
          <span>Price</span>
          <span>Quantity</span>
          <span>Total</span>
        </div>}
        
        <div className="grid grid-cols-5 place-items-center gap-2 border-b border-gray-200  ">
        {loading && <div className="w-80 flex ml-20  absolute"><img className="w-12 animate-spin" src={buffer}/> </div>}
        {!!error && error.message}

    
          {data?.map((Cart) => (
            <Fragment key={Cart._id}>
              <span className="relative flex gap-2">
                <img src={Cart.image} className="w-28 h-28" />
                <span>
                  <span>{Cart.productName}</span>{" "}
                  <div className="text-gray-400 font-light">{Cart.color}</div>
                  <div className="text-gray-400 font-light">
                    Size:{Cart.size}
                  </div>
                </span>
              </span>
              <span className="text-indigo-900 font-light">${Cart.price}</span>
                 <Quantity quantity={Cart.quantity} id={Cart._id}/>
              <span className=" flex text-indigo-900 font-light">
                ${Cart.total}
              </span>
              <span>
                <img
                  onClick={() => {
                    updateCartFn(Cart._id);}}
                  className="w-5"
                  src={closebutton}/>
              </span>
            </Fragment>
          ))}
        </div>
       { (data?.length === 0 || !data) ?"":
        <div className="flex place-self-end mt-4 w-52  pr-20">
          <Button
            label="Clear Cart"
            type="Primary"
            onClick={onClearCart}
          ></Button>
        </div>}
      </div>}
      { (data?.length === 0 || !data) ?"":
      <div>
        <div className="text-center  text-indigo-900 font-medium pb-5">
          Cart Totals
        </div>
        <div className="grid gap-2 bg-violet-50 p-4 min-w-80">
          <div className="text-indigo-900 font-semibold flex justify-between py-4">
            <span>Total items:</span>
            <span>{data?.length || 0}</span>
          </div>
          <div className="text-indigo-900 font-semibold flex justify-between py-4">
            <span>Totals:</span>
            <span>${totalCost()}</span>
          </div>
          <div className="text-gray-400 font-normal flex">
            <img src={check} className="w-3 mx-2" />
            Shipping & taxes calculated at checkout
          </div>
          <Button label="Proceed To Checkout" type="checkout"
          onClick={onCheckout} />
            
          
        </div>
      </div>}
    </div>
  );
};
export default Cart;
