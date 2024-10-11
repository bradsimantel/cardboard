import { h, Fragment } from "preact";
import { useEffect, useState } from "preact/hooks";
import * as api from "../api";

import Sidebar from "../components/sidebar";
import Column from "../components/column";
import Icon from "../components/icon";

export default function Board({ boardId }) {
  const [loading, setLoading] = useState(true);
  const [board, setBoard] = useState({});

  useEffect(async () => {
    try {
      const board = await api.getBoard({ id: boardId });
      // const res = await fetch(`/api/boards/${boardId}`);
      // const board = await res.json();
      setBoard(board);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  }, [boardId]);

  if (loading) {
    return <div>Loading...</div>;
  }

  const { title, columns } = board;

  return (
    <div className="flex h-full overflow-hidden">
      <Sidebar />
      <div className="w-full flex flex-col h-full">
        <div className="flex justify-between border-b p-3 px-4">
          <div className="flex items-center">
            <Icon type="pyramid" height="18" className="mr-2" />
            <span>{title}</span>
          </div>
          <div className="flex items-center">
            <Icon type="star" height="20" className="mr-2" />
            <Icon type="lock" height="20" className="mr-2" />
            <Icon type="dots" height="24" />
          </div>
        </div>
        <div className="p-3 flex flex-grow overflow-auto">
          {columns.map((column, index) => (
            <Column key={index} title={column.title} tasks={column.tasks} />
          ))}
        </div>
      </div>
    </div>
  );
}
