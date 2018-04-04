import React from "react"
import Link from "gatsby-link"

export default () => (
  <div style={{ color: `blue` }}>
    <h1>Hello Gatsby!</h1>
    <p>What a world!</p>
    <img src="https://source.unsplash.com/random/600x200" alt="" />
    <div>
      <Link to="/Link-1/">Link 1</Link>
    </div>
    <div>
      <Link to="/Link-2/">Link 2</Link>
    </div>
    <div>
      <Link to="/counter/">Counter</Link>
    </div>
  </div>
);
