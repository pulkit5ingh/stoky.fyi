'use client';
import { createChart, ColorType } from 'lightweight-charts';
import React, { useState, useEffect, useRef } from 'react';

import {
  niftyFiftyMidCapYearlyData,
  niftyFiftySmallCapYearlyData,
  niftyFiftyYearlyData,
} from '@/data/NSE-indexes-historical.data';

const MarketGaugeComponent: React.FC = () => {
  const backgroundColor = 'white';
  const textColor = 'black';

  const dataNifty50 = [...niftyFiftyYearlyData].sort(
    (a, b) => new Date(a.time).getTime() - new Date(b.time).getTime()
  );

  const dataNifty50MidCap = [...niftyFiftyMidCapYearlyData].sort(
    (a, b) => new Date(a.time).getTime() - new Date(b.time).getTime()
  );

  const dataNifty50SmallCap = [...niftyFiftySmallCapYearlyData].sort(
    (a, b) => new Date(a.time).getTime() - new Date(b.time).getTime()
  );

  const chartContainerRef: any = useRef();

  useEffect(() => {
    const handleResize = () => {
      chart.applyOptions({ width: chartContainerRef.current.clientWidth });
    };

    // * create chart
    const chart = createChart(chartContainerRef.current, {
      layout: {
        background: { type: ColorType.Solid, color: backgroundColor },
        textColor,
      },
      width: chartContainerRef.current.clientWidth,
      height: 450,
      grid: {
        vertLines: {
          color: 'rgba(200, 200, 200, 1)',
        },
        horzLines: {
          color: 'rgba(200, 200, 200, 1)',
        },
      },
      timeScale: {
        borderColor: 'gray',
      },
      watermark: {
        color: 'gray',
        visible: true,
        text: 'NIFTY 50 vs NIFTY MID CAP 50 vs NIFTY SMALL CAP 50 INDEX RETURNS',
        fontSize: 18,
        vertAlign: 'top',
        horzAlign: 'right',
      },
    });

    // * create series
    const nifty50Series = chart.addAreaSeries({
      lineColor: 'blue',
      topColor: 'rgba(0, 0, 255, 0.2)',
      bottomColor: 'rgba(0, 0, 255, 0.0)',
      lineWidth: 2,
    });

    const nifty50MidCapSeries = chart.addAreaSeries({
      lineColor: 'green',
      topColor: 'rgba(0, 255, 0, 0.2)',
      bottomColor: 'rgba(0, 255, 0, 0.0)',
      lineWidth: 2,
    });

    const dataNifty50SmallCapSeries = chart.addAreaSeries({
      lineColor: 'red',
      topColor: 'rgba(255, 0, 0, 0.2)',
      bottomColor: 'rgba(255, 0, 0, 0.0)',
      lineWidth: 2,
    });

    // * set data
    nifty50Series.setData(dataNifty50);

    nifty50MidCapSeries.setData(dataNifty50MidCap);

    dataNifty50SmallCapSeries.setData(dataNifty50SmallCap);

    // * Add price lines with labels
    nifty50Series.createPriceLine({
      price: dataNifty50[dataNifty50.length - 1].value,
      color: 'blue',
      lineWidth: 2,
      lineStyle: 1,
      axisLabelVisible: true,
      title: 'Nifty 50',
    });

    nifty50MidCapSeries.createPriceLine({
      price: dataNifty50MidCap[dataNifty50MidCap.length - 1].value,
      color: 'green',
      lineWidth: 2,
      lineStyle: 1,
      axisLabelVisible: true,
      title: 'Nifty 50 Mid Cap',
    });

    dataNifty50SmallCapSeries.createPriceLine({
      price: dataNifty50SmallCap[dataNifty50SmallCap.length - 1].value,
      color: 'red',
      lineWidth: 2,
      lineStyle: 1,
      axisLabelVisible: true,
      title: 'Nifty 50 Small Cap',
    });

    // * chart size
    chart.timeScale().fitContent();

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);

      chart.remove();
    };
  }, [
    dataNifty50,
    dataNifty50MidCap,
    dataNifty50SmallCap,
    backgroundColor,
    textColor,
  ]);

  return (
    <div>
      <div ref={chartContainerRef} />
      {/* <button className='btn btn-md px-4 py-1 mx-2 bg-primary-300 text-white'>
        1 Month
      </button>
      <button className='btn btn-md px-4 py-1 mx-2 bg-primary-300 text-white'>
        3 Months
      </button>
      <button className='btn btn-md px-4 py-1 mx-2 bg-primary-300 text-white'>
        6 Months
      </button>
      <button className='btn btn-md px-4 py-1 mx-2 bg-primary-300 text-white'>
        1 Year
      </button> */}
    </div>
  );
};

export default MarketGaugeComponent;
