import React from "react";
import { motion } from "framer-motion";

export const Features = (props) => {
  return (
    <div id="features" className="text-center">
      <div className="content-wrapper">
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: false, amount: 0.2 }}
          className="container w-full p-10 text-white text-center rounded-lg"
        >
          <div className="col-md-10 col-md-offset-1 section-title">
            <span className="text-orange-500">EXPLORE HOW WE WORK FOR YOU</span>
            <h2 className="text-white">Features</h2>
          </div>
          <div className="row">
            {props.data
              ? props.data.map((d, i) => (
                  <motion.div
                    key={`${d.title}-${i}`}
                    className="col-md-3 relative"
                    whileHover={{ y: -5, boxShadow: "0px 5px 10px rgba(0,0,0,0.1)" }}
                    transition={{ duration: 0.3, ease: "easeOut" }}
                    style={{ cursor: "pointer", zIndex: 3 }}
                  >
                    <i className={d.icon} style={{ fontSize: "38px", color: "#333" }}></i>
                    <h3 className="text-white">{d.title}</h3>
                    <p className="text-gray-300">{d.text}</p>
                    <a href="" className="text-orange-400 hover:underline">
                      Learn more →
                    </a>
                  </motion.div>
                ))
              : "Loading..."}
          </div>
        </motion.div>
      </div>
    </div>
  );
};
