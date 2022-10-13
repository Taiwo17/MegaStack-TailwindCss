import React from 'react';
import Navbar from '../components/Navbar';
import BlogMoreView from './data';
import Footer from './Footer';
import HeroSection from './HeroSection';

function BlogMore() {
  return (
    <>
      <Navbar />
      <HeroSection
        title={'We don’t just build amazing products, we also talk ideas'}
        content='Our Blog Post'
      />
      <div className='px-8 -mt-10 md:px-12 lg:px-32 md:grid md:grid-cols-2 md:gap-8'>
        {BlogMoreView.map((blogView) => {
          const {
            id,
            blogImage,
            blogTitle,
            blogDesc,
            authorImage,
            blogAuthor,
            companyName,
            duration,
          } = blogView;
          return (
            <div className='blog-view-containers' key={id}>
              <div className='blog-big-view'>
                <img className='rounded-t-lg mb-8' src={blogImage} alt='' />
                <h2 className='font-Sora font-bold text-2xl	leading-120 tracking-wide text-black mb-4'>
                  {blogTitle}
                </h2>
                <p className='font-Sora font-light text-base leading-150 tracking-wide text-black mb-4 sm:font-normal'>
                  {blogDesc}
                </p>
              </div>
              <div className='flex items-center gap-2 mb-8'>
                <img className='w-8 h-8' src={authorImage} alt='Author' />
                <p className='font-Sora font-light text-sm tracking-wide text-breadCrumb'>
                  {blogAuthor}
                </p>
                <div className='vl'></div>
                <p className='font-Sora font-light text-sm tracking-wide text-breadCrumb'>
                  {companyName}
                </p>
                <div className='vl'></div>
                <p className='font-Sora font-light text-sm tracking-wide text-breadCrumb'>
                  {duration}
                </p>
              </div>
            </div>
          );
        })}
      </div>
      <Footer />
    </>
  );
}

export default BlogMore;
