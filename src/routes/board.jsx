import { h, Fragment } from "preact";
import { useEffect, useState } from "preact/hooks";
import * as api from "../api";

import Sidebar from "../components/sidebar";
import Column from "../components/column";
import LockIcon from "../components/icons/lock";
import StarIcon from "../components/icons/star";
import DotsIcon from "../components/icons/dots";
import PyramidIcon from "../components/icons/pyramid";

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
