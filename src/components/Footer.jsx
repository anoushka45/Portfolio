import React from 'react'
import {FaLinkedinIn,FaFacebookF,FaInstagram, FaGithub} from 'react-icons/fa';
const Footer = () => {
  return (
 

<footer className="bg-[#1d1d68] shadow  dark:bg-gray-800 p-6">
    <ul id='font' className='flex flex-row justify-around text-white font-thin'>
      <li><a href=""> @2024 Anoushka Vyas </a></li>
      <li><a href="#main">About</a></li>
      <li><a href="#contact">Contact</a></li>
      <li><a href="https://www.linkedin.com/in/anoushka-vyas-a57aa7157/"><FaLinkedinIn></FaLinkedinIn></a></li>
      <li><a href="https://github.com/anoushka45"><FaGithub></FaGithub></a></li>
     
    </ul>
</footer>

  )
}

export default Footer