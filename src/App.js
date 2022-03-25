import './css/style.css'
import './css/colors.css'
import './css/fonts.css'
import './css/icons.css'
import React, { lazy, useEffect } from "react"
import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom"
import NavBar from './components/NavBar/NavBar'
import Loading from './components/Loading/Loading'
import Error from './pages/Error/Error'
import ToTopButton from './components/ToTopButton/ToTopButton'

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
          <ToTopButton />
      </BrowserRouter>
  );
}

export default App;
