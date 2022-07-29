type Props = {
    title: string;
    price: number;
    rating: number;
    img: string;
}

function Product({ title, price, rating, img }: Props) {
  return (
    <div className='relative flex flex-col items-center justify-end m-[10px] p-[20px] w-full max-h-[400px] min-w-[100px] bg-white z-[1]'>
        <div className='h-[100px] mb-[15px]'>
            <p>{title}</p>
            <p className='mt-[5px]'>
                <small>$</small>
                <strong>{price}</strong>
            </p>
            <div className='flex'>
                {Array(rating).fill(0, 0, rating).map((_, i) => (
                    <p>⭐</p>
                ))}
            </div>
        </div>
        <img 
            className='max-h-[150px] w-full object-contain mb-[15px]' 
            src={img}
            alt={title}
        />
        <button className='bg-[#f0c14b] border b-color text-[#111] mt-[10px] px-1 rounded-sm'>Add To Cart</button>
    </div>
  )
}

export default Product