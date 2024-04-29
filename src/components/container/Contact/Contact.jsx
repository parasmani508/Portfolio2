import React from "react";
import { contacts} from "../../../Data";
import "./Contact.scss";
import { motion } from "framer-motion";
const Contact = () => {
  return (
    <div className="container" id="contact">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ y: [-50, 0], opacity: 1 }}
        className="title"
      >
        <span>get in touch</span>
        <h1>Contact Me</h1>
      </motion.div>
      <div className="contact_form">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ x: [-250, 0], opacity: 1 }}
          transition={{ duration: 1 }}
          className="contact_left_container"
        >
          <h3>Say Hi👋</h3>
          {contacts.map((contact) => {
            return (
              <div className="contact_left" key={contact.id}>
                <div className="icon">{contact.icon}</div>
                <p>{contact.infoText}</p>
              </div>
            );
          })}
          <div className="social_icons">
            {/* {socialIcons.map((socialIcon, index) => { */}
              {/* return <div key={index}>{socialIcon}</div>; */}
            {/* })} */}
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ x: [250, 0], opacity: 1 }}
          transition={{ duration: 1 }}
          className="contact_right"
        >
          <h3>Get In Touch</h3>
          <form action="https://formspree.io/f/xnqklaav" method="POST" enctype="multipart/form-data">
            <div className="row">
              <input type="text" name="fname" placeholder="First Name" autoComplete="off" required />
              <input type="text"name="lname"  placeholder="Last Name" autoComplete="off" required />
            </div>
            <div className="row">
              <input type="number" name="Number"placeholder="Your Number" autoComplete="off" required />
            </div>
            <div className="row">
              <input type="email" name="Email"placeholder="Email" autoComplete="off" required />
            </div>
            <div className="row">
              <textarea placeholder="message" name="msgeme" autoComplete="off" required />
            </div>
          

          <motion.div
            // className=""
            // whileHover={{ scale: 1.1 }}
            // transition={{ duration: 0.3 }}
          >
            <button  className="" type="submit" value="send">Send</button>
            
          </motion.div>
          
          </form>
        </motion.div>
        {/* </form> */}
        
      </div>
    </div>
  );
};

export default Contact;
