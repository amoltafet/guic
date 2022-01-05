import React from 'react';
import {
  BrowserRouter as Router,
  Route, Routes
} from "react-router-dom";
import About from './pages/About';
import Home from './pages/Home';
import Portfolio from './pages/Portfolio';
import Education from './pages/Education';
import './styles/App.css';
import { AnimatePresence } from 'framer-motion';

function App() {

  //const location = useLocation();
  return (
    <AnimatePresence exitBeforeEnter>
      <Router>
          <Routes>
            <Route path="/" exact element={<Home/>}/>
            <Route path="/About" exact element={<About/>}/>
            <Route path="/Portfolio" exact element={<Portfolio/>}/>
            <Route path="/Education" exact element={<Education/>}/>
          </Routes>
      </Router>

      

    </AnimatePresence>
  );
}

export default App;
