import { SearchIcon, ShoppingCartIcon } from "@heroicons/react/solid";
import { signOut, User } from "firebase/auth";
import { Link } from "react-router-dom";
import { useRecoilValue } from "recoil";
import { cartState } from "../atoms/cartAtom";
import { userState } from "../atoms/userAtom";
import { auth } from "../config/config";

function Header() {
  const cart = useRecoilValue(cartState);
  const user = useRecoilValue(userState);
  const userCopy: User = JSON.parse(JSON.stringify(user));

  const handleAuthentication = () => {
    if (user) {
      signOut(auth)
        .then(() => {})
        .catch((error) => {});
    }
  };

  return (
    <div className="h-[60px] bg-[#131921] flex items-center sticky top-0 z-[100]">
      <Link to="/">
        <img
          className="w-[100px] object-contain my-0 mx-[20px]"
          src="https://i.imgur.com/N1MXViG.png"
          alt="Amazon logo"
        />
      </Link>

      <input className="flex-1 w-2 p-1" type="text" />
      <button className="bg-[#febd69] p-[5px]">
        <SearchIcon className="h-[22px] w-[22px]" />
      </button>

      <div className="flex items-center justify-center">
        <Link onClick={handleAuthentication} to={!user && "/login"}>
          <button className="header-option">
            <span className="first-line">
              {!user
                ? "Hello, Guest"
                : `Hello, ${userCopy?.displayName?.split(" ")[0]}`}
            </span>
            <span className="second-line">
              {userCopy ? "Sign Out" : "Sign In"}
            </span>
          </button>
        </Link>

        <Link to="/orders">
          <button className="header-option">
            <span className="first-line">Returns</span>
            <span className="second-line">& Orders</span>
          </button>
        </Link>

        <button className="header-option-2">
          <span className="first-line">Your</span>
          <span className="second-line">Prime</span>
        </button>

        <Link to="/checkout">
          <button className="flex items-center text-white">
            <ShoppingCartIcon className="h-5 w-5" />
            <span className="second-line mx-[10px]">{cart.length}</span>
          </button>
        </Link>
      </div>
    </div>
  );
}

export default Header;
