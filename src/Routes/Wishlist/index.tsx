import Product from "../../Components/Product"
import useFetch from "../../Hooks/useFetch"
import { wishlistClear, wishlistDisplay } from "../../Services"
import Button from "../../Components/Button"
import buffer from "../../Assets/images/buffer.svg"
const Wishlist = () =>{
    const { data,reload,loading,error } = useFetch<{
    image: string;
    productName: string;
    price: string | number;
    _id?: string;
    inWishlist?: boolean;
    inCart: boolean;    
}[]>(
    wishlistDisplay )
    const onWishlist = async ()=>{
        const res = await wishlistClear();
        if(res.status){
            reload();
        }
    }
    return(<>
<div className="grid">
    {data?.length ===0 ? <div className='font-medium text-4xl text-center h-56'>Your Wishlist is Empty!</div>:
    <div className="place-self-end w-52 ">
    {data&&<Button label="Clear wishlist" type="Primary" onClick={onWishlist} ></Button>}
</div>}
    <div className="grid grid-cols-4 gap-2 space-y-5 place-items-center">
        {loading && <div  className="absolute  w-80"><img className="w-12 animate-spin ml-50" src={buffer}/></div>}
        {!!error && error.message}
        
        {data?.map((product,index)=>(
            <Product key={index} productData={product} reload={reload} />  
            ))} 
    </div>
</div>
</>)}
export default Wishlist