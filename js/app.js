import { html } from "https://unpkg.com/htm/preact/standalone.module.js";

import Sidebar from "./sidebar.js";
import Column from "./column.js";

import DownIcon from "./icons/down.js";
import PyramidIcon from "./icons/pyramid.js";

export default function App() {
  const tasks = [
    {
      column: 0,
      category: "bug fixes",
      title: "Fix the bugs found in log-in process",
      assignee: "Anthony Hobday",
    },
    {
      column: 0,
      category: "UX IMPROVEMENTS",
      title: "Improve scrolling performance in large boards",
      assignee: "Anthony Hobday",
      tags: 2,
      comments: 4,
    },
    {
      column: 0,
      category: "CARDS",
      title: "Custom fields in cards",
      assignee: "Anthony Hobday",
      tags: 1,
      comments: 8,
    },
    {
      column: 1,
      category: "ONBOARDING",
      title: "Improve signup flow",
      assignee: "Anthony Hobday",
      tags: 2,
      comments: 4,
    },
    {
      column: 1,
      category: "DOCUMENTS",
      title: "Add initial version of documents to app",
      assignee: "Anthony Hobday",
      tags: 2,
      comments: 4,
    },
    {
      column: 2,
      category: "COLOUR",
      title: "Remove all colour from the app",
      assignee: "Anthony Hobday",
      tags: 2,
      comments: 4,
    },
    {
      column: 2,
      category: "TAGS",
      title: "Follow up work on tags",
      assignee: "Anthony Hobday",
      tags: 2,
      comments: 4,
    },
    {
      column: 2,
      category: "CARD DESCRIPTIONS",
      title:
        "Improve editing features in card descriptions so text can be richer than before",
      assignee: "Anthony Hobday",
      tags: 2,
      comments: 4,
    },
    {
      column: 2,
      category: "COLOUR",
      title: "Found some more colour, so remove that too",
      assignee: "Anthony Hobday",
      tags: 2,
      comments: 4,
    },
  ];

  return html`
    <${Sidebar} />
    <div class="w-100">
      <div class="flex justify-content-between border-bottom p-3 px-4">
        <div class="flex align-items-center">
          <${PyramidIcon} height="18" className="me-2" />
          <span>Active Development</span>
        </div>
        <div class="flex align-items-center">
          <span>Settings</span>
          <${DownIcon} />
        </div>
      </div>
      <div class="p-3 flex">
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
