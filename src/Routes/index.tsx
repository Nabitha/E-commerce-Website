import {Route,Routes} from "react-router-dom"
import Home from "./Home"
import Layout from "../Components/Layout"
import Cart from "./Cart"
import Productlist from "./Productlist"


const Router = () => {
  return (
    <Layout>
      <Routes>
          <Route path="/cart" element={<Cart/>} />
          <Route path="/products" element={<Productlist/>} />
      </Routes>
    </Layout>
  )
}

export default Router