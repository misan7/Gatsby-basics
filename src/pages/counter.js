import React from "react";
import Link from "gatsby-link";

class Counter extends React.Component {
  constructor() {
    super();
    this.state = { count: 0 };
  }

  render() {
    return (
      <div>
        <Link to="/">HOME</Link>
        <h1>Counter</h1>
        <p>current count: {this.state.count}</p>
        <button
          onClick={() =>
            this.setState({
              count: this.state.count + 1
            })
          }
        >
          plus
        </button>
        <button
          onClick={() =>
            this.setState({
              count: this.state.count - 1
            })
          }
        >
          minus
        </button>
        <button onClick={() => this.setState({ count: this.state.count + 10 })}>
          plus x10
        </button>
        <button onClick={() => this.setState({ count: this.state.count - 10 })}>
          minus x(-10)
        </button>
      </div>
    );
  }
}

export default Counter;
