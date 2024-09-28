import { h } from "preact";
import { useEffect, useRef } from "preact/hooks";
import Sortable from "sortablejs";
import Card from "./card";
import PlusIcon from "./icons/plus";
import DotsIcon from "./icons/dots";

export default function Column({ title, tasks }) {
  const columnRef = useRef(null);

  useEffect(() => {
    if (columnRef.current) {
      new Sortable(columnRef.current, {
        group: "shared",
        animation: 150,
        forceFallback: true,
        fallbackClass: "dragged-item",
        ghostClass: "ghost-class",
      });
    }
  }, []);

  return (
    <div className="w-33">
      <div className="p-3 pb-0 flex align-items-center justify-content-between">
        <div className="flex">
          <ColumnIcon title={title} />
          <span>{title}</span>
        </div>
        <div className="flex">
          <PlusIcon alt="plus" />
          <DotsIcon alt="dots" />
        </div>
      </div>
      <div className="column" ref={columnRef}>
        {tasks.map((task) => (
          <Card
            category={task.category}
            title={task.title}
            assignee={task.assignee}
            tags={task.tags}
            comments={task.comments}
          />
        ))}
      </div>
    </div>
  );
}

function ColumnIcon({ title }) {
  switch (title) {
    case "To Do":
      return <span className="circle me-2 border-dashed"></span>;
    case "In Progress":
      return <span className="circle me-2"></span>;
    case "Done":
      return <span className="circle me-2 bg-black"></span>;
    default:
      return null;
  }
}
