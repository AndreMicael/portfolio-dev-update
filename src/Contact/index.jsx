import './contact.scss';
import { MdAlternateEmail } from "react-icons/md";
import { FaUserCircle } from "react-icons/fa";
import { FaExternalLinkAlt ,FaLinkedin ,FaCopy } from "react-icons/fa";
import { toast} from 'react-toastify';
import { MdEmail } from "react-icons/md";




const Contact = () => {
  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText('contato@andremicael.com');
      toast('E-mail copiado com sucesso!');
    } catch (err) {
      toast('Falha ao copiar', err);
    }
  };
  return (
    <div className='contact-container'>
    <div className=" mx-auto mb-4  contact-title w-[30vw]">

    <h1 className='text-center'> Vamos conversar !</h1>
    <p className='text-lg p-2 text-center '>
      Lorem ipsum, dolor sit amet consectetur adipisicing elit. Totam cumque, reprehenderit, sapiente consectetur ex magnam error, maxime doloremque velit aspernatur perferendis. Nihil, vero ducimus voluptatum itaque qui aliquid fuga error.
    </p>

    </div>
    
<form className="min-w-[25vw] mx-auto flex flex-col gap-4  w-[30vw]">
  
 
  <div className="flex">
    <span className="inline-flex items-center px-3 text-sm text-gray-900 bg-gray-200 border border-e-0 border-gray-300 rounded-s-md dark:bg-gray-600 dark:text-gray-400 dark:border-gray-600">
    <FaUserCircle />
    </span>
    <input type="text" id="name" className="rounded-none rounded-e-lg bg-gray-50 border border-gray-300 text-gray-900 focus:ring-blue-500 focus:border-blue-500 block 
    flex-1 min-w-0 w-full text-sm p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
     placeholder="José Pereira"/>
    
  </div>

  <div className="flex">
    <span className="inline-flex items-center px-3 text-sm text-gray-900 bg-gray-200 border border-e-0 border-gray-300 rounded-s-md dark:bg-gray-600 dark:text-gray-400 dark:border-gray-600">
    <MdAlternateEmail />
    </span>
    <input type="email" id="email" className="rounded-none rounded-e-lg bg-gray-50 border border-gray-300 text-gray-900 focus:ring-blue-500 focus:border-blue-500 block 
    flex-1 min-w-0 w-full text-sm p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
     placeholder="josepereira@email.com"/>
    
  </div>

 

<textarea id="message" rows="4" className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 m-0
 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Escreva sua mensagem aqui..."></textarea>
<button type="button" className="focus:outline-none text-preto bg-verde hover:bg-verde-shadow focus:ring-4 focus:ring-green-300 font-medium rounded-md text-sm px-5 py-2.5  dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">Enviar</button>

<div> 
  <h4 className='w-[30vw] text-center text-md font-medium mx-auto '>Outros canais disponíveis</h4>
  <div className=" flex  justify-center gap-x-4 ">
  <a href="https://www.linkedin.com/in/andremsampaio" target="blank"> <div className="item  mb-3 flex gap-1 items-baseline"><div className="icon text-2xl text-blue-500 self-start"><FaLinkedin /></div><p className="text-cinza text-md">Linkedin</p> 
  
  
  
  <button data-tooltip-target="tooltip-animation" type="button" class=" text-cinza hover:text-blue-500  text-center"><FaExternalLinkAlt /></button>
  <div id="tooltip-animation" role="tooltip" class="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700">
    Abrir Linkedin
    <div class="tooltip-arrow" data-popper-arrow></div>
</div>
  
  </div></a> 
 <div className="item  mb-3 flex gap-1 items-baseline"><div className="icon text-2xl text-rosa self-start"><MdEmail /></div><p className="text-cinza text-md">contato@andremicael.com</p> 
 
 <button onClick={copyToClipboard} data-tooltip-target="tooltip-dark" type="button" class=" text-cinza hover:text-blue-500  text-center"><FaCopy/></button>

<div id="tooltip-dark" role="tooltip" class="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700">
    Copiar E-mail
    <div class="tooltip-arrow" data-popper-arrow></div>
</div>
 

 
 
  </div> 
 
 
 
 
  </div>
</div>
</form>



    </div>
  )
}

export default Contact