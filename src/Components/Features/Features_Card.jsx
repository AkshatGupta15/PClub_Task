import React from 'react'

export const Features_Card = ({title , icon , desc}) => {
  return (
    <>
    <div className="card bg-base-100 shadow-none border-none">
              <div className="card-body">
                <h2 className="card-title"><span className=' text-blue-300'>{icon}</span>{title}</h2>
                <p className='text-subheading'>{desc}</p>
                {/* <div className="card-actions justify-end">
                  <button className="btn btn-primary">Buy Now</button>
                </div> */}
              </div>
            </div>
    </>
  )
}
