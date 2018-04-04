import React from "react";
import Link from "gatsby-link";

export default () => (
  <div>
    <p style={{ color: `red`, background:`black`, padding: 30 }}>Hello world from Link 1</p>
    <Link to="/">BACK TO THE FUTURE</Link>
  </div>
);