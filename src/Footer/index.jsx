// import "./Footer.scss"
import logo from "../assets/tabfolio.svg";

const Footer = () => {
  const data = Date.now();
  const year = new Date(data).getFullYear();
  return (
    <footer className="bg-slate-950 w-full p-4 mt-16 overflow-hidden">
      <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
        <div className="flex flex-col sm:flex-row items-center justify-between">
          <a
            href="/"
            className="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse"
          >
            <span className="self-center flex text-2xl font-semibold whitespace-nowrap dark:text-white">
              <img
                className="logo-img min-w-[50px] w-[16vw] max-w-[100px] flex-shrink-0"
                src={logo}
                alt="Logo Tabfólio"
              />
              <h1 className="content-center text-lg md:text-xl text-cinza ml-2">
                <span className="text-verde font-bold">André</span> Micael
              </h1>
            </span>
          </a>
        </div>
        <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
        <div className="text-center">
          <span className="text-sm sm:text-base">
            © {year}{" "}
            <a href="/" className="text-[#23CE99] hover:underline">
              André Micael Sampaio
            </a>
            . Todos os direitos Reservados.
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
