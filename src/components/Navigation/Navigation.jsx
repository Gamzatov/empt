import React from "react";
import { Link } from "react-router-dom";
import { IoIosArrowForward } from 'react-icons/fa';

export const Navigation = () => {
  return (
    <div className="nav-links">
      <Link to="/empt"> Home </Link>
      <p><ion-icon name="chevron-forward-outline"></ion-icon></p>
      <Link to="/empt"> Electronics </Link>
    </div>
  );
};
