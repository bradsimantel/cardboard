import { h } from "preact";
import { useState } from "preact/hooks";
import Modal from "./modal";
import TextInput from "./text-input";
import Button from "./button";
import ButtonOutline from "./button-outline";
import Icon from "./icon";

export default function ColorsModal({ isOpen, onClose }) {
  const [backgroundColor, setBackgroundColor] = useState("#ffffff");
  const [foregroundColor, setForegroundColor] = useState("#000000");

  const Preset = ({ name, bg, fg }) => {
    return (
      <div
        className={`w-1/3 text-center p-2 m-1 rounded cursor-pointer ${
          backgroundColor === bg && foregroundColor === fg
            ? "ring-2 ring-black"
            : "border"
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
          <Icon type="thing" className="mr-2" />
          <span>Colors</span>
        </div>
        <Icon type="close" />
      </div>
      <div className="flex">
        <div className="w-1/2 p-3 pr-1">
          <label htmlFor="backgroundColor" className="block mb-1">
            Background
          </label>
          <TextInput
            value={backgroundColor}
            setValue={setBackgroundColor}
            placeholder="#ffffff"
          />
        </div>
        <div className="w-1/2 p-3 pl-1">
          <label htmlFor="foregroundColor" className="block mb-1">
            Foreground
          </label>
          <TextInput
            value={foregroundColor}
            setValue={setForegroundColor}
            placeholder="#000000"
          />
        </div>
      </div>
      <div className="p-3 pt-0">
        <span className="block mb-1">Dark Presets</span>
        <div className="flex -mx-1">
          <Preset name="Black" bg="#000000" fg="#ffffff" />
          <Preset name="Blue" bg="#052c65" fg="#cfe2ff" />
          <Preset name="Green" bg="#0a3622" fg="#d1e7dd" />
        </div>
        <div className="flex -mx-1 mb-2">
          <Preset name="Mono" bg="#000000" fg="#1DB954" />
          <Preset name="Red" bg="#58151c" fg="#f8d7da" />
          <Preset name="Purple" bg="#301934" fg="#FFDBBB" />
        </div>
        <span className="block mb-1">Light Presets</span>
        <div className="flex -mx-1">
          <Preset name="White" bg="#ffffff" fg="#000000" />
          <Preset name="Blue" bg="#cfe2ff" fg="#052c65" />
          <Preset name="Green" bg="#d1e7dd" fg="#0a3622" />
        </div>
        <div className="flex -mx-1">
          <Preset name="Maroon" bg="#f0e9eb" fg="#7a0b45" />
          <Preset name="Red" bg="#f8d7da" fg="#58151c" />
          <Preset name="Purple" bg="#FFDBBB" fg="#301934" />
        </div>
      </div>
      <div className="flex justify-between p-3 border-t">
        <ButtonOutline onClick={onClose}>Close</ButtonOutline>
        <Button
          onClick={() => {
            handleUpdateColors(backgroundColor, foregroundColor);
            onClose();
          }}
        >
          Update Colors
        </Button>
      </div>
    </Modal>
  );
}

function handleUpdateColors(backgroundColor, foregroundColor) {
  document.documentElement.style.setProperty("--color-white", backgroundColor);
  document.documentElement.style.setProperty("--color-black", foregroundColor);
}
