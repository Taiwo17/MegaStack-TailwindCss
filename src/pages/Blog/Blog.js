import React from 'react';
import HeroSection from '../../components/HeroSection';
import Navbar from '../../components/Navbar';
import { Link } from 'react-router-dom';
import Footer from '../../components/Footer';

function Blog() {
  const BlogDetails = [
    {
      id: 1,
      blogImage: '/images/Frame 81.png',
      blogTitle: `How To Upload Multiple files to Cloudinary in Nodejs using
              Promise.all`,
      blogDesc: `It has remained something confusing while perusing cloudinary
              documentation on how exactly do you upl...`,
      authorImage: '/images/author_image.png',
      blogAuthor: 'By Olaboye Olanrewaju',
      companyName: 'MegaStack',
      duration: '3 Min read',
    },
    {
      id: 2,
      blogImage: '/images/image 4.png',
      blogTitle: `How To Upload Multiple files to Cloudinary in Nodejs using
              Promise.all`,
      blogDesc: `It has remained something confusing while perusing cloudinary
              documentation on how exactly do you upl...`,
      authorImage: '/images/author_image.png',
      blogAuthor: 'By Olaboye Olanrewaju',
      companyName: 'MegaStack',
      duration: '3 Min read',
    },
    {
      id: 3,
      blogImage: '/images/image 5.png',
      blogTitle: `How To Upload Multiple files to Cloudinary in Nodejs using
              Promise.all`,
      blogDesc: `It has remained something confusing while perusing cloudinary
              documentation on how exactly do you upl...`,
      authorImage: '/images/author_image.png',
      blogAuthor: 'By Olaboye Olanrewaju',
      companyName: 'MegaStack',
      duration: '3 Min read',
    },
  ];
  return (
    <>
      <Navbar />
      <HeroSection
        title={'We don’t just build amazing products, we also talk ideas'}
        content='Our Blog Posts'
        iconImg={'/images/Icon.png'}
      />
      <div className='px-8 -mt-10 md:px-12 lg:px-32'>
        {BlogDetails.map((blogs) => {
          const {
            id,
            blogImage,
            blogTitle,
            blogDesc,
            authorImage,
            blogAuthor,
            companyName,
            duration,
          } = blogs;
          return (
            <div className='' key={id}>
              <div className=''>
                <img className='rounded-t-lg mb-8' src={blogImage} alt='' />
                <h2 className='font-Sora font-bold text-2xl	leading-120 tracking-wide text-black mb-4 md:text-32'>
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
      <div className='text-center mx-auto'>
        <Link
          to='/view-more'
          className='font-Sora font-bold text-sm leading-120 tracking-wide text-btnColor md:text-base'
        >
          View More
        </Link>
      </div>
      <Footer />
    </>
  );
}

export default Blog;
