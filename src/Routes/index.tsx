import { Route, Routes } from "react-router-dom";
import Home from "./Home";
import ProductDetails from "./ProductDetails";

const Router = () => {
  return (
    <Routes>
      <Route path="" element={<Home />} />
      <Route path="/ProductDetails" element={<ProductDetails />} />
    </Routes>
  );
};

export default Router;
