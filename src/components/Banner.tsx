import banner from '../assets/banner-stack.png';


export default function Banner() {
  return (
    <div className='flex flex-col md:flex-row items-center justify-between gap-8 p-4 sm:p-4 md:px-3 md:py-14 max-w-7xl my-0 mx-auto'>
        {/* Text-container */}
        <div className='flex-1 flex flex-col text-center md:text-left md:space-y-5'>
            <h1 className='text-5xl md:text-6xl font-extrabold'>Build Your Ideal <br/><div className='text-5xl md:text-6xl font-extrabold bg-linear-to-r from-[#FD5425] via-[#DA1E77] to-[#AB2AB4] bg-clip-text text-transparent'>Development Stack</div></h1>
            <p className='md:max-w-3xl text-xl text-gray-600 my-6'>Explore frontend, backend, database and tooling options,<br/>compare them side by side, and put together the stack that fits your next project</p>
            <div className='flex justify-center md:justify-start my-10'>
              <div className='flex flex-row justify-between gap-3'>
                <button className="bg-linear-to-r from-[#FD5425] via-[#F46248] to-[#EC4897] text-white font-semibold py-3 px-4 rounded-xl transition duration-300 w-fit cursor-pointer">Explore Technologies</button>
                <button className="py-3 px-12 border border-gray-200 rounded-xl transition duration-300 cursor-pointer">Learn More</button>
              </div> 
            </div>
        </div>
        {/* image-container */}
        <div className="flex-1 flex justify-center md:justify-end">
            <img src={banner} alt="banner" className="w-full max-w-lg object-contain" />
        </div>
    </div>
  );
}