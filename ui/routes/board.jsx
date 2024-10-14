import { h, Fragment } from "preact";
import { useEffect, useState } from "preact/hooks";

import Sidebar from "../components/sidebar";
import Column from "../components/column";
import Icon from "../components/icon";
import Spinner from "../components/spinner";

export default function Board({ boardId }) {
  const [loading, setLoading] = useState(true);
  const [board, setBoard] = useState({});
  const [boards, setBoards] = useState([]);

  useEffect(async () => {
    try {
      const [boardsFetch, boardFetch] = await Promise.all([
        fetch("/api/boards"),
        fetch(`/api/boards/${boardId}/full`),
      ]);
      const boards = await boardsFetch.json();
      const board = await boardFetch.json();
      setBoards(boards);
      setBoard(board);
      setLoading(false);
    } catch (error) {
      console.error(error);
    }
  }, [boardId]);

  if (loading) {
    return (
      <div className="flex items-center justify-center h-full">
        <Spinner />
      </div>
    );
  } else {
    return (
      <div className="flex h-full overflow-hidden">
        <Sidebar boards={boards} />
        <div className="w-full flex flex-col h-full">
          <div className="flex justify-between border-b p-3 px-4">
            <div className="flex items-center">
              <Icon type={board.icon} height="18" className="mr-2" />
              <span>{board.name}</span>
            </div>
            <div className="flex items-center">
              <Icon type="star" height="20" className="mr-2" />
              <Icon type="lock" height="20" className="mr-2" />
              <Icon type="dots" height="24" />
            </div>
          </div>
          <div className="p-3 flex flex-grow overflow-auto">
            {board.columns.map((column) => (
              <Column
                key={column.id}
                id={column.id}
                name={column.name}
                cards={column.cards}
              />
            ))}
          </div>
        </div>
      </div>
    );
  }
}
