import postCall from "./postCall";

export const productlist =`/user/all-item`;
export const cartdisplay =`/user/display-cart`;
export const loginCall = postCall(`/auth/login`)
export const forgotPassword = postCall(`/auth/forgot-password-sendOtp`) 
export const otpVerification = postCall(`/auth/verify-otp`)