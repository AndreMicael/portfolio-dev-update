import "./Footer.scss"
import logo from "../assets/tabfolio.svg";

const Footer = () => {
  return (




<footer className="bg-preto w-screen p-4 mt-16 ">
    <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
        <div className="sm:flex sm:items-center sm:justify-between">
            <a href="http://localhost:3000/" className="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse">
              
                <span className="self-center flex text-2xl font-semibold whitespace-nowrap dark:text-white">
                <img 
            className='logo-img min-w-[7vw] flex-shrink-0 
            xl:w-[7.5vw] lg:w-[9vw] md:w-[12vw] sm:w-[12vw]  w-[16vw]
            '
            

            src={logo} 
            alt="Logo Tabfólio" 
          />    
           <h1 className='content-center text-xl text-cinza ml-2'>
            <span className='text-verde font-bold'>André</span> Micael
          </h1>             
                </span>
            </a>
            
        </div>
        <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
        <div className=" border-slate-700">
    <span className="inline  mx-auto text-center">
        © 2024 <a href="https://flowbite.com/" className="text-[#23CE99] hover:underline">André Micael Sampaio</a>. Todos os direitos Reservados.
    </span>
</div>
    </div>
</footer>





  )
}

export default Footer