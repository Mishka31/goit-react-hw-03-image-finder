import s from "./Button.module.css";
import React, { Component } from "react";

export class Button extends Component {
  render() {
    return (
      <button className={s.Button} onClick={this.props.onClick} type="submit">
        Load more
      </button>
    );
  }
}

export default Button;
