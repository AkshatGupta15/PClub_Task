import React from 'react'

import { RotatingLines } from "react-loader-spinner";
export const LoaderPage = () => {
  return (
    <>
    <div>
        <div className='absolute top-0 right-0 bottom-0 left-0 m-auto h-screen z-50 bg-indigo-300 bg-opacity-10 flex items-center justify-center'>
        {/* <span className="loading loading-dots loading-lg "></span> */}
        <div >

                    <RotatingLines
      strokeColor="grey"
      strokeWidth="5"
      animationDuration="0.75"
      width="96"
      visible={true}
    />
                </div>
        </div>
    </div>
    </>
  )
}
