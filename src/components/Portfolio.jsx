import React from 'react'
import ecommerce from '../assets/assets/portfolio/ecommerce.png'
import todolist from '../assets/assets/portfolio/todolist.png'
import budgetapp from '../assets/assets/portfolio/budetapp.png'
import onlinestore from '../assets/assets/portfolio/onlinestore.png'
import randomwords from '../assets/assets/portfolio/randomwords.png'
import trafficlight from '../assets/assets/portfolio/trafficlight.png'
import passvalidation from '../assets/assets/portfolio/passvalidation.png'

const Portfolio = () => {

  const portfolios = [
    {
      id: 1,
      src: todolist
    },
    {
      id: 2,
      src: budgetapp
    },
    {
      id: 3,
      src: onlinestore
    },
    {
      id: 4,
      src: randomwords
    },
    {
      id: 5,
      src: trafficlight
    },
    {
      id: 6,
      src: passvalidation
    }
  ]
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
            <div className='flex items-center justify-center'>
              <button className='w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105'>Demo</button>
              <button className='w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105'>Code</button>
            </div>

          </div>

        </div>
      </div>
    </div>
  )
}
export default Portfolio;