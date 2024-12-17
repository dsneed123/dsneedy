const NavBar = () => {
    return (
      <nav>
        <ul className="flex space-x-6 mt-2">
          <li className="nav-item">
            <a href="#about" className="hover:text-blue-400 transition">
              About
            </a>
          </li>
          <li className="nav-item">
            <a href="#programming-languages" className="hover:text-blue-400 transition">
                Programming Languages
            </a>
          </li>
          <li className="nav-item">
            <a href="#projects" className="hover:text-blue-400 transition">
              Projects
            </a>
          </li>
          <li className="nav-item">
            <a href="#contact" className="hover:text-blue-400 transition">
              Contact
            </a>
          </li>
        </ul>
      </nav>
    );
  };
  
  export default NavBar;
  