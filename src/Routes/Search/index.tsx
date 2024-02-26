import Product from "../../Components/Product"
import useFetch from "../../Hooks/useFetch"
import { wishlistclear, wishlistdisplay } from "../../Services"
import { useEffect } from "react"
import buffer from "../../Assets/images/buffer.svg"
const Search = () =>{
    const { data,reload,loading,error } = useFetch<{
        image: string,
        productName:string,
        price:number
        _id:any
        inCart:boolean
        inWishlist:boolean        
}[]>(
    wishlistdisplay )
    return(<>
<div className="grid">
    {data?.length ===0 ? <div className='font-medium text-4xl text-center h-56'> item Not found..!</div>:
    <div className="place-self-end w-52 ">
</div>}
    <div className="grid grid-cols-4 gap-2 space-y-5 place-items-center">
        {loading && <div  className="absolute  w-80"><img className="w-12 animate-spin ml-50" src={buffer}/></div>}
        {!!error && error.message}
        
        {data?.map((product,index)=>(
            <Product key={index} image={product.image} names={product.productName} price={product.price} 
            id={product._id} reload={reload} cartstatus={product.inCart}/>  
            ))} 
    </div>
</div>
</>)}
export default Search