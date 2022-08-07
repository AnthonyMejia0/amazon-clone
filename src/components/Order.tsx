import moment from "moment";
import CurrencyFormat from "react-currency-format";
import CartItem from "./CartItem";

function Order({ order }) {
  return (
    <div className="p-[40px] my-[20px] border border-gray-300 bg-white rounded-md relative">
      <h2 className="text-2xl font-extrabold">Order</h2>
      <p className="absolute top-[40px] right-[20px]">
        <small>{order.id}</small>
      </p>
      <p>{moment.unix(order.data.created).format("MMMM Do YYYY, h:mma")}</p>
      {order.data.cart?.map((item, i) => (
        <CartItem
          key={i}
          id={item.id}
          title={item.title}
          price={item.price}
          rating={item.rating}
          img={item.img}
          buttonDisabled={true}
        />
      ))}
      <CurrencyFormat
        renderText={(value: string) => (
          <h3 className="text-lg font-bold text-right">Order Total: {value}</h3>
        )}
        decimalScale={2}
        value={order.data.amount / 100}
        displayType={"text"}
        thousandSeparator={true}
        prefix={"$"}
      />
    </div>
  );
}

export default Order;
