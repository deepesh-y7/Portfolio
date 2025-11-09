import React from "react";
import { RiHome4Line } from "react-icons/ri";
import { GrCode } from "react-icons/gr";
import { FaUser } from "react-icons/fa";
import { TbLogs } from "react-icons/tb";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
import { FaXTwitter } from "react-icons/fa6";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <nav className="w-full py-6 flex justify-center fixed top-0 z-50 ">
      <div
        className="rounded-full w-[850px] max-lg:w-[800px] max-[450px]:w-[400px] max-[400px]:w-[345px] max-[350px]:w-[330px] max-[321px]:w-[310px]
        px-2 py-1  bg-opacity-25 backdrop-blur-xl border border-black/10  mx-3 flex items-center justify-center shadow"
      >
        <div className="flex justify-center px-2 items-center gap-10  max-sm:gap-6  max-[400px]:gap-4 max-[450px]:gap-5 transition-all">
          {/* // home */}
         <Link to='/' className="relative group">
       
            <div
              className="relative  cursor-pointer hover:px-3 max-sm:hover:px-3 py-3 
                   hover:bg-[#F4F4F5] rounded-full 
                  transition-all duration-300 flex items-center justify-center"
            >
            
              <RiHome4Line className="w-[21px] h-[21px] max-sm:w-[16px] max-sm:h-[16px] text-black " />
              {/* Tooltip */}
              <span
                className="absolute top-full left-1/2 -translate-x-1/2 mt-2
      opacity-0 group-hover:opacity-100 
      bg-gray-900 text-white text-xs px-2 py-1 rounded whitespace-nowrap
      transition-all duration-300"
              >
                Home
              </span>
            </div>
        </Link>

          {/* // projects */}
        <Link to='/projects'  className="relative group">
        
            <div
              className="relative  cursor-pointer hover:px-3 max-sm:hover:px-3 py-3 
                  hover:bg-[#F4F4F5] rounded-full 
                  transition-all duration-300 flex items-center justify-center"
            >
           <GrCode className="w-[19px] h-[19px] max-sm:w-[15px] max-sm:h-[15px] text-black " /> 
              {/* <LuFlameKindling /> */}
              <span
                className="absolute top-full left-1/2 -translate-x-1/2 mt-2
      opacity-0 group-hover:opacity-100 
      bg-gray-900 text-white text-xs px-2 py-1 rounded whitespace-nowrap
      transition-all duration-300"
              >
                Projects
              </span>
            </div>
        
          </Link>  
          {/* // blogs */}
          <a className="relative group">
            <div
              className="relative  cursor-pointer hover:px-3 max-sm:hover:px-3 py-3
                  dark:hover:bg-[#262626] hover:bg-[#F4F4F5] rounded-full 
                  transition-all duration-300 flex items-center justify-center"
            >
              <TbLogs className="w-[19px] h-[19px] max-sm:w-[15px] max-sm:h-[15px] text-black " />
              <span
                className="absolute top-full left-1/2 -translate-x-1/2 mt-2
      opacity-0 group-hover:opacity-100 
      bg-gray-900 text-white text-xs px-2 py-1 rounded whitespace-nowrap
      transition-all duration-300"
              >
                Blogs
              </span>
            </div>
          </a>
          {/* // about */}
          <Link to='/profile' className="relative group">
          
            <div
              className="relative  cursor-pointer hover:px-3 max-sm:hover:px-3 py-3 
                  dark:hover:bg-[#262626] hover:bg-[#F4F4F5] rounded-full 
                  transition-all duration-300 flex items-center justify-center"
            >
              <FaUser className="w-[19px] h-[19px] max-sm:w-[15px] max-sm:h-[15px] text-black " />
              <span
                className="absolute top-full left-1/2 -translate-x-1/2 mt-2
      opacity-0 group-hover:opacity-100 
      bg-gray-900 text-white text-xs px-2 py-1 rounded whitespace-nowrap
      transition-all duration-300"
              >
                Profile
              </span>
            </div>
          </Link>

          <span className="block h-6 w-[2px] max-sm:w-[1px] bg-black/30 dark:bg-black/40 mx-4 max-sm:mx-2"></span>

          {/* // github */}

          <a className="relative group" href="https://github.com/deepesh-y7" target="_blank">
            <div
              className="relative  cursor-pointer hover:px-3 max-sm:hover:px-3 py-3 
                  dark:hover:bg-[#262626] hover:bg-[#F4F4F5] rounded-full 
                  transition-all duration-300 flex items-center justify-center"
            >
              <FaGithub className="w-[19px] h-[19px] max-sm:w-[15px] max-sm:h-[15px] text-black " />

              {/* Tooltip */}
              <span
                className="absolute top-full left-1/2 -translate-x-1/2 mt-2
                opacity-0 group-hover:opacity-100 
               bg-gray-900 text-white text-xs px-2 py-1 rounded whitespace-nowrap
                 transition-all duration-300"
              >
                Github
              </span>
            </div>
          </a>
          {/* // twiter */}

          <a className="relative group">
            <div
              className="relative  cursor-pointer hover:px-3 max-sm:hover:px-3 py-3 
                  dark:hover:bg-[#262626] hover:bg-[#F4F4F5] rounded-full 
                  transition-all duration-300 flex items-center justify-center"
            >
              <FaXTwitter className="w-[19px] h-[19px] max-sm:w-[15px] max-sm:h-[15px] text-black " />

              {/* Tooltip */}
              <span
                className="absolute top-full left-1/2 -translate-x-1/2 mt-2
                opacity-0 group-hover:opacity-100 
               bg-gray-900 text-white text-xs px-2 py-1 rounded whitespace-nowrap
                 transition-all duration-300"
              >
                Twitter
              </span>
            </div>
          </a>
          {/* // Linkdein */}

          <a className="relative group" href="https://www.linkedin.com/in/deepesh-yadav-359051224/" target="_blank">
            <div
              className="relative  cursor-pointer hover:px-3 max-sm:hover:px-3 py-3 
                  dark:hover:bg-[#262626] hover:bg-[#F4F4F5] rounded-full 
                  transition-all duration-300 flex items-center justify-center"
            >
              <FaLinkedin className="w-[19px] h-[19px] max-sm:w-[15px] max-sm:h-[15px] text-black " />

              {/* Tooltip */}
              <span
                className="absolute top-full left-1/2 -translate-x-1/2 mt-2
                opacity-0 group-hover:opacity-100 
               bg-gray-900 text-white text-xs px-2 py-1 rounded whitespace-nowrap
                 transition-all duration-300"
              >
                Linkdein
              </span>
            </div>
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Header;
