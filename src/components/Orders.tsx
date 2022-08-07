import { collection, onSnapshot, orderBy, query } from "firebase/firestore";
import { useEffect, useState } from "react";
import { useRecoilValue } from "recoil";
import { userState } from "../atoms/userAtom";
import { db } from "../config/config";
import Order from "./Order";

function Orders() {
  const user = useRecoilValue(userState);
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    if (user) {
      const orderRef = collection(db, "users", user?.uid, "orders");
      const q = query(orderRef, orderBy("created", "desc"));
      onSnapshot(q, (snapshot) =>
        setOrders(
          snapshot.docs.map((d) => ({
            id: d.id,
            data: d.data(),
          }))
        )
      );
    } else {
      setOrders([]);
    }
  }, [user]);

  return (
    <div className="py-[20px] px-5 md:px-[80px]">
      <h1 className="text-4xl font-extrabold">Your Orders</h1>

      <div className="my-[30px]">
        {orders?.map((order, i) => (
          <Order key={i} order={order} />
        ))}
      </div>
    </div>
  );
}

export default Orders;
