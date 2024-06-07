'use client';
import React, { useState, useEffect, useRef } from 'react';
import { createChart, ColorType } from 'lightweight-charts';
import axios from 'axios';
import Image from 'next/image';

import greenTriangle from '@/public/images/green-triangle.png';
import redTriangle from '@/public/images/red-triangle.png';

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
    <>
      <div className='bg-white my-20 px-4 mx-auto'>
        <div className='grid grid-cols-2 gap-2'>
          <div className='items-center justify-center h-auto border-2 border-gray-200'>
            {/* Table */}
            {/* Start coding here */}
            <p className='py-2 text-center text-gray-800 font-bold uppercase text-xl w-full'>
              Our Picks 🤑
            </p>
            <div className='w-full'>
              <table className='w-full text-left text-gray-800'>
                <thead className='font-thin text-sm uppercase bg-gray-50'>
                  <tr>
                    <th scope='col' className='px-4 py-3'>
                      SL.no
                    </th>
                    <th scope='col' className='px-4 py-3'>
                      MARKET TYPE
                    </th>
                    <th scope='col' className='px-4 py-3'>
                      COMPANY
                    </th>
                    <th scope='col' className='px-4 py-3'>
                      MARKET PRICE
                    </th>
                    <th scope='col' className='px-4 py-3'>
                      CHANGES
                    </th>
                    <th scope='col' className='px-4 py-3'>
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
                      <td className='px-4 py-2'>{index + 1}</td>
                      <td className='px-4 py-2'>{_.mcap_type}</td>
                      <td className='px-4 py-2'>{_.short_name}</td>
                      <td className='px-4 py-2'>{_.prev_close}</td>
                      <td className='px-4 py-2'>{_.percent.toFixed(2)} %</td>
                      <td>
                        <ChartComponent {...props} data={_} />
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            {/*  */}
          </div>
          <div className='items-center justify-center h-auto border-2 border-gray-200'>
            {/* Table */}
            {/* Start coding here */}
            <p className='py-2 text-center text-gray-800 font-bold uppercase text-xl w-full'>
              Most Active ⚡
            </p>
            <div className='w-full'>
              <table className='w-full text-left text-gray-800'>
                <thead className='font-thin text-sm uppercase bg-gray-50'>
                  <tr>
                    <th scope='col' className='px-4 py-3'>
                      SL.no
                    </th>
                    <th scope='col' className='px-4 py-3'>
                      MARKET TYPE
                    </th>
                    <th scope='col' className='px-4 py-3'>
                      COMPANY
                    </th>
                    <th scope='col' className='px-4 py-3'>
                      MARKET PRICE
                    </th>
                    <th scope='col' className='px-4 py-3'>
                      CHANGES
                    </th>
                    <th scope='col' className='px-4 py-3'>
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
                      <td className='px-4 py-2'>{index + 1}</td>
                      <td className='px-4 py-2'>{_.mcap_type}</td>
                      <td className='px-4 py-2'>{_.short_name}</td>
                      <td className='px-4 py-2'>{_.prev_close}</td>
                      <td className='px-4 py-2'>{_.percent.toFixed(2)} %</td>
                      <td>
                        <ChartComponent {...props} data={_} />
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            {/*  */}
          </div>
          <div className='items-center justify-center h-auto border-2 border-gray-200'>
            {/* Table */}
            {/* Start coding here */}
            <p className='py-2 text-center text-gray-800 font-bold uppercase text-xl w-full'>
              Top Gainers{' '}
              <Image
                className='inline-block pb-1'
                src={greenTriangle}
                alt='Green Triangle'
                width={20}
                height={20}
              />
            </p>
            <div className='w-full'>
              <table className='w-full text-left text-gray-800'>
                <thead className='font-thin text-sm uppercase bg-gray-50'>
                  <tr>
                    <th scope='col' className='px-4 py-3'>
                      SL.no
                    </th>
                    <th scope='col' className='px-4 py-3'>
                      MARKET TYPE
                    </th>
                    <th scope='col' className='px-4 py-3'>
                      COMPANY
                    </th>
                    <th scope='col' className='px-4 py-3'>
                      MARKET PRICE
                    </th>
                    <th scope='col' className='px-4 py-3'>
                      CHANGES
                    </th>
                    <th scope='col' className='px-4 py-3'>
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
                      <td className='px-4 py-2'>{index + 1}</td>
                      <td className='px-4 py-2'>{_.mcap_type}</td>
                      <td className='px-4 py-2'>{_.short_name}</td>
                      <td className='px-4 py-2'>{_.prev_close}</td>
                      <td className='px-4 py-2'>{_.percent.toFixed(2)} %</td>
                      <td>
                        <ChartComponent {...props} data={_} />
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            {/*  */}
          </div>
          <div className='items-center justify-center h-auto border-2 border-gray-200'>
            {/* Table */}
            {/* Start coding here */}
            <p className='py-2 text-center text-gray-800 font-bold uppercase text-xl w-full'>
              Top Losers{' '}
              <Image
                className='inline-block pb-1'
                src={redTriangle}
                alt='Red Triangle'
                width={20}
                height={20}
              />
            </p>
            <div className='w-full'>
              <table className='w-full text-left text-gray-800'>
                <thead className='font-thin text-sm uppercase bg-gray-50'>
                  <tr>
                    <th scope='col' className='px-4 py-3'>
                      SL.no
                    </th>
                    <th scope='col' className='px-4 py-3'>
                      MARKET TYPE
                    </th>
                    <th scope='col' className='px-4 py-3'>
                      COMPANY
                    </th>
                    <th scope='col' className='px-4 py-3'>
                      MARKET PRICE
                    </th>
                    <th scope='col' className='px-4 py-3'>
                      CHANGES
                    </th>
                    <th scope='col' className='px-4 py-3'>
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
                      <td className='px-4 py-2'>{index + 1}</td>
                      <td className='px-4 py-2'>{_.mcap_type}</td>
                      <td className='px-4 py-2'>{_.short_name}</td>
                      <td className='px-4 py-2'>{_.prev_close}</td>
                      <td className='px-4 py-2'>{_.percent.toFixed(2)} %</td>
                      <td>
                        <ChartComponent {...props} data={_} />
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            {/*  */}
          </div>
        </div>
      </div>
    </>
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

    console.log(data);

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
