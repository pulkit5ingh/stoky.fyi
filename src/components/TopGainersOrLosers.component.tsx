'use client';
import React, { useState, useEffect, useRef } from 'react';
import { createChart, ColorType } from 'lightweight-charts';
import axios from 'axios';
import Image from 'next/image';

import greenTriangle from '@/public/images/green-triangle.png';
import redTriangle from '@/public/images/red-triangle.png';

const SkeletonLoader = () => (
  <div className='bg-white my-20 px-4 mx-auto text-center'>
    <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-2'>
      {[...Array(4)].map((_, index) => (
        <dl
          key={index}
          className='border border-gray-200 bg-gray-100 flex flex-col items-center justify-center h-auto'
        >
          <div className='animate-pulse min-w-full p-2'>
            <div className='h-4 bg-gray-200 m-2'></div>
            <div className='h-4 bg-gray-200 m-2'></div>
            <div className='h-4 bg-gray-200 m-2'></div>
            <div className='h-4 bg-gray-200 m-2'></div>
            <div className='h-4 bg-gray-200 m-2'></div>
            <div className='h-4 bg-gray-200 m-2'></div>
            <div className='h-4 bg-gray-200 m-2'></div>
            <div className='h-4 bg-gray-200 m-2'></div>
            <div className='h-4 bg-gray-200 m-2'></div>
            <div className='h-4 bg-gray-200 m-2'></div>
          </div>
        </dl>
      ))}
    </div>
  </div>
);

const Pagination = () => (
  <nav className='flex justify-between m-2'>
    <ul className='inline-flex text-xxs sm:text-xs md:text-sx lg:text-xs xl:text-xs'>
      <li>
        <a
          href='#'
          className='flex items-center justify-center p-2 text-gray-800 bg-white border border-e-0 border-gray-300 rounded-s-lg hover:bg-gray-100 hover:text-gray-700 '
        >
          Previous
        </a>
      </li>
      <li>
        <a
          href='#'
          className='flex items-center justify-center p-2 text-gray-800 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 '
        >
          1
        </a>
      </li>
      <li>
        <a
          href='#'
          className='flex items-center justify-center p-2 text-gray-800 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 '
        >
          2
        </a>
      </li>
      <li>
        <a
          href='#'
          className='flex items-center justify-center p-2 text-gray-800 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 '
        >
          3
        </a>
      </li>
      <li>
        <a
          href='#'
          className='flex items-center justify-center p-2 text-gray-800 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 '
        >
          4
        </a>
      </li>
      <li>
        <a
          href='#'
          className='flex items-center justify-center p-2 text-gray-800 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 '
        >
          5
        </a>
      </li>
      <li>
        <a
          href='#'
          className='flex items-center justify-center p-2 text-gray-800 bg-white border border-gray-300 rounded-e-lg hover:bg-gray-100 hover:text-gray-700 '
        >
          Next
        </a>
      </li>
    </ul>
    <ul className='inline-flex text-xxs sm:text-xs md:text-sx lg:text-xs xl:text-xs'>
      <li>
        <a
          href='#'
          className='flex items-center justify-center py-2 px-4 text-gray-800 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 hover:text-gray-700 '
        >
          View all
        </a>
      </li>
    </ul>
  </nav>
);

