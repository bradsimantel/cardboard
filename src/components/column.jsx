import { h } from "preact";
import { useEffect, useRef } from "preact/hooks";
import Sortable from "sortablejs";
import Card from "./card";
import Icon from "./icon";

export default function Column({ name, cards }) {
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
        <span>{name}</span>
        <div className="flex items-center">
          <Icon type="plus" />
          <Icon type="dots" />
        </div>
      </div>
      <div className="column" ref={columnRef}>
        {cards.map((card) => (
          <Card
            key={card.name}
            category={card.category}
            title={card.name}
            assignee={card.assignee}
            tags={card.tags}
            comments={card.comments}
          />
        ))}
      </div>
    </div>
  );
}
