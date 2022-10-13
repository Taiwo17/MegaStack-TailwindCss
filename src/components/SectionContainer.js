import React from 'react';

function SectionContainer() {
  const Heros = [
    {
      id: 1,
      title: 'We Plan',
      content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eget
              nullam erat quam tellus feugiat risus semper. Amet orci facilisi
              nec`,
    },
    {
      id: 2,
      title: 'We Design',
      content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eget
              nullam erat quam tellus feugiat risus semper. Amet orci facilisi
              nec`,
    },
    {
      id: 3,
      title: 'We Develop',
      content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eget
              nullam erat quam tellus feugiat risus semper. Amet orci facilisi
              nec`,
    },
  ];
  return (
    <>
      <div className='pt-88 px-8 md:pt-100 md:px-12 lg:pt-176 lg:px-32'>
        <div className='grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3'>
          {Heros.map(({ id, title, content }) => {
            return (
              <div className='' key={id}>
                <h2 className='font-Sora font-semibold text-xl leading-120 tracking-wide mb-2 text-btnColor sm:text-3xl'>
                  {title}
                </h2>
                <p className='font-Sora font-light text-base leading-150 tracking-wide text-darkishBlack sm:text-lg lg:font-normal'>
                  {content}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default SectionContainer;
