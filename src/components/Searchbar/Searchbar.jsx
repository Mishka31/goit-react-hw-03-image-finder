import React, { Component } from "react";
import s from "./Searchbar.module.css";

export class Searchbar extends Component {
  state = {
    value: "",
  };

  handleSubmit = (e) => {
    e.preventDefault();
    if (this.state.value.trim() === "") {
      return alert("Пустое поле");
    }

    this.props.onSubmit(this.state.value);
    this.setState({ value: "" });
  };

  handleSubmitChange = (e) => {
    this.setState({ value: e.currentTarget.value.toLowerCase() });
  };

  render() {
    return (
      <header className={s.Searchbar}>
        <form className={s.SearchForm} onSubmit={this.handleSubmit}>
          <button type="submit" className={s.SearchFormButton}>
            <span className={s.SearchFormButtonLabel}>Search</span>
          </button>

          <input
            onChange={this.handleSubmitChange}
            className={s.SearchFormInput}
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
          />
        </form>
      </header>
    );
  }
}

export default Searchbar;
