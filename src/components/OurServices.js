import React from 'react';

function OurServices() {
  const ServicesPages = [
    {
      id: 1,
      serTitle: 'Web/Mobile Development',
      serImg: '/images/Service-illustration.png',
      serText: `MegaStack offers a software development service that enables business owners to create and extend solutions to their users. With goodwill entrusted by some top companies worldwide and supported by Google.`,
      subText: `We develop software using modern technology and frameworks, that are secure, functional, and scalable to meet development goals and foster integration. The delivery team at MegaStack is capable of using a variety of strategies, including responsive design, adaptive design, and mobile web development. We create websites that function flawlessly on mobile devices.`,
    },
    {
      id: 2,
      serTitle: 'UI/UX Design',
      serImg: '/images/Service-illustration-1.png',
      serText: `Our product design team seamlessly integrates with the development engineering team to design processes that are practical for businesses and intuitive for users. We have extensive expertise in creating sophisticated B2B solutions as well as consumer applications. `,
      subText: `As an expert team of User Interface (UI) and User Experience (UX) designers, collaboratively in sync with the development engineering team, we create the best products with good user experience for the web, iOS, and Android platforms as well as design solutions for XR/AR/VR products. Armed with good design and technological expertise we proffer carefully thought-out solutions that keep up with trends and technological advancement.`,
    },
    {
      id: 3,
      serTitle: 'Business Automation',
      serImg: '/images/Service-illustration-2.png',
      serText: `Some tasks and processes are supposed to be automated for businesses to be able to make positive business decisions more accessible and faster. This is why we provide practical assistance and consulting support for implementing and automating workflow processes and solutions for your business.`,
      subText: `Based on platforms that enable automation like SharePoint, Office 365, Power Apps, and Power Automate, as well as custom end-to-end process automation solutions, self-service portals, and bots for various business functions and industries.`,
    },
    {
      id: 4,
      serTitle: 'Blockchain Development',
      serImg: '/images/Service-illustration-3.png',
      serText: `In this 21st century which is the future vision of the next phase of the internet, and equally the Web3 revolution; businesses need to be future-proof by connecting with their users and should do that in a space where the users are comfortable.`,
      subText: `We help to enable companies to deploy solutions to the Web3 space through blockchain development and technology expertise that provides full-cycle blockchain application development services to introduce trustworthy blockchain solutions, and decentralized applications that boost data and transaction security, traceability, and integrity with the aid of the BlockChain network.`,
    },
  ];
  return (
    <section className='pt-28 px-8 md:px-12 lg:px-32'>
      <div className='w-full sm:w-3/4 lg:w-1/2'>
        <h2 className='font-Sora font-bold	text-44 leading-110 tracking-wide text-titleHeader mb-6'>
          What we do
        </h2>
        <p className='main-text font-Sora font-light text-base leading-150 tracking-wide text-titleHeader sm:text-lg sm:font-normal'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vulputate
          feugiat a volutpat potenti nisi
        </p>
      </div>
      <div className=''>
        {ServicesPages.map((services) => {
          const { id, serTitle, serText, serImg, subText } = services;
          return (
            <div className='grid grid-cols-1 lg:grid-cols-2 gap-8' key={id}>
              <div className='sm:shrink-0'>
                <img
                  className='mb-4 sm:w-400 sm:h-400 sm:shrink-0'
                  src={serImg}
                  alt='Mobile Services'
                />
              </div>
              <div className='order-0 lg:mobile-content-container'>
                <h2 className='text-btnColor font-Sora font-bold text-32 leading-120 tracking-wide mb-6 sm:text-3xl'>
                  {serTitle}
                </h2>
                <p className='font-Sora font-light text-base leading-150 tracking-wide text-justify text-titleHeader sm:text-lg sm:font-normal'>
                  {serText}
                </p>
                <p className='font-Sora font-light text-base leading-150 tracking-wide text-justify text-titleHeader mt-4 sm:text-lg sm:font-normal'>
                  {subText}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default OurServices;
