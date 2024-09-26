import { html } from "../lib/preact-bundle.js";

export default function Modal({ isOpen, onClose, children }) {
  if (!isOpen) return null;

  return html`
    <div
      class="bg-striped-outer"
      style="position: fixed; top: 0; left: 0; right: 0; bottom: 0; z-index: 9999;"
    >
      <div
        class="flex justify-content-center align-items-center bg-striped-inner"
        style="position: fixed; top: 0; left: 0; right: 0; bottom: 0; z-index: 9999;"
        onClick=${onClose}
      >
        <div
          class="modal bg-white rounded border"
          style="width: 30rem;"
          onClick=${(e) => e.stopPropagation()}
        >
          ${children}
        </div>
      </div>
    </div>
  `;
}
