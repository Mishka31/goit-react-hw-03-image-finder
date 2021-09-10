import s from "./Modal.module.css";
import PropTypes from "prop-types";

export function Modal({ onModalClose, src, alt }) {
  return (
    <div className={s.Overlay} onClick={onModalClose}>
      <div className={s.Modal}>
        <img src={src} alt={alt} />
      </div>
    </div>
  );
}

export default Modal;

Modal.propTypes = {
  src: PropTypes.string.isRequired,
  onModalClose: PropTypes.func.isRequired,
  alt: PropTypes.string.isRequired,
};
