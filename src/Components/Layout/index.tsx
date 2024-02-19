import mail from "../../Assets/images/mail.svg"
import phone from "../../Assets/images/phone.svg"
import login from "../../Assets/images/carbon_user.svg"
import heart from "../../Assets/images/uil_heart-alt.svg"
import cart from "../../Assets/images/cart.svg"
import logo from "../../Assets/images/Hekto.svg"
import search from "../../Assets/images/uil_search.svg"
import fb from "../../Assets/images/fb.svg"
import x from "../../Assets/images/X.svg"
import instagram from "../../Assets/images/insta.svg"
import down from "../../Assets/images/icons down.svg"
import pinkdown from "../../Assets/images/pink down.svg"
import Productlist from "../../Components/ProductList"
import Cart from "../../Components/Cart"
interface PropsTypes {
    children?: React.ReactNode;

}


const Layout = ({children}:PropsTypes) => {
    return (
        <>
        {/* header2 */}
       
            {/* top headblue */}
         <div className="bg-violet-600 text-white font-semibold flex  justify-end py-2 px-10"> 
         {/* left items */}

            {/* right items */}
            <div className="flex space-x-4">
                <span className="flex">Login<img src={login}/></span> 
                <span className="flex">Wishlist<img src={heart} className="ml-1"/></span>
                <span><a href="/cart"><img src={cart}/></a></span>
            </div>
         </div>
         {/* top white  */}
         {/* all content */}
            <div className="flex space-x-96 py-2 justify-center">
                {/* left white itemd  */}
                <div className="flex space-x-16">
                <span><img src={logo}/></span>
                <span className="flex space-x-4 font-medium text-gray-900 ">
                <span className="flex hover:text-pink-500">Home </span>
                <span className="hover:text-pink-500"><a href="/products">Products</a></span>
                <span className="hover:text-pink-500 0">Contact</span></span>
                </div>
                <span><input type="text" className="border-2 border-blueGray-200" /> <button className="bg-pink-500 h-7 px-1 absolute"><img src={search}/></button></span>
            </div>
        
        {/* BODY OF PAGE */}
        <div className="py-8">
        {children}
        </div>
    
        
        {/* footer full */}
        <div className="pt-5">
            {/* main footer  */}
            <div className="flex justify-center space-x-12 bg-indigo-50 py-8 text-indigo-400">
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
            <div className="flex place-content-evenly space-x-96 bg-violet-100 py-3">
                <span className="text-coolGray-400">©Webecy - All Rights Reserved</span>
                <span className="flex space-x-2"><img src={fb} /><img src={instagram}/><img src={x}/></span>
            </div>
        </div>
        
        
        </>
    )}
export default Layout