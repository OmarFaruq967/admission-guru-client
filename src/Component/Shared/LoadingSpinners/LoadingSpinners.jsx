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
      <ScaleLoader size={100} color='#041838' />
    </div>
  )
};

export default LoadingSpinners;
