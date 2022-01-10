import React from "react";
import '../styles/About.css';
import member_chart from '../images/member_chart.png';
import Member from "../components/Member";
import { motion } from "framer-motion";
import Hero from "../components/Hero";
import Footer from "../components/Footer";

function About() {


    return (
        <motion.div 
    initial={{x: -300, opacity:0}}
    animate={{ x: 0, opacity: 1 }}
    transition={{
      duration: 1,
    }} className="body">
            <Hero title="ABOUT"/>
            
            <div className="about">
                <div className="general-card">
            <h1>Learn by Doing</h1>
            <p>The Gonzaga University Investment Club is Gonzaga's premier
                 investment and finance club. It is dedicated to providing 
                 students with an opportunity to immerse themselves in finance 
                 and gain hands-on experience. In May 2020, the club was approved 
                 to manage a portion of the university's endowment to further the 
                 club's goal of creating a captivating educational experience.</p>

            <p>The club consists of students who represent varied academic disciplines 
                but share a mutual curiosity for investing. New members in the club are 
                considered "Non-voting Members" and can attend club meetings, stock pitches,
                 guest speakers, and other events. Non-voting members do not vote on investment 
                 proposals. Non-voting members can partipate in a GUIC educational program that 
                 teaches the fundamentals of financial markets, using Microsoft Excel, building 
                 a discounted cash flow model, and stock analysis. Upon completion of the program, 
                 non-voting members are promoted to "Voting Members". Voting members can vote on 
                 investment proposals, run for club leadership positions, and more. </p>    
                </div>
            <img src={member_chart} alt="member chart" className="member_chart" />
                
            <div className="spacer"></div>
            <div className="card">
            <h1>Meet the Team</h1>
            
            <Team/>
            </div>
            </div>
                <Footer/>
        </motion.div>
    );
}

function Team() {
    return (
        <div className="team">
            <Member/>
        </div>
    );    
}


export default About;