import Header from "./components/Header";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Checkout from "./components/Checkout";
import Login from "./components/Login";
import { useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./config/config";
import { useSetRecoilState } from "recoil";
import { userState } from "./atoms/userAtom";
import CreateAccount from "./components/CreateAccount";
import Home from "./components/Home";
import Payment from "./components/Payment";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import Orders from "./components/Orders";

const stripePromise = loadStripe(
  "pk_test_51LRpr9GigE2Uaq02uDKiAQW58OKpH8mmqFEfd750fWZGqCGx42qS62r3gWpaOG6tTCy9tR9bnVRgkqE2umXyPJKb00fa09dFR7"
);

function App() {
  const setCurrentUser = useSetRecoilState(userState);

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        //User is logged in
        const userCopy = JSON.parse(JSON.stringify(user));
        setCurrentUser(userCopy);
      } else {
        //User is not logged in
        setCurrentUser(null);
      }
    });
  }, [setCurrentUser]);

  return (
    <Router>
      <Routes>
        <Route
          path="/orders"
          element={
            <div>
              <Header />
              <Orders />
            </div>
          }
        />

        <Route path="/createAccount" element={<CreateAccount />} />
        <Route path="/login" element={<Login />} />

        <Route
          path="/checkout"
          element={
            <div>
              <Header />
              <Checkout />
            </div>
          }
        />

        <Route
          path="/payment"
          element={
            <div>
              <Header />
              <Elements stripe={stripePromise}>
                <Payment />
              </Elements>
            </div>
          }
        />

        <Route
          path="/"
          element={
            <div className="app">
              <Header />
              <Home />
            </div>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
