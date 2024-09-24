import {
  html,
  useState,
} from "https://unpkg.com/htm/preact/standalone.module.js";
import CloseIcon from "./icons/close.js";
import ToneIcon from "./icons/tone.js";

export default function Modal({ isOpen, onClose }) {
  const [backgroundColor, setBackgroundColor] = useState("#ffffff");
  const [foregroundColor, setForegroundColor] = useState("#000000");

  if (!isOpen) return null;

  const handleUpdateColors = () => {
    document.documentElement.style.setProperty(
      "--background-color",
      backgroundColor
    );
    document.documentElement.style.setProperty(
      "--foreground-color",
      foregroundColor
    );
    onClose();
  };

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
          <div
            class="p-3 border-bottom flex justify-content-between align-items-center"
          >
            <div class="flex align-items-center">
              <${ToneIcon} className="me-2" />
              <span>Colors</span>
            </div>
            <${CloseIcon} />
          </div>
          <div class="p-3">
            <form>
              <div class="mb-3">
                <label for="backgroundColor" className="d-block mb-1">
                  Background Color
                </label>
                <input
                  type="text"
                  class="d-block bg-white rounded border w-100 p-1 px-2"
                  id="backgroundColor"
                  name="backgroundColor"
                  value=${backgroundColor}
                  onInput=${(e) => setBackgroundColor(e.target.value)}
                />
              </div>
              <div class="mb-2">
                <label for="foregroundColor" className="d-block mb-1">
                  Foreground Color
                </label>
                <input
                  type="text"
                  class="d-block bg-white rounded border w-100 p-1 px-2"
                  id="foregroundColor"
                  name="foregroundColor"
                  value=${foregroundColor}
                  onInput=${(e) => setForegroundColor(e.target.value)}
                />
              </div>
            </form>
          </div>
          <div class="flex justify-content-between p-3 border-top">
            <span class="border rounded px-3 py-1" onClick=${onClose}>
              Close
            </span>
            <span
              class="bg-black rounded px-3 py-1"
              onClick=${handleUpdateColors}
            >
              Update Colors
            </span>
          </div>
        </div>
      </div>
    </div>
  `;
}
