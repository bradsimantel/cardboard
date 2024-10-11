import { h } from "preact";
import { useEffect, useRef } from "preact/hooks";
import Sortable from "sortablejs";
import Card from "./card";
import Icon from "./icon";

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
        <span>{title}</span>
        <div className="flex items-center">
          <Icon type="plus" />
          <Icon type="dots" />
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
