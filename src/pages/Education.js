import React from "react";
import '../styles/Education.css';
import 'animate.css';
import Hero from "../components/Hero";
import Footer from "../components/Footer";
import {motion} from 'framer-motion';

function Education() {
    const outView = {
        y:300, opacity: 0
    }

    const inView = {
        y:1, opacity: 1,
        transition: {
            type: "spring",
            bounce: 0.4,
            duration: 2
        }
        
    } 
    return(
        <motion.div 
    initial={{x: -300, opacity:0}}
    animate={{ x: 0, opacity: 1 }}
    transition={{
      duration: 1,
    }} className="body">
            <Hero title='EDUCATION'/>
           
            <h5 class="animate__animated animate__heartBeat animate__repeat-2 animate__slow" style={{fontWeight: 300, textAlign:'center', }}>"In investing, what is comfortable is rarely profitable." — Robert Arnott</h5>
            <motion.div 
        initial={outView }
        whileInView={inView}
        viewport={{once: true,  amount: 0.8 }} className="general-card">
                <h4 className="edu-para">
                Members of GUIC have access to a vast catalog of educational materials that cover investing, interview preperation, investment banking, valuation modeling, and so much more. The executive team created the GUIC Starter Pack to guide members to valuable resources. 
                </h4>
            </motion.div>
            <StarterPack/>            
            <Footer/>
        </motion.div>    
    );
}

