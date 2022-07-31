import { useRecoilState } from "recoil";
import { cartState } from "../atoms/cartAtom";
import CartItem from "./CartItem";
import Subtotal from "./Subtotal";

function Checkout() {
  const [cart] = useRecoilState(cartState);

  return (
    <div className="flex p-[20px] bg-white h-[max-content]">
      <div>
        <img
          className="w-full mb-[10px]"
          src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg"
          alt="Sample"
        />
        <div>
          <h2 className="mr-[10px] p-[10px] border-b border-b-gray-400 text-4xl font-bold">
            Your Shopping Cart
          </h2>
        </div>

        <div>
          {cart?.map((item, i) => (
            <CartItem
              key={i}
              id={i}
              title={item.title}
              price={item.price}
              rating={item.rating}
              img={item.img}
            />
          ))}
        </div>
      </div>

      <div>
        <Subtotal />
      </div>
    </div>
  );
}

export default Checkout;
