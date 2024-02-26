import Product from "../../Components/Product"
import useAppContext from "../../Hooks/useAppContext";
const Productist = () =>{
const {
  productList
} = useAppContext();
    return(<>
<div>   
    <div className="flex gap-36 justify-center p-4">
        </div>
      </div>
      <div className="grid grid-cols-4 gap-2 space-y-5 place-items-center">
        {productList?.map((product, index) => (
          <Product
            key={index}
            image={product?.image}
            names={product?.productName}
            price={product.price}
            id={product._id}
            wishstatus={product.inWishlist}
            cartstatus={product.inCart}
          />
        ))}
      </div>
    </>
  );
        }
export default Productist;
