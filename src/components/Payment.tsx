import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import axios from "../api/axios";
import { User } from "firebase/auth";
import React, { useEffect, useState } from "react";
import CurrencyFormat from "react-currency-format";
import { Link, useNavigate } from "react-router-dom";
import { useRecoilValue, useResetRecoilState } from "recoil";
import { cartState, cartTotalState } from "../atoms/cartAtom";
import { userState } from "../atoms/userAtom";
import CartItem from "./CartItem";
import { db } from "../config/config";
import { doc, setDoc } from "firebase/firestore";

function Payment() {
  const navigate = useNavigate();
  const cart = useRecoilValue(cartState);
  const total = useRecoilValue(cartTotalState);
  const resetCart = useResetRecoilState(cartState);

  const user = useRecoilValue(userState);
  const userCopy: User = JSON.parse(JSON.stringify(user));

  const stripe = useStripe();
  const elements = useElements();

  const [error, setError] = useState(null);
  const [disabled, setDisabled] = useState(true);
  const [succeeded, setSucceeded] = useState(false);
  const [processing, setProcessing] = useState(false);
  const [clientSecret, setClientSecret] = useState("");

  useEffect(() => {
    if (total === 0) return;
    const getClientSecret = async () => {
      const fixedTotal = Math.round(total * 100);
      try {
        const response = await axios({
          method: "post",
          url: `/payments/create?total=${fixedTotal}`,
        });
        setClientSecret(response.data.clientSecret);
      } catch (error) {
        console.log(error.message);
      }
    };
    getClientSecret();
  }, [cart, total]);

  //console.log("The secret is >>>", clientSecret);

  const handleChange = (e: any) => {
    setDisabled(e.empty || cart.length === 0);
    setError(e.error ? e.error.message : "");
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setProcessing(true);

    if (!stripe || !elements) {
      return;
    }

    await stripe
      .confirmCardPayment(clientSecret, {
        payment_method: {
          card: elements.getElement(CardElement),
        },
      })
      .then((result) => {
        if (result.error) {
          console.log(result.error.message);
          setProcessing(false);
        } else {
          const paymentRef = doc(
            db,
            "users",
            userCopy?.uid,
            "orders",
            result.paymentIntent.id
          );
          setDoc(paymentRef, {
            cart: cart,
            amount: result.paymentIntent.amount,
            created: result.paymentIntent.created,
          });

          setSucceeded(true);
          setError(null);
          setProcessing(false);

          resetCart();
          navigate("/orders", { replace: true });
        }
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

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
            <h3 className="text-lg font-extrabold">Delivery Address</h3>
          </div>
          <div className="flex-[0.8] px-10 md:px-0">
            <p>{user?.displayName}</p>
            <p>123 React Lane</p>
            <p>Los Angeles, CA</p>
          </div>
        </div>

        <div className="pay-section-2">
          <div className="pay-title">
            <h3 className="text-lg pb-5 md:pb-0 font-extrabold">
              Review items and delivery
            </h3>
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

        <div className="pay-section-2">
          <div className="pay-title">
            <h3 className="text-lg font-extrabold">Payment Method</h3>
          </div>
          <div className="flex-[0.8]">
            <form onSubmit={handleSubmit} className="max-w-[500px]">
              <CardElement
                onChange={handleChange}
                className="py-3 md:pt-0 md:pb-3"
              />

              <div>
                <CurrencyFormat
                  renderText={(value: string) => (
                    <h3 className="text-lg font-extrabold">
                      Order Total: {value}
                    </h3>
                  )}
                  decimalScale={2}
                  value={total}
                  displayType={"text"}
                  thousandSeparator={true}
                  prefix={"$"}
                />

                <button
                  className={`${
                    disabled ? "bg-[#f3f3f3]" : "bg-[#f0c14b]"
                  } rounded-[2px] w-full h-[30px] border b-color mt-[10px] text-[#111]`}
                  disabled={processing || disabled || succeeded}
                >
                  <span>
                    {processing ? <p>Processing...</p> : "Place Order"}
                  </span>
                </button>
              </div>

              {error && <div>{error}</div>}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Payment;
