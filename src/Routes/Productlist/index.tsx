import color from "../../Assets/images/color.svg"
import Product from "../../Components/Product"
import { productlist } from '../../Services';
import useFetch from "../../Hooks/useFetch"
const Productlist = () =>{
const { data } = useFetch<{
        image: string,
        productName:string,
        price:number
        _id:any
        inWishlist:boolean
        inCart:boolean
}[]>(
    productlist )
    return(<>
<div>   
    <div className="flex gap-36 justify-center p-4">
        </div>
      </div>
      <div className="grid grid-cols-4 gap-2 space-y-5 place-items-center">
        {data?.map((product, index) => (
          <Product
            key={index}
            image={product?.image}
            names={product?.productName}
            price={product.price}
            color={color}
            id={product._id}
            wishstatus={product.inWishlist}
            cartstatus={product.inCart}
          />
        ))}
      </div>
    </>
  );
};
export default Productlist;
