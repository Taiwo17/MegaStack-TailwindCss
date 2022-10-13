import React from 'react';

function HeroSection({ title, content, btnContent, iconImg }) {
  return (
    <>
      <div className='h-auto pb-20 pt-20 w-full bg-mobile-hero bg-cover bg-center bg-no-repeat sm:bg-desktop-hero md:pt-10'>
        <div className='flex flex-col pt-28 px-8 w-366 sm:w-615 sm:px-12 md:w-732 lg:w-auto lg:pt-130 lg:px-32'>
          <h1 className='text-titleHeader font-Sora text-56 font-extrabold mb-6 text-left leading-120 tracking-wide sm:text-7xl sm:font-bold sm:leading-110 lg:text-96 '>
            {title}
          </h1>
          <p className='font-light text-xl text-titleHeader tracking-wide leading-150 mb-8 sm:text-25 lg:text-2xl	xl:text-25'>
            {content}
          </p>
          {btnContent ? (
            <button className='w-full text-white bg-btnColor text-base font-Sora rounded-lg py-4 px-10 font-semibold border-none lg:py-5 lg:px-10 lg:w-2/5 xl:w-1/5'>
              {btnContent}
            </button>
          ) : null}
        </div>
      </div>
    </>
  );
}

export default HeroSection;
