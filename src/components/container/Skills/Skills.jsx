import React, { useState } from "react";
import "./Skills.scss";
import { icons } from "../../../Data";
import { certificates } from "../../../Data";
import { motion } from "framer-motion";
const Skills = () => {
  const moveVariants = {
    animation: {
      y: [0, -15],
      transition: {
        yoyo: Infinity,
        duration: 30,
        delay: 0.5,
      }

    }
  }

  const [active, setActive] = useState(0);
  return (
    <div className="container" id="skills">
      <motion.div 
              initial={{opacity:0}}
              whileInView={{y:[-50,0],opacity:1}}
              transition={{duration :1}}
      className="title">
        <span>What I Know</span>
        <h1>Skills And Tools</h1>
      </motion.div>
      <motion.div 
              initial={{opacity:0}}
              whileInView={{y:[-50,0],opacity:1}}
              transition={{duration :1}}
              className="select">
        <button
          onClick={() => {
            setActive(1);
          }}
          className={active === 1 ? "active" : ""}
        >
          Skills
        </button>
        <button
          onClick={() => {
            setActive(2);
          }}
          className={active === 2 ? "active" : ""}
        >
          Tools
        </button>
      </motion.div>
      <motion.div className="skills"
      initial={{ y: -25, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      variants={moveVariants}
      transition={
        {
          duration: 30,
          delay: 0.5
        }
      }>
        {active === 1 &&
          icons.map((icon, index) => {
            return <div className="icon">{icon}</div>;
          })}
      </motion.div>
      <motion.div className="skills"
      initial={{ y: -25, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      variants={moveVariants}
      transition={
        {
          duration: 30,
          delay: 0.5
        }
      }>
        {active===2 && 
        certificates.map((certificate)=>
        {
          return(
          <div className="icon" key={certificate.id}>
            {certificate}
              </div>
        );
        })}
      </motion.div>
    </div>
  );
};

export default Skills;
