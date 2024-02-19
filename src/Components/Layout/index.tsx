import login from "../../Assets/images/carbon_user.svg"
import heart from "../../Assets/images/uil_heart-alt.svg"
import cart from "../../Assets/images/cart.svg"
import logo from "../../Assets/images/Hekto.svg"
import search from "../../Assets/images/uil_search.svg"
import fb from "../../Assets/images/fb.svg"
import x from "../../Assets/images/X.svg"
import instagram from "../../Assets/images/insta.svg"
import { Link } from "react-router-dom";
import { useState } from "react"
interface PropsTypes {
    children?: React.ReactNode;

}
const Layout = ({children}:PropsTypes) => {

    return (
        <>
       
            {/* top headblue */}
         <div className="bg-violet-600 text-white font-semibold flex items-center justify-around  py-4 pr-10"> 
         {/* left items */}
         <div className="flex items-center gap-16">
                <span><img src={logo}/></span>
                <span className="flex gap-4 font-medium  ">
                <span className="flex hover:text-pink-500">Home </span>
                <span className="hover:text-pink-500"><Link to="/products">Products</Link></span>
                </span>
                </div>
                <div className="relative ">
                    <input type="text" placeholder="Search. . ." className="border-2 rounded border-blueGray-200 text-black px-2 pr-10"/> 
                <button className="p-1 rounded right-0 absolute"><img className="w-6" src={search} />
</button>
                </div>
            {/* right items */}
            <div className="flex  gap-4">
                <span className="flex gap-1">Login<img src={login}/></span> 
                <span className="flex gap-1">Wishlist<img src={heart}/></span>
                <span>
                <Link to="/cart"><img src={cart}/></Link></span>
            </div>
         </div>
            <div className="flex gap-96 py-2 justify-center">         
            </div>
         {/* BODY OF PAGE */}
        <div className="py-8">
        {children}
        </div>
    
        
        {/* footer full */}
        <div className="pt-5">
            {/* main footer  */}
            <div className="flex justify-center justify-around gap-12 bg-indigo-50 py-8 text-indigo-400">
                {/* footer item 2 */}
                <div className="flex flex-col gap-2">
                    <div className="text-2xl text-black font-medium">Catagories</div>
                    <div>Laptops & Computers</div>
                    <div>Cameras & Photography</div>
                    <div>Smart Phones & Tablets</div>
                    <div>Video Games & Consoles</div>
                    <div>Waterproof Headphones</div>
                </div>
                {/* footer item 4 */}
                <div  className="flex flex-col gap-2">
                    <div className="text-2xl text-black font-medium">Pages</div>
                    <div>Browse the Shop</div>
                    <div>Category</div>
                </div>
            </div>
            {/* end footer  */}
            <div className="flex place-content-evenly gap-96 bg-violet-100 py-3">
                <span className="text-coolGray-400">©Webecy - All Rights Reserved</span>
                <span className="flex gap-2"><img src={fb} /><img src={instagram}/><img src={x}/></span>
            </div>
        </div>
        
        
        </>
    )}
export default Layout