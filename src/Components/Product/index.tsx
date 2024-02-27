import Hoveritem from "../../Components/Hoverimg";
import { useState } from "react";
import { AddCart, removeCartItem } from "../../Services";
import { AddWishlist } from "../../Services";
import { useNavigate } from "react-router-dom";
import favorite from "../../Asset/favoriteIcon.svg";
import favoriteRedIcon from "../../Asset/favoriteRedIcon.svg";
import bluepluse from "../../Assets/images/blue-pluse.svg";
import bluecart from "../../Assets/images/blue_cart.svg";
import fullbluecart from "../../Assets/images/fulbuecart.svg";
import useAppContext from "../../Hooks/useAppContext";
import { checkToken } from "../Layout";
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
    const [iszoom, setIsZoom] = useState(false);
    return (
        <div
            onClick={() => {
                navigate(`/productdetails/${productData._id}`);
            }}
        >
            <div className="group relative bg-gray-100 grid place-items-center hover:bg-gray-300 h-60 w-60 ">
                <div className="absolute left-4 bottom-3 grid gap-2 hidden group-hover:grid ">
                    {checkToken() && (
                        <>
                            <Hoveritem
                                icon={isOnCart ? fullbluecart : bluecart}
                                onClick={async () => {
                                    console.log("data", productData.inCart);

                                    if (isOnCart) {
                                        await removeCartItem(
                                            productData._id || ""
                                        );
                                        reloadHeader();
                                        setIsOnCart(false);
                                        return;
                                    }
                                    await AddCart(productData._id || "");
                                    reloadHeader();
                                    setIsOnCart(true);
                                }}
                            />
                            <Hoveritem
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
                            />
                        </>
                    )}
                    <Hoveritem
                        icon={bluepluse}
                        onClick={() => {
                            iszoom ? setIsZoom(false) : setIsZoom(true);
                        }}
                    />
                </div>
                <img
                    src={productData.image}
                    className={`${iszoom ? " w-full " : "w-44 max-h-44"}`}
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
