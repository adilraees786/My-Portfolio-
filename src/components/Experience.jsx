import React from 'react'
import html from '../assets/assets/portfolio/html.png';
// import html from '../assets/assets/portfolio/html.png';
// import html from '../assets/assets/portfolio/html.png';
// import html from '../assets/assets/portfolio/html.png';
// import html from '../assets/assets/portfolio/html.png';
// import html from '../assets/assets/portfolio/html.png';
// import html from '../assets/assets/portfolio/html.png';
// import html from '../assets/assets/portfolio/html.png';

const Experience = () => {
  return (
    <div name='experience' className=' bg-gradient-to-b from-gray-800 to-black
    w-full h-screen'>
      <div className='max-w-screen-lg mx-auto p-4 flex flex-col
      justify-center h-full w-full text-white'>
        <div>
          <h1 className=' text-4xl font-bold border-b-4 border-gray-500
          p-2 inline' >Experience</h1>
          <p className='py-6'>These are Technologies I have worked with</p>

        </div>
        <div className=' w-full grid grid-cols-2 sm:grid-cols-3
        gap-8 text-center py-8 px-12 sm:px-0'>
          <div className=' shadow-md hover:scale-105 duration-500
          py-2 rounded-lg'>
            <img src={html} alt="" />
            <p>HTML</p>
          </div>
        </div>

      </div>
    </div>
  )
}

export default Experience;