import React from 'react';
import HeroSection from '../../components/HeroSection';
import Footer from '../../components/Footer';
import Navbar from '../../components/Navbar';

function ContactUs() {
  return (
    <>
      <Navbar />
      <HeroSection
        title={'Become our partner, Let’s talk about your next project'}
        content='Drop us a line with the form below or better still shoot us an email on hello@megastack.tech'
      />
      <div className='px-8 md:px-12 lg:px-32 -mt-72'>
        <form action=''>
          <div className='form-container'>
            <div>
              <label
                className='block font-Sora font-semibold text-base leading-116 tracking-wide text-darkishBlack mt-6'
                htmlFor='fullName'
              >
                Full Name
              </label>
              <input
                className='w-full p-4 h-54 bg-white rounded-lg mt-2 inputBorder'
                type='text'
                name='fullName'
                placeholder='Your name'
                id='fullName'
              />
            </div>
            <div>
              <label
                className='block font-Sora font-semibold text-base leading-116 tracking-wide text-darkishBlack mt-6'
                htmlFor='email'
              >
                Email
              </label>
              <input
                className='w-full p-4 h-54 bg-white rounded-lg mt-2 inputBorder'
                type='email'
                name='email'
                placeholder='Your email'
                id='email'
              />
            </div>
            <div>
              <label
                className='block font-Sora font-semibold text-base leading-116 tracking-wide text-darkishBlack mt-6'
                htmlFor='phoneNumber'
              >
                Phone Number
              </label>
              <input
                className='w-full p-4 h-54 bg-white rounded-lg mt-2 inputBorder'
                type='number'
                name='phoneNumber'
                placeholder='Your number'
                id='phoneNumber'
              />
            </div>
            <label
              className='block font-Sora font-semibold text-base leading-116 tracking-wide text-darkishBlack mt-6'
              htmlFor='message'
            >
              Message
            </label>
            <textarea
              className='w-full p-4 h-158 bg-white rounded-lg mt-2 inputBorder'
              name='message'
              id='message'
              cols='30'
              rows='10'
              placeholder='Tell us briefly about your project'
            ></textarea>
          </div>
          <button
            className='w-full h-54 bg-btnColor border-0 rounded-lg mt-6 text-white font-Sora font-normal text-sm leading-160 tracking-wide btn'
            type='submit'
          >
            Send Message
          </button>
        </form>
      </div>
      <Footer />
    </>
  );
}

export default ContactUs;
