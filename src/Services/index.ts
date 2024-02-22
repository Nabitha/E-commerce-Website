import postCall from "./postCall";
export const productlist =`/user/all-item`;
export const cartdisplay =`/user/display-cart`;
export const cartclear = ()=>postCall(`/user/clear-cart`);
export const cartupdate = (id:string,quantity:number)=>postCall(`/user/update-cart`,{id,quantity});
export const wishlistdisplay=`/user/display-wishlist`
export const wishlistclear = ()=>postCall(`/user/clear-wishlist`);
export const Addcart=(id:string)=>postCall(`/user/add-cart`,{id})
export const Addwishlist=(id:string)=>postCall(`/user/add-wishlist`,{id})
export const AboutProduct = (id: string) => `/user/product-detail?id=${id}`;
export const removecartItem = (id: string) => postCall(`/user/remove-item?id=${id}`);

 