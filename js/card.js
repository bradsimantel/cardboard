import { html } from "./lib/preact.js";
import TagIcon from "./icons/tag.js";
import PaperclipIcon from "./icons/paperclip.js";
import CommentIcon from "./icons/comment.js";

export default function Card({
  category = "",
  title = "",
  assignee = "",
  tags = [],
  comments = [],
  attachments = [],
}) {
  const initials = assignee
    .split(" ")
    .map((n) => n[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();

  return html`
    <div class="card border cursor-pointer rounded p-2 m-3 bg-white">
      <div>
        <small>${category.toUpperCase()}</small>
      </div>
      <div class="my-2">${title}</div>
      <div class="flex align-items-center">
        <div class="circle me-2 bg-black"><small>${initials}</small></div>
        <div class="flex align-items-center me-2">
          <${TagIcon} height="18" />
          <span>1</span>
        </div>
        <div class="flex align-items-center">
          <${PaperclipIcon} height="18" />
          <span>1</span>
        </div>
      </div>
    </div>
  `;
}
