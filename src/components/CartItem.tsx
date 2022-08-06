import { useRecoilState } from "recoil";
import { cartItem, cartState } from "../atoms/cartAtom";

type Props = {
  id: number;
  title: string;
  price: number;
  rating: number;
  img: string;
  buttonDisabled?: boolean;
};

function CartItem({ id, title, price, rating, img, buttonDisabled }: Props) {
  const [cart, setCart] = useRecoilState(cartState);

  const removeFromCheckout = () => {
    let newCart = [] as cartItem[];
    for (let i: number = 0; i < cart.length; i += 1) {
      if (i !== id) {
        newCart.push(cart[i]);
      }
    }
    setCart(newCart);
  };

  return (
    <div className="flex my-[20px]">
      <img
        className="h-[180px] w-[180px] object-contain"
        src={img}
        alt="Cart item"
      />

      <div className="pl-[20px]">
        <p className="text-[11px] md:text-[15px] lg:text-[17px] font-extrabold line-clamp-6">
          {title}
        </p>
        <p className="flex items-center space-x-[1px]">
          <small>$</small>
          <strong>{price}</strong>
        </p>

        <div className="flex">
          {Array(rating)
            .fill(0, 0, rating)
            .map((_, i) => (
              <p key={i}>⭐</p>
            ))}
        </div>

        {!buttonDisabled && (
          <button
            onClick={removeFromCheckout}
            className="bg-[#f0c14b] border b-color text-[#111] mt-[10px] px-1 rounded-sm"
          >
            Remove from cart
          </button>
        )}
      </div>
    </div>
  );
}

export default CartItem;
