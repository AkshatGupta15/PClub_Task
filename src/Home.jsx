import React from 'react'
import Features from './Components/Features/Features'
import { Product_Page } from './Components/Products/Product_Page'
import Testinomails from './Components/Testonomials/Testinomails'
import More_Products from './Components/Products/More_Products/More_Products'

import TrendingCooler from './Data/TrendingCooler'
import AllProducts from "./Data/Data"
export const Home = () => {
  return (
    <div className="lg:mx-16 md:mx-8 mx-4 mt-20">
          <div className="">
            <Features />
          </div>
          <div className=' mx-auto h-[600px] p-4 border'>
<More_Products products={TrendingCooler} link = {""} text="Today’s best deal" />
          </div>
          <div>
            {/* <Product_Page  filteredItems={filteredItems}/> */}
          </div>
          <div>
            <Testinomails/>
          </div>
        </div>
  )
}
