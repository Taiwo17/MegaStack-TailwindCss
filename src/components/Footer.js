import React from 'react';
import { Link } from 'react-router-dom';

function Footer() {
  const footerSocial = [
    {
      id: 1,
      imgFooter: '/images/Negative.png',
      imgContent: 'MegaStack',
    },
    {
      id: 2,
      imgFooter: '/images/Negative (1).png',
      imgContent: 'MegaStack',
    },
    {
      id: 3,
      imgFooter: '/images/Negative (2).png',
      imgContent: 'MegaStack',
    },
    {
      id: 4,
      imgFooter: '/images/Negative (3).png',
      imgContent: 'MegaStack',
    },
  ];
  return (
    <div className='bg-footerBg pt-16 px-8 mt-75 md:px-12 lg:px-32'>
      <h2 className='touch-text font-Sora font-bold text-44 leading-110 tracking-wide text-white'>
        Get in touch
      </h2>
      <div className='flex flex-col pt-8 md:flex md:flex-row md:justify-between md:items-center lg:justify-between lg:gap-8'>
        <div className=''>
          <p className='footer-content font-Sora font-light text-base leading-150 tracking-wide text-white sm:text-base sm:font-normal'>
            Reach out to find out how we can be of help to you. Hit the button
            below to send us an email at hello@megastack.tech
          </p>
          <p className='footer-content font-Sora font-light text-base leading-150 tracking-wide text-white mt-8 mb-6 sm:text-base sm:font-normal'>
            You can also check out some of our previous project we’ve helped our
            partners ship to their users. Click here to see our works.
          </p>
        </div>
        <div id='btn-footer' className='w-full sm:w-2/5 lg:btn-footer'>
          <button className='w-full p-4 text-center bg-btnColor text-white font-Sora font-semibold text-base leading-120 tracking-wide rounded-lg items-end'>
            <Link href='/' className=''>
              Let's Talk
            </Link>
          </button>
        </div>
      </div>

      <div className='hr border-b-2	 text-white pt-10'></div>
      <div className='pt-11 pb-16 flex flex-col lg:flex lg:flex-row md:justify-between lg:items-center'>
        <div className='flex'>
          <div className='w-full flex flex-wrap gap-6 md:w-3/5 lg:w-full'>
            {footerSocial.map((social) => {
              const { id, imgContent, imgFooter } = social;
              return (
                <div className=' flex items-center gap-2 mb-2' key={id}>
                  <img
                    className='w-6 h-6'
                    src={imgFooter}
                    alt='Footer Social'
                  />
                  <p className='font-Sora font-normal text-base leading-150 tracking-wide text-white'>
                    {imgContent}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
        <div className='pt-11 lg:pt-0 lg:copyright'>
          <p className='font-Sora font-normal text-xs leading-120 tracking-wide text-white sm:text-base'>
            ©Copyright 2022, Megastack Technologies Limited
          </p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
