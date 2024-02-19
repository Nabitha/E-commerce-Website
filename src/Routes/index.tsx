import {Route,Routes} from "react-router-dom"
import Home from "./Home"
import Layout from "./Layout"
import Cart from "./Cart"
import Productlist from "./Productlist"


const Router = () => {
  return (
    <Routes>
        <Route path="" element={<Home/>} />
        <Route path="/cart" element={<Cart/>} />
        <Route path="/products" element={<Productlist/>} />
        <Route path="/hello" element={<div>Hello</div>} />
    </Routes>
  )
}

export default Router