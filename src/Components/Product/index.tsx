import { useState } from "react";
import { AddCart, removeCartItem } from "../../Services";
import { AddWishlist } from "../../Services";
import { useNavigate } from "react-router-dom";
import favorite from "../../Asset/favoriteIcon.svg";
import favoriteRedIcon from "../../Asset/favoriteRedIcon.svg";
import zoomImage from "../../Assets/images/blue-plus.svg";
import blueCart from "../../Assets/images/blue_cart.svg";
import fullBlueCart from "../../Assets/images/fullCart.svg";
import useAppContext from "../../Hooks/useAppContext";
import { checkToken } from "../Layout";
import HoverItem from "../HoverItem";
interface PropsTypes {
    productData: {
        image: string;
        productName: string;
        price: string | number;
        _id?: string;
        inWishlist?: boolean;
        inCart: boolean;
    };
    reload?: () => void;
}

const Product = ({ productData, reload }: PropsTypes) => {
    const { reload: reloadHeader } = useAppContext();
    const navigate = useNavigate();
    const [fav, setFav] = useState(productData.inWishlist);
    const [isOnCart, setIsOnCart] = useState(productData.inCart);
    const [isZoom, setIsZoom] = useState(false);
    return (
        <div
            onClick={() => {
                navigate(`/productDetails/${productData._id}`);
            }}
        >
            <div className="group relative bg-gray-100 grid place-items-center hover:bg-gray-300 h-60 w-60 ">
                <div className="absolute left-4 bottom-3  gap-2 hidden group-hover:grid ">
                    {checkToken()&&(<>< HoverItem
                        icon={isOnCart ? fullBlueCart : blueCart}
                        onClick={async () => { 
                        
                            if (isOnCart) {
                                await removeCartItem(productData._id || "");
                                reloadHeader();
                                setIsOnCart(false);
                                return;
                            }
                            await AddCart(productData._id || "");
                            reloadHeader();
                            setIsOnCart(true);
                        }}
                    />
                    < HoverItem
                        icon={
                            location.pathname === "/wishlist"
                                ? favoriteRedIcon
                                : fav
                                ? favoriteRedIcon
                                : favorite
                        }
                        onClick={async () => {
                            setFav((prevFav) => !prevFav);
                            await AddWishlist(productData._id || "");
                            reload?.();
                        }}
                    /></>)}
                    < HoverItem
                        icon={zoomImage}
                        onClick={() => {
                            isZoom ? setIsZoom(false) : setIsZoom(true);
                        }}
                    />
                </div>
                <img
                    src={productData.image}
                    className={`${isZoom ? " w-full " : "w-44 max-h-44"}`}
                />
            </div>
            <div className="grid place-items-center ">
                <div className="text-indigo-900 font-bold w-56 text-center">
                    {productData.productName}
                </div>
                <div>
                    <span className="text-indigo-900 font-normal">
                        ${productData.price}
                    </span>
                </div>
            </div>
        </div>
    );
};
export default Product;
