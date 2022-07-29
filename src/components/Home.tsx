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

            <div className='flex z-[1] mx-[5px]'>
                <Product 
                  title='CORSAIR K55 RGB PRO-Dynamic RGB Backlighting - Six Macro Keys with Elgato Stream Deck Software Integration-IP42 Dust and Spill Resistant-Detachable Palm Rest-Dedicated Media and Volume Keys, Black'
                  price={49.99}
                  rating={4}
                  img='https://i.imgur.com/cDR0ooH.jpg'
                />

                <Product 
                  title='Echo Dot (3rd Gen, 2018 release) - Our most popular smart speaker with Bluetooth and Alexa - Charcoal'
                  price={29.99}
                  rating={4}
                  img='https://i.imgur.com/ttoIP9X.jpg'
                />
                
                <Product 
                  title='iHealth COVID-19 Antigen Rapid Test, 2 Tests per Pack,FDA EUA Authorized OTC At-home Self Test, Results in 15 Minutes with Non-invasive Nasal Swab, Easy to Use & No Discomfort '
                  price={17.08}
                  rating={4}
                  img='https://i.imgur.com/Auwgt1Q.jpg'
                />
            </div>

            <div className='flex z-[1] mx-[5px]'>
                <Product 
                  title='
                  RitFit Garage & Home Gym Package Includes Optional 1000LBS Power Cage with LAT Pull Down,Weight Bench, Barbell Set with Olympic Barbell'
                  price={1299.99}
                  rating={4}
                  img='https://i.imgur.com/OJXh6mW.jpg'
                />
            </div>
        </div>
    </div>
  )
}

export default Home