const TopGainersOrLosersComponent = (props: any) => {
  const [gainersData, setGainerData] = useState([]);
  const [losersData, setLosersData] = useState([]);
  const [isLoading, setLoading] = useState(true);

  const fetchData = async () => {
    try {
      const gainersPromise = axios.get(
        `https://portal.tradebrains.in/api/index/NIFTY100/movers/gainers?ascending=false&by=percent&format=json&page=1&per_page=10`,
        {}
      );
      const losersPromise = axios.get(
        `https://portal.tradebrains.in/api/index/NIFTY100/movers/losers?ascending=true&by=percent&format=json&page=1&per_page=10`,
        {}
      );

      const [gainersPromiseResponse, losersPromiseResponse] = await Promise.all(
        [gainersPromise, losersPromise]
      );

      setGainerData(gainersPromiseResponse.data.results);
      setLosersData(losersPromiseResponse.data.results);
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
    <div className='bg-white my-20 px-4 mx-auto'>
      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-2'>
        <div className='items-center justify-center h-auto border-2 border-gray-200'>
          {/* Table */}
          {/* Start coding here */}
          <p className='bg-white-50 py-2 mb-2 text-center text-gray-800 font-bold uppercase text-xs sm:text-xs md:text-xs lg:text-md xl:text-xl w-full'>
            Our Picks 🤑
          </p>
          <div className='w-full relative overflow-x-auto'>
            <table className='w-full text-center text-gray-800'>
              <thead className='font-thin text-sm uppercase bg-gray-50'>
                <tr>
                  <th
                    scope='col'
                    className='px-1 py-1 text-xxs sm:text-xs md:text-xs lg:text-sm xl:text-sm'
                  >
                    SL.no
                  </th>
                  <th
                    scope='col'
                    className='px-1 py-1 text-xxs sm:text-xs md:text-xs lg:text-sm xl:text-sm'
                  >
                    TYPE
                  </th>
                  <th
                    scope='col'
                    className='px-1 py-1 text-xxs sm:text-xs md:text-xs lg:text-sm xl:text-sm'
                  >
                    COMPANY
                  </th>
                  <th
                    scope='col'
                    className='px-1 py-1 text-xxs sm:text-xs md:text-xs lg:text-sm xl:text-sm'
                  >
                    PRICE
                  </th>
                  <th
                    scope='col'
                    className='px-1 py-1 text-xxs sm:text-xs md:text-xs lg:text-sm xl:text-sm'
                  >
                    CHANGES
                  </th>
                  <th
                    scope='col'
                    className='px-1 py-1 text-xxs sm:text-xs md:text-xs lg:text-sm xl:text-sm'
                  >
                    CHART
                  </th>
                </tr>
              </thead>
              <tbody>
                {gainersData.map((_: any, index: number): any => (
                  <tr
                    key={index}
                    className='border-b border-gray-200 text-sm font-thin'
                  >
                    <td className='px-4 py-2 text-xxs sm:text-xs md:text-xs lg:text-sm xl:text-sm'>
                      {index + 1}
                    </td>
                    <td className='px-4 py-2 text-xxs sm:text-xs md:text-xs lg:text-sm xl:text-sm'>
                      {_.mcap_type}
                    </td>
                    <td className='px-4 py-2 text-xxs sm:text-xs md:text-xs lg:text-sm xl:text-sm'>
                      {_.short_name}
                    </td>
                    <td className='px-4 py-2 text-xxs sm:text-xs md:text-xs lg:text-sm xl:text-sm'>
                      {_.prev_close}
                    </td>
                    <td className='px-1 py-1 text-xxs sm:text-xs md:text-xs lg:text-sm xl:text-sm'>
                      {_.percent.toFixed(2)} %
                    </td>
                    <td className='w-4'>
                      <ChartComponent {...props} data={_} />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            <Pagination />
          </div>
          {/*  */}
        </div>
        <div className='items-center justify-center h-auto border-2 border-gray-200'>
          {/* Table */}
          {/* Start coding here */}
          <p className='bg-white-50 py-2 mb-2 text-center text-gray-800 font-bold uppercase text-xs sm:text-xs md:text-xs lg:text-md xl:text-xl w-full'>
            Most Active ⚡
          </p>
          <div className='w-full relative overflow-x-auto'>
            <table className='w-full text-center text-gray-800'>
              <thead className='font-thin text-sm uppercase bg-gray-50'>
                <tr>
                  <th
                    scope='col'
                    className='px-1 py-1 text-xxs sm:text-xs md:text-xs lg:text-sm xl:text-sm'
                  >
                    SL.no
                  </th>
                  <th
                    scope='col'
                    className='px-1 py-1 text-xxs sm:text-xs md:text-xs lg:text-sm xl:text-sm'
                  >
                    TYPE
                  </th>
                  <th
                    scope='col'
                    className='px-1 py-1 text-xxs sm:text-xs md:text-xs lg:text-sm xl:text-sm'
                  >
                    COMPANY
                  </th>
                  <th
                    scope='col'
                    className='px-1 py-1 text-xxs sm:text-xs md:text-xs lg:text-sm xl:text-sm'
                  >
                    PRICE
                  </th>
                  <th
                    scope='col'
                    className='px-1 py-1 text-xxs sm:text-xs md:text-xs lg:text-sm xl:text-sm'
                  >
                    CHANGES
                  </th>
                  <th
                    scope='col'
                    className='px-1 py-1 text-xxs sm:text-xs md:text-xs lg:text-sm xl:text-sm'
                  >
                    CHART
                  </th>
                </tr>
              </thead>
              <tbody>
                {gainersData.map((_: any, index: number): any => (
                  <tr
                    key={index}
                    className='border-b border-gray-200 text-sm font-thin'
                  >
                    <td className='px-4 py-2 text-xxs sm:text-xs md:text-xs lg:text-sm xl:text-sm'>
                      {index + 1}
                    </td>
                    <td className='px-4 py-2 text-xxs sm:text-xs md:text-xs lg:text-sm xl:text-sm'>
                      {_.mcap_type}
                    </td>
                    <td className='px-4 py-2 text-xxs sm:text-xs md:text-xs lg:text-sm xl:text-sm'>
                      {_.short_name}
                    </td>
                    <td className='px-4 py-2 text-xxs sm:text-xs md:text-xs lg:text-sm xl:text-sm'>
                      {_.prev_close}
                    </td>
                    <td className='px-1 py-1 text-xxs sm:text-xs md:text-xs lg:text-sm xl:text-sm'>
                      {_.percent.toFixed(2)} %
                    </td>
                    <td className='w-4'>
                      <ChartComponent {...props} data={_} />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            <Pagination />
          </div>
          {/*  */}
        </div>
        <div className='items-center justify-center h-auto border-2 border-gray-200'>
          {/* Table */}
          {/* Start coding here */}
          <p className='bg-white-50 py-2 mb-2 text-center text-gray-800 font-bold uppercase text-xs sm:text-xs md:text-xs lg:text-md xl:text-xl w-full'>
            Top Gainers{' '}
            <Image
              className='inline-block pb-1'
              src={greenTriangle}
              alt='Green Triangle'
              width={20}
              height={20}
            />
          </p>
          <div className='w-full relative overflow-x-auto'>
            <table className='w-full text-center text-gray-800'>
              <thead className='font-thin text-sm uppercase bg-gray-50'>
                <tr>
                  <th
                    scope='col'
                    className='px-1 py-1 text-xxs sm:text-xs md:text-xs lg:text-sm xl:text-sm'
                  >
                    SL.no
                  </th>
                  <th
                    scope='col'
                    className='px-1 py-1 text-xxs sm:text-xs md:text-xs lg:text-sm xl:text-sm'
                  >
                    TYPE
                  </th>
                  <th
                    scope='col'
                    className='px-1 py-1 text-xxs sm:text-xs md:text-xs lg:text-sm xl:text-sm'
                  >
                    COMPANY
                  </th>
                  <th
                    scope='col'
                    className='px-1 py-1 text-xxs sm:text-xs md:text-xs lg:text-sm xl:text-sm'
                  >
                    PRICE
                  </th>
                  <th
                    scope='col'
                    className='px-1 py-1 text-xxs sm:text-xs md:text-xs lg:text-sm xl:text-sm'
                  >
                    CHANGES
                  </th>
                  <th
                    scope='col'
                    className='px-1 py-1 text-xxs sm:text-xs md:text-xs lg:text-sm xl:text-sm'
                  >
                    CHART
                  </th>
                </tr>
              </thead>
              <tbody>
                {gainersData.map((_: any, index: number): any => (
                  <tr
                    key={index}
                    className='border-b border-gray-200 text-sm font-thin'
                  >
                    <td className='px-4 py-2 text-xxs sm:text-xs md:text-xs lg:text-sm xl:text-sm'>
                      {index + 1}
                    </td>
                    <td className='px-4 py-2 text-xxs sm:text-xs md:text-xs lg:text-sm xl:text-sm'>
                      {_.mcap_type}
                    </td>
                    <td className='px-4 py-2 text-xxs sm:text-xs md:text-xs lg:text-sm xl:text-sm'>
                      {_.short_name}
                    </td>
                    <td className='px-4 py-2 text-xxs sm:text-xs md:text-xs lg:text-sm xl:text-sm'>
                      {_.prev_close}
                    </td>
                    <td className='px-1 py-1 text-xxs sm:text-xs md:text-xs lg:text-sm xl:text-sm'>
                      {_.percent.toFixed(2)} %
                    </td>
                    <td className='w-4'>
                      <ChartComponent {...props} data={_} />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            <Pagination />
          </div>
          {/*  */}
        </div>
        <div className='items-center justify-center h-auto border-2 border-gray-200'>
          {/* Table */}
          {/* Start coding here */}
          <p className='bg-white-50 py-2 mb-2 text-center text-gray-800 font-bold uppercase text-xs sm:text-xs md:text-xs lg:text-md xl:text-xl w-full'>
            Top Losers{' '}
            <Image
              className='inline-block pb-1'
              src={redTriangle}
              alt='Red Triangle'
              width={20}
              height={20}
            />
          </p>
          <div className='w-full relative overflow-x-auto'>
            <table className='w-full text-center text-gray-800'>
              <thead className='font-thin text-sm uppercase bg-gray-50'>
                <tr>
                  <th
                    scope='col'
                    className='px-1 py-1 text-xxs sm:text-xs md:text-xs lg:text-sm xl:text-sm'
                  >
                    SL.no
                  </th>
                  <th
                    scope='col'
                    className='px-1 py-1 text-xxs sm:text-xs md:text-xs lg:text-sm xl:text-sm'
                  >
                    TYPE
                  </th>
                  <th
                    scope='col'
                    className='px-1 py-1 text-xxs sm:text-xs md:text-xs lg:text-sm xl:text-sm'
                  >
                    COMPANY
                  </th>
                  <th
                    scope='col'
                    className='px-1 py-1 text-xxs sm:text-xs md:text-xs lg:text-sm xl:text-sm'
                  >
                    PRICE
                  </th>
                  <th
                    scope='col'
                    className='px-1 py-1 text-xxs sm:text-xs md:text-xs lg:text-sm xl:text-sm'
                  >
                    CHANGES
                  </th>
                  <th
                    scope='col'
                    className='px-1 py-1 text-xxs sm:text-xs md:text-xs lg:text-sm xl:text-sm'
                  >
                    CHART
                  </th>
                </tr>
              </thead>
              <tbody>
                {losersData.map((_: any, index: number): any => (
                  <tr
                    key={index}
                    className='border-b border-gray-200 text-sm font-thin'
                  >
                    <td className='px-4 py-2 text-xxs sm:text-xs md:text-xs lg:text-sm xl:text-sm'>
                      {index + 1}
                    </td>
                    <td className='px-4 py-2 text-xxs sm:text-xs md:text-xs lg:text-sm xl:text-sm'>
                      {_.mcap_type}
                    </td>
                    <td className='px-4 py-2 text-xxs sm:text-xs md:text-xs lg:text-sm xl:text-sm'>
                      {_.short_name}
                    </td>
                    <td className='px-4 py-2 text-xxs sm:text-xs md:text-xs lg:text-sm xl:text-sm'>
                      {_.prev_close}
                    </td>
                    <td className='px-1 py-1 text-xxs sm:text-xs md:text-xs lg:text-sm xl:text-sm'>
                      {_.percent.toFixed(2)} %
                    </td>
                    <td className='w-4'>
                      <ChartComponent {...props} data={_} />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            <Pagination />
          </div>
          {/*  */}
        </div>
      </div>
    </div>
  );
};

export default TopGainersOrLosersComponent;

const ChartComponent = (props: any) => {
  const {
    data,
    colors: {
      backgroundColor = 'white',
      lineColor = '#2962FF',
      textColor = 'black',
      areaTopColor = '#2962FF',
      areaBottomColor = 'rgba(41, 98, 255, 0.28)',
    } = {},
  } = props;

  const formattedDate = (dateString: Date) =>
    new Date(dateString).toISOString().split('T')[0];

  const convertedData: any = data.prices.map((element: any) => {
    return {
      time: formattedDate(element.date),
      value: element.open,
    };
  });

  const chartContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!chartContainerRef.current) {
      return;
    }

    const chart = createChart(chartContainerRef.current, {
      layout: {
        background: { type: ColorType.Solid, color: backgroundColor },
        textColor,
      },
      // width: chartContainerRef.current.clientWidth,
      width: 100,
      height: 20,
      leftPriceScale: {
        visible: false,
        borderVisible: false,
      },
      rightPriceScale: {
        visible: false,
        borderVisible: false,
      },
      timeScale: {
        borderVisible: false,
        visible: false,
      },
      crosshair: {
        horzLine: {
          visible: false,
          labelVisible: false,
        },
        vertLine: {
          visible: true,
          style: 0,
          width: 2,
          color: 'rgba(32, 38, 46, 0.1)',
          labelVisible: false,
        },
      },
      grid: {
        vertLines: {
          visible: false,
        },
        horzLines: {
          visible: false,
        },
      },
    });

    chart.timeScale().fitContent();

    const newSeries = chart.addAreaSeries({
      topColor:
        data.change > 0
          ? 'rgba(124, 255, 51, 0.05)'
          : 'rgba(239, 83, 80, 0.05)',
      bottomColor:
        data.change > 0
          ? 'rgba(124, 255, 51, 0.28)'
          : 'rgba(239, 83, 80, 0.28)',
      lineColor:
        data.change > 0 ? 'rgba(124, 255, 51, 1)' : 'rgba(239, 83, 80, 1)',
      lineWidth: 2,
      priceLineVisible: false,
      lastValueVisible: false,
    });

    newSeries.setData(convertedData);

    const handleResize = () => {
      if (chartContainerRef.current) {
        chart.applyOptions({ width: chartContainerRef.current.clientWidth });
      }
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      chart.remove();
    };
  }, [
    convertedData,
    backgroundColor,
    lineColor,
    textColor,
    areaTopColor,
    areaBottomColor,
  ]);

  return <div ref={chartContainerRef} />;
};
