'use client';
import React from 'react';

const ProjectsComponent = () => {
  return (
    <section className='my-40 text-gray-600 body-font max-w-6xl px-4 mx-auto lg:px-8'>
      <h1 className='mb-20 text-6xl Avenir font-semibold text-gray-900 text-center'>
        Projects
      </h1>
      <div className='container mx-auto space-y-12'>
        <div className='flex flex-col overflow-hidden rounded-lg border border-gray-400 lg:flex-row'>
          {/* <img
              src='https://source.unsplash.com/640x480/?1'
              alt='alt'
              className='h-80 aspect-video'
            /> */}
          <div className='flex flex-col justify-center flex-1 p-6'>
            <span className='text-xs uppercase dark:text-gray-400'>
              Join, it&apos;s free
            </span>
            <h3 className='text-3xl font-bold dark:text-gray-800'>
              We&apos;re not reinventing the wheel
            </h3>
            <p className='my-6 dark:text-gray-800'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor
              aliquam possimus quas, error esse quos.
            </p>
            <button type='button' className='self-start'>
              Action
            </button>
          </div>
        </div>
        <div className='flex flex-col overflow-hidden rounded-lg border border-gray-400 lg:flex-row-reverse'>
          {/* <img
              src='https://source.unsplash.com/640x480/?2'
              alt='alt'
              className='h-80 aspect-video'
            /> */}
          <div className='flex flex-col justify-center flex-1 p-6'>
            <span className='text-xs uppercase dark:text-gray-400'>
              Join, it&apos;s free
            </span>
            <h3 className='text-3xl font-bold dark:text-gray-800'>
              We&apos;re not reinventing the wheel
            </h3>
            <p className='my-6 dark:text-gray-800'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor
              aliquam possimus quas, error esse quos.
            </p>
            <button type='button' className='self-start'>
              Action
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsComponent;
