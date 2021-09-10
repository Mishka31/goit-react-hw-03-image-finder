import React, { Component } from "react";
import Loader from "react-loader-spinner";
import s from "./loader.module.css";

export class preLoader extends Component {
  render() {
    return (
      <div className={s.container}>
        <Loader
          type="Puff"
          color="#00BFFF"
          height={100}
          width={100}
          timeout={3000} //3 secs
        />
      </div>
    );
  }
}

export default preLoader;
