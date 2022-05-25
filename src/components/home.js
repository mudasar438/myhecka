import React from 'react'
import shoping from '../imgs/b18.jpg'
import img2 from '../imgs/img2.jpg'
import img3 from '../imgs/img3.jpg'
import img4 from '../imgs/img4.jpg'
import { useNavigate } from 'react-router-dom'

const Home = () => {
  const Navigate =  useNavigate()

  const shop = ()=>{
    Navigate('/shop')
  }
  
        return (
          <>
          <div classNameName="">
          <div className="py-16 bg-gray-900">
    <div  className="container m-auto px-6 space-y-8 text-gray-500 md:px-12 lg:px-20">
        <div className="justify-center text-center gap-6 md:text-left md:flex lg:items-center  lg:gap-16">
            <div className="order-last mb-6 space-y-6 md:mb-0 md:w-6/12 lg:w-6/12">
                <h1 className="text-2xl text-gray-700 font-bold md:text-3xl">Buy now and benefit up to <span className="text-blue-500">30% off</span></h1>
                <p className="text-lg">Be part of millions people around the world using tailus in modern User Interfaces.</p>
                <div className="flex flex-row-reverse flex-wrap justify-center gap-4 md:gap-6 md:justify-end">
                    <button type="button" onClick={shop} title="Start buying" className="w-full py-3 px-6 text-center rounded-xl transition bg-gray-700 shadow-xl hover:bg-gray-600 active:bg-gray-700 focus:bg-gray-600 sm:w-max">
                        <span className="block text-white font-semibold">
                            Start buying
                        </span>
                    </button>
                    <button type="button" title="more about" className="w-full order-first py-3 px-6 text-center rounded-xl bg-gray-100 transition hover:bg-gray-200 active:bg-gray-300 focus:bg-gray-200 sm:w-max">
                        <span className="block text-gray-600 font-semibold">
                            More about
                        </span>
                    </button>
                </div>
            </div>
            <div className="grid grid-cols-5 grid-rows-4 gap-4 md:w-5/12 lg:w-6/12">
                {/* <div className="col-span-2 row-span-4">
                    <img src="https://tailus.io/sources/blocks/ecommerce-site/preview/images/products/kushagra.webp" className="rounded" width="640" height="960" alt="shoes" loading="lazy"/>
                  
                </div> */}
                {/* <div className="col-span-2 row-span-2">
                    <img  src= className="w-full h-full object-cover object-top rounded-xl" width="640" height="640" alt="shoe" loading="lazy"/>
                </div> */}
                <div className="col-span-5 row-span-5">
                    <img  src={shoping}className="w-full h-full object-cover object-top rounded-xl" width="640" height="427" alt="shoes" loading="lazy"/>
                </div>
            </div>
        </div>
    </div>
</div>
<div className="grid grid-cols-4 mx-2 p-5">
<div className="flex flex-col items-center justify-center max-w-sm mx-auto">
        <div className=' m-4' ><img src={shoping} alt="" srcset="" className='rounded-lg' /></div>

        <div className="w-56 -mt-10 overflow-hidden bg-white rounded-lg shadow-lg md:w-44 dark:bg-gray-800">
            <h3 className="py-2 font-bold tracking-wide text-center text-gray-800 uppercase dark:text-white">Nike Revolt</h3>
            
            <div className="flex items-center justify-between px-3 py-2 bg-gray-200 dark:bg-gray-700">
                <span className="font-bold text-gray-800 dark:text-gray-200">$129</span>
                <button className="px-2 py-1 text-xs font-semibold text-white uppercase transition-colors duration-200 transform bg-gray-800 rounded hover:bg-gray-700 dark:hover:bg-gray-600 focus:bg-gray-700 dark:focus:bg-gray-600 focus:outline-none">Add to cart</button>
            </div>
        </div>
    </div>
    <div className="flex flex-col items-center justify-center max-w-sm mx-auto">
        <div className='rounded-lg m-4' ><img src={shoping} alt="" srcset="" /></div>

        <div className="w-56 -mt-10 overflow-hidden bg-white rounded-lg shadow-lg md:w-64 dark:bg-gray-800">
            <h3 className="py-2 font-bold tracking-wide text-center text-gray-800 uppercase dark:text-white">Nike Revolt</h3>
            
            <div className="flex items-center justify-between px-3 py-2 bg-gray-200 dark:bg-gray-700">
                <span className="font-bold text-gray-800 dark:text-gray-200">$129</span>
                <button className="px-2 py-1 text-xs font-semibold text-white uppercase transition-colors duration-200 transform bg-gray-800 rounded hover:bg-gray-700 dark:hover:bg-gray-600 focus:bg-gray-700 dark:focus:bg-gray-600 focus:outline-none">Add to cart</button>
            </div>
        </div>
    </div>
    
    </div>
          </div>
    
          </>
        );
   
}

export default Home