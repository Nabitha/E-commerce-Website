import { useEffect } from "react";
import Product from "../../Components/Product"
import useAppContext from "../../Hooks/useAppContext";
const ProductList = () =>{
const {
  productList,
  reload
} = useAppContext();
useEffect(()=>{
  reload()
},[])
    return(
<div> 
      <div className="grid grid-cols-4 gap-2 space-y-5 place-items-center">
        {productList?.map((product, index) => (
          <Product
            key={index}
            productData={product}
          />
        ))}
      </div>
    </div>
  );
        }
export default ProductList;
