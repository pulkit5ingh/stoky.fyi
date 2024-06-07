'use client';
import { createChart, ColorType, ISeriesApi } from 'lightweight-charts';
import React, { useEffect, useRef } from 'react';

interface ChartData {
  time: string;
  value: number;
}

interface ChartColors {
  backgroundColor?: string;
  lineColor?: string;
  textColor?: string;
  areaTopColor?: string;
  areaBottomColor?: string;
}

interface ChartComponentProps {
  data: ChartData[];
  colors?: ChartColors;
}

const ChartComponent: React.FC<ChartComponentProps> = ({
  data,
  colors = {},
}) => {
  const {
    backgroundColor = '#eff6ff',
    lineColor = '#1e40af',
    textColor = '#172554',
    areaTopColor = '#60a5fa',
    areaBottomColor = 'rgba(41, 98, 255, 0.28)',
  } = colors;

  const chartContainerRef = useRef<HTMLDivElement>(null);
  const chartInstance = useRef<ISeriesApi<'Area'>>();

  useEffect(() => {
    // const handleResize = () => {
    //   if (chartInstance.current) {
    //     chartInstance.current.applyOptions({
    //       width: chartContainerRef.current!.clientWidth,
    //     });
    //   }
    // };

    const chart = createChart(chartContainerRef.current!, {
      layout: {
        background: { type: ColorType.Solid, color: backgroundColor },
        textColor,
      },
      width: chartContainerRef.current!.clientWidth,
      height: 400,
    });
    chart.timeScale().fitContent();

    const newSeries = chart.addAreaSeries({
      lineColor,
      topColor: areaTopColor,
      bottomColor: areaBottomColor,
    });
    newSeries.setData(data);

    chartInstance.current = newSeries;

    // window.addEventListener('resize', handleResize);

    return () => {
      // window.removeEventListener('resize', handleResize);
      chart.remove();
    };
  }, [
    data,
    backgroundColor,
    lineColor,
    textColor,
    areaTopColor,
    areaBottomColor,
  ]);

  return <div ref={chartContainerRef} />;
};

export default ChartComponent;
