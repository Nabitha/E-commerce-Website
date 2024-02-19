import {Route,Routes} from "react-router-dom"
import Home from "./Home"
import Layout from "../Components/Layout"
import Cart from "./Cart"
import Productlist from "./Productlist"


const Router = () => {
  return (
    <Layout>
      <Routes>
          <Route path="" element={<Home/>} />
          <Route path="/cart" element={<Cart/>} />
          <Route path="/products" element={<Productlist/>} />
          <Route path="/hello" element={<div>Hello</div>} />
      </Routes>
    </Layout>
  )
}

export default Router