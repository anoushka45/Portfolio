import React from 'react';

const ProjectItem = ({ img, title, link }) => {
  return (
    <div className='relative flex items-center justify-center h-auto w-full shadow-xl shadow-gray-400 rounded-xl group hover:bg-gradient-to-r from-gray-200 to-[#001b5e] '>
      <img className='rounded-xl group-hover:opacity-15' src={img} alt="/" />
      <div className='hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]'>
        <h3 className='font-bold text-white text-2xl  tracking-wider text-center'>
          {title}
        </h3>
        <a href={link} target="_blank" rel="noopener noreferrer">
          <p className='text-center p-3 rounded-ld bg-white font-bolder cursor-pointer  text-gray-600 rounded-lg text-lg  m-2'>More info</p>
        </a>
      </div>
    </div>
  );
};

export default ProjectItem;
