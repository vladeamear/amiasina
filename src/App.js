import './css/style.css'
import './css/colors.css'
import './css/fonts.css'
import React, { lazy, useEffect } from "react"
import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom"
import NavBar from './components/NavBar/NavBar'
import Loading from './components/Loading/Loading'
import Footer from './components/Footer/Footer'
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

function App() {
  return (
      <BrowserRouter>
        <NavBar />
        <ScrollToTop />
          <Routes>
            <Route exact index path="/" element={
              <React.Suspense fallback={<Loading />}>
                <AboutMe />
              </React.Suspense>
            } />
            <Route exact path="/vpr" element={
              <React.Suspense fallback={<Loading />}>
                <VPR />
              </React.Suspense>
            } />
            <Route exact path="/links" element={
              <React.Suspense fallback={<Loading />}>
                <Links />
              </React.Suspense>
            } />
            <Route exact path="/exams" element={
              <React.Suspense fallback={<Loading />}>
                <Exams />
              </React.Suspense>
            } />
            <Route path="*" element={
              <Error />
            } />
          </Routes>
          <Footer />
      </BrowserRouter>
  );
}

export default App;
