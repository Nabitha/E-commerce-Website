import {Route,Routes} from "react-router-dom"
import Home from "./Home"
import { Login } from "./Home/Login"
import { ForgotPassword } from "./Home/ForgotPassword"


const Router = () => {
  return (
    <Routes>
        <Route path="" element={<Home/>} />
        <Route path="/hello" element={<div>Hello</div>} />
        <Route path="/login" element={<Login/>}/>
        <Route path="/forgotpassword" element={<ForgotPassword/>}/>



    </Routes>
  )
}

export default Router