import { html, useEffect, useRef } from "../lib/preact-bundle.js";
import Sortable from "../lib/sortable.js";
import Card from "./card.js";
import PlusIcon from "./icons/plus.js";
import DotsIcon from "./icons/dots.js";

export default function Column({ title, tasks }) {
  const columnRef = useRef(null);

  useEffect(() => {
    if (columnRef.current) {
      new Sortable(columnRef.current, {
        group: "shared",
        animation: 0,
        forceFallback: true,
        fallbackClass: "dragged-item",
        ghostClass: "ghost-class",
      });
    }
  }, []);

  return html`
    <div className="w-33">
      <div className="p-3 pb-0 flex align-items-center justify-content-between">
        <div className="flex">
          <${ColumnIcon} title=${title} />
          <span>${title}</span>
        </div>
        <div className="flex">
          <${PlusIcon} alt="plus" />
          <${DotsIcon} alt="dots" />
        </div>
      </div>
      <div className="column" ref=${columnRef}>
        ${tasks.map(
          (task) => html`
            <${Card}
              category=${task.category}
              title=${task.title}
              assignee=${task.assignee}
              tags=${task.tags}
              comments=${task.comments}
            />
          `
        )}
      </div>
    </div>
  `;
}

function ColumnIcon({ title }) {
  switch (title) {
    case "To Do":
      return html`<span className="circle me-2 border-dashed"></span>`;
    case "In Progress":
      return html`<span className="circle me-2"></span>`;
    case "Done":
      return html`<span className="circle me-2 bg-black"></span>`;
  }
}
