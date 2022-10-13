import React from 'react';
import { Link } from 'react-router-dom';

function CaseStudy({ viewMore }) {
  const CaseStudy = [
    {
      id: 1,
      imgCase: '/images/mockup.png',
      title: 'Yummy Sport',
      content: 'UI/UX Design, Desktop App',
      view: 'View More',
    },
    {
      id: 2,
      imgCase: '/images/mockup-1.png',
      title: 'Vale Finance',
      content: 'UI/UX Design, Desktop App',
      view: 'View More',
    },
    {
      id: 3,
      imgCase: '/images/mockup-2.png',
      title: 'Aero',
      content: 'UI/UX Design, Desktop App',
      view: 'View More',
    },
    {
      id: 4,
      imgCase: '/images/mockup-3.png',
      title: 'Go Dark',
      content: 'UI/UX Design, Desktop App',
      view: 'View More',
    },
  ];
  return (
    <>
      <div className='pt-28 px-8 flex flex-col md:px-12 lg:px-32'>
        <div className='flex justify-between items-center mb-8'>
          <h2 className='font-Sora font-bold text-44 leading-120 tracking-wide'>
            Case Study
          </h2>
          <Link
            to='/our-work'
            className='case-btn hidden sm:flex sm:font-Sora sm:font-bold sm:text-2xl sm:leading-140 sm:tracking-wide sm:text-btnColor'
          >
            View More
          </Link>
        </div>
        <div className='grid grid-cols-1 md:grid-cols-2 md:gap-6 lg:gap-8'>
          {CaseStudy.map((study) => {
            const { id, imgCase, title, content, view } = study;
            return (
              <div className='case-big-card-container' key={id}>
                <div className='bg-imgBg pt-60 px-8 rounded-xl'>
                  <img src={imgCase} className='h-auto' alt='Case Study' />
                </div>
                <h2 className='font-Sora font-bold text-32 leading-120 tracking-wide mt-18'>
                  {title}
                </h2>
                <div className='flex justify-between items-center mt-1.5'>
                  <h3 className='font-Sora font-normal text-base leading-160 tracking-wide text-lightDark lg:text-lg'>
                    {content}
                  </h3>
                  <Link className='font-Sora font-bold text-sm leading-140 tracking-wide text-yellowish lg:text-base'>
                    {view}
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
        <div className='flex justify-between items-center mx-auto mt-6 font-bold text-2xl leading-140 tracking-wide text-btnColor sm:mt-10'>
          {viewMore ? (
            <Link to='/our-work' className=''>
              View More
            </Link>
          ) : null}
        </div>
      </div>
    </>
  );
}

export default CaseStudy;
