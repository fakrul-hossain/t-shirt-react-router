import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <nav className="flex gap-4 justify-center text-emerald-500 font-semibold text-lg">
      <Link to="/">Home</Link>
      <Link to="/review">Review</Link>
      <Link to="/about">About</Link>
      <Link to="/contract">Contract</Link>
    </nav>
  );
};

export default Header;
