import React, { useEffect, useState } from "react";
import "./Portfolio.scss";
import { workImages, workNavs } from "../../../Data";
import { FiGithub } from "react-icons/fi";
// import { FiEye } from "react-icons/fi";
import {motion} from "framer-motion";
const Portfolio = () => {
  const [tab, setTab] = useState({ name: "all" });
  const [works, setWorks] = useState([]);
  const [active, setActive] = useState(0);

  useEffect(() => {
    if (tab.name === "all") {
      setWorks(workImages);
    } else {
      const newWork = workImages.filter((workImage) => {
        return workImage.category.toLowerCase() === tab.name;
      });
      setWorks(newWork);
    }
  }, [tab]);
  const activeTab = (e, index) => {
    setTab({ name: e.target.textContent.toLowerCase() });
    setActive(index);
  };
  return (
    <div className="container" id="portfolio">
      <motion.div 
       initial={{opacity:0}}
       whileInView={{y:[-50,0],opacity:1}}
      className="title">
        <span>My Works</span>
        <h1>Awesome Projects</h1>
      </motion.div>
      <motion.div 
       initial={{opacity:0}}
       whileInView={{y:[-50,0],opacity:1}}
      
      className="buttons">
        {workNavs.map((workNav, index) => {
          return (
            <button
              key={index}
              onClick={(e) => activeTab(e, index)}
              className={`${active === index ? "active" : ""}`}
            >
              {workNav}
            </button>
          );
        })}
      </motion.div>
      <motion.div 
      initial={{opacity:0}}
      whileInView={{x:[-250,0],opacity:1}}
      transition={{duration :1}}
      className="workImages">
        {works.map((work)=>
        {
        return (
        <div className="workImage">
        <img src={work.img} alt="imggg"/>
        <motion.div 
        // initial={{opacity:0}}
        // whileHover={{opacity:[0,1]}}
        // transition={{duration:0.5,
        // ease:"easeInOut"}}
        
        className="hoverLayer">
          <motion.a href={work.link}
          // whileInView={{scale:[0,1]}}
          // whileHover={{scale:[1,1,1]}}
          // transition={{duration:0.2}}
          
          >
            
            <FiGithub/>
          </motion.a>
          {/* <motion.a href="#"
          whileInView={{scale:[0,1]}}
          whileHover={{scale:[1,1,1]}}
          transition={{duration:0.5}}>
            <FiEye/>
          </motion.a> */}
        </motion.div>;
        </div>
        )
        })}
        
      </motion.div>
    </div>
  );
};

export default Portfolio;
