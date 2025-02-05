import React from "react";
import { motion } from "framer-motion";


export const Services = (props) => {
  return (
    <div id="services" className="text-center">
      <div className="container">
        <div className="section-title">
          <h2>Our Services</h2>
          <p>
          We provide end-to-end support, from university selection and scholarships to education loans, 
          internships, health insurance, and a fast visa process. Our goal is to ensure a successful future 
          for students while balancing trust and commercial value.
          </p>
        </div>
        <motion.div 
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: false, amount: 0.2 }}
        className="row w-full p-10 bg-blue-500 text-white text-center rounded-lg"
        >
          {props.data
            ? props.data.map((d, i) => (
                <div key={`${d.name}-${i}`} className="col-md-4">
                  {" "}
                  <i className={d.icon}></i>
                  <div className="service-desc">
                    <h3>{d.name}</h3>
                    <p>{d.text}</p>
                  </div>
                </div>
              ))
            : "loading"}
        </motion.div>
      </div>
    </div>
  );
};
