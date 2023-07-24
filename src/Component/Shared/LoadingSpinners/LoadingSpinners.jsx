import React from "react";
import { ScaleLoader } from 'react-spinners'

const LoadingSpinners = () => {
  return (
    <div
      className='
      h-[70vh]
      flex 
      flex-col 
      justify-center 
      items-center 
    '
    >
      <ScaleLoader size={100} color='red' />
    </div>
  )
};

export default LoadingSpinners;
