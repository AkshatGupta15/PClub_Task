import React from 'react'

export const Testinomials_card = ({avatar,alt,desc,name,role}) => {
  return (
    <>
    <div className="w-full card card-compact bg-base-100 shadow-xl rounded-sm lora-400">
  <figure ><img src={avatar} alt={alt} className='rounded-full  w-20 h-20'/></figure>
  <div className="card-body items-center">
    
    <p className='text-sub2'>"{desc}"</p>
    <p className="text-subheading text-center">{name}</p>
    
  </div>
</div>
    </>
  )
}
