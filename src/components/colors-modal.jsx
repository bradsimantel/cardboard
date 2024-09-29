import { h } from "preact";
import { useState } from "preact/hooks";
import Modal from "./modal";
import CloseIcon from "./icons/close";
import ToneIcon from "./icons/tone";

export default function ColorsModal({ isOpen, onClose }) {
  const [backgroundColor, setBackgroundColor] = useState("#ffffff");
  const [foregroundColor, setForegroundColor] = useState("#000000");

  const Preset = ({ name, bg, fg }) => {
    return (
      <div
        className={`w-1/3 text-center p-2 rounded border ${
          backgroundColor === bg && foregroundColor === fg ? "border-2" : ""
        }`}
        onClick={() => {
          setBackgroundColor(bg);
          setForegroundColor(fg);
          handleUpdateColors(bg, fg);
        }}
      >
        {name}
      </div>
    );
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <div className="p-3 border-b flex justify-between items-center">
        <div className="flex items-center">
          <ToneIcon className="mr-2" />
          <span>Colors</span>
        </div>
        <CloseIcon />
      </div>
      <form className="flex">
        <div className="w-1/2 p-3 pr-2">
          <label htmlFor="backgroundColor" className="block mb-1">
            Background
          </label>
          <input
            type="text"
            className="block bg-white rounded border w-full p-1 px-2"
            id="backgroundColor"
            name="backgroundColor"
            value={backgroundColor}
            onInput={(e) => setBackgroundColor(e.target.value)}
          />
        </div>
        <div className="w-1/2 p-3 pl-2">
          <label htmlFor="foregroundColor" className="block mb-1">
            Foreground
          </label>
          <input
            type="text"
            className="block bg-white rounded border w-full p-1 px-2"
            id="foregroundColor"
            name="foregroundColor"
            value={foregroundColor}
            onInput={(e) => setForegroundColor(e.target.value)}
          />
        </div>
      </form>
      <div className="p-3 pt-0 mb-2">
        <span className="block mb-1">Suggested Combinations</span>
        <div className="flex mb-2">
          <Preset name="White/Black" bg="#ffffff" fg="#000000" />
          <Preset name="Black/White" bg="#000000" fg="#ffffff" />
          <Preset name="Blue/Blue" bg="#000080" fg="#b4cde2" />
        </div>
        <div className="flex">
          <Preset name="Purple/Peach" bg="#5f4b8b" fg="#e69a8d" />
          <Preset name="Black/Green" bg="#000000" fg="#1DB954" />
          <Preset name="Cream/Maroon" bg="#f0e9eb" fg="#7a0b45" />
        </div>
      </div>
      <div className="flex justify-between p-3 border-t">
        <span
          className="border rounded px-3 py-1 cursor-pointer"
          onClick={onClose}
        >
          Close
        </span>
        <span
          className="bg-black text-white rounded px-3 py-1 cursor-pointer"
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
  document.documentElement.style.setProperty("--color-white", backgroundColor);
  document.documentElement.style.setProperty("--color-black", foregroundColor);
}
