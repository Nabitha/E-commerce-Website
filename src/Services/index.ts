import postCall from "./postCall";

export const productlist = `/user/all-item`;
export const cartdisplay = `/user/display-cart`;
export const cartclear = () => postCall(`/user/clear-cart`);
export const wishlistdisplay = `/user/display-wishlist`;
export const Addcart = (id: string) => postCall(`/user/add-cart`, { id });
export const Addwishlist = (id: string) =>
  postCall(`/user/add-wishlist`, { id });
export const AboutProduct = (id: string) => `/user/product-detail?id=${id}`;
export const RegisterSubmit = (data: any) => postCall(`/auth/sign-up`, data);
export const loginCall = postCall(`/auth/login`);
export const forgotPassword = postCall(`/auth/forgot-password-sendOtp`);
export const otpVerification = postCall(`/auth/verify-otp`);
