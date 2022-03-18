import './css/style.css'
import './css/colors.css'
import './css/fonts.css'
import './css/icons.css'
import React, { lazy, useEffect, useState } from "react"
import { BrowserRouter, Navigate, Route, Routes, useLocation } from "react-router-dom"
import Footer from './components/Footer/Footer'
import NavBar from './components/NavBar/NavBar'
import NavBarMobile from './components/NavBarMobile/NavBarMobile'
import Loading from './components/Loading/Loading'
import Error from './pages/Error/Error'

const AboutMe = lazy(() => import("./pages/AboutMe/AboutMe"))
const Exams = lazy(() => import("./pages/Exams/Exams"))
const Links = lazy(() => import("./pages/Links/Links"))
const VPR = lazy(() => import("./pages/VPR/VPR"))

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
            <Route index path="/" element={
              <React.Suspense fallback={<Loading />}>
                <AboutMe />
              </React.Suspense>
            } />
            <Route
                path="*"
                element={<Error/>}
            />
            <Route path="/vpr" element={
              <React.Suspense fallback={<Loading />}>
                <VPR />
              </React.Suspense>
            } />
            <Route path="/links" element={
              <React.Suspense fallback={<Loading />}>
                <Links />
              </React.Suspense>
            } />
            <Route path="/exams" element={
              <React.Suspense fallback={<Loading />}>
                <Exams />
              </React.Suspense>
            } />
          </Routes>
        <Footer />
      </BrowserRouter>
  );
}

export default App;
