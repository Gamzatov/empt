import React from "react";
import { Link } from "react-router-dom";
import { IoIosArrowForward } from "react-icons/fa";

export const Navigation = () => {
  return (
    <div className="nav-links">
      <div className="mob-nav">
        <Link to="/empt"><ion-icon name="arrow-back-outline"></ion-icon> Electronics </Link>
      </div>
      <div className="desktop-nav">
        <Link to="/empt"> Home </Link>
        <p>
          <ion-icon name="chevron-forward-outline"></ion-icon>
        </p>
        <Link to="/empt"> Electronics </Link>
      </div>
    </div>
  );
};
