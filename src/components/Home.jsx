import React from 'react'
import myimage from "../assets/assets/myimage.jpg"
import { MdOutlineKeyboardArrowRight } from "react-icons/md";

const Home = () => {
  return (
    <div name="home" className=' h-screen  w-full bg-gradient-to-b from-black to-gray-800 '>
      <div className=' max-w-screen-lg mx-auto flex flex-col
      items-center justify-center h-full'>
        <div>
          <h2>
            I'm a Full Stack Developer
          </h2>
          <p> I have 1 Year experience building and
            designing softwear.
            Currently, I love to work on web application
            using technologies like
            React, Next js, Tailwind CSS, Html. </p>

            <div>
              <button>Portfolio
                <span>
                <MdOutlineKeyboardArrowRight/>
                </span>
              </button>
            </div>
        </div>

      </div>
    </div>
  )
}
export default Home;
