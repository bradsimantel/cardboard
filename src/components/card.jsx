import { h } from "preact";
import Icon from "./icon";

export default function Card({
  id = null,
  title = "",
  category = {},
  assignee = {},
  tags = [],
  comments = [],
  attachments = [],
}) {
  const initials = assignee
    ? assignee.name
        .split(" ")
        .map((n) => n[0])
        .join("")
        .slice(0, 2)
        .toUpperCase()
    : "";
  return (
    <div
      className="card border cursor-pointer rounded-lg p-2 m-3 bg-white"
      data-card-id={id}
    >
      <div>
        <small>{category.name.toUpperCase()}</small>
      </div>
      <div className="my-2">{title}</div>
      <div className="flex items-center">
        <div className="mr-2 bg-black text-white flex items-center justify-center w-6 h-6 rounded-full">
          <small>{initials}</small>
        </div>
        <div className="flex items-center mr-2">
          <Icon type="tag" height="18" />
          <span className="ml-1">{tags.length}</span>
        </div>
        <div className="flex items-center mr-2">
          <Icon type="paperclip" height="18" />
          <span className="ml-1">{attachments.length}</span>
        </div>
        <div className="flex items-center">
          <Icon type="comment" height="18" />
          <span className="ml-1">{comments.length}</span>
        </div>
      </div>
    </div>
  );
}
