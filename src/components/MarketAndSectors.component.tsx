'use client';
import React, { useState, useEffect } from 'react';
import axios from 'axios';

import Image from 'next/image';

import greenTriangle from '@/public/images/green-triangle.png';
import redTriangle from '@/public/images/red-triangle.png';

const indexTypes = {
  NIFTY: 'NIFTY',
  NIFTY_NEXT_50: 'NIFTYJR',
  NIFTYMIDCAP: 'NIFTYMIDCAP',
  NIFTYSMALL: 'NIFTYSMALL',
  BANKNIFTY: 'BANKNIFTY',
  SENSEX: 'SENSEX',
};

const SkeletonLoader = () => (
  <div className='bg-white my-20 px-4 mx-auto text-center'>
    <div className='grid grid-cols-3 sm:grid-cols-2 lg:grid-cols-6 gap-2 mb-2'>
      {[...Array(6)].map((_, index) => (
        <dl
          key={index}
          className='border border-gray-200 dark:border-gray-600 bg-gray-100 dark:bg-gray-700 flex flex-col items-center justify-center h-[78px]'
        >
          <div className='animate-pulse'>
            <div className='w-20 h-4 bg-gray-200 mb-1'></div>
            <div className='w-20 h-4 bg-gray-200 mb-1'></div>
            <div className='w-20 h-4 bg-gray-200'></div>
          </div>
        </dl>
      ))}
    </div>
  </div>
);

