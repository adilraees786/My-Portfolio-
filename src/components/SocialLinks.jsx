import React from 'react'
import { FaFacebook, FaGithub, FaInstagram, FaLinkedin} from "react-icons/fa";
import { SiGmail } from "react-icons/si";

 const SocialLinks = () => {

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
    href: "https://www.instagram.com/adii_hehe?igsh=MTFpYnNoaGV0enB5cg==",
    style: "rounded-tr-md"

  },
  {
    id: 4,
    child: (
      <>
        Mail <SiGmail size={30} />
      </>
    ),
    href: "mailto:adilraees911@gmail.com",
    style: "rounded-tr-md",
  },
  {
    id: 5,
    child:(
      <>
      Facebook <FaFacebook size={30}/>
      </>
    ),
    href: "https://www.facebook.com/adil.raees.96?mibextid=ZbWKwL",
    style: "rounded-tr-md"

  },
]

  return (
    <div className='hidden lg:flex flex-col top-[35%] left-0 fixed'>
      <ul>
        
        {links.map(({ id, child, href, style }) => (
  <li
    key={id}
    className={
      'flex justify-between items-center w-40  h-14 px-4 ml-[-100px] hover:ml-[-10px] hover:rounded-md duration-300 bg-gray-500' + " " +
      style
    }
  >
    <a
      href={href}
      className="flex justify-between items-center w-full text-white"
    >
      {child}
    </a>
  </li>
))}


        
            
      </ul>
   
    </div>
  )
}

export default SocialLinks;