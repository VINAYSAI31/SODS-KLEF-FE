import './App.css';
import About from './components/About';
import Activities from './components/Activites';
import Home from './components/Home';
import Login from './components/Login';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/activities" element={<Activities />} />
        <Route path="/login" element={<Login />} />
        {/* Fallback for undefined routes */}
        <Route path="*" element={<div>Page Not Found</div>} />
      </Routes>
    </Router>
  );
}

export default App;
