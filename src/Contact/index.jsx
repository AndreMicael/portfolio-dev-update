import './contact.scss';
import { MdAlternateEmail } from "react-icons/md";
import { FaUserCircle } from "react-icons/fa";


const Contact = () => {
  return (
    <div className='categories-container contact-container'>
    
    
<form className="max-w-sm mx-auto">
  
  <label for="website-admin" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Username</label>
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

 

<textarea id="message" rows="4" className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500
 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Escreva sua mensagem aqui..."></textarea>

<button type="button" class="focus:outline-none text-preto bg-verde hover:bg-verde-shadow focus:ring-4 focus:ring-green-300 font-medium rounded-md text-sm px-5 py-2.5 me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">Enviar</button>
</form>


    </div>
  )
}

export default Contact