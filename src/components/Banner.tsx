import React from 'react'
import banner from '../assets/banner-stack.png';


export default function Banner() {
  return (
    <div className='flex flex-col md:flex-row items-center justify-between gap-8 p-4 sm:p-4 md:px-3 md:py-20 max-w-7xl my-0 mx-auto'>
        {/* Text-container */}
        <div className='flex-1 text-center md:text-left'>
            <h1 className='text-4xl md:text-6xl font-bold mb-4'>Build Your Ideal <br/><div className='text-5xl font-bold bg-gradient-to-r from-[#FF4500] via-[#E91E63] to-[#8A2BE2] bg-clip-text text-transparent'>Development Stack</div></h1>
        </div>
        {/* image-container */}
        <div className="flex-1 flex justify-center md:justify-end">
            <img src={banner} alt="banner" className="w-full max-w-lg object-contain" />
        </div>
    </div>
  );
}


