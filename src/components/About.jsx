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
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nemo totam necessitatibus expedita voluptate cum,
           quia tenetur suscipit neque commodi? Quia et facilis soluta debitis iure! Cum omnis quaerat blanditiis odio
            esse optio consequatur asperiores fuga hic vel placeat eius saepe id quae, velit assumenda unde sit,
             obcaecati quasi eligendi ratione.</p>
             <br />
             <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime reiciendis magni perspiciatis expedita 
              autem reprehenderit quibusdam! Recusandae aspernatur id et est ipsa tempore iusto ratione nulla 
              consequatur numquam ullam assumenda quibusdam temporibus harum vel quasi magni obcaecati vitae,
               suscipit voluptate omnis dignissimos amet sapiente maxime. Et repellendus autem ullam at?
             </p>
      </div>
    </div>
  )
}

export default About;