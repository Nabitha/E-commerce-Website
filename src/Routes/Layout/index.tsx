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
interface PropsTypes {
    children?: React.ReactNode;

}


const Layout = ({children}:PropsTypes) => {
    return (
        <>
        {/* header2 */}
        <div>
            {/* top headblue */}
         <div className="bg-violet-600 text-white font-semibold flex  space-x-96  justify-center py-2"> 
         {/* left items */}
         <div className="flex space-x-4">
         <span className="flex"><img src={mail} className="px-2"/>mhhasanul@gmail.com</span>
         <span className="flex"><img src={phone} className="px-2"/>(12345)67890</span>
         </div>
            {/* right items */}
            <div className="flex space-x-4">
                <span className="flex">English <img src={down}/></span>
                <span className="flex">USD <img src={down}/></span>
                <span className="flex">Login<img src={login}/></span> 
                <span className="flex">Wishlist<img src={heart} className="ml-1"/></span>
                <span><img src={cart}/></span>
            </div>
         </div>
         {/* top white  */}
         {/* all content */}
            <div className="flex space-x-96 py-2 h-14 justify-center">
                {/* left white itemd  */}
                <div className="flex space-x-16">
                <span><img src={logo}/></span>
                <span className="flex space-x-4 font-medium text-gray-900 ">
                <span className="flex hover:text-pink-500">Home </span>
                <span className="hover:text-pink-500">Products</span>
                <span className="hover:text-pink-500">Blog</span>
                <span className="hover:text-pink-500">Shop</span>
                <span className="hover:text-pink-500 0">Contact</span></span>
                </div>
                <span><input type="text" className="border-2 border-blueGray-200" /> <button className="bg-pink-500 h-7 px-1 absolute"><img src={search}/></button></span>
            </div>
         </div>
         {/* heading */}
         <div className="bg-violet-50 h-36 grid ">
           <span className="self-center ml-32"> <div className="text-indigo-900 font-medium text-2xl ">My Account</div>
            <div className="font-medium"><span>Home </span><span>. Pages </span><span className="text-pink-500"> . My Account</span></div>
            </span>
         </div>
        
        {/* BODY OF PAGE */}
        <div className="bg-gray-500 h-48">
        {children}
        </div>
        {/* footer full */}
        <div>
            {/* main footer  */}
            <div className="flex justify-center space-x-12 bg-indigo-50 py-8 text-indigo-400">
                {/* footer item  1 */}
                <div  className="flex flex-col space-y-2">
                    <div><img src={logo}/></div>
                    <div><input placeholder="Enter Email Addres" type="email" className="px-2 h-8 rounded"/><button className="bg-pink-500 text-white px-8 py-1 rounded">Sign Up</button></div>
                    <div>Contact Info<br/>17 Princess Road, London, Greater London NW1 8JR, UK</div>
                </div>
                {/* footer item 2 */}
                <div className="flex flex-col space-y-2">
                    <div className="text-2xl text-black font-medium">Catagories</div>
                    <div>Laptops & Computers</div>
                    <div>Cameras & Photography</div>
                    <div>Smart Phones & Tablets</div>
                    <div>Video Games & Consoles</div>
                    <div>Waterproof Headphones</div>
                </div>
                 {/* footer item 3 */}
                 <div  className="flex flex-col space-y-2">
                    <div className="text-2xl text-black font-medium">Customer Care</div>
                    <div>My Account</div>
                    <div>Discount</div>
                    <div>Returns</div>
                    <div>Orders History</div>
                    <div>Order Tracking</div>
                </div>
                {/* footer item 4 */}
                <div  className="flex flex-col space-y-2">
                    <div className="text-2xl text-black font-medium">Pages</div>
                    <div>Blog</div>
                    <div>Browse the Shop</div>
                    <div>Category</div>
                    <div>Pre-Built Pages</div>
                    <div>Visual Composer Elements</div>
                    <div>WooCommerce Pages</div>
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