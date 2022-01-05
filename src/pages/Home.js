import React, {useState} from 'react';
import SignUpFrom from '../components/SignUpForm';
import '../styles/Home.css';
import { motion } from 'framer-motion';
import Footer from '../components/Footer';
import Hero from '../components/Hero';
import * as BsIcons from "react-icons/bs";

function Home() {
    const [showWelcome, setShowWelcome] = useState(false);
    const [showSignUpForm, setShowSignUpForm] = useState(false);

    setTimeout(() => {
        setShowWelcome(true);
        setShowSignUpForm(true);
    }, 1000);

    return (
      <motion.div 
      initial={{x: -300, opacity:0}}
      animate={{ x: 0, opacity: 1 }}
      transition={{
        duration: 1,
      }}>         
    <div>
        <Hero title='HOME'/>

          { showWelcome && 
          <div className='welcome-card'>
            <div className='about'>
              <p>
          Welcome to the official Gonzaga University Investment Club website! 
          Please fill out the form below if you are interested in joining the club.
              </p>
            </div>
          </div> 
          }  
           
          { showSignUpForm && <SignUpFrom /> }
            <Benefits />

       
        <Footer/>

      </div>

    </motion.div>
    );
}

function Benefits() {

    const [showBenefit1, setShowBenefit1] = useState(false);
    const [showBenefit2, setShowBenefit2] = useState(false);
    const [showBenefit3, setShowBenefit3] = useState(false);
    const [showBenefit4, setShowBenefit4] = useState(false);

    let num = 0;

    function updateBenefit() {
        if (num === 1) {
          setShowBenefit1(!showBenefit1);
        }
        else if (num === 2) {
          setShowBenefit2(!showBenefit2);
        }   else if (num === 3) {
          setShowBenefit3(!showBenefit3);
        }
        else if (num === 4) {
          setShowBenefit4(!showBenefit4);
        }  
    }
    
    function keepBenefits() {
      if (num === 1) {
        setShowBenefit1(true);
      }
      else if (num === 2) {
        setShowBenefit2(false);
      }   else if (num === 3) {
        setShowBenefit3(false);
      }
      else if (num === 4) {
        setShowBenefit4(false);
      } 
    }    
  
    const variants = {
      open: { x: '0%' },
      closed: {  height: '300px', width:'95%' },

    }
    
   const benefitsDetail1 = () => {
      return(
        <>
          <p style={{colof: '#fff'}}>
            The Investment Club is a student-run organization that provides financial support to students in need.
            </p>
        </>
      );
    }

    const benefitsDetail2 = () => {
      return(
        <>
          <p style={{colof: '#fff'}}>
            BENF2
            </p>
        </>
      );
    }

    const benefitsDetail3 = () => {
      return(
        <>
          <p style={{colof: '#fff'}}>
Beneg3            </p>
        </>
      );
    }

    const benefitsDetail4 = () => {
      return(
        <>
          <p style={{colof: '#fff'}}>
            BENEFU4
            </p>
        </>
      );
    }
    
    return (
        <div className='benefits'>
          
                <div className="benefits-card">
                <h1>Benefits</h1>
                
                  <motion.li className='benefits-list'
                    variants={variants}
                    animate={showBenefit1 ? "closed" : "open"}
                    whileHover={keepBenefits
                    }
                    onHoverEnd={updateBenefit}>
                  <BsIcons.BsBriefcase className='b_icon'/> Interview Prep
                  { showBenefit1 && benefitsDetail1() }
                  
                </motion.li>
                <motion.li className='benefits-list'
                    variants={variants}
                    animate={showBenefit2 ? "closed" : "open"}
                    whileHover={keepBenefits}
                    onHoverEnd={updateBenefit}><BsIcons.BsBarChartLine className='b_icon'/> Valuation Modeling
                    { showBenefit2 && benefitsDetail2() }
                    </motion.li>
                <motion.li className='benefits-list'
                    variants={variants}
                    animate={showBenefit3 ? "closed" : "open"}
                    whileHover={keepBenefits}
                    onHoverEnd={updateBenefit}><BsIcons.BsBank className='b_icon'/> Investment Planning
                    { showBenefit3 && benefitsDetail3() }
                    </motion.li>
                <motion.li className='benefits-list'
                    variants={variants}
                    animate={showBenefit4 ? "closed" : "open"}
                    whileHover={keepBenefits}
                    onHoverEnd={updateBenefit}><BsIcons.BsCashStack className='b_icon'/> Financial Education
                    { showBenefit4 && benefitsDetail4() }
                    </motion.li>
                  </div>
                    

                
        </div>
    );     
}



export default Home;