import '../styles/Navbar.css';
import * as BsIcons from "react-icons/bs";
import * as AiIcons from "react-icons/ai";
import * as FaIcons from "react-icons/fa";
import { Link } from "react-router-dom";
import { useState } from 'react';
import { IconContext } from 'react-icons/lib';
import { motion, AnimatePresence } from 'framer-motion';

const variants = {
  open: { opacity: 1, x: 0 },
  closed: { opacity: 0, x: "-100%" },
}  

function Navigation() {
   
  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => {
    setSidebar(!sidebar);
  };

  return (
      <AnimatePresence>
      <IconContext.Provider value={{ color: '#000', size: "1em"}}>
        <motion.div className='navbar'
          animate={sidebar ? "closed" : "open"}
          variants={variants}
        >
          <Link to="#" className='menu-bars' onClick={showSidebar}>
            <div className='nav-button'>
              <FaIcons.FaBars />
            </div>
          </Link>  
        </motion.div>
      </IconContext.Provider>
      <IconContext.Provider value={{ color: 'red'}}>  
        <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
          <ul className='nav-menu-items' onClick={showSidebar}>
            <div className='navbar-toggle'>
              <Link to="#" className='menu-bars-inside'>
                <AiIcons.AiOutlineClose />
              </Link>
            </div>
              <li className='nav-text'><Link to="/"><AiIcons.AiOutlineHome/><span>Home</span></Link></li>
              <li className='nav-text'><Link to="/Portfolio"><AiIcons.AiOutlineStock/><span>Portfolio</span></Link></li>
              <li className='nav-text'><Link to="/Education"><AiIcons.AiOutlineBook/><span>Education</span></Link></li>
              <li className='nav-text'><Link to="/About"><BsIcons.BsPerson/><span>About</span></Link></li>
          </ul>
          
        </nav>    
        </IconContext.Provider>  
      </AnimatePresence>
    );
}

export default Navigation;