import React from "react";
import { motion } from "framer-motion";

export const Features = (props) => {
  return (
    <div id="features" className="text-center">
      <motion.div 
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: false, amount: 0.2 }}
        className="container w-full p-10 bg-blue-500 text-white text-center rounded-lg"
      >
        <div className="col-md-10 col-md-offset-1 section-title">
          <span>EXPLORE HOW WE WORK FOR YOU</span>
          <h2>Features</h2>
        </div>
        <div className="row">
          {props.data
            ? props.data.map((d, i) => (
                <motion.div
                  key={`${d.title}-${i}`}
                  className="col-md-3"
                  whileHover={{ y: -5, boxShadow: "0px 5px 10px rgba(0,0,0,0.05)" }} // Moves up on hover
                  transition={{ duration: 0.3, ease: "easeOut" }} // Smooth transition
                  style={{ cursor: "pointer" }} // Makes it clickable
                >
                  <i className={d.icon}></i>
                  <h3>{d.title}</h3>
                  <p>{d.text}</p>
                  <a href="">Learn more →</a>
                </motion.div>
              ))
            : "Loading..."}
        </div>
      </motion.div>
    </div>
  );
};
