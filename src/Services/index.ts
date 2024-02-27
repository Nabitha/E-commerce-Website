import postCall from "./postCall";

export const RegisterSubmit = (data: object) => postCall(`/auth/sign-up`, data);
export const loginCall = (data: object) => postCall(`/auth/login`, data);
export const forgotPassword = (data: object) =>
  postCall(`/auth/forgot-password-sendOtp`, data);
export const otpVerification = (email: string, otp: string) =>
  postCall(`/auth/verify-otp`, { email, otp });
export const PasswordReset = (data: object) =>
  postCall(`/auth/reset-password`, data);
export const getUser = `/user/getuser`;
export const getProductList = `/user/all-item`;
export const cartDisplay = `/user/display-cart`;
export const cartItemCount= "/user/cart-ItemCount";
export const checkout = () => postCall (`/user/checkout`);
export const cartClear = () => postCall(`/user/clear-cart`);
export const cartUpdate = (id: string, quantity: number) =>
  postCall(`/user/update-cart`, { id, quantity });
export const wishlistDisplay = `/user/display-wishlist`;
export const wishlistClear = () => postCall(`/user/clear-wishlist`);
export const AddCart = (id: string) => postCall(`/user/add-cart`, { id });
export const AddWishlist = (id: string) =>
  postCall(`/user/add-wishlist`, { id });
export const AboutProduct = (id: string) => `/user/product-detail?id=${id}`;
export const removeCartItem = (id: string) =>
  postCall(`/user/remove-item?id=${id}`);
export const relatedProducts = (categoryName: string) =>
  `/user/category?categoryName=${categoryName}`;
