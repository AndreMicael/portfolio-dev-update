import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React, { useEffect, useState } from "react";
import ParticlesComponent from "../src/components/particles";
import { HomeTabsProvider } from "./Contexto/HomeTabsContext";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import "@fortawesome/fontawesome-free/css/all.css";
import "./App.scss";
import "bulma/css/bulma.css";
const Projects = React.lazy(() => import("./Pages/Projects"));
const ProjectDetail = React.lazy(() => import("./Pages/ProjectDetail"));
const Home = React.lazy(() => import("./Home"));
const Navbar = React.lazy(() => import("./Navbar/Navbar"));
const Tabs = React.lazy(() => import("./components/tabs/Tabs"));
const Footer = React.lazy(() => import("./Footer"));

function App() {
  const [avatar, setAvatar] = useState(null);
  const [loading, setLoading] = useState(true);

  const fetchAvatar = async () => {
    try {
      const response = await fetch(process.env.REACT_APP_API_URL_USUARIO);
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const data = await response.json();
      const avatarUrl = data.data[0].avatar;
      setAvatar(avatarUrl);
      localStorage.setItem("avatar", JSON.stringify(avatarUrl));
      setLoading(false);
    } catch (error) {
      console.error("Error fetching avatar:", error);
    }
  };

  useEffect(() => {
    const cachedAvatar = localStorage.getItem("avatar");
    if (cachedAvatar) {
      try {
        setAvatar(JSON.parse(cachedAvatar));
        setLoading(false);
      } catch (error) {
        console.error("Error parsing cached avatar:", error);
        fetchAvatar();
      }
    } else {
      fetchAvatar();
    }
  }, []);

  return (
    <Router>
      <HomeTabsProvider>
        <ToastContainer />
        <Routes>
          <Route
            path="/"
            element={
              <>
                {loading ? (
                  <div className="flex space-x-2 justify-center bg-slate-900 items-center h-screen dark:invert">
                    <div className="h-4 w-4 bg-verde rounded-full animate-bounce [animation-delay:-0.3s]"></div>
                    <div className="h-4 w-4 bg-verde rounded-full animate-bounce [animation-delay:-0.15s]"></div>
                    <div className="h-4 w-4 bg-verde rounded-full animate-bounce"></div>
                  </div>
                ) : (
                  <div>
                    <ParticlesComponent id="particles" />
                    <Navbar />
                    <Home home={avatar} />
                    <Tabs />
                    <Footer />
                  </div>
                )}
              </>
            }
          />
          <Route path="/projetos" element={<Projects />} />
          <Route path="/projetos/:slug" element={<ProjectDetail />} />
        </Routes>
      </HomeTabsProvider>
    </Router>
  );
}

export default App;
