
import './navbar.scss';
import DarkMode from "../components/darkMode/DarkMode";
import logo from "../assets/tabfolio.svg";

const Navbar = () => {
  return (
    <div className='overflow-hidden'>
      <nav className='xl:w-[55vw] lg:w-[55vw] md:w-[80vw] sm:w-[80vw] w-[80vw] py-3 mt-6 px-5'>
        <div className="flex justify-center items-center brand whitespace-nowrap ">
          <img 
            className='logo-img min-w-[7vw] flex-shrink-0 
            xl:w-[7vw] lg:w-[9vw] md:w-[12vw] sm:w-[12vw]  w-[16vw]
            '
            

            src={logo} 
            alt="Logo Tabfólio" 
          />
          <h1 className='content-center text-xl ml-2'>
            <span className='text-verde font-bold'>André</span> Micael
          </h1>
        </div>
        <div className='botao'>
          <DarkMode />
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
