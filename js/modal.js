import { html } from "https://unpkg.com/htm/preact/standalone.module.js";
import CloseIcon from "./icons/close.js";

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
          class="modal bg-white rounded border"
          style="width: 30rem;"
          onClick=${(e) => e.stopPropagation()}
        >
          <div class="p-3 border-bottom flex justify-content-between">
            <span>Example Modal</span>
            <${CloseIcon} />
          </div>
          <div class="p-3">
            This is an example modal. It can be used for confirmation dialogues,
            settings, whatever!
          </div>
          <div class="flex justify-content-between p-3 border-top">
            <span class="border rounded px-2 py-1" onClick=${onClose}>
              Close
            </span>
            <span class="bg-black rounded px-2 py-1" onClick=${onClose}>
              Save
            </span>
          </div>
        </div>
      </div>
    </div>
  `;
}
