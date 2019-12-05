import React from "react";
import './banner.css'
const Banner = ({ children, title }) => {
  return (
    <div className="banner">
      <h1>{title}</h1>
      <div />
     
      {children}
    </div>
  );
};

export default Banner;
