import { h } from "preact";

export default function Input({ value, setValue, placeholder, type = "text" }) {
  return (
    <input
      type={type}
      value={value}
      onInput={(e) => setValue(e.target.value)}
      placeholder={placeholder}
      className="bg-white rounded border w-full p-2 focus:outline-none focus:ring-1 focus:ring-black"
    />
  );
}
