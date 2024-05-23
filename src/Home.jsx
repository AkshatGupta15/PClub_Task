import React from 'react'
import Features from './Components/Features/Features'
import Testinomails from './Components/Testonomials/Testinomails'
import More_Products from './Components/Products/More_Products/More_Products'
import TrendingCooler from './Data/TrendingCooler'
import { Banner } from './Components/Hero/Banner'
import AllProduct from "./Data/Data"
const Home = ({filterByCategory}) => {
  return (
    <div className="lg:mx-16 md:mx-8 mx-4 mt-20">
      <div className=''>
        <Banner/>
        
      </div>
          <div className="">
            <Features />
          </div>
          
          <div className=' mx-auto h-[600px] p-4'>
<More_Products products={filterByCategory("Cooler")}  text="Trending Coolers" />
          </div>
          <div>
          <div className="w-full h-64 lg:h-96 overflow-hidden">
          <img
            className="object-cover w-full h-full object-center"
            src="https://www.elistaworld.com/categoryimage/cat_1680270709Desert%20Cooler%20banner%202-%2004-03-2023.jpg"
            alt="Banner 1"
          />
        </div>
          </div>
          <div className=' mx-auto h-[600px] p-4 my-8'>
<More_Products products={filterByCategory("Mattress")}  text="Comfortable Mattress" />
          </div>

          <div>
          <div className="w-full h-64 lg:h-84 overflow-hidden my-10">
          <img
            className="object-cover w-full h-full object-center"
            src="https://d2ki7eiqd260sq.cloudfront.net/Kurlon-Mattress-Store-Near-Me-Monsoon-Dream-Offer1d6713da-fd1d-4980-bfa7-8611c122bfee.jpg"
            alt="Banner 1"
          />
        </div>
          </div>
          
          <div>
            <Testinomails/>
          </div>
        </div>
  )
}

export default Home;