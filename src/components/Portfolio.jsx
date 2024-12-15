import React from 'react'
import ecommerce from '../assets/assets/ecommerce.png'

const Portfolio = () => {
  return (
    <div name="portfolio" className=' bg-gradient-to-b from-black to-gray-800 
    w-full text-white md:h-screen'>
      <div className=' max-w-screen-lg p-4 mx-auto flex flex-col
      justify-center h-full w-full'>
        <div className=' pb-8'>
          <h1 className=' text-4xl font-bold inline border-b-4
          border-gray-500'>Portfolio</h1>
          <p className=' py-6'>Check out some of my work right here</p>
        </div>
        <div className=' grid sm:grid-cols-2 md:grid-cols-3 gap-8
        px-12 sm:px-8 '>

          <div className=' shadow-md shadow-gray-600 rounded-lg '>
            <img src={ecommerce} alt=""  className=' rounded-md duration-200 hover:scale-105 '/>
            <div>
              <button>Demo</button>
              <button>Code</button>
            </div>

          </div>

        </div>
      </div>
    </div>
  )
}
export default Portfolio;