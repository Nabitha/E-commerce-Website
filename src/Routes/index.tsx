import { Route, Routes } from "react-router-dom";
import Layout from "../Components/Layout";
import Cart from "./Cart";
import Productlist from "./Productlist";
import { Login } from "./Home/Login";
import { ForgotPassword } from "./Home/ForgotPassword";
import { Register } from "./Register";
import { OrderCompleted } from "./OrderCompleted";
import { ContactUs } from "./ContactUs";
import ProductDetails from "./ProductDetails";
import ResetPassword from "./ResetPassword";
import Wishlist from "./Wishlist";
import { OtpVerification } from "./OtpVerification"


const Router = () => {
  
  return (
    <Layout>
      <Routes>
        <Route path="/cart" element={<Cart />} />
        <Route path="/products" element={<Productlist />} />
        <Route path="/login" element={<Login />} />
        <Route path="/forgotpassword" element={<ForgotPassword />} />
        <Route path="/register" element={<Register />} />
        <Route path="/ordercompleted" element={<OrderCompleted />} />
        <Route path="/contactus" element={<ContactUs />} />
        <Route path="/ProductDetails/:id" element={<ProductDetails />} />
        <Route path="/ResetPassword" element={<ResetPassword />} />
        <Route path="/wishlist" element={<Wishlist />} />
        <Route path="/otpverification" element={<OtpVerification/>}/>
      </Routes>
    </Layout>
  );
};

export default Router;
