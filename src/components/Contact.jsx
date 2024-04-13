import React, { useEffect, useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    subject: '',
    message: ''
  });

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

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, phone, email, subject, message } = formData;
    if (name && phone && email && subject && message) {
      // Submit the form
      e.target.submit();
    } else {
      alert('Please fill in all fields.');
    }
  };

  return (
    <div id='contact' className='max-w-[1040px] m-auto md:pl-20 p-4 py-16 fade-in'>
      <h1 className='py-4 text-4xl text-center font-thin text-[#e6e1f3] glow-text'>CONTACT</h1>
      <form action='https://getform.io/f/pbnvnegb' method='POST' encType='multipart/form-data' onSubmit={handleSubmit}>
        <div className='grid md:grid-cols-2 gap-4 w-full py-2 text-[#e6e1f3]'>
          <div className='flex flex-col py-2'>
            <label className='uppercase text-sm py-2'>Name</label>
            <input type='text' name='name' id='' className='border-2 rounded-lg p-3 flex border-gray-300 text-black' onChange={handleChange} />
          </div>
          <div className='flex flex-col py-2'>
            <label className='uppercase text-sm py-2'>Phone Number</label>
            <input type='number' name='phone' id='' className='border-2 rounded-lg p-3 flex border-gray-300  text-black' onChange={handleChange} />
          </div>
          <div className='flex flex-col py-2'>
            <label className='uppercase text-sm py-2'>Email</label>
            <input type='email' name='email' id='' className='border-2 rounded-lg p-3 flex border-gray-300 text-black' onChange={handleChange} />
          </div>
          <div className='flex flex-col py-2'>
            <label className='uppercase text-sm py-2'>Subject</label>
            <input type='text' name='subject' id='' className='border-2 rounded-lg p-3 flex border-gray-300 text-black' onChange={handleChange} />
          </div>
          <div className='flex flex-col'>
            <label className='uppercase text-sm py-2'>Message</label>
            <textarea name='message' id='' cols='30' rows='10' className='border-2 rounded-lg p-3 border-gray-300 text-black' onChange={handleChange}></textarea>
          </div>
        </div>
        <button type='submit' className='bg-[#392fa4] text-gray-200 mt-4 w-full p-4 rounded-lg'>Send message</button>
      </form>
    </div>
  );
};

export default Contact;
