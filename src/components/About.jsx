import React from 'react'

const About = () => {
  return (
    <div name="about" className=' w-full h-screen bg-gradient-to-b from-gray-800
    to-black text-white'>
      <div className=' max-w-screen-lg p-4 mx-auto flex flex-col
      justify-center w-full h-full'>
        <div className='pb-8'>
          <h1 className=' text-4xl font-bold inline border-b-4 
          border-gray-500'>
            About
          </h1>
        </div>
        <p className=' text-xl mt-20'>I am a student at the University of FUUAST with a major in 
           <span className=' text-blue-900 font-extrabold' > Computer Science</span> . As a skilled MERN Stack Developer with a solid foundation in React.js,
            Next.js, React Native, Tailwind CSS  and Firebase, I specialize in crafting dynamic, responsive 
            Web and App Applications that solve real-world problems. With experience in full-stack
             development, I am passionate about delivering robust and scalable solutions.</p>
        <br />
        <p className='text-xl'>
        Alongside my technical skills, I am actively engaged in social media activism, where I
         blend my development expertise with community engagement to create impactful digital
          platforms. I am committed to continuous learning and currently advancing my skills
           in  <span className=''> JavaScript</span> frameworks and modern web technologies.
        </p>
      </div>
    </div>
  )
}

export default About;