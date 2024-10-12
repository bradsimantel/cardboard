import { h } from "preact";

export default function TextInput({ value, setValue, placeholder }) {
  return (
    <input
      type="text"
      value={value}
      onInput={(e) => setValue(e.target.value)}
      placeholder={placeholder}
      className="bg-white rounded border w-full p-2 focus:outline-none focus:ring-1 focus:ring-black"
    />
  );
}