function StarterPack() {
    
    const outView = {
        y:300, opacity: 0
    }

    const inView = {
        y:1, opacity: 1,
        transition: {
            type: "spring",
            bounce: 0.4,
            duration: 2
        }
        
    } 
    
    const backOutView = {
        x:"2em", opacity: 0
    }

    const backInView = {
        x:1, opacity: 1,
        transition: {
            type: "spring",
            bounce: 0.4,
            duration: 2
        }
    }    
    return(
    <div className="edu-body">
        
        <motion.div 
        initial={outView }
        whileInView={inView}
        viewport={{once: true,  amount: 0.8 }}
        className="general-card">
            <h1 className="animate__animated animate__fadeInLeft" style={{
                fontWeight: 300,
                textAlign: 'center',
            }}>Starter Pack</h1>
            <h4 className='edu-para'>
            The GUIC Starter Pack is a comprehensive guide to the basics
            of investing and financial markets. It includes a comprehensive 
            overview of the fundamentals of investing, a comprehensive 
            overview of the fundamentals of financial markets, and a comprehensive 
            overview of the fundamentals of valuation modeling.
            </h4>
        </motion.div>
        <motion.div 
        initial={backOutView }
        whileInView={backInView}
        viewport={{once: true,  amount: 0.8 }} className="about-card">
            <h4 style={{fontWeight: 300,}}>Finance/Accounting Fundamentals</h4>
            <div class="row">
                <div className="col-md">
                <motion.div 
        initial={outView }
        whileInView={inView}
        viewport={{once: true,  amount: 0.8 }} class="about-card">
                        <h5 style={{fontWeight: 300,}}>Accounting Fundamentals by CFI</h5>
                            <p class="card-text">
                            Free 2-part course that teaches the entire accounting process
                            </p>
                            <a href="https://bit.ly/3A8YMsg" className="edu-btn">2.5 hours</a>
                    </motion.div>
                    <div className="spacer"></div>
                    <motion.div 
        initial={outView }
        whileInView={inView}
        viewport={{once: true,  amount: 0.8 }} class="about-card">
                        <h5 style={{fontWeight: 300,}}>Intro to Corporate Finance by CFI</h5>
                            <p class="card-text">
                            Free course that teaches about capital markets, valuation, securities, and more
                            </p>
                            <a href="https://bit.ly/3tLFHtF" className="edu-btn">2.5 hours</a>
                    </motion.div>    
                </div> 


            </div>  
        </motion.div>
        <motion.div 
        initial={backOutView }
        whileInView={backInView}
        viewport={{once: true,  amount: 0.8 }} className="about-card">
            <h4 style={{fontWeight: 300,}}>Investing Fundamentals</h4>
            <div class="row">
                <div class="col-md">
                <motion.div 
        initial={outView }
        whileInView={inView}
        viewport={{once: true,  amount: 0.8 }}class="about-card">
                        <h5 style={{fontWeight: 300,}}>Vanguard’s Principles for Investing Success</h5>
                            <p class="card-text">
                            Walkthrough of fundamental investing principles 
                            </p>
                            <a href="https://bit.ly/3uehV9W" className="edu-btn">2.0 hours</a>
                    </motion.div>
                </div>
            </div>          
        </motion.div>
        <motion.div 
        initial={backOutView }
        whileInView={backInView}
        viewport={{once: true,  amount: 0.8 }} className="about-card">
            <h4 style={{
                fontWeight: 300,}}>Excel Modeling Fundamentals</h4>
            <div class="row">
                <div class="col-md">
                <motion.div 
        initial={outView }
        whileInView={inView}
        viewport={{once: true,  amount: 0.8 }}class="about-card">
                        <h5 style={{fontWeight: 300,}}>GUIC DCF Guide</h5>
                            <p class="card-text">
                            Walkthrough of building a discounted cash flow model and important factors to consider
                            </p>
                            <a href="https://bit.ly/3CS2qr8" className="edu-btn">20 min</a>
                    </motion.div>
                    <div className="spacer"></div>
                    <motion.div 
        initial={outView }
        whileInView={inView}
        viewport={{once: true,  amount: 0.8 }} class="about-card">
                        <h5 style={{fontWeight: 300,}}>Excel Crash Course by CFI</h5>
                            <p class="card-text">
                            Learn all the tips, tricks, shortcuts, functions and formulas you need to be an Excel power user
                            </p>
                            <a href="https://bit.ly/3hvgSgx" className="edu-btn">3.5 hours</a>
                    </motion.div>    
                </div> 
            </div>  
        </motion.div>
        <motion.div 
        initial={backOutView }
        whileInView={backInView}
        viewport={{once: true,  amount: 0.8 }} className="about-card">
            <h4 style={{fontWeight: 300}}>Presentation Fundamentals</h4>
            <div class="row">
                <div class="col-md">
                <motion.div 
        initial={outView }
        whileInView={inView}
        viewport={{once: true,  amount: 0.8 }} class="about-card">
                        <h5 style={{fontWeight: 300,}}>GUIC Presentation/FactSet Guide</h5>
                            <p class="card-text">
                            Walkthrough of building a complete and compelling stock pitch and FactSet
                            </p>
                            <a href="https://bit.ly/3CS2qr8" className="edu-btn">25 min</a>
                    </motion.div>
                </div>
            </div>  

        </motion.div>
        <div className="about-card">
            <h4 style={{fontWeight: 300,}}>Other Important Resources</h4>
            <div class="row">
                <div class="col-md">
                <motion.div 
        initial={outView }
        whileInView={inView}
        viewport={{once: true,  amount: 0.8 }} class="about-card">
                        <h5 style={{fontWeight: 300,}}>Morning Brew Newsletter</h5>
                            <p class="card-text">
                            Daily newsletter covering all things business
                            </p>
                            <a href="https://bit.ly/3k6awWP" className="edu-btn">N/A</a>
                        </motion.div>
                    <div className="spacer"></div>
                    <motion.div 
        initial={outView }
        whileInView={inView}
        viewport={{once: true,  amount: 0.8 }} class="about-card">
                        <h5 style={{fontWeight: 300,}}>PitchBook Newsletter</h5>
                            <p class="card-text">
                            Daily newsletter covering important VC, PE, and MandA news
                            </p>
                            <a href="https://bit.ly/3C8gHQf" className="edu-btn">N/A</a>
                    </motion.div>
                    <div className="spacer"></div>

                    <motion.div 
        initial={outView }
        whileInView={inView}
        viewport={{once: true,  amount: 0.8 }} class="about-card">
                        <h5 style={{fontWeight: 300,}}>The 400 Investment Banking Interview Questions and Answers You Need to Know</h5>
                            <p class="card-text">
                            This guide has one purpose: to help you answer the most important “fit” and technical
                            questions in investment banking interviews.
                            </p>
                            <a href="https://bit.ly/3zGQQNH" className="edu-btn">4 hours</a>
                    </motion.div>
                    <div className="spacer"></div>
                    <motion.div 
        initial={outView }
        whileInView={inView}
        viewport={{once: true,  amount: 0.8 }} class="about-card">
                        <h5 style={{fontWeight: 300,}}>100 Must Follow Financial Twitter Accounts</h5>
                            <p class="card-text">
                            List of the best financial accounts on Twitter
                            </p>
                            <a href="https://bit.ly/3ht5LEW" className="edu-btn">N/A</a>
                        </motion.div>
                    <div className="spacer"></div>
                    <motion.div initial={outView }whileInView={inView}viewport={{once: true,  amount: 0.8 }} class="about-card">
                            <h5 style={{fontWeight: 300,}}>Readings for the Week by GUIC</h5>
                            <p class="card-text">
                            Weekly email containing the most interesting finance/economic/business stories
                            </p>
                            <a href="https://gonzaga.edu" className="edu-btn">N/A</a>
                    </motion.div>
                </div>
            </div> 
        </div>
    
    </div>
    );
}



export default Education;