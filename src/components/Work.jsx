import React, { useEffect } from 'react';
import WorkItem from './WorkItem';

const data = [
  {
    year: 2024,
    title: "Student Intern at KJ Somaiya Institute of Technology",
    duration: "Feb-Present",
    details: "Built a folder management system for the college's student council  using javascript and php. "
  }
  
];

const Work = () => {
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
    <div id='work' className='max-w-[1040px] m-auto md:pl-20 p-4 py-16'>
      <h1 className='text-4xl font text-center m-4 font-thin text-[#f3f0fa] glow-text fade-in'>WORK</h1> <br />
      {
        data.map((item, index) => (
          <WorkItem key={index} year={item.year} title={item.title} duration={item.duration} details={item.details} />
        ))
      }
    </div>
  );
};

export default Work;
