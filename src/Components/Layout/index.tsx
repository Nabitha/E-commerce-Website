import { cartItemCount, getUser,productlist } from "../../Services";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Button from "../Button";
import login from "../../Assets/images/carbon_user.svg";
import heart from "../../Assets/images/uil_heart-alt.svg";
import cart from "../../Assets/images/cart.svg";
import logo from "../../Assets/images/Hekto.svg";
import search from "../../Assets/images/uil_search.svg";
import fb from "../../Assets/images/fb.svg";
import x from "../../Assets/images/X.svg";
import pinkcart from "../../Assets/images/pinkcart.svg";
import instagram from "../../Assets/images/insta.svg";
import { useEffect, useState } from "react";
import useFetch from "../../Hooks/useFetch";
import AppContext from "../../Contexts/AppContext";

interface PropsTypes {
    children?: React.ReactNode;
}
export function checkToken() {
  const token = localStorage.getItem("token");
  return token !== null;
}
function removeToken() {
    localStorage.removeItem("token");
}

const Layout = ({ children }: PropsTypes) => {
    const location = useLocation();
    const [productName, setProductName] = useState("");
    const [pathName, setPathName] = useState("");
    const { data, reload: reloadCart } = useFetch<any>(cartItemCount);
    const { data: user } = useFetch<any>(getUser);
    const { data: productList, reload: reloadProductList } = useFetch<any>(
        `${productlist}?search=${productName}`
    );
    useEffect(() => {
        setPathName(location.pathname);
    }, [location.pathname]);

    const reload = () => {
        reloadCart();
    };
    const navigate = useNavigate();
    const Count =data;
    return (
        <AppContext.Provider value={{ reload, productList }}>
            <div className="sticky top-0 z-50 bg-violet-600 text-white font-semibold flex items-center justify-around  py-4 pr-10">
                <div className="flex items-center gap-16">
                    <span>
                        <img src={logo} />
                    </span>
                    <span className="flex gap-4 font-medium  ">
                        <span className="hover:text-pink-500">Home </span>
                        <span
                            className={`${
                                "/products" === pathName
                                    ? "text-pink-500"
                                    : " hover:text-pink-500"
                            }`}
                        >
                            <Link to="/products">Products</Link>
                        </span>
                    </span>
                </div>
                <div className="relative w-full max-w-80 max-lg:max-w-36 ">
                    <input type="text" placeholder="Search. . ." className="border-2 rounded border-blueGray-200 text-black px-2 pr-10 w-full" onChange={(e)=>setProductName(e.target.value)}/> 
                <button onClick={reloadProductList} className="p-1 rounded right-0 absolute"><img className="w-6" src={search} />
                </button>
                </div>
        <div className="flex  items-center gap-8">
          <span
            className={`${
              "/login" === pathName
                ? "text-pink-500 flex  gap-1"
                : " flex gap-1 hover:text-pink-500"
            }`}
          >
            {checkToken() ? (
              <span>{user?.name} </span>
            ) : (
              <Link to="/login"> Login </Link>
            )}
            <span>
              <img src={login} />
            </span>
          </span>

          {checkToken() && (
            <>
            <Link to="/wishlist">
              <span
                className={`${
                  "/wishlist" === pathName
                    ? "text-pink-500 flex gap-1"
                    : " flex gap-1 hover:text-pink-500"
                }`}
              >
                Wishlist
                <img className="w-5" src={heart} />
              </span>
            </Link>
          <span className="relative ">
             
              <Link to="/cart">
                <img
                  className="w-6"
                  src={pathName === "/cart" ? pinkcart : cart}
                />
                <div className="absolute flex items-center justify-center -right-3  -top-3 w-5 h-5 rounded-full bg-white   text-md text-pink-500 ">
                  <div> {data?.count||0}</div>
                </div>
              </Link>
           
          </span>
          <span>
              <Button
                label="Logout"
                onClick={() => {
                  navigate("/products");
                  removeToken();
                }}
              />
          </span>
          </>)}
        </div>
      </div>
      <div className="flex gap-96 py-2 justify-center"></div>
      <div className="p-8">{children}</div>
      <div className="pt-5">
        <div className=" flex justify-center justify-around gap-12 bg-indigo-50 py-8 text-indigo-400">
          <div className="flex flex-col gap-2">
            <div className="text-2xl text-black font-medium">Catagories</div>
            <div>Laptops & Computers</div>
            <div>Cameras & Photography</div>
            <div>Smart Phones & Tablets</div>
            <div>Video Games & Consoles</div>
            <div>Waterproof Headphones</div>
          </div>
          <div className="flex flex-col gap-2">
            <div className="text-2xl text-black font-medium">Pages</div>
            <div>Browse the Shop</div>
            <div>Category</div>
          </div>
        </div>
        <div className="flex place-content-evenly gap-96 bg-violet-100 py-3">
          <span className="text-coolGray-400">
            ©$$- All Rights Reserved
          </span>
          <span className="flex gap-2">
            <img src={fb} />
            <img src={instagram} />
            <img src={x} />
          </span>
        </div>
      </div>
    </AppContext.Provider>
  );
};
export default Layout;
