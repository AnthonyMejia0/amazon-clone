import React from 'react'
import Product from './Product'

function Home() {
  return (
    <div className='flex justify-center mx-auto max-w-[1500px]'>
        <div>
            <img 
                className='w-full z-[-1] mb-[-150px] mask' 
                src="https://i.imgur.com/WERPlqW.jpg" 
                alt="Banner" 
            />

            <div className='flex z-[1] mx-[5px]'>
                <Product 
                  title='Sony Playstation 5 Console'
                  price={499.99}
                  rating={5}
                  img='https://i.imgur.com/fiaYbo6.jpg'
                />
                <Product 
                  title='Xbox Series X Console'
                  price={499.99}
                  rating={5}
                  img='https://i.imgur.com/PAKm2hK.jpg'
                />
            </div>
        </div>
    </div>
  )
}

export default Home