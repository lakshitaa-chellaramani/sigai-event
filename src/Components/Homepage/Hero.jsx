import React from 'react'

const Hero = () => {
    return (
        <div className='bg-black'>
            <section className=' overflow-hidden mx-auto max-w-screen-2xl h-screen pt-10 '>
                <div className='grid lg:grid-cols-2 '>
                    <div className='mt-20 lg:mt-16'>
                        <h1 className='text-5xl header  lg:text-8xl lg:mt-20 font-extrabold text-transparent  bg-clip-text bg-gradient-to-r from-teal-400 to-blue-600 text-center uppercase'>
                            Get ready for the battle
                        </h1>
                        <div className='flex  justify-center mt-10'>
                        <button class=" animate-border inline-block rounded-xl bg-white bg-gradient-to-r from-gray-50  to-blue-500 bg-[length:400%_400%] p-1">
                            <span class="block rounded-xl text-2xl bg-slate-900 px-12 py-4 font-bold text-white"> Get Started </span>
                        </button>
                    </div>



                    </div>
                    <div className='flex justify-center items-center lg:mt-10'>
                        <img src='AI6.png' className=' hidden lg:block' />
                        <img src='AI8.png' className=' mt-10 w-80 block lg:hidden' />
                    </div>
                    

                </div>

            </section>
        </div>
    )
}

export default Hero