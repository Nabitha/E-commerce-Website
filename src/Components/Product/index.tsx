import Hoveritem from "../../Components/Hoverimg"
import { useState } from "react"
import { Addcart, removecartItem, wishlistdisplay } from "../../Services"
import { Addwishlist } from "../../Services"
import { useNavigate } from "react-router-dom"
import favorite from '../../Asset/favoriteIcon.svg'
import favoriteRedIcon from '../../Asset/favoriteRedIcon.svg'
import bluepluse from "../../Assets/images/blue-pluse.svg"
import bluecart from "../../Assets/images/blue_cart.svg"
import fullbluecart from "../../Assets/images/fulbuecart.svg"
interface PropsTypes{
    image:string,
    names:string,
    price:string | number,
    color?:string
    id?:any
    wishstatus:boolean
    cartstatus:boolean
}
const Product = ({image,names,price,color,id,wishstatus,cartstatus}:PropsTypes) => {
    const navigate = useNavigate();
    const [fav, setFav] = useState(wishstatus);
    const [isOnCart,setIsOnCart] = useState(cartstatus);
    const [iszoom, setIsZoom] = useState(false);
    return(   
        <div onClick={()=>{   
            navigate(`/productdetails/${id}`)
        }}>
<div className="group relative bg-gray-100 grid place-items-center hover:bg-gray-300 h-60 w-60 ">
<div className="absolute left-4 bottom-3 grid gap-2 hidden group-hover:grid ">
<Hoveritem icon={isOnCart? fullbluecart: bluecart}
    onClick={async()=>{
        if(isOnCart){
            await removecartItem(id);
            setIsOnCart(false);
            return
        }
        await Addcart(id);
        setIsOnCart(true);
    }}
/>
<Hoveritem
    icon={location.pathname === '/wishlist' ? favoriteRedIcon : (fav ? favoriteRedIcon : favorite)}
    onClick={() => {
        Addwishlist(id);
        setFav(prevFav => !prevFav);
    }}
/>
<Hoveritem icon={bluepluse} 
            
onClick={() => {
    (iszoom)?
    setIsZoom(false):setIsZoom(true);              
}}/>
</div>
<img src={image} className={`${(iszoom)?' w-full ':'w-44 max-h-44'}`}/>
</div>
<div className="grid place-items-center ">
    <div className="text-indigo-900 font-bold w-56 text-center">{names}</div>
    <div><img src={color} /></div>
    <div><span className="text-indigo-900 font-normal">${price} </span>
    </div>
</div>
</div>
)}
export default Product;