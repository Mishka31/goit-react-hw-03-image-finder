// import PropTypes from "prop-types";
import s from "./ImageGalleryItem.module.css";

const ImageGalleryItem = ({ hits, onClick }) => {
  return hits.map((hit) => (
    <li key={hit.id} className={s.ImageGalleryItem}>
      <img
        onClick={() => onClick(hit.largeImageURL, hit.tags)}
        src={hit.webformatURL}
        alt={hit.tags}
        className={s.ImageGalleryItemImage}
      />
    </li>
  ));
};
export default ImageGalleryItem;
