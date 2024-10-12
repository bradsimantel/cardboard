import { h } from "preact";

export default function ButtonOutline({ children, onClick }) {
  return (
    <button
      onClick={onClick}
      className="bg-white text-black p-2 border rounded-lg cursor-pointer"
    >
      {children}
    </button>
  );
}
