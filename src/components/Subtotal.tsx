import CurrencyFormat from "react-currency-format";
import { useNavigate } from "react-router-dom";
import { useRecoilValue } from "recoil";
import { cartState, cartTotalState } from "../atoms/cartAtom";

function Subtotal() {
  const navigate = useNavigate();
  const cart = useRecoilValue(cartState);
  const total = useRecoilValue(cartTotalState);

  return (
    <div className="flex flex-col justify-between w-[300px] h-[130px] p-[20px] bg-[#f3f3f3] border border-[#dddddd] rounded-[3px]">
      <CurrencyFormat
        renderText={(value: string) => (
          <>
            <p>
              {`Subtotal (${cart.length} ${
                cart.length === 1 ? "item" : "items"
              }):`}{" "}
              <strong>{value}</strong>
            </p>
            <small className="flex items-center">
              <input className="mr-[5px]" type="checkbox" />
              This order contains a gift
            </small>
          </>
        )}
        decimalScale={2}
        value={total}
        displayType={"text"}
        thousandSeparator={true}
        prefix={"$"}
      />

      <button
        onClick={() => navigate("/payment")}
        disabled={!cart.length}
        className={`${
          !cart.length ? "bg-[#f3f3f3]" : "bg-[#f0c14b]"
        } rounded-[2px] w-full h-[30px] border b-color mt-[10px] text-[#111]`}
      >
        Proceed to Checkout
      </button>
    </div>
  );
}

export default Subtotal;