const MarketAndSectorComponent = () => {
  const [niftyData, setNiftyData] = useState([]);
  const [niftyNext50Data, setNiftyNext50Data] = useState([]);
  const [niftyMidData, setNiftyMidData] = useState([]);
  const [niftySmallData, setNiftySmallData] = useState([]);
  const [niftyBankData, setNiftyBankData] = useState([]);
  const [sensexData, setSensexData] = useState([]);
  const [isLoading, setLoading] = useState(true);

  const fetchData = async () => {
    try {
      const niftyPromise = axios.get(
        `https://portal.tradebrains.in/api/index/${indexTypes.NIFTY}/prices?days=1&type=INTRADAY&format=json`,
        {}
      );
      const niftyNext50Promise = axios.get(
        `https://portal.tradebrains.in/api/index/${indexTypes.NIFTY_NEXT_50}/prices?days=1&type=INTRADAY&format=json`,
        {}
      );
      const niftyMidPromise = axios.get(
        `https://portal.tradebrains.in/api/index/${indexTypes.NIFTYMIDCAP}/prices?days=1&type=INTRADAY&format=json`,
        {}
      );
      const niftySmallPromise = axios.get(
        `https://portal.tradebrains.in/api/index/${indexTypes.NIFTYSMALL}/prices?days=1&type=INTRADAY&format=json`,
        {}
      );
      const niftyBankPromise = axios.get(
        `https://portal.tradebrains.in/api/index/${indexTypes.BANKNIFTY}/prices?days=1&type=INTRADAY&format=json`,
        {}
      );
      const sensexPromise = axios.get(
        `https://portal.tradebrains.in/api/index/${indexTypes.SENSEX}/prices?days=1&type=INTRADAY&format=json`,
        {}
      );

      const [
        niftyResponse,
        niftyNext50Response,
        niftyMidResponse,
        niftySmallResponse,
        niftyBankResponse,
        sensexDataResponse,
      ] = await Promise.all([
        niftyPromise,
        niftyNext50Promise,
        niftyMidPromise,
        niftySmallPromise,
        niftyBankPromise,
        sensexPromise,
      ]);

      setNiftyData(niftyResponse.data);
      setNiftyNext50Data(niftyNext50Response.data);
      setNiftyMidData(niftyMidResponse.data);
      setNiftySmallData(niftySmallResponse.data);
      setNiftyBankData(niftyBankResponse.data);
      setSensexData(sensexDataResponse.data);
      setLoading(false);
    } catch (error) {
      console.error('Error fetching data:', error);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  if (isLoading) {
    return <SkeletonLoader />;
  }

  return (
    <>
      {/*
      <div className='max-w-screen-xl mx-auto py-8 px-4 lg:py-16 lg:px-6'>
        <div className='text-center mb-10'>
          <h2 className='text-4xl tracking-tight font-bold text-primary-800'>
            Highlighted Features
          </h2>
        </div>
        <div className='flex flex-col md:flex-row'>
          <div className='mr-0 md:mr-8 mb-6 md:mb-0'>
            <img
              className='w-1/2 md:w-full mx-auto'
              src='https://placeholder.pics/svg/400'
              alt='can_help_banner'
            />
          </div>
          <div className='flex-1 flex flex-col sm:flex-row flex-wrap -mb-4 -mx-2'>
            <div className='w-full sm:w-1/2 mb-4 px-2 '>
              <div className='h-full py-4 px-6 border border-green-500 border-t-0 border-l-0 rounded-br-xl'>
                <h3 className='text-2xl font-bold text-md mb-6'>
                  Dynamic Personalization:
                </h3>
                <p className='text-xs sm:text-xs md:text-xs lg:text-sm xl:text-sm'>
                  Our platform leverages user data and behavior to provide a
                  highly personalized experience, with dynamic content and
                  product recommendations that change in real-time.
                </p>
              </div>
            </div>
            <div className='w-full sm:w-1/2 mb-4 px-2 '>
              <div className='h-full py-4 px-6 border border-green-500 border-t-0 border-l-0 rounded-br-xl'>
                <h3 className='text-2xl font-bold text-md mb-6'>
                  Mobile-Optimized Interface
                </h3>
                <p className='text-xs sm:text-xs md:text-xs lg:text-sm xl:text-sm'>
                  {' '}
                  Our website is designed with a mobile-first approach, offering
                  a seamless browsing experience across all devices, including
                  smartphones and tablets.
                </p>
              </div>
            </div>
            <div className='w-full sm:w-1/2 mb-4 px-2 '>
              <div className='h-full py-4 px-6 border border-green-500 border-t-0 border-l-0 rounded-br-xl'>
                <h3 className='text-2xl font-bold text-md mb-6'>
                  24/7 Customer Support
                </h3>
                <p className='text-xs sm:text-xs md:text-xs lg:text-sm xl:text-sm'>
                  ur U.S.-based customer support team is available around the
                  clock to answer any questions, resolve any issues, and provide
                  helpful solutions. Whether it's through email, phone, or live
                  chat, we're always here to support you.
                </p>
              </div>
            </div>
            <div className='w-full sm:w-1/2 mb-4 px-2 '>
              <div className='h-full py-4 px-6 border border-green-500 border-t-0 border-l-0 rounded-br-xl'>
                <h3 className='text-2xl font-bold text-md mb-6'>
                  Secure Payment Processing
                </h3>
                <p className='text-xs sm:text-xs md:text-xs lg:text-sm xl:text-sm'>
                  We use cutting-edge security measures to protect our
                  customers' sensitive information and ensure the safety of all
                  transactions made on our site.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      */}

      <div className='bg-white px-4 mx-auto text-center my-20'>
        <div className='grid grid-cols-3 sm:grid-cols-2 lg:grid-cols-6 gap-2 mb-2'>
          {niftyData[0] && (
            <dl
              className={`
            ${
              (niftyData[0] as any).percent < 0
                ? 'border-red-100 border-1 bg-red-50'
                : 'border-green-100 border-1 bg-green-50'
            }
          border-2 border-solid flex flex-col items-center justify-center h-[78px]
          `}
            >
              <p
                className={`text-xs sm:text-xs md:text-xs lg:text-sm xl:text-sm font-bold`}
              >
                <span className='p-1'>
                  {(niftyData[0] as any).percent > 0 ? (
                    <Image
                      className='inline-block pb-1'
                      src={greenTriangle}
                      alt='Green Triangle'
                      width={20}
                      height={20}
                    />
                  ) : (
                    <Image
                      className='inline-block pb-1'
                      src={redTriangle}
                      alt='Red Triangle'
                      width={20}
                      height={20}
                    />
                  )}
                </span>
                {indexTypes.NIFTY}
              </p>
              <dd>
                <span className='font-thin text-xs sm:text-xs md:text-xs lg:text-sm xl:text-sm'>
                  {(niftyData[0] as any).close}{' '}
                </span>
                <span
                  className={`text-xs sm:text-xs md:text-xs lg:text-sm xl:text-sm font-extrabold ${
                    (niftyData[0] as any).percent < 0
                      ? 'text-red-600 border-1'
                      : 'text-green-600 border-1'
                  }`}
                >
                  ({(niftyData[0] as any).percent}%)
                </span>
              </dd>
            </dl>
          )}
          {niftyNext50Data[0] && (
            <dl
              className={`
            ${
              (niftyNext50Data[0] as any).percent < 0
                ? 'border-red-100 border-1 bg-red-50'
                : 'border-green-100 border-1 bg-green-50'
            }
          border-2 border-solid flex flex-col items-center justify-center h-[78px]
          `}
            >
              <p
                className={`text-xs sm:text-xs md:text-xs lg:text-sm xl:text-sm font-bold`}
              >
                <span className='p-1'>
                  {(niftyNext50Data[0] as any).percent > 0 ? (
                    <Image
                      className='inline-block pb-1'
                      src={greenTriangle}
                      alt='Green Triangle'
                      width={20}
                      height={20}
                    />
                  ) : (
                    <Image
                      className='inline-block pb-1'
                      src={redTriangle}
                      alt='Red Triangle'
                      width={20}
                      height={20}
                    />
                  )}
                </span>
                {indexTypes.NIFTY_NEXT_50}
              </p>
              <dd>
                <span className='font-thin text-xs sm:text-xs md:text-xs lg:text-sm xl:text-sm'>
                  {(niftyNext50Data[0] as any).close}{' '}
                </span>
                <span
                  className={`text-xs sm:text-xs md:text-xs lg:text-sm xl:text-sm font-extrabold ${
                    (niftyNext50Data[0] as any).percent < 0
                      ? 'text-red-600 border-1'
                      : 'text-green-600 border-1'
                  }`}
                >
                  ({(niftyNext50Data[0] as any).percent}%)
                </span>
              </dd>
            </dl>
          )}
          {niftyMidData[0] && (
            <dl
              className={`
            ${
              (niftyMidData[0] as any).percent < 0
                ? 'border-red-100 border-1 bg-red-50'
                : 'border-green-100 border-1 bg-green-50'
            }
          border-2 border-solid flex flex-col items-center justify-center h-[78px]
          `}
            >
              <p
                className={`text-xs sm:text-xs md:text-xs lg:text-sm xl:text-sm font-bold`}
              >
                <span className='p-1'>
                  {(niftyMidData[0] as any).percent > 0 ? (
                    <Image
                      className='inline-block pb-1'
                      src={greenTriangle}
                      alt='Green Triangle'
                      width={20}
                      height={20}
                    />
                  ) : (
                    <Image
                      className='inline-block pb-1'
                      src={redTriangle}
                      alt='Red Triangle'
                      width={20}
                      height={20}
                    />
                  )}
                </span>
                {indexTypes.NIFTYMIDCAP}
              </p>
              <dd>
                <span className='font-thin text-xs sm:text-xs md:text-xs lg:text-sm xl:text-sm'>
                  {(niftyMidData[0] as any).close}{' '}
                </span>
                <span
                  className={`text-xs sm:text-xs md:text-xs lg:text-sm xl:text-sm font-extrabold ${
                    (niftyMidData[0] as any).percent < 0
                      ? 'text-red-600 border-1'
                      : 'text-green-600 border-1'
                  }`}
                >
                  ({(niftyMidData[0] as any).percent}%)
                </span>
              </dd>
            </dl>
          )}
          {niftySmallData[0] && (
            <dl
              className={`
            ${
              (niftySmallData[0] as any).percent < 0
                ? 'border-red-100 border-1 bg-red-50'
                : 'border-green-100 border-1 bg-green-50'
            }
          border-2 border-solid flex flex-col items-center justify-center h-[78px]
          `}
            >
              <p
                className={`text-xs sm:text-xs md:text-xs lg:text-sm xl:text-sm font-bold`}
              >
                <span className='p-1'>
                  {(niftySmallData[0] as any).percent > 0 ? (
                    <Image
                      className='inline-block pb-1'
                      src={greenTriangle}
                      alt='Green Triangle'
                      width={20}
                      height={20}
                    />
                  ) : (
                    <Image
                      className='inline-block pb-1'
                      src={redTriangle}
                      alt='Red Triangle'
                      width={20}
                      height={20}
                    />
                  )}
                </span>
                {indexTypes.NIFTYSMALL}
              </p>
              <dd>
                <span className='font-thin text-xs sm:text-xs md:text-xs lg:text-sm xl:text-sm'>
                  {(niftySmallData[0] as any).close}{' '}
                </span>
                <span
                  className={`text-xs sm:text-xs md:text-xs lg:text-sm xl:text-sm font-extrabold ${
                    (niftySmallData[0] as any).percent < 0
                      ? 'text-red-600 border-1'
                      : 'text-green-600 border-1'
                  }`}
                >
                  ({(niftySmallData[0] as any).percent}%)
                </span>
              </dd>
            </dl>
          )}
          {niftyBankData[0] && (
            <dl
              className={`
            ${
              (niftyBankData[0] as any).percent < 0
                ? 'border-red-100 border-1 bg-red-50'
                : 'border-green-100 border-1 bg-green-50'
            }
          border-2 border-solid flex flex-col items-center justify-center h-[78px]
          `}
            >
              <p
                className={`text-xs sm:text-xs md:text-xs lg:text-sm xl:text-sm font-bold`}
              >
                <span className='p-1'>
                  {(niftyBankData[0] as any).percent > 0 ? (
                    <Image
                      className='inline-block pb-1'
                      src={greenTriangle}
                      alt='Green Triangle'
                      width={20}
                      height={20}
                    />
                  ) : (
                    <Image
                      className='inline-block pb-1'
                      src={redTriangle}
                      alt='Red Triangle'
                      width={20}
                      height={20}
                    />
                  )}
                </span>
                {indexTypes.BANKNIFTY}
              </p>
              <dd>
                <span className='font-thin text-xs sm:text-xs md:text-xs lg:text-sm xl:text-sm'>
                  {(niftyBankData[0] as any).close}{' '}
                </span>
                <span
                  className={`text-xs sm:text-xs md:text-xs lg:text-sm xl:text-sm font-extrabold ${
                    (niftyBankData[0] as any).percent < 0
                      ? 'text-red-600 border-1'
                      : 'text-green-600 border-1'
                  }`}
                >
                  ({(niftyBankData[0] as any).percent}%)
                </span>
              </dd>
            </dl>
          )}
          {sensexData[0] && (
            <dl
              className={`
              ${
                (sensexData[0] as any).percent < 0
                  ? 'border-red-100 border-1 bg-red-50'
                  : 'border-green-100 border-1 bg-green-50'
              }
            border-2 border-solid flex flex-col items-center justify-center h-[78px]
            `}
            >
              <p
                className={`text-xs sm:text-xs md:text-xs lg:text-sm xl:text-sm font-bold`}
              >
                <span className='p-1'>
                  {(sensexData[0] as any).percent > 0 ? (
                    <Image
                      className='inline-block pb-1'
                      src={greenTriangle}
                      alt='Green Triangle'
                      width={20}
                      height={20}
                    />
                  ) : (
                    <Image
                      className='inline-block pb-1'
                      src={redTriangle}
                      alt='Red Triangle'
                      width={20}
                      height={20}
                    />
                  )}
                </span>
                {indexTypes.SENSEX}
              </p>
              <dd>
                <span className='font-thin text-xs sm:text-xs md:text-xs lg:text-sm xl:text-sm'>
                  {(sensexData[0] as any).close}{' '}
                </span>
                <span
                  className={`text-xs sm:text-xs md:text-xs lg:text-sm xl:text-sm font-extrabold ${
                    (sensexData[0] as any).percent < 0
                      ? 'text-red-600 border-1'
                      : 'text-green-600 border-1'
                  }`}
                >
                  ({(sensexData[0] as any).percent}%)
                </span>
              </dd>
            </dl>
          )}
        </div>
      </div>

      {/*
      <div className='bg-gray-50 dark:bg-gray-700 p-3'>
        <div className='grid grid-cols-3 sm:grid-cols-2 lg:grid-cols-6 gap-2 mb-2'>
          <dl className='bg-orange-50 flex flex-col items-center justify-center h-[78px]'>
            <dt className='w-8 h-8 rounded-full bg-orange-100 dark:bg-gray-500 text-orange-600 dark:text-orange-300 text-xs sm:text-xs md:text-xs lg:text-sm xl:text-sm font-medium flex items-center justify-center mb-1'>
              12
            </dt>
            <dd className='text-orange-600 dark:text-orange-300 text-xs sm:text-xs md:text-xs lg:text-sm xl:text-sm font-medium'>
              To do
            </dd>
          </dl>
          <dl className='bg-teal-50 flex flex-col items-center justify-center h-[78px]'>
            <dt className='w-8 h-8 rounded-full bg-teal-100 dark:bg-gray-500 text-teal-600 dark:text-teal-300 text-xs sm:text-xs md:text-xs lg:text-sm xl:text-sm font-medium flex items-center justify-center mb-1'>
              23
            </dt>
            <dd className='text-teal-600 dark:text-teal-300 text-xs sm:text-xs md:text-xs lg:text-sm xl:text-sm font-medium'>
              In progress
            </dd>
          </dl>
          <dl className='bg-blue-50 flex flex-col items-center justify-center h-[78px]'>
            <dt className='w-8 h-8 rounded-full bg-blue-100 dark:bg-gray-500 text-blue-600 dark:text-blue-300 text-xs sm:text-xs md:text-xs lg:text-sm xl:text-sm font-medium flex items-center justify-center mb-1'>
              64
            </dt>
            <dd className='text-blue-600 dark:text-blue-300 text-xs sm:text-xs md:text-xs lg:text-sm xl:text-sm font-medium'>
              Done
            </dd>
          </dl>
          <dl className='bg-orange-50 flex flex-col items-center justify-center h-[78px]'>
            <dt className='w-8 h-8 rounded-full bg-orange-100 dark:bg-gray-500 text-orange-600 dark:text-orange-300 text-xs sm:text-xs md:text-xs lg:text-sm xl:text-sm font-medium flex items-center justify-center mb-1'>
              12
            </dt>
            <dd className='text-orange-600 dark:text-orange-300 text-xs sm:text-xs md:text-xs lg:text-sm xl:text-sm font-medium'>
              To do
            </dd>
          </dl>
          <dl className='bg-teal-50 flex flex-col items-center justify-center h-[78px]'>
            <dt className='w-8 h-8 rounded-full bg-teal-100 dark:bg-gray-500 text-teal-600 dark:text-teal-300 text-xs sm:text-xs md:text-xs lg:text-sm xl:text-sm font-medium flex items-center justify-center mb-1'>
              23
            </dt>
            <dd className='text-teal-600 dark:text-teal-300 text-xs sm:text-xs md:text-xs lg:text-sm xl:text-sm font-medium'>
              In progress
            </dd>
          </dl>
          <dl className='bg-blue-50 flex flex-col items-center justify-center h-[78px]'>
            <dt className='w-8 h-8 rounded-full bg-blue-100 dark:bg-gray-500 text-blue-600 dark:text-blue-300 text-xs sm:text-xs md:text-xs lg:text-sm xl:text-sm font-medium flex items-center justify-center mb-1'>
              64
            </dt>
            <dd className='text-blue-600 dark:text-blue-300 text-xs sm:text-xs md:text-xs lg:text-sm xl:text-sm font-medium'>
              Done
            </dd>
          </dl>
        </div>
      </div> */}

      {/* <a
        href='#'
        className='block max-w-sm p-6 bg-white border border-gray-200 shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700'
      >
        {data.map((item: any, index: any) => (
          <div key={index} className='ticker-item text-dark-800'>
            <h5 className='mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white'>
              {item.name}
            </h5>
            <p className='font-normal text-gray-700 dark:text-gray-400'>
              {item.lastClosePrice}
            </p>
          </div>
        ))}
      </a> */}
    </>
  );
};

export default MarketAndSectorComponent;
