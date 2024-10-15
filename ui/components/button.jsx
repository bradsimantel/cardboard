import { h } from "preact";

export default function Button({ children, onClick, className, ...props }) {
  return (
    <button
      onClick={onClick}
      className={`bg-black text-white p-2 rounded-lg cursor-pointer ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}
