import CurrencyFormat from "react-currency-format";

function Subtotal() {
  return (
    <div className="flex flex-col justify-between w-[300px] h-[130px] p-[20px] bg-[#f3f3f3] border border-[#dddddd] rounded-[3px]">
        <CurrencyFormat 
            renderText={(value: string) => (
                <>
                    <p>Subtotal (0 items): <strong>0</strong></p>
                    <small className="flex items-center">
                        <input className="mr-[5px]" type="checkbox" />
                        This order contains a gift
                    </small>
                </>
            )}
            decimalScale={2}
            value={0}
            displayType={"text"}
            thousandSeparator={true}
            prefix={"$"}
        />

        <button className="bg-[#f0c14b] rounded-[2px] w-full h-[30px] border b-color mt-[10px] text-[#111]">Proceed to Checkout</button>
    </div>
  )
}

export default Subtotal