'use client';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Image from 'next/image';
import greenTriangle from '@/public/images/green-triangle.png';
import redTriangle from '@/public/images/red-triangle.png';

interface TickerItem {
  symbol: string;
  curr_price: number;
  change: number;
  per_change: number;
}

interface Props {
  initialData?: TickerItem[];
}

const SkeletonLoader = () => (
  <div className='bg-gray-800 w-full fixed top-0 z-50'>
    <div className='ticker-container py-3'></div>
  </div>
);

const TickerTapeComponent: React.FC<Props> = ({ initialData }) => {
  const [data, setData] = useState<TickerItem[]>(initialData || []);
  const [isLoading, setLoading] = useState<boolean>(true);

  const fetchData = async () => {
    try {
      const response: any = await axios.get<TickerItem[]>(
        'https://portal.tradebrains.in/api/index/constitients/NIFTY/?ascending=false&by=volume&format=json&page=1&per_page=25'
      );
      setData(response.data.results);
      setLoading(false);
    } catch (error) {
      console.error('Error fetching data:', error);
      setLoading(false);
    }
  };

  useEffect(() => {
    if (!initialData?.length) {
      fetchData();
    }
  }, []);

  if (isLoading) {
    return <SkeletonLoader />;
  }

  return (
    <div className='bg-gray-800 w-full fixed top-0 z-50'>
      <div className='ticker-container text-white'>
        <div className='ticker-wrapper'>
          <div className='ticker-transition'>
            {data.map((item) => (
              <div key={item.symbol} className='ticker-item text-dark-800'>
                <span className='p-1'>{item.symbol}</span>
                <span className='p-1'>
                  <b>₹{item.curr_price}</b>
                </span>
                <span
                  className={`p-1 ${
                    item.change < 0 ? 'text-red-400' : 'text-green-400'
                  }`}
                >
                  <b className='pr-1'>{item.change}</b>
                  <b className='pr-1'>({item.per_change}%)</b>
                  <span className='align-middle'>
                    <Image
                      className='inline-block pb-1'
                      src={item.per_change > 0 ? greenTriangle : redTriangle}
                      alt={
                        item.per_change > 0 ? 'Green Triangle' : 'Red Triangle'
                      }
                      width={20}
                      height={20}
                    />
                  </span>
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TickerTapeComponent;
