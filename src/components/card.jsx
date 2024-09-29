import { h } from "preact";
import TagIcon from "./icons/tag";
import PaperclipIcon from "./icons/paperclip";
import CommentIcon from "./icons/comment";

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
  return (
    <div className="card border cursor-pointer rounded-lg p-2 m-3 bg-white">
      <div>
        <small>{category.toUpperCase()}</small>
      </div>
      <div className="my-2">{title}</div>
      <div className="flex items-center">
        <div className="circle mr-2 bg-black text-white flex items-center justify-center w-8 h-8 rounded-full">
          <small>{initials}</small>
        </div>
        <div className="flex items-center mr-2">
          <TagIcon height="18" />
          <span className="ml-1">{tags.length}</span>
        </div>
        <div className="flex items-center mr-2">
          <PaperclipIcon height="18" />
          <span className="ml-1">{attachments.length}</span>
        </div>
        <div className="flex items-center">
          <CommentIcon height="18" />
          <span className="ml-1">{comments.length}</span>
        </div>
      </div>
    </div>
  );
}
