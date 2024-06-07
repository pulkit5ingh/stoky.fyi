'use client';
import React from 'react';

import Image from 'next/image';

import stockifyiLogo from '@public/images/stockifyi.logo.svg';

const LogoComponent = () => {
  return <Image src={stockifyiLogo} alt='Logo' width={200} height={200} />;
};

export default LogoComponent;
