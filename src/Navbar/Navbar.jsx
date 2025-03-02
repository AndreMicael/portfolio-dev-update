import "./navbar.scss";
import DarkMode from "../components/darkMode/DarkMode";
import logo from "../assets/tabfolio.svg";

const Navbar = () => {
  return (
    <div className="w-full fixed top-0 left-0 z-50 bg-opacity-90 backdrop-blur-sm">
      <nav className="max-w-7xl mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <img
              src={logo}
              alt="Logo Tabfólio"
              className="w-[120px] md:w-[150px] h-auto"
            />
          </div>

          {/* Dark Mode Toggle */}
          <div className="flex items-center">
            <DarkMode />
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
