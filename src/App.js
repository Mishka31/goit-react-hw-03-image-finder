import { Component } from "react";
import Searchbar from "./components/Searchbar/Searchbar.jsx";
import ImageGallery from "./components/ImageGallery/ImageGallery.jsx";

export default class App extends Component {
  state = {
    value: "",
  };
  handleFormSubmit = (name) => {
    this.setState({ value: name });
  };
  render() {
    return (
      <div className="App">
        <Searchbar onSubmit={this.handleFormSubmit} />
        <ImageGallery value={this.state.value} />
      </div>
    );
  }
}
