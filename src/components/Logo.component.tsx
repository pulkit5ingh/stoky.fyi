'use client';
import React from 'react';

import Image from 'next/image';

import stockifyiLogo from '@public/images/stockifyi.svg';
import stats from '@public/images/statistics.gif';

const LogoComponent = () => (
  <div className='inline-flex'>
    <Image src={stockifyiLogo} alt='Logo' width={200} height={200} />
    <Image src={stats} alt='Logo' width={40} height={40} />
  </div>
);

export default LogoComponent;
