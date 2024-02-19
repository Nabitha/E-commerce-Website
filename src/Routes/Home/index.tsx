import Form from "../../Components/InfraStructure/Form";
import ProductCard from "../ProductCard";

import { validateRegister } from "../../Validation";
import MoreDetails from "../MoreDetails";
import RelatedProducts from "../RelatedProducts";

const Home = () => {
  return (
    <div className="flex flex-col justify-center items-center">
      <ProductCard />
      <MoreDetails />
      <RelatedProducts />
    </div>
  );
};

export default Home;
