import React from 'react'

export const Testinomials_card = ({avatar,alt,desc,name,role}) => {
  return (
    <>
    <div className="card card-compact bg-base-100 shadow-xl rounded-none">
  <figure ><img src={avatar} alt={alt} className='rounded-full  w-20 h-20'/></figure>
  <div className="card-body items-center">
    
    <p>"{desc}"</p>
    <p className="text-subheading text-center">{name}</p>
    
  </div>
</div>
    </>
  )
}
