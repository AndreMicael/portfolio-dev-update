import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React, { Suspense } from "react";
import { HomeTabsProvider } from "./Contexto/HomeTabsContext";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import "@fortawesome/fontawesome-free/css/all.css";
import "./App.scss";
import "bulma/css/bulma.css";
const Projects = React.lazy(() => import("./Projects"));
const ProjectDetail = React.lazy(() => import("./Pages/ProjectDetail"));

const Home = React.lazy(() => import("./Home"));
// const Navbar = React.lazy(() => import("./Navbar/Navbar"));
const Tabs = React.lazy(() => import("./components/tabs/Tabs"));
const Footer = React.lazy(() => import("./Footer"));

function App() {
  return (
    <Router>
      <HomeTabsProvider>
        <ToastContainer />
        <Suspense fallback={<div>Carregando...</div>}>
          <Routes>
            <Route
              path="/"
              element={
                <>
                  {/* <Navbar /> */}
                  <div className="bg-slate-900">
                    <Home />
                    <Tabs />
                    <Footer />
                  </div>
                </>
              }
            />
            <Route path="/projetos" element={<Projects />} />
            <Route path="/projetos/:slug" element={<ProjectDetail />} />
          </Routes>
        </Suspense>
      </HomeTabsProvider>
    </Router>
  );
}

export default App;
