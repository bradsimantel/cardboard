import { html } from "https://unpkg.com/htm/preact/standalone.module.js";

export default function Modal({ isOpen, onClose }) {
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
          class="bg-white p-3 rounded border"
          onClick=${(e) => e.stopPropagation()}
        >
          <div>modal</div>
          <button class="btn btn-secondary mt-3" onClick=${onClose}>
            Close
          </button>
        </div>
      </div>
    </div>
  `;
}
