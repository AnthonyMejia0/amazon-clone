import { User } from "firebase/auth";
import { Link } from "react-router-dom";
import { useRecoilValue } from "recoil";
import { cartState } from "../atoms/cartAtom";
import { userState } from "../atoms/userAtom";
import CartItem from "./CartItem";

function Payment() {
  const cart = useRecoilValue(cartState);
  const user = useRecoilValue(userState);
  const userCopy: User = JSON.parse(JSON.stringify(user));

  return (
    <div>
      <div className="bg-white">
        <div>
          <h1 className="text-2xl text-center p-[10px] font-normal bg-[#eaeded] border-b border-b-gray-300">
            Checkout (
            <Link to="/checkout" className="text-[#fd9700]">
              {cart.length} {cart.length === 1 ? "item" : "items"}
            </Link>
            )
          </h1>
        </div>

        <div className="pay-section">
          <div className="pay-title">
            <h3 className="text-lg font-bold">Delivery Address</h3>
          </div>
          <div className="flex-[0.8]">
            <p>{userCopy?.email}</p>
            <p>123 React Lane</p>
            <p>Los Angeles, CA</p>
          </div>
        </div>

        <div className="pay-section">
          <div className="pay-title">
            <h3 className="text-lg font-bold">Review items and delivery</h3>
          </div>
          <div className="flex-[0.8]">
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

        <div className="pay-section">
          <div className="pay-title">
            <h3 className="text-lg font-bold">Payment Method</h3>
          </div>
          <div>{/* Stripe Functionality */}</div>
        </div>
      </div>
    </div>
  );
}

export default Payment;
