import postCall from "./postCall";

export const RegisterSubmit = (data: any) => postCall(`/auth/sign-up`, data);
export const loginCall = (data: object) => postCall(`/auth/login`, data);
export const forgotPassword = (data: object) =>
  postCall(`/auth/forgot-password-sendOtp`, data);
export const otpVerification = (email: string, otp: string) =>
  postCall(`/auth/verify-otp`, { email, otp });
export const PasswordReset = (data: object) =>
  postCall(`/auth/reset-password`, data);
export const getUser = `/user/getuser`;
export const productlist = `/user/all-item`;
export const cartdisplay = `/user/display-cart`;
export const checkout = () => postCall (`/user/checkout`);
export const cartclear = () => postCall(`/user/clear-cart`);
export const cartupdate = (id: string, quantity: number) =>
  postCall(`/user/update-cart`, { id, quantity });
export const wishlistdisplay = `/user/display-wishlist`;
export const wishlistclear = () => postCall(`/user/clear-wishlist`);
export const Addcart = (id: string) => postCall(`/user/add-cart`, { id });
export const Addwishlist = (id: string) =>
  postCall(`/user/add-wishlist`, { id });
export const AboutProduct = (id: string) => `/user/product-detail?id=${id}`;
export const removecartItem = (id: string) =>
  postCall(`/user/remove-item?id=${id}`);
