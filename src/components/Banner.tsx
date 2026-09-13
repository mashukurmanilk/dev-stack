import banner from '../assets/banner-stack.png';


export default function Banner() {
  return (
    <div className='flex flex-col md:flex-row items-center justify-between gap-8 p-4 sm:p-4 md:px-8 md:py-14 max-w-7xl mx-auto'>
        {/* Text-container */}
        <div className='flex-1 flex flex-col text-center md:text-left md:space-y-3'>
            <h1 className='text-5xl md:text-6xl font-bold'>Build Your Ideal <div className='text-5xl md:text-6xl font-bold text-brand-gradient'>Development Stack</div></h1>
            <p className='md:max-w-3xl text-xl text-gray-500 my-4'>Explore frontend, backend, database and tooling options,<br/>compare them side by side, and put together the stack that fits your next project</p>
            <div className='flex justify-center md:justify-start my-12'>
              <div className='flex flex-row justify-between gap-3'>
                <button className="bg-brand-gradient text-white font-semibold py-3 px-4 rounded-xl transition duration-300 w-fit cursor-pointer">Explore Technologies</button>
                <button className="py-3 px-12 border border-gray-200 rounded-xl transition duration-300 cursor-pointer">Learn More</button>
              </div> 
            </div>
        </div>
        {/* image-container */}
        <div className="flex-1 flex justify-center md:justify-end md:-translate-y-3 md:translate-x-8">
            <img src={banner} alt="banner" className="w-full max-w-lg object-contain" />
        </div>
    </div>
  );
}