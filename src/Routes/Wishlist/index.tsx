import Product from "../../Components/Product"
import useFetch from "../../Hooks/useFetch"
import { wishlistclear, wishlistdisplay } from "../../Services"
import Button from "../../Components/Button"
import { useEffect } from "react"
import buffer from "../../Assets/images/buffer.svg"
const Wishlist = () =>{
    const { data,reload,loading,error } = useFetch<{
        image: string,
        productName:string,
        price:number
        _id:any
        inCart:boolean
        inWishlist:boolean        
}[]>(
    wishlistdisplay )
    const onWishlist = async ()=>{
        const res = await wishlistclear();
        if(res.status){
            reload();
        }
    }
    // useEffect(()=>{
    //     reload()
    // },
    // [data])
    return(<>
<div className="grid">
    {data?.length ===0  || !data?"":
    <div className="place-self-end w-52 ">
    <Button label="Clear wishlist" type="Primary" onClick={onWishlist} ></Button>
</div>}
    <div className="grid grid-cols-4 gap-2 space-y-5 place-items-center">
        {loading && <div  className=" text-center text-pink-500 flex text-2xl w-80"><img className="w-12 animate-spin" src={buffer}/>Loading...!</div>}
        {!!error && error.message}
        {data?.length===0 && <div  className=" text-center text-pink-500 text-2xl w-80"> Your Wishlist is Empty</div>}
        {data?.map((product,index)=>(
            <Product key={index} image={product.image} names={product.productName} price={product.price} 
            id={product._id} wishstatus={true} cartstatus={product.inCart}/>  
            ))} 
    </div>
</div>
</>)}
export default Wishlist