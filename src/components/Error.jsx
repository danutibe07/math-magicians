import React from "react";
import { NavLink } from "react-router-dom";

const Error = () => (
  <div className="error-page">
    <h2>Error! Page not found </h2>
    <NavLink to="*">Go back to home page</NavLink>
  </div>
);

export default Error;
