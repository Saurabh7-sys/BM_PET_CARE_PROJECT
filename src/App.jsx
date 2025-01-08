import React, { Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';

const LandingNavbar = React.lazy(() => import('./components/LandingNavbar'));
const Home = React.lazy(() => import('./components/Home'));
const Services = React.lazy(() => import('./components/Services'));
const Contact = React.lazy(() => import('./components/Contact'));
const About = React.lazy(() => import('./components/About'));
const Footer = React.lazy(() => import('./components/Footer'));
const Login = React.lazy(() => import('./components/Login'));
const Appointment = React.lazy(() => import('./pages/Appointment'));

const LoadingAnimation = () => (
  <div className="flex justify-center items-center min-h-screen">
    <div className="w-16 h-16 border-4 border-blue-500 border-dashed rounded-full animate-spin"></div>
  </div>
);

function App() {
  const location = useLocation();
  const isAuthRoute = location.pathname === "/login";

  return (
    <div className="app min-h-screen flex flex-col">
      <Suspense fallback={<LoadingAnimation />}>
        {!isAuthRoute && <LandingNavbar />}
        <div className={`flex-grow`}>
          <Routes>
            {isAuthRoute ? (
              <Route path="/login" element={<Login />} />
            ) : (
              <>
                <Route
                  path="/"
                  element={
                    <>
                      <section id="home">
                        <Home />
                      </section>
                      <section id="services">
                        <Services />
                      </section>
                      <section id="contact">
                        <Contact />
                      </section>
                      <section id="about">
                        <About />
                      </section>
                    </>
                  }
                />
              </>
            )}
            <Route path="/appointment" element={<Appointment />} />
          </Routes>
        </div>
        {!isAuthRoute && <Footer />}
      </Suspense>
    </div>
  );
}

export default App;
