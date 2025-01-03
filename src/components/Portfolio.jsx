
import React from 'react';
import ecommerce from '../assets/assets/portfolio/ecommerce.png';
import todolist from '../assets/assets/portfolio/todolist.png';
import budgetapp from '../assets/assets/portfolio/budgetapp.png';
import onlinestore from '../assets/assets/portfolio/onlinestore.png';
import randomwords from '../assets/assets/portfolio/randomwords.png';
import trafficlights from '../assets/assets/portfolio/trafficlights.png';

const Portfolio = () => {
  const portfolios = [
    {
      id: 1,
      src: ecommerce,
      demoLink: "https://e-commerce-blue-eight-15.vercel.app/",
    },
    {
      id: 2,
      src: todolist,
      demoLink: "https://todo-list-using-react-js-omega.vercel.app/",
    },
    {
      id: 3,
      src: onlinestore,
      demoLink: "https://adilraees786.github.io/E-commerce-website.js/",
    },
    {
      id: 4,
      src: randomwords,
      demoLink: "https://adilraees786.github.io/Random-word-generate/"
    },
    {
      id: 5,
      src: budgetapp,
      demoLink: "https://adilraees786.github.io/Budget-Expensive-Cal/",
    },
    {
      id: 6,
      src: trafficlights,
      demoLink: "https://traffic-lights-using-next-js.vercel.app/",
    },
  ];

  return (
    <div
      name="portfolio"
      className="bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center h-full w-full">
        <div className="pb-8">
          <h1 className="text-4xl font-bold inline border-b-4 border-gray-500">
            Portfolio
          </h1>
          <p className="py-6">Check out some of my work right here</p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-8">
          {portfolios.map(({ id, src, demoLink }) => (
            <div key={id} className="shadow-md shadow-gray-600 rounded-lg">
              <img
                src={src}
                alt=""
                className="rounded-md duration-200 hover:scale-105"
              />
              <div className="flex items-center justify-center">
                <a
                  href={demoLink}
                  target="_blank"
                 
                  className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105 text-center bg-gray-700 rounded-lg"
                >
                  Demo
                </a>
                {/* <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
                  Code
                  
                </button> */}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;

