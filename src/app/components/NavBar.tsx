import InfoIcon from '@mui/icons-material/Info';
import React from 'react';
import CodeIcon from '@mui/icons-material/Code';
import FolderSpecialIcon from '@mui/icons-material/FolderSpecial';
import EmojiPeopleIcon from '@mui/icons-material/EmojiPeople';
import WorkOutlineIcon from '@mui/icons-material/WorkOutline';

const NavBar = () => {
  return (
    <nav className="p-4 bg-[#1E2A38]">
      <ul className="flex space-x-4">
      <li>
        <a
        href="#about"
        className="group flex items-center bg-transparent hover:bg-white text-white hover:text-[#1E2A38] rounded-full transition-all duration-300 overflow-hidden w-10 hover:w-40 px-2 py-2"
        >
        <InfoIcon className="text-white group-hover:text-[#1E2A38] group-hover:scale-125 transition-transform duration-300" />
        <span className="ml-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap font-source-sans-pro">
          About
        </span>
        </a>
      </li>
      <li>
        <a
        href="#programming-languages"
        className="group flex items-center bg-transparent hover:bg-white text-white hover:text-[#1E2A38] rounded-full transition-all duration-300 overflow-hidden w-10 hover:w-60 px-2 py-2"
        >
        <CodeIcon className="text-white group-hover:text-[#1E2A38] group-hover:scale-200 transition-transform duration-300" />
        <span className="ml-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap font-source-sans-pro w-full">
          Programming Languages
        </span>
        </a>
      </li>
      <li>
        <a
        href="#Experience"
        className="group flex items-center bg-transparent hover:bg-white text-white hover:text-[#1E2A38] rounded-full transition-all duration-300 overflow-hidden w-10 hover:w-40 px-2 py-2"
        >
        <WorkOutlineIcon className="text-white group-hover:text-[#1E2A38] group-hover:scale-125 transition-transform duration-300" />
        <span className="ml-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap font-source-sans-pro">
          Experience
        </span>
        </a>
      </li>
      <li>
        <a
        href="#projects"
        className="group flex items-center bg-transparent hover:bg-white text-white hover:text-[#1E2A38] rounded-full transition-all duration-300 overflow-hidden w-10 hover:w-40 px-2 py-2"
        >
        <FolderSpecialIcon className="text-white group-hover:text-[#1E2A38] group-hover:scale-125 transition-transform duration-300" />
        <span className="ml-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap font-source-sans-pro">
          Projects
        </span>
        </a>
      </li>
      <li>
        <a
        href="#contact"
        className="group flex items-center bg-transparent hover:bg-white text-white hover:text-[#1E2A38] rounded-full transition-all duration-300 overflow-hidden w-10 hover:w-40 px-2 py-2"
        >
        <EmojiPeopleIcon className="text-white group-hover:text-[#1E2A38] group-hover:scale-125 transition-transform duration-300" />
        <span className="ml-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap font-source-sans-pro">
          Contact
        </span>
        </a>
      </li>
      </ul>
    </nav>
  );
};

export default NavBar;
