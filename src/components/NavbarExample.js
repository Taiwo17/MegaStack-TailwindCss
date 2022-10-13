const [isNavOpen, setIsNavOpen] = useState(false);
return (
  <div className='shadow-md w-full fixed top-0 left-0'>
    <nav className='flex justify-between items-center px-6 py-4 h-92 bg-menu-bg lg:px-28 xl:px-32'>
      <div>
        <Link to='/'>
          <img className='' src='/images/Logo-9 1.png' alt='Logo' />
        </Link>
      </div>

      <ul
        className={`md: lg:flex justify-between items-center ${
          isNavOpen ? 'top-20' : 'top-[-490]'
        }`}
      >
        <li>
          <Link
            className='text-base font-normal font-Sora pr-8 text-darkishBlack'
            to='/'
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            className=' text-base font-normal font-Sora pr-8 text-darkishBlack'
            to='/about-us'
          >
            About Us
          </Link>
        </li>
        <li>
          <Link
            className=' text-base font-normal font-Sora pr-8 text-darkishBlack'
            to='/our-work'
          >
            Our Work
          </Link>
        </li>
        <li>
          <Link
            className=' text-base font-normal font-Sora pr-8 text-darkishBlack'
            to='/blog'
          >
            Blog
          </Link>
        </li>
        <li>
          <Link
            className=' text-base font-normal font-Sora pr-8 text-darkishBlack'
            to='/contact-us'
          >
            Let's Talk
          </Link>
        </li>
      </ul>

      <button
        className='lg:hidden'
        onClick={() => setIsNavOpen((prev) => !prev)}
      >
        {isNavOpen ? (
          <FaTimes />
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
    </nav>
  </div>
);
