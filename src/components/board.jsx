import { h, Fragment } from "preact";
import { useEffect, useState } from "preact/hooks";
import * as api from "../api";

import Sidebar from "./sidebar";
import Column from "./column";
import LockIcon from "./icons/lock";
import StarIcon from "./icons/star";
import DotsIcon from "./icons/dots";
import PyramidIcon from "./icons/pyramid";

export default function Board({ boardId }) {
  const [loading, setLoading] = useState(true);
  const [board, setBoard] = useState({});

  useEffect(async () => {
    try {
      const board = await api.getBoard({ id: boardId });
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
    <>
      <Sidebar />
      <div className="w-100">
        <div className="flex justify-content-between border-bottom p-3 px-4">
          <div className="flex align-items-center">
            <PyramidIcon height="18" className="me-2" />
            <span>{title}</span>
          </div>
          <div className="flex align-items-center">
            <StarIcon height="20" className="me-2" />
            <LockIcon height="20" className="me-2" />
            <DotsIcon height="24" />
          </div>
        </div>
        <div className="p-3 flex">
          {columns.map((column, index) => (
            <Column key={index} title={column.title} tasks={column.tasks} />
          ))}
        </div>
      </div>
    </>
  );
}
