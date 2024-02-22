import Product from "../../Components/Product"
import useFetch from "../../Hooks/useFetch"
import { wishlistclear, wishlistdisplay } from "../../Services"
import Button from "../../Components/Button"
const Wishlist = () =>{
    const { data,reload } = useFetch<{
        image: string,
        productName:string,
        price:number
        _id:any
        inCart:boolean
        
}[]>(
    wishlistdisplay )
    console.log("din",data)
    const onWishlist = async ()=>{
        const res = await wishlistclear();
        if(res.status){
            reload();
        }
    }
    return(<>
<div className="grid">
    <div className="place-self-end w-52 ">
    <Button label="Clear wishlist" type="Primary" onClick={onWishlist} ></Button>
</div>
    <div className="grid grid-cols-4 gap-2 space-y-5 place-items-center">

        {data?.map((product,index)=>(
      <Product key={index} image={product.image} names={product.productName} price={product.price} 
       id={product._id} wishstatus={true} cartstatus={product.inCart}/>  
      ))}     
    </div>
</div>
    {console.log("dd",data)}
</>)}
export default Wishlist