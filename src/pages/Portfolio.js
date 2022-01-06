import React from "react";
import '../styles/Portfolio.css';
import Markets from "../components/Markets";
import { motion } from "framer-motion";
import Hero from "../components/Hero";
import Footer from "../components/Footer";
import Stocks from "../components/Stocks";

const stocks1 = [ "MSFT", "GOOGL", "DIS", "AMZN", "FB"]
const stocks2 = ["BRK/B", "APPL", "CVS", "TGT", "COST"]
const stocks3 = ["SHW", "ADBE", "NEE", "HON", "EXC"]
const stocks6 = ["ABBV", "CSIQ", "EAF", "V"]
const stocks4 = ["HD", "ANTM", "MASI", "PG", "AKAM"]
const stocks5 = ["AGR", "BF.B", "CAT", "LMT", "WMT"]

function Portfolio() {

    const api_key1 = '9366WMGBDAHFT8JY';
    const api_key2 = 'XT0GR4QX906LXW14';
    const api_key3 = '6RFDGI5FOMTG2NVP';
    const api_key4 = 'NK833DAYIJY1EWYA';
    const api_key5 = 'JK4A0Q88VGZFGBVK';
    const api_key6 = 'G6KJA2OKAAGWXERI';

    return (
    <motion.div 
    initial={{x: -300, opacity:0}}
    animate={{ x: 0, opacity: 1 }}
    transition={{
      duration: 1,
    }}>
    <div className="portfolio">
        <Hero title='PORTFOLIO'/>
        <motion.h1 initial={{ y: -200, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 2 }}  style={{
           width: '50%',
           margin: 'auto',
           borderRadius: '2em',
           marginTop: '0.3em',
           fontSize: '3rem',
           fontWeight: 300,
           textAlign: 'center',
           padding: '1rem',
           
           color: '#000',
         }}>Our Investments</motion.h1>
        <div className="spacer"/>
        <Markets/>
        

        <div className="stock">
        {stocks1.map(stock1 => (<><Stocks symbol={stock1} api={api_key1}/></>))}
        {stocks2.map(stock2 => (<><Stocks symbol={stock2} api={api_key2}/></>))}
        {stocks3.map(stock3 => (<><Stocks symbol={stock3} api={api_key3}/></>))}
        {stocks4.map(stock4 => (<><Stocks symbol={stock4} api={api_key4}/></>))}
        {stocks5.map(stock5 => (<><Stocks symbol={stock5} api={api_key5}/></>))}
        {stocks6.map(stock6 => (<><Stocks symbol={stock6} api={api_key6}/></>))}
        </div>
    </div>
    <Footer/>
    </motion.div>
    );
}

export default Portfolio;