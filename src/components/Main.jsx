import React from 'react'
import { TypeAnimation } from 'react-type-animation';
import {FaLinkedinIn,FaFacebookF,FaInstagram, FaGithub} from 'react-icons/fa';
import resume from '/Resume.pdf'
const Main = () => {
 
  return (
    <div id='main'>
            <h1 className='absolute top-0 left-0 z-10 p-4 text-4xl font-bold text-gray-200'>PORTFOLIO</h1>
           
      <img src="../assets/dp3.jpg" alt="dp" className='w-full h-screen object-cover ' />
      <div className='w-full h-screen absolute top-0 left-0 bg-white/0 '>
        <div className='max-w-[700px]  m-auto h-full w-full flex flex-col justify-center  items-center'>
       
          <h1 className='md:text-7xl sm:text-5xl text-5xl p-4 text-gray-200' id='font' >ANOUSHKA <span className='text-[red]'>VYAS</span></h1>
          <h2 className='flex sm:text-3xl text:2xl p-4 font-thin text-gray-200'> I am a 
            <TypeAnimation
              sequence={[
                ' Developer',
                2000, // wait 1s before replacing "Mice" with "Hamsters"

                ' Coder',
                2000,
                ' Tech Enthusiast',
                2000
              ]}
              wrapper="span"
              speed={50}
              style={{ fontSize: '1em', display: 'inline-block', paddingLeft: '5px', color:'pink', }}
              repeat={Infinity}
            />
          </h2>
          <p className='flex p-4 font-thin md:text-2xl text-gray-200 cursor-pointer' id='font'>Hi there! I'm Anoushka Vyas, a Web Developer  and  a third year IT Engineering Student with experience in React, Javascript, Tailwind.  I  love creating dynamic web applications that deliver exceptional user experiences.

I've built some projects showcasing my skills in frontend and backend development. Eager to learn more, I'm always exploring new technologies.

Let's connect and explore how we can work together to bring your ideas to life!

</p>
<button   className='flex sm:text-2xl text:3xl p-4  bg-yellow rounded-full text-[yellow] cursor-pointer   hover:scale-105   hover:text-[#faf453]'><a href={resume} target = "_blank">View Resume</a></button>

          <div className='flex justify-between pt-6 p-4 w-full max-w-[200px]'>
 <a href="https://www.linkedin.com/in/anoushka-vyas-a57aa7157/"><FaLinkedinIn size={30}  className='cursor-pointer'/></a>
<a href="https://github.com/anoushka45" className='cursor-pointer'>
    <FaGithub size={30} />
  </a>
          </div>
        </div>
      </div>
      
    </div>
  )
}

export default Main