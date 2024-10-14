import { h } from "preact";

export default function Modal({ isOpen, onClose, children }) {
  if (!isOpen) return null;

  return (
    <div className="z-10 fixed inset-0 modal-background-striped-outer">
      <div
        className="z-10 fixed inset-0 flex items-center justify-center modal-background-striped-inner"
        onClick={onClose}
      >
        <div
          className="z-50 bg-white border rounded-lg w-96"
          onClick={(e) => e.stopPropagation()}
        >
          {children}
        </div>
      </div>
    </div>
  );
}
