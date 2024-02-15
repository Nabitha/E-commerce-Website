import {Route,Routes} from "react-router-dom"
import Home from "./Home"
import Layout from "./Layout"
import Cart from "./Cart"


const Router = () => {
  return (
    <Routes>
        <Route path="" element={<Home/>} />
        <Route path="/layout" element={<Layout/>} />
        <Route path="/cart" element={<Cart/>} />
        <Route path="/hello" element={<div>Hello</div>} />
    </Routes>
  )
}

export default Router