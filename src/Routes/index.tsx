import {Route,Routes} from "react-router-dom"
import Layout from "../Components/Layout"
import Cart from "./Cart"
import Productlist from "./Productlist"
import { Login } from "./Home/Login"
import { ForgotPassword } from "./Home/ForgotPassword"
import { Register } from "./Register"
import { OrderCompleted } from "./OrderCompleted"
import { ContactUs } from "./ContactUs"
import ProductDetails from "./ProductDetails";


const Router = () => {
  return (
    <Layout>
      <Routes>
          <Route path="/cart" element={<Cart/>} />
          <Route path="/products" element={<Productlist/>} />
        <Route path="/login" element={<Login/>}/>
        <Route path="/forgotpassword" element={<ForgotPassword/>}/>
        <Route path="/register" element={<Register/>}/>
        <Route path="/ordercompleted" element={<OrderCompleted/>}/>
        <Route path="/contactus" element={<ContactUs/>}/>
        <Route path="/ProductDetails" element={<ProductDetails />} />

      </Routes>
    </Layout>
  )
}


export default Router;
