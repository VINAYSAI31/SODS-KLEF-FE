import './App.css';
import About from './components/About';
import Activities from './components/Activites';
import Gallery from './components/Gallery';
import Home from './components/Home';
import Login from './components/Login';
import Contact from './components/Contact';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Team from './components/Team';
import Projects from './components/Projects';
import { SpeedInsights } from '@vercel/speed-insights/react';
import { Analytics } from "@vercel/analytics/react"



function App() {
  return (
    
    <>
    <SpeedInsights />
    <Analytics />
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/activities" element={<Activities />} />
        <Route path="/gallery" element={<Gallery />}/>
        <Route path="/team" element={<Team />}/>
        <Route path="/login" element={<Login />} />
        <Route path="/projects" element={<Projects />}/>
        <Route path="/contact" element={<Contact />}/>
        {/* Fallback for undefined routes */}
        <Route path="*" element={<div>Page Not Found</div>} />


       {/*   admin */ }
      

      </Routes>
    </Router>
    </>
  );
}

export default App;
