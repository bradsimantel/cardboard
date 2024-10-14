import { h } from "preact";
import { useEffect, useRef } from "preact/hooks";
import Sortable from "sortablejs";
import Card from "./card";
import Icon from "./icon";

export default function Column({ id, name, cards }) {
  const columnRef = useRef(null);

  useEffect(() => {
    if (columnRef.current) {
      new Sortable(columnRef.current, {
        group: "shared",
        animation: 150,
        forceFallback: true,
        fallbackClass: "dragged-item",
        ghostClass: "ghost-class",
        onEnd: (evt) => {
          const cardId = Number(evt.item.dataset.cardId);
          const sourceColumnId = id;
          const sourcePosition = evt.oldIndex;
          const destinationColumnId = Number(evt.to.dataset.columnId);
          const destinationPosition = evt.newIndex;

          fetch("/api/boards/1/reorder", {
            method: "PUT",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              cardId,
              sourceColumnId,
              sourcePosition,
              destinationColumnId,
              destinationPosition,
            }),
          });
        },
      });
    }
  }, [id]);

  return (
    <div className="w-1/3">
      <div className="p-3 pb-0 flex items-center justify-between">
        <span>{name}</span>
        <div className="flex items-center">
          <Icon type="plus" />
          <Icon type="dots" />
        </div>
      </div>
      <div className="column" ref={columnRef} data-column-id={id}>
        {cards.map((card) => (
          <Card
            key={card.id}
            id={card.id}
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
