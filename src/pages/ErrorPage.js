import React from "react";
import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div>
      <h1>No pages found</h1>
      <Link to="/">Go back to home</Link>
    </div>
  );
};

export default ErrorPage;
