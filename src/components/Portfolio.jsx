import React from 'react'

const Portfolio = () => {
  return (
    <div name="portfolio" className=' bg-gradient-to-b from-black to-gray-800 
    w-full text-white md:h-screen'>
      <div className=' max-w-screen-lg p-4 mx-auto flex flex-col
      justify-center h-full w-full'>
        <div>
          <h1>Portfolio</h1>
          <p>Check out some of my work right here</p>
        </div>
        <div>

          <div>
            <img src="" alt="" />
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