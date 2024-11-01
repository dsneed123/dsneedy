const NavBar = () => {
    return (
      <nav>
        <ul className="flex space-x-6 mt-2">
          <li>
            <a href="#about" className="hover:text-blue-400 transition">
              About
            </a>
          </li>
          <li>
            <a href="#projects" className="hover:text-blue-400 transition">
              Projects
            </a>
          </li>
          <li>
            <a href="#contact" className="hover:text-blue-400 transition">
              Contact
            </a>
           
          </li>
          <li>
          <a href="#games"  className="hover:text-blue-400 transition"> Games</a>
          </li>
        </ul>
      </nav>
    );
  };
  
  export default NavBar;
  