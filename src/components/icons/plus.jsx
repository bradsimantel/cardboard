import { h } from "preact";

export default function PlusIcon({ height = 24, className = "" }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={height}
      height={height}
      viewBox="0 0 24 24"
      className={`fill-black group-[.bg-black]:fill-white group-hover:fill-white ${className}`}
    >
      <path d="M19 11h-6V5h-2v6H5v2h6v6h2v-6h6z"></path>
    </svg>
  );
}
