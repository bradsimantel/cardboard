import { html } from "../lib/preact.js";

export default function DownIcon({ height = 24, className = "" }) {
  return html`
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="${height}"
      height="${height}"
      viewBox="0 0 24 24"
      className="icon ${className}"
    >
      <path
        d="M16.293 9.293 12 13.586 7.707 9.293l-1.414 1.414L12 16.414l5.707-5.707z"
      ></path>
    </svg>
  `;
}
