import React from "react";

export const Services = (props) => {
  return (
    <div id="services" className="text-center">
      <div className="container">
        <div className="section-title">
          <h2>Our Expertise</h2>
          <p>
            Empower your business with our innovative digital marketing solutions tailored to your goals.
          </p>
        </div>
        <div className="row">
          {props.data
            ? props.data.map((service, index) => (
                <div key={`${service.name}-${index}`} className="col-md-4">
                  <i className={service.icon}></i>
                  <div className="service-desc">
                    <h3>{service.name}</h3>
                    <p>{service.text}</p>
                  </div>
                </div>
              ))
            : "Loading..."}
        </div>
      </div>
    </div>
  );
};
