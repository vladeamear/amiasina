import './style.css'
import './colors.css'
import { useEffect, useState } from "react"
import { BrowserRouter, Navigate, Route, Routes, useLocation } from "react-router-dom"
import { AboutMe } from "./pages/AboutMe/AboutMe"
import { Exams } from "./pages/Exams/Exams"
import { Links } from "./pages/Links/Links"
import { VPR } from "./pages/VPR/VPR"
import { Footer } from './components/Footer/Footer'
import { NavBar } from './components/NavBar/NavBar'
import { NavBarMobile } from './components/NavBarMobile/NavBarMobile'

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function getWindowDimensions() {
  const { innerWidth: width } = window;
  return {
    width
  };
}

function useWindowDimensions() {
  const [windowDimensions, setWindowDimensions] = useState(
    getWindowDimensions()
  );

  useEffect(() => {
    function handleResize() {
      setWindowDimensions(getWindowDimensions());
    }

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return windowDimensions;
}

function App() {
  const { width } = useWindowDimensions();
  return (
      <BrowserRouter>
        {(width > 850) ? <NavBar /> : <NavBarMobile />}
        <ScrollToTop />
          <Routes>
            <Route index path="/" element={<AboutMe />} />
            <Route
                path="*"
                element={<Navigate to="/" />}
            />
            <Route path="/vpr" element={<VPR />} />
            <Route path="/links" element={<Links />} />
            <Route path="/exams" element={<Exams />} />
          </Routes>
        <Footer />
      </BrowserRouter>
  );
}

export default App;
