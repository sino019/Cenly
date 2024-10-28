import { lazy, Suspense } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import './assets/css/output.css';
import './assets/css/App.css';
import Navbar from './Nav';
import Hero from './Hero';
import Home from './Home';
import About from './About';
import Footer from './Footer';
import Skills from './Skills';
import Project from './Project'

function App() {
  return (
    <div className="app-container bg-white">
        <BrowserRouter>
          <Routes>
            <Route path="/Home" element={<div style={{ display: 'none' }} />} />
            <Route path="*" element={<Navbar />} />
          </Routes>
          <Navbar />
          <div className="content pt-20">
            <Suspense fallback={<div></div>}>
              <Routes>
                <Route path="/Home" element={<Home />} />
                <Route path="/Hero" element={<Hero />} />
                <Route path="/About" element={<About />} />
                <Route path="/Footer" element={<Footer />} />
                <Route path="/Skills" element={<Skills />} />
                <Route path="/Project" element={<Project />} />
                <Route path="*" element={<Navigate to="/Home" />} />  {/* Catch-all route */}
              </Routes>
            </Suspense>
          </div>
          <Footer />

        </BrowserRouter>
    </div>
  );
}

export default App;
