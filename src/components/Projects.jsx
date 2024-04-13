import React, { useEffect } from 'react';
import ProjectItem from './ProjectItem';
import sdsImg from '..//assets/sds.png';
import JobImg from '..//assets/Job.png';

import {FaLinkedinIn,FaFacebookF,FaInstagram, FaGithub} from 'react-icons/fa';


const Projects = () => {
  useEffect(() => {
    const fadeInElements = document.querySelectorAll('.fade-in');

    function handleScroll() {
      fadeInElements.forEach((element) => {
        const elementTop = element.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;

        if (elementTop < windowHeight) {
          element.classList.add('active');
        }
      });
    }

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div id='projects' className='max-w-[1040px] m-auto md:pl-20 p-4 py-16'>
      <h1 className='text-4xl font-thin text-center text-[#f8faff] glow-text fade-in mb-2'>PROJECTS</h1>
      <br />
      <div className="floating flex flex-row  mt-2 mb-4 justify-evenly" >
      <img width="70" height="70" src="https://img.icons8.com/fluency/48/html-5.png" alt="html-5"/>
      <img width="70" height="70" src="https://img.icons8.com/ultraviolet/40/react--v1.png" alt="react--v1"/>  
      <img width="70" height="70" src="https://img.icons8.com/fluency/48/javascript.png" alt="javascript"/>
      <img width="70" height="70" src="https://img.icons8.com/fluency/48/tailwind_css.png" alt="tailwind_css"/>
      <img width="70" height="70" src="https://img.icons8.com/fluency/48/php.png" alt="php"/>
      <img width="70" height="70" src="https://img.icons8.com/color/48/python--v1.png" alt="python--v1"/>
           </div>
      <p id='font' className='text-center py-8 text-[#fefff7] fade-in'>Here are some examples of my recent work in web development. I've enjoyed working on these projects, and I hope they give you a good sense of my skills and style. Feel free to take a look around and let me know if you have any questions.</p>

      <div className='grid sm:grid-cols-2 gap-12'>
        <ProjectItem img={sdsImg} title="Student Diagnostic System" link="https://github.com/anoushka45/Student-Diagnostic-System" />
        <ProjectItem img={JobImg} title="Jobportal" link= "https://github.com/anoushka45/Jobportal" />

        
      </div>


     

    </div>
  );
};

export default Projects;
