import React from "react";
import "./About.scss";
import code from "../../../assets/code.avif";
import { bios } from "../../../Data";
import { motion } from "framer-motion";
const About = () => {
  const moveVariants = {
    animation: {
      y: [0, -15],
      transition: {
        yoyo: Infinity,
        duration: 10,
        delay: 3,
      }

    }
  }
  return (
    <div className="container" id="about">
      <motion.div 
      initial={{opacity:0}}
      whileInView={{y:[-50,0],opacity:1}}
      
      
      className="title">
        <span>Who Am I?</span>
        <h1>About Me</h1>
      </motion.div>
      <div className="about_container">
        <motion.div 
        initial={{opacity:0}}
        whileInView={{x:[-250,0],opacity:1}}
        transition={{duration :1}}
        className="about_left">
          <img src={code} alt="im"></img>
        </motion.div>
        <motion.div 
                initial={{opacity:0}}
                whileInView={{x:[250,0],opacity:1}}
                transition={{duration :1}}
        className="about_right">
          <p className="p">
            I am a student of computer science at the College of Engineering
            Roorkee. I have a impatient interest in making front-end designs in
            web development and have a skill set in web development- React.js.
          </p>
          {bios.map((bio) => {
            return(
            <div className="bio" key={bio.id}>
              <span className="bioKey">
                {bio.icon}
                {bio.key}
              </span>
              <span className="bioValue">{bio.value}</span>
            </div>
            );
          })}
           
          <motion.a href="https://app.luminpdf.com/viewer/64eb9ce371e1c71aba926869" download=""
          
          whileHover={{ scale: 1.1 }}
          variants={moveVariants}
          animate="animation">
            Download Resume
          </motion.a>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
