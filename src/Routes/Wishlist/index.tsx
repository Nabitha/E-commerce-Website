import bluecart from "../../Assets/images/blue_cart.svg"
import bluedelete from "../../Assets/images/delete-button.svg"
import bluepluse from "../../Assets/images/blue-pluse.svg"
import Product from "../../Components/Product"
import useFetch from "../../Hooks/useFetch"
import { wishlistdisplay } from "../../Services"
const Wishlist = () =>{
    const { data } = useFetch<{
        image: string,
        productName:string,
        price:number
        _id:any
}[]>(
    wishlistdisplay )
    console.log("din",data)
    return(<>
<div>
    <div className="grid grid-cols-4 gap-2 space-y-5 place-items-center">
        {data?.map((product,index)=>(
      <Product key={index} image={product.image} names={product.productName} price={product.price} first={bluecart}
      second={bluedelete} third={bluepluse} id={product._id}/>  
      ))}     
    </div>
</div>
    {console.log("dd",data)}
</>)}
export default Wishlist