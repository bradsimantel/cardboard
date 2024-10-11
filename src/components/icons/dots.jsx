import { h } from "preact";

export default function DotsIcon({ height = 24, className = "" }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={height}
      height={height}
      viewBox="0 0 24 24"
      className={`fill-black group-[.bg-black]:fill-white group-hover:fill-white ${className}`}
    >
      <path d="M12 10c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm6 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zM6 10c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"></path>
    </svg>
  );
}
