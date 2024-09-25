import {
  html,
  useState,
} from "https://unpkg.com/htm/preact/standalone.module.js";
import CloseIcon from "./icons/close.js";
import ToneIcon from "./icons/tone.js";

function handleUpdateColors(backgroundColor, foregroundColor) {
  document.documentElement.style.setProperty(
    "--background-color",
    backgroundColor
  );
  document.documentElement.style.setProperty(
    "--foreground-color",
    foregroundColor
  );
}

export default function Modal({ isOpen, onClose }) {
  const [backgroundColor, setBackgroundColor] = useState("#ffffff");
  const [foregroundColor, setForegroundColor] = useState("#000000");

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
          <div
            class="p-3 border-bottom flex justify-content-between align-items-center"
          >
            <div class="flex align-items-center">
              <${ToneIcon} className="me-2" />
              <span>Colors</span>
            </div>
            <${CloseIcon} />
          </div>
          <form class="flex">
            <div class="w-50 p-3 pe-2">
              <label for="backgroundColor" className="d-block mb-1">
                Background
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
            <div class="w-50 p-3 ps-2">
              <label for="foregroundColor" className="d-block mb-1">
                Foreground
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
          <div class="p-3 pt-0 mb-2">
            <span class="d-block mb-1">Suggested Combinations</span>
            <div class="flex mb-2">
              <div
                class="w-33 text-center p-2 rounded border"
                onClick=${() => {
                  setBackgroundColor("#ffffff");
                  setForegroundColor("#000000");
                  handleUpdateColors("#ffffff", "#000000");
                }}
              >
                White/Black
              </div>
              <div
                class="w-33 text-center p-2 rounded border ms-2"
                onClick=${() => {
                  setBackgroundColor("#000000");
                  setForegroundColor("#ffffff");
                  handleUpdateColors("#000000", "#ffffff");
                }}
              >
                Black/White
              </div>
              <div
                class="w-33 text-center p-2 rounded border ms-2"
                onClick=${() => {
                  setBackgroundColor("#000080");
                  setForegroundColor("#b4cde2");
                  handleUpdateColors("#000080", "#b4cde2");
                }}
              >
                Blue/Blue
              </div>
            </div>
            <div class="flex">
              <div
                class="w-33 text-center p-2 rounded border"
                onClick=${() => {
                  setBackgroundColor("#5f4b8b");
                  setForegroundColor("#e69a8d");
                  handleUpdateColors("#5f4b8b", "#e69a8d");
                }}
              >
                Purple/Peach
              </div>
              <div
                class="w-33 text-center p-2 rounded border ms-2"
                onClick=${() => {
                  setBackgroundColor("#000000");
                  setForegroundColor("#1DB954");
                  handleUpdateColors("#000000", "#1DB954");
                }}
              >
                Black/Green
              </div>
              <div
                class="w-33 text-center p-2 rounded border ms-2"
                onClick=${() => {
                  setBackgroundColor("#f0e9eb");
                  setForegroundColor("#7a0b45");
                  handleUpdateColors("#f0e9eb", "#7a0b45");
                }}
              >
                Cream/Maroon
              </div>
            </div>
          </div>
          <div class="flex justify-content-between p-3 border-top">
            <span class="border rounded px-3 py-1" onClick=${onClose}>
              Close
            </span>
            <span
              class="bg-black rounded px-3 py-1"
              onClick=${() => {
                handleUpdateColors(backgroundColor, foregroundColor);
                onClose();
              }}
            >
              Update Colors
            </span>
          </div>
        </div>
      </div>
    </div>
  `;
}
