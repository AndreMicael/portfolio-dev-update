
import React, { Suspense } from 'react';
// import Navbar from './Navbar/Navbar';
// import Home from './Home';
// import { Tabs } from './components/tabs/Tabs';
// import Footer from './Footer';

import { HomeTabsProvider } from './Contexto/HomeTabsContext';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';

import '@fortawesome/fontawesome-free/css/all.css';
import './App.scss';
import "bulma/css/bulma.css";


const Navbar = React.lazy(() => import('./Navbar/Navbar'));
const Home = React.lazy(() => import('./Home'));
const Tabs = React.lazy(() => import('./components/tabs/Tabs'));
const Footer = React.lazy(() => import('./Footer'));


function App() {




  return (
   
    <div className="App">
   
   <HomeTabsProvider>
        <ToastContainer />
        <Suspense fallback={<div>Carregando...</div>}>
          <Navbar />
          <Home />
          <Tabs />
          <Footer />
        </Suspense>
      </HomeTabsProvider>
  
     </div>

    
  
  );
}

export default App;
