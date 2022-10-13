import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaTimes } from 'react-icons/fa';

function Navbar() {
  const Links = [
    { name: 'Home', link: '/' },
    { name: 'About Us', link: '/about-us' },
    { name: 'Work', link: '/our-work' },
    { name: 'Blog', link: '/blog' },
    { name: 'Contact', link: '/contact-us' },
  ];
  let [open, setOpen] = useState(false);
  return (
    <>
      <div className='shadow-md w-full fixed top-0 left-0'>
        <div className='px-6 py-4 h-92 bg-menu-bg md:relative md:flex items-center justify-between  lg:px-28 xl:px-32'>
          <div>
            <Link to='/'>
              <img className='' src='/images/Logo-9 1.png' alt='Logo' />
            </Link>
          </div>
          <div className='absolute right-8 top-9 cursor-pointer md:hidden'>
            <button
              className='lg:hidden'
              onClick={() => setOpen((prev) => !prev)}
            >
              {open ? (
                <FaTimes className='w-6 h-18 text-black' />
              ) : (
                <svg
                  width='24'
                  height='18'
                  viewBox='0 0 24 18'
                  fill='none'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path
                    d='M1.3335 17H22.6668M1.3335 1H22.6668H1.3335ZM1.3335 9H22.6668H1.3335Z'
                    stroke='black'
                    strokeWidth='2'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                  />
                </svg>
              )}
            </button>
          </div>
          <ul
            className={`md:flex md:items-center md:pb-0 absolute md:static bg-menu-bg md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${
              open ? 'top-20' : 'top-[-200%]'
            }`}
          >
            {Links.map((link) => {
              return (
                <li
                  key={link.name}
                  className='text-base font-normal font-Sora text-darkishBlack md:ml-8  md:my-0 my-7'
                >
                  <Link to={link.link}> {link.name} </Link>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </>
  );
}

export default Navbar;
