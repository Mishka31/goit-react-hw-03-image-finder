import React, { Component } from "react";
import s from "./ImageGallery.module.css";
import ImageGalleryItem from "../ImageGalleryItem/ImageGalleryItem.jsx";
import Button from "../Button/Button.jsx";
import Loader from "../Loader/Loader.jsx";
import { fetchArray } from "../../api/api.jsx";
import Modal from "../Modal/Modal.jsx";

export class ImageGallery extends Component {
  state = {
    hits: null,
    error: null,
    status: "idle",
    page: 1,
    showModal: false,
    largeUrl: "",
    tag: "",
  };

  onCloseByOverlay = (e) => {
    if (e.currentTarget === e.target) {
      this.setState({ showModal: false });
    }
  };
  componentDidMount() {
    window.addEventListener("keydown", (e) => {
      if (e.code === "Escape") {
        this.setState({ showModal: false });
      }
    });
  }
  componentDidUpdate(prevProps, prevState) {
    if (prevProps.value !== this.props.value) {
      this.setState({ status: "pending" });

      fetchArray(this.props.value, this.state.page)
        .then((res) => res.hits)
        .then((hits) => this.setState({ hits, status: "resolved" }))
        .catch((error) => this.setState({ error, status: "rejected" }));
      this.setState((prevState) => {
        return {
          page: prevState.page + 1,
        };
      });
    }
  }

  takeNextPage = () => {
    fetchArray(this.props.value, this.state.page).then((res) => {
      this.setState((prevState) => {
        return {
          page: prevState.page + 1,
          hits: [...prevState.hits, ...res.hits],
          status: "resolved",
        };
      });
    });
  };

  onClickPciture = (e, alt) =>
    this.setState({ largeUrl: e, tag: alt, showModal: true });
  render() {
    const { hits, error, status, page, showModal, largeUrl, tag } = this.state;

    if (status === "idle") {
      return <p className={s.title}>Enter your search word</p>;
    }
    if (status === "pending") {
      return <Loader />;
    }
    if (status === "rejected") {
      return <h1>{error.message}</h1>;
    }
    if (status === "resolved") {
      return (
        <>
          {showModal && (
            <Modal
              onModalClose={this.onCloseByOverlay}
              src={largeUrl}
              alt={tag}
            />
          )}
          <ul className={s.ImageGallery}>
            <ImageGalleryItem hits={hits} onClick={this.onClickPciture} />
          </ul>
          {hits && <Button page={page} onClick={this.takeNextPage} />}
        </>
      );
    }
  }
}

export default ImageGallery;
