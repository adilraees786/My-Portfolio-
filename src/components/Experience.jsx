

import React from 'react';
import html from '../assets/assets/portfolio/html.png';
import css from '../assets/assets/portfolio/css.png';
import javascript from '../assets/assets/portfolio/javascript.png';
import react from '../assets/assets/portfolio/react.png';
import nextjs from '../assets/assets/portfolio/nextjs.png';
import tailwind from '../assets/assets/portfolio/tailwind.png';
import node from '../assets/assets/portfolio/node.png';
import github from '../assets/assets/portfolio/github.png';

const Experience = () => {
  const techs = [
    {
      id: 1,
      src: html,
      title: "HTML",
      style: "shadow-orange-500"
    },
    {
      id: 2,
      src: css,
      title: "CSS",
      style: "shadow-blue-500"
    },
    {
      id: 3,
      src: javascript,
      title: "JavaScript",
      style: "shadow-yellow-500"
    },
    {
      id: 4,
      src: react,
      title: "React",
      style: "shadow-blue-600"
    },
    {
      id: 5,
      src: tailwind,
      title: "Tailwind",
      style: "shadow-sky-400"
    },
    {
      id: 6,
      src: nextjs,
      title: "Next JS",
      style: "shadow-white"
    },
    {
      id: 7,
      src: node,
      title: "Node JS",
      style: "shadow-green-500"
    },
    {
      id: 8,
      src: github,
      title: "GitHub",
      style: "shadow-gray-400"
    }
  ];

  return (
    <div
      name="experience"
      className="bg-gradient-to-b from-gray-800 to-black w-full h-screen"
    >
      <div
        className="max-w-screen-lg mx-auto p-4 flex flex-col
      justify-center h-full w-full text-white"
      >
        <div>
          <h1
            className="text-4xl font-bold border-b-4 border-gray-500
          p-2 inline"
          >
            Experience
          </h1>
          <p className="py-6">These are Technologies I have worked with</p>
        </div>
        <div
          className="w-full grid grid-cols-2 sm:grid-cols-3
        gap-8 text-center py-8 px-12 sm:px-0"
        >
          {techs.map(({ id, src, title, style }) => (
            <div
              key={id}
              className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style}`}
            >
              <img src={src} alt={title} className="w-20 mx-auto" />
              <p className="mt-4">{title}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experience;

