import React from 'react';

const NavBar = () => {
  return (
    <nav className="border-t border-gray-200 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <ul className="flex space-x-8 py-3">
          <li>
            <a
              href="#about"
              className="text-gray-700 hover:text-blue-600 font-medium text-sm transition-colors"
            >
              About
            </a>
          </li>
          <li>
            <a
              href="#education"
              className="text-gray-700 hover:text-blue-600 font-medium text-sm transition-colors"
            >
              Education
            </a>
          </li>
          <li>
            <a
              href="#programming-languages"
              className="text-gray-700 hover:text-blue-600 font-medium text-sm transition-colors"
            >
              Skills
            </a>
          </li>
          <li>
            <a
              href="#projects"
              className="text-gray-700 hover:text-blue-600 font-medium text-sm transition-colors"
            >
              Projects
            </a>
          </li>
          <li>
            <a
              href="#contact"
              className="text-gray-700 hover:text-blue-600 font-medium text-sm transition-colors"
            >
              Contact
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;