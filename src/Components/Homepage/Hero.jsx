import React from 'react';
import { Link } from 'react-router-dom';
const Hero = () => {
  return (
    <div className='bg-black relative'>
      <section className='overflow-hidden mx-auto max-w-screen-2xl pt-16 relative'>
        <div className='relative'>
          <img src="GetSt.png" className='lg:mt-0 mt-10' alt='' />
          <div>
          <Link to="/ClueCards"><button className="hidden lg:block lg:absolute lg:top-1/2 mt-16 ml-[55vw] animate-border inline-block rounded-xl bg-white bg-gradient-to-r from-gray-50  to-blue-500 bg-[length:400%_400%] p-1">
          <span class="block rounded-xl text-2xl bg-slate-900 px-12 py-4 font-bold text-white"> Get Started </span>
          </button></Link>
          </div>
          <div className='block lg:hidden flex  justify-center'>
          <Link to="/ClueCards"><button class=" animate-border inline-block rounded-xl bg-white bg-gradient-to-r from-gray-50  to-blue-500 bg-[length:400%_400%] p-1">
                            <span class="block rounded-xl text-2xl bg-slate-900 px-12 py-4 font-bold text-white"> Get Started </span>
                        </button></Link>
                    </div>
          </div>
      </section>
    </div>
  );
}

export default Hero;
