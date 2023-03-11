import React from "react";
// import style from ''
import logo from "../../assets/logo.png";

export const Header = () => {
  return (
 
      <div className="header">
        <div className="header-wrapper">
        <div className="logo-wrapper">
          <img src={logo} alt="logo" />
        </div>
        <div className="header-name">
          <p className="text-opacity">
            <span> Frontend task | </span> Дірксен Артем
          </p>
        </div>
        </div>
      </div>
  );
};
