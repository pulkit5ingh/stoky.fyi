'use client';
import React, { useEffect } from 'react';
import Image from 'next/image';

import MarketGaugeComponent from '@components/MarketGauge.component';

// const TataMotorsWidget = () => {
//   useEffect(() => {
//     // Load the script dynamically
//     const script = document.createElement('script');
//     script.src = 'https://www.gateway-tt.in/assets/embed.js';
//     script.async = true;
//     document.body.appendChild(script);

//     // Clean up function
//     return () => {
//       document.body.removeChild(script);
//     };
//   }, []);

//   return (
//     <div
//       style={{
//         width: '500px',
//         minHeight: '300px',
//         display: 'flex',
//         alignItems: 'center',
//         justifyContent: 'center',
//       }}
//     >
//       <p
//         className='sc-embed'
//         data-width='500px'
//         data-orders='%5B%7B%22type%22%3A%22buy%22%2C%22quantity%22%3A10%2C%22ticker%22%3A%22TATAMOTORS%22%7D%5D'
//         data-cardsize='big'
//         data-withtt='false'
//         data-withsearch='false'
//       >
//         <strong>Loading widget to trade TATAMOTORS</strong>
//       </p>
//     </div>
//   );
// };

// const SearchBar = () => (
//   <form className='max-w-md mx-auto'>
//     {/* <label
//       htmlFor='default-search'
//       className='mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white'
//     >
//       Search
//     </label> */}
//     <div className='relative'>
//       <div className='absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none'>
//         <svg
//           className='w-6 h-6 text-gray-300'
//           aria-hidden='true'
//           xmlns='http://www.w3.org/2000/svg'
//           fill='none'
//           viewBox='0 0 20 20'
//         >
//           <path
//             stroke='currentColor'
//             strokeLinecap='round'
//             strokeLinejoin='round'
//             strokeWidth={1}
//             d='m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z'
//           />
//         </svg>
//       </div>
//       <input
//         type='search'
//         id='default-search'
//         className='block w-full p-3 pl-10 text-lg text-gray-900 border border-gray-300  bg-gray-100 focus:ring-gray-400 focus:border-gray-400 outline-0 rounded'
//         placeholder='Search stocks ...'
//       />
//       <button
//         type='submit'
//         className='text-white absolute end-1 bottom-1 top-1 bg-primary-500 hover:bg-primary-600 focus:outline-none font-medium text-md px-8 py-2.5 rounded'
//       >
//         Search
//       </button>
//     </div>
//   </form>
// );

const HeroComponent = () => {
  return (
    <div className='px-4 mt-28 text-center'>
      <div className='col-span-12 mb-10'>
        <MarketGaugeComponent />
      </div>
      <div className='grid grid-cols-12 gap-6 mb-10'>
        <div className='col-span-12'>
          <h1
            className='
          text-3xl sm:text-md md:text-4xl lg:text-5xl xl:text-6xl
          pb-5 sm:pb-10md:pb-5 lg:pb-5 xl:pb-5
          text-gray-800 font-extrabold tracking-tight'
          >
            High-Risk, High-Reward, Trading Insights !
          </h1>
          <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-6 gap-2 mb-2'>
            <span></span>
            <kbd
              className='rounded-full p-1 sm:p-4 md:p-4 lg:p-4 xl:p-4
        text-xxs sm:text-xs md:text-xs lg:text-xs xl:text-xs
        font-semibold text-gray-800 bg-gray-100 border border-gray-200 dark:bg-gray-600 dark:text-gray-100 dark:border-gray-500'
            >
              Unlock bold trade ideas and tips.💡
            </kbd>
            <kbd
              className='rounded-full p-1 sm:p-4 md:p-4 lg:p-4 xl:p-4
        text-xxs sm:text-xs md:text-xs lg:text-xs xl:text-xs
        font-semibold text-gray-800 bg-gray-100 border border-gray-200 dark:bg-gray-600 dark:text-gray-100 dark:border-gray-500'
            >
              Maximize your returns with expert strategies.📈
            </kbd>
            <kbd
              className='rounded-full p-1 sm:p-4 md:p-4 lg:p-4 xl:p-4
        text-xxs sm:text-xs md:text-xs lg:text-xs xl:text-xs
        font-semibold text-gray-800 bg-gray-100 border border-gray-200 dark:bg-gray-600 dark:text-gray-100 dark:border-gray-500'
            >
              Subscribe for exclusive access to our top trades.💼
            </kbd>
            <kbd
              className='rounded-full p-1 sm:p-4 md:p-4 lg:p-4 xl:p-4
        text-xxs sm:text-xs md:text-xs lg:text-xs xl:text-xs
        font-semibold text-gray-800 bg-gray-100 border border-gray-200 dark:bg-gray-600 dark:text-gray-100 dark:border-gray-500'
            >
              Join a thriving community of ambitious traders today.📊
            </kbd>
            <span></span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroComponent;

// sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-2
