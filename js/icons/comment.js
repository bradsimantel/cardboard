import { html } from "https://unpkg.com/htm/preact/standalone.module.js";

export default function CommentIcon({ height = 24, className = "" }) {
  return html`<svg
    xmlns="http://www.w3.org/2000/svg"
    width="${height}"
    height="${height}"
    viewBox="0 0 24 24"
    className="icon ${className}"
  >
    <path
      d="M20 2H4c-1.103 0-2 .897-2 2v18l5.333-4H20c1.103 0 2-.897 2-2V4c0-1.103-.897-2-2-2zm0 14H6.667L4 18V4h16v12z"
    ></path>
  </svg>`;
}
