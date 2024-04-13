import React, { useEffect } from 'react';

const WorkItem = ({ year, title, duration, details }) => {
  useEffect(() => {
    const fadeInElement = document.querySelector('.fade-in');

    function handleScroll() {
      const elementTop = fadeInElement.getBoundingClientRect().top;
      const windowHeight = window.innerHeight;

      if (elementTop < windowHeight) {
        fadeInElement.classList.add('active');
        window.removeEventListener('scroll', handleScroll);
      }
    }

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      <div className='flex flex-col md:flex-row relative border-l border-stone-200 fade-in'>
        <ul>
          <li className='mb-10 ml-4'>
            <div className='absolute w-3 h-3 bg-stone-200 rounded-full mt-1.5 -left-1.5'></div>
            <p className='flex flex-wrap gap-4 items-center justify-start flex-row text-xs md:text-sm'>
              <span className='inline-block px-2 py-1 font-semibold text-white bg-blue-950 rounded-md'>{year}</span>
              <span className='text-lg font-semibold text-[#cdd3e1]'>{title}</span>
              <span className='my-1 text-sm font-normal leading-none text-stone-400'>{duration}</span>
            </p>
            <p className='my-2 text-base font-normal text-stone-100'>{details}</p>
          </li>
        </ul>
        <hr />
      </div>
    </>
  );
};

export default WorkItem;
