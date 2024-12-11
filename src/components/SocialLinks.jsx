import React from 'react'
import { FaGithub, FaInstagram, FaLinkedin,IoIosMail } from "react-icons/fa";

 const Sociallinks = () => {

const links=[
  {
    id: 1,
    child:(
      <>
      linkedin <FaLinkedin size={30}/>
      </>
    ),
    href: "https://www.linkedin.com/in/adil-raees-08436a2b2?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
    style: "rounded-tr-md"

  },
  {
    id: 2,
    child:(
      <>
      Github <FaGithub size={30}/>
      </>
    ),
    href: "https://github.com/adilraees786",
    style: "rounded-tr-md"

  },
  {
    id: 3,
    child:(
      <>
      Instagram <FaInstagram size={30}/>
      </>
    ),
    href: "https://www.linkedin.com/in/adil-raees-08436a2b2?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
    style: "rounded-tr-md"

  },
  {
    id: 4,
    child:(
      <>
      Mail <IoIosMail size={30}/>
      </>
    ),
    href: "https://www.linkedin.com/in/adil-raees-08436a2b2?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
    style: "rounded-tr-md"

  },
]

  return (
    <div className=' flex flex-col top-[35%] left-0 fixed'>
      <ul>
        <li className=' flex justify-between items-center w-40 h-14
        px-4 ml-[-100px] hover:ml-[-10px] hover:rounded-md duration-300
        bg-gray-500'>
          <a
           href=""
           className=' flex justify-between items-center w-full text-white'
           >
            
             </a>
             </li>
            
      </ul>
   
    </div>
  )
}

export default Sociallinks;