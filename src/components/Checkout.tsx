import Subtotal from "./Subtotal"

function Checkout() {
  return (
    <div className="flex p-[20px] bg-white h-[max-content]">
        <div>
            <img className="w-full mb-[10px]" src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg" alt="Sample" />
            <div>
                <h2 className="mr-[10px] p-[10px] border-b border-b-gray-400">Your Shopping Cart</h2>
            </div>
        </div>

        <div>
            <Subtotal />
        </div>
    </div>
  )
}

export default Checkout