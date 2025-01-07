import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import LandingNavbar from './components/LandingNavbar';
import Home from './components/Home';
import Services from './components/Services';
import Contact from './components/Contact';
import About from './components/About';
import Footer from './components/Footer';
import Login from './components/Login';
import Appointment from './pages/Appointment'

function App() {
  const location = useLocation();

  const isAuthRoute = location.pathname === "/login";

  return (
    <div className="app min-h-screen flex flex-col">
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
          <Route path="/appointment" element={<Appointment/>}/>
        </Routes>
      </div>
      {!isAuthRoute && <Footer />}

    </div>
  );
}

export default App;
