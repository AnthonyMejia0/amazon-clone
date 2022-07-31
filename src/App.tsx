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
          path="/"
          element={
            <div>
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
