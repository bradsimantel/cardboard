import { html } from "../../lib/preact-bundle.js";

export default function MenuIcon({ height = 24, className = "" }) {
  return html`
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="${height}"
      height="${height}"
      viewBox="0 0 24 24"
      className="icon ${className}"
    >
      <path d="M4 6h16v2H4zm0 5h16v2H4zm0 5h16v2H4z"></path>
    </svg>
  `;
}
