import React from 'react'
import Product_Card from './Product_Card'

const Product_Page = ({filteredItems}) => {
      // console.log(filteredItems)
  return (
    <>
    <div className='max-w-screen-2xl w-[100%] mx-auto mt-10'>
      <div className='flex'>
        {/* sidebar */}
        {/* <div className='hidden sm:block w-1/4  border-r-2 border-slate-100 fixed h-[100vh] -z-10'>
          helllo
        </div> */}
      
        <div className=" px-4 mt-20"> 
            <div className='mx-auto'>
                <div className='flex flex-wrap items-center justify-center gap-3 py-8'>
                  {filteredItems.map((product, index)=> <Product_Card more_info={product} key={index}/>)}

                
                
                </div>
                </div>
            
        </div>
      </div>
      </div>
    </>
  )
}
export default Product_Page;
