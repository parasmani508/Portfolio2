import React from 'react'
import portfolio from "../../../assets/portfolio.jpg"
import "./Home.scss"
import { motion } from 'framer-motion'


const Home = () => {
  const moveVariants = {
    animation: {
      y: [0, -15],
      transition: {
        yoyo: Infinity,
        duration: 2,
        delay: 1,
      }

    }
  }


  return (
    <motion.div className="container " id='home'
      initial={{ y: -15, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={
        {
          duration: 2,
          delay: 0.5
        }
      }
    >
      <div className="profile">
        <img src={portfolio} alt="portfolio" />
      </div>
      <div className="profile_text">
        <h3 className='name'>Hi, I'm <span>Paras Kumar</span> </h3>
        <span className='job'>Front-end Developer</span>
        <span className='text'><span className='p'>P</span>a<span className='p'>s</span>s<span className='p'>i</span>
        o<span className='p'>n</span>a<span className='p'>t</span>e<br /><br /><span className='p'>F</span>o<span className='p'>r </span> 
        C<span className='p'>r</span>e<span className='p'>a</span>t<span className='p'>i</span>n<span className='p'>g</span> U
        <span className='p'>i</span>.</span>
        <motion.a
          href="#contact"
          whileHover={{ scale: 1.1 }}
          variants={moveVariants}
          animate="animation"
          transition={{duration:0.3}}
        >
          connect with me</motion.a>
        <div
          className="web"

        >
          Web Designer
        </div>
        <div
          className="ui"
        >
          UI Designer
        </div>
        <div
          className="freelance"
        >
          Learner
        </div>
      </div>
    </motion.div>
  )
}

export default Home