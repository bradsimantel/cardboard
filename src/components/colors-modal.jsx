import { h } from "preact";
import { useState } from "preact/hooks";
import Modal from "./modal";
import CloseIcon from "./icons/close";
import ToneIcon from "./icons/tone";

export default function ColorsModal({ isOpen, onClose }) {
  const [backgroundColor, setBackgroundColor] = useState("#ffffff");
  const [foregroundColor, setForegroundColor] = useState("#000000");

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <div className="p-3 border-bottom flex justify-content-between align-items-center">
        <div className="flex align-items-center">
          <ToneIcon className="me-2" />
          <span>Colors</span>
        </div>
        <CloseIcon />
      </div>
      <form className="flex">
        <div className="w-50 p-3 pe-2">
          <label htmlFor="backgroundColor" className="d-block mb-1">
            Background
          </label>
          <input
            type="text"
            className="d-block bg-white rounded border w-100 p-1 px-2"
            id="backgroundColor"
            name="backgroundColor"
            value={backgroundColor}
            onInput={(e) => setBackgroundColor(e.target.value)}
          />
        </div>
        <div className="w-50 p-3 ps-2">
          <label htmlFor="foregroundColor" className="d-block mb-1">
            Foreground
          </label>
          <input
            type="text"
            className="d-block bg-white rounded border w-100 p-1 px-2"
            id="foregroundColor"
            name="foregroundColor"
            value={foregroundColor}
            onInput={(e) => setForegroundColor(e.target.value)}
          />
        </div>
      </form>
      <div className="p-3 pt-0 mb-2">
        <span className="d-block mb-1">Suggested Combinations</span>
        <div className="flex mb-2">
          <div
            className={`w-33 text-center p-2 rounded border ${
              backgroundColor === "#ffffff" && foregroundColor === "#000000"
                ? "inner-border"
                : ""
            }`}
            onClick={() => {
              setBackgroundColor("#ffffff");
              setForegroundColor("#000000");
              handleUpdateColors("#ffffff", "#000000");
            }}
          >
            White/Black
          </div>
          <div
            className={`w-33 text-center p-2 rounded border ms-2 ${
              backgroundColor === "#000000" && foregroundColor === "#ffffff"
                ? "inner-border"
                : ""
            }`}
            onClick={() => {
              setBackgroundColor("#000000");
              setForegroundColor("#ffffff");
              handleUpdateColors("#000000", "#ffffff");
            }}
          >
            Black/White
          </div>
          <div
            className={`w-33 text-center p-2 rounded border ms-2 ${
              backgroundColor === "#000080" && foregroundColor === "#b4cde2"
                ? "inner-border"
                : ""
            }`}
            onClick={() => {
              setBackgroundColor("#000080");
              setForegroundColor("#b4cde2");
              handleUpdateColors("#000080", "#b4cde2");
            }}
          >
            Blue/Blue
          </div>
        </div>
        <div className="flex">
          <div
            className={`w-33 text-center p-2 rounded border ${
              backgroundColor === "#5f4b8b" && foregroundColor === "#e69a8d"
                ? "inner-border"
                : ""
            }`}
            onClick={() => {
              setBackgroundColor("#5f4b8b");
              setForegroundColor("#e69a8d");
              handleUpdateColors("#5f4b8b", "#e69a8d");
            }}
          >
            Purple/Peach
          </div>
          <div
            className={`w-33 text-center p-2 rounded border ms-2 ${
              backgroundColor === "#000000" && foregroundColor === "#1DB954"
                ? "inner-border"
                : ""
            }`}
            onClick={() => {
              setBackgroundColor("#000000");
              setForegroundColor("#1DB954");
              handleUpdateColors("#000000", "#1DB954");
            }}
          >
            Black/Green
          </div>
          <div
            className={`w-33 text-center p-2 rounded border ms-2 ${
              backgroundColor === "#f0e9eb" && foregroundColor === "#7a0b45"
                ? "inner-border"
                : ""
            }`}
            onClick={() => {
              setBackgroundColor("#f0e9eb");
              setForegroundColor("#7a0b45");
              handleUpdateColors("#f0e9eb", "#7a0b45");
            }}
          >
            Cream/Maroon
          </div>
        </div>
      </div>
      <div className="flex justify-content-between p-3 border-top">
        <span className="border rounded px-3 py-1" onClick={onClose}>
          Close
        </span>
        <span
          className="bg-black rounded px-3 py-1"
          onClick={() => {
            handleUpdateColors(backgroundColor, foregroundColor);
            onClose();
          }}
        >
          Update Colors
        </span>
      </div>
    </Modal>
  );
}

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
