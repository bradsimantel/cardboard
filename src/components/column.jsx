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
    <div className="w-1/3">
      <div className="p-3 pb-0 flex items-center justify-between">
        <div className="flex items-center">
          <ColumnIcon title={title} />
          <span>{title}</span>
        </div>
        <div className="flex items-center">
          <PlusIcon alt="plus" />
          <DotsIcon alt="dots" />
        </div>
      </div>
      <div className="column" ref={columnRef}>
        {tasks.map((task) => (
          <Card
            key={task.title}
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
      return (
        <span className="circle mr-2 border-dashed border-2 border-gray-400"></span>
      );
    case "In Progress":
      return <span className="circle mr-2 border-2 border-gray-400"></span>;
    case "Done":
      return <span className="circle mr-2 bg-black"></span>;
    default:
      return null;
  }
}
