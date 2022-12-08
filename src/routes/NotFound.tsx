import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="App">
      <p style={{ fontWeight: 700 }}>404 - How did you even get here?</p>
      <h2>Do kindly let me know if I've made a mistake somewhere.</h2>
      <Link className="App-link" to="/home">
        Back to reality
      </Link>
    </div>
  );
};

export default NotFound;
