import React from 'react';
import { MdOutlineKeyboardArrowRight } from 'react-icons/md';
import { Link } from 'react-scroll';
import portfolio from '../assets/assets/portfolio.png';

const Home = () => {
  return (
    <div
      name="home"
      className="h-screen w-full bg-gradient-to-b from-black via-black to-gray-800"
    >
      <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row">
        {/* Text Content */}
        <div className="flex flex-col justify-center h-full">
          <h2 className="text-4xl sm:text-5xl font-bold text-white">
            Frontend Developer
          </h2>

          <p className="text-gray-500 py-4 max-w-md">
            I’m a frontend developer with a strong focus on{' '}
            <span className="font-semibold text-white">React.js</span> and{' '}
            <span className="font-semibold text-white">Next.js</span>, passionate about building high-performance, scalable, and user-friendly web applications.
            <br />
            <br />
            I began my journey at <span className="font-bold text-white">SMIT</span> as an intern, then joined{' '}
            <span className="font-bold text-white">Linkitsoft</span> as a Software Developer. Currently, I'm working at{' '}
            <span className="font-bold text-white">Legacy Tech</span> as a React Developer, building dynamic and SEO-optimized interfaces.
          </p>

          <div>
            <Link
              to="portfolio"
              smooth
              duration={500}
              className="group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer"
            >
              Portfolio
              <span className="group-hover:rotate-90 duration-300">
                <MdOutlineKeyboardArrowRight size={25} className="ml-1" />
              </span>
            </Link>
          </div>
        </div>

        {/* Image Section */}
        <div className="mt-8 md:mt-0 md:ml-20">
          <img
            src={portfolio}
            alt="My Profile"
            className="rounded-md mx-auto w-2/3 md:w-full"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
