import React from "react";
import { motion } from "framer-motion";

export const Team = (props) => {
  return (
    <div id="team" className="text-center">
      <div className="container">
        <div className="col-md-8 col-md-offset-2 section-title">
          <h2>Our University Ties</h2>
          <p>
          We are proud to have collaborated with some of the most prestigious universities.
          </p>
        </div>
        <motion.div 
        id="row"
        initial={{ opacity: 0, x: 100 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: false, amount: 0.2 }}
        className="row w-full p-10 bg-blue-500 text-white text-left rounded-lg tracking-wide"
        >
          {props.data
            ? props.data.map((d, i) => (
                <div key={`${d.name}-${i}`} className="col-md-3 col-sm-6 team">
                  <div className="thumbnail">
                    {" "}
                    <img src={d.img} alt="..." className="team-img" />
                    <div className="caption">
                      <h4>{d.name}</h4>
                      <p>{d.location}</p>
                    </div>
                  </div>
                </div>
              ))
            : "loading"}
        </motion.div>
      </div>
    </div>
  );
};
