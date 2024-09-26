import { html } from "../lib/preact-bundle.js";

import Sidebar from "./sidebar.js";
import Column from "./column.js";
import LockIcon from "./icons/lock.js";
import StarIcon from "./icons/star.js";
import DotsIcon from "./icons/dots.js";
import PyramidIcon from "./icons/pyramid.js";

export default function Everything({ icon, title, tasks }) {
  return html`
    <${Sidebar} />
    <div className="w-100">
      <div className="flex justify-content-between border-bottom p-3 px-4">
        <div className="flex align-items-center">
          <${PyramidIcon} height="18" className="me-2" />
          <span>Active Development</span>
        </div>
        <div className="flex align-items-center">
          <${StarIcon} height="20" className="me-2" />
          <${LockIcon} height="20" className="me-2" />
          <${DotsIcon} height="24" />
        </div>
      </div>
      <div className="p-3 flex">
        <${Column} title="To Do" tasks=${tasks.filter((t) => t.column === 0)} />
        <${Column}
          title="In Progress"
          tasks=${tasks.filter((t) => t.column === 1)}
        />
        <${Column} title="Done" tasks=${tasks.filter((t) => t.column === 2)} />
      </div>
    </div>
  `;
}
