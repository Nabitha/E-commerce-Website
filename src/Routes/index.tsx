import {Route,Routes} from "react-router-dom"

import { Login } from "./Home/Login"
import { ForgotPassword } from "./Home/ForgotPassword"
import { Register } from "./Register"
import { OrderCompleted } from "./OrderCompleted"
import { ContactUs } from "./ContactUs"


const Router = () => {
  return (
    <Routes>
    
        <Route path="/login" element={<Login/>}/>
        <Route path="/forgotpassword" element={<ForgotPassword/>}/>
        <Route path="/register" element={<Register/>}/>
        <Route path="/ordercompleted" element={<OrderCompleted/>}/>
        <Route path="/contactus" element={<ContactUs/>}/>



    </Routes>
  )
}

export default Router