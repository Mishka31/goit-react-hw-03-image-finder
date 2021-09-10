import s from "./Modal.module.css";

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
