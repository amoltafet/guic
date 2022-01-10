import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import Navigation from "./Navigation";
import logo from '../images/logo.jpeg';
import { Link } from "react-router-dom";

class Hero extends React.Component {
    
    constructor(props) {
        super(props);
        this.state = {
            title: props.title
        }
    }

    componentDidMount() {
        window.scrollTo(0, 0);
    }

    render() {
        return(
            <div className='hero'>
                <Navigation />
                <div className='hero-content'>
                    <div className="row">
                        <div className="col">
                    <motion.h1 
                    initial={{ x: -100, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ duration: 2 }}
                    className='hero-title'>
                        Gonzaga University </motion.h1>
                        <motion.h1 initial={{ x: -100, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ duration: 2 }} className='hero-title'>
                        Investment Club</motion.h1>
                    <motion.div 
                    initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1, duration: 2 }}
                    className="hero-subtitle">
                        <p2>The Investment Club is a student-run organization 
                            that provides financial education to students.</p2>
                    </motion.div>  
                        </div>
                        <div className="col">
                            <AnimatePresence>
                            
                            <motion.img className="hero-image" src={logo} alt="Investment Club"
                            animate={{
                                scale: [1, 1.5, 1.5, 1, 1],
                                rotate: [0, 180, 360, 180, 0],
                                borderRadius: ["20%", "20%", "40%", "40%", "20%"],
                            }}  
                            transition={{
                                duration: 3,
                                ease: "easeInOut",
                                times: [0, 0.3, 0.5, 0.8, 1],
                                repeatDelay: 1
                            }}/>

                            </AnimatePresence>
                            <motion.div 
                                initial={{ y: -200, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                transition={{ duration: 2 }} 
                            style={{
                                position: 'absolute',
                                top: '70%',
                                left: '70%',
                                fontWeight: 200,
                                fontSize: '3rem',
                                color: "white",
                            }}>{this.state.title}</motion.div>
                            
                        </div>        

                    </div>    
                    <div className="button_view">
                        <div className="row">
                            <div className="col">
                            <Link to="/Portfolio"><motion.button 
                            initial={{ y: -100, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ delay: 2, duration: 2 }}
                            className="page-btn"
                            >Portfolio</motion.button></Link>
                            </div>  
                            <div className="col">
                            <Link to="/Education"><motion.button 
                            initial={{ y: 100, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ delay: 2, duration: 2 }}
                            className="page-btn"
                            >Education</motion.button></Link>
                            </div>      
                        </div>
                    </div>        
                    
                    
                    
                </div>
            </div>
        );
    }
}

export default Hero;