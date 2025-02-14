import React from "react";

export const Team = (props) => {
  const universities = props.data ? [...props.data, ...props.data] : [];

  return (
    <div id="team" className="text-center">
      <div className="container">
        <div className="col-md-8 col-md-offset-2 section-title">
          <h2>Our University Ties</h2>
          <p>We are proud to collaborate with prestigious universities.</p>
        </div>

        <div className="carousel-wrapper">
          {universities.map((d, i) => (
            <div key={`${d.name}-${i}`} className="team-item">
              <img src={d.img} alt={d.name} className="team-img" />
              {/* <h4>{d.name}</h4> */}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};