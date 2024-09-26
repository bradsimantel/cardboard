import { html, useEffect, useState } from "../lib/preact-bundle.js";

import * as api from "../api.js";

import Sidebar from "./sidebar.js";
import Column from "./column.js";
import LockIcon from "./icons/lock.js";
import StarIcon from "./icons/star.js";
import DotsIcon from "./icons/dots.js";
import PyramidIcon from "./icons/pyramid.js";

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
    return html`<div>Loading...</div>`;
  }

  const { title, columns } = board;

  return html`
    <${Sidebar} />
    <div class="w-100">
      <div class="flex justify-content-between border-bottom p-3 px-4">
        <div class="flex align-items-center">
          <${PyramidIcon} height="18" class="me-2" />
          <span>${title}</span>
        </div>
        <div class="flex align-items-center">
          <${StarIcon} height="20" class="me-2" />
          <${LockIcon} height="20" class="me-2" />
          <${DotsIcon} height="24" />
        </div>
      </div>
      <div class="p-3 flex">
        ${columns.map(
          (column, index) => html`
            <${Column}
              key=${index}
              title=${column.title}
              tasks=${column.tasks}
            />
          `
        )}
      </div>
    </div>
  `;
}
