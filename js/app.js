import { html } from "https://unpkg.com/htm/preact/standalone.module.js";

import Card from "./card.js";

import DownIcon from "./icons/down.js";
import SearchIcon from "./icons/search.js";
import BellIcon from "./icons/bell.js";
import MenuIcon from "./icons/menu.js";
import PlusIcon from "./icons/plus.js";
import SpaIcon from "./icons/spa.js";
import LeafIcon from "./icons/leaf.js";
import PyramidIcon from "./icons/pyramid.js";
import TagIcon from "./icons/tag.js";
import PaperclipIcon from "./icons/paperlcip.js";
import CommentIcon from "./icons/comment.js";
import DotsIcon from "./icons/dots.js";

export default function App() {
  return html`<div class="border-right" style="width: 20rem">
      <div class="p-3 border-bottom">
        <div class="flex align-items-center justify-content-between mb-1 py-1">
          <div class="flex">
            <div class="circle bg-black me-2">
              <small>PI</small>
            </div>
            <span>Playful Industries</span>
          </div>
          <${DownIcon} />
        </div>
        <div class="flex align-items-center p-1">
          <${SearchIcon} height="18" className="me-2" />
          <span>Search</span>
        </div>
        <div class="flex align-items-center p-1">
          <${BellIcon} height="18" className="me-2" />
          <span>Notifications</span>
        </div>
        <div class="flex align-items-center p-1">
          <${MenuIcon} height="18" className="me-2" />
          <span>All Tasks</span>
        </div>
      </div>
      <div class="p-3">
        <div class="flex justify-content-between align-items-center mb-2">
          <small>BOARDS</small>
          <${PlusIcon} height="18" />
        </div>
        <div class="flex align-items-center p-1">
          <${SpaIcon} height="18" className="me-2" />
          <span>Design</span>
        </div>
        <div class="flex align-items-center p-1">
          <${LeafIcon} height="18" className="me-2" />
          <span>Green Initiatives</span>
        </div>
        <div class="bg-black rounded flex align-items-center p-1">
          <${PyramidIcon} height="18" className="me-2" invertColor="true" />
          <span>Active Development</span>
        </div>
      </div>
    </div>
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
        <div class="w-33">
          <div class="p-3 pb-0 flex align-items-center justify-content-between">
            <div class="flex">
              <span class="circle me-2 border-dashed"></span>
              <span>To Do</span>
            </div>
            <div class="flex">
              <${PlusIcon} alt="plus" />
              <${DotsIcon} alt="dots" />
            </div>
          </div>
          <div class="column">
            <${Card}
              category="bug fixes"
              title="Fix the bugs found in log-in process"
              assignee="Anthony Hobday"
            />
            <${Card}
              category="UX IMPROVEMENTS"
              title="Improve scrolling performance in large boards"
              assignee="Anthony Hobday"
              tags="2"
              comments="4"
            />
            <${Card}
              category="CARDS"
              title="Custom fields in cards"
              assignee="Anthony Hobday"
              tags="1"
              comments="8"
            />
          </div>
        </div>
        <div class="w-33">
          <div class="p-3 pb-0 flex align-items-center justify-content-between">
            <div class="flex">
              <span class="circle me-2"></span>
              <span>In Progress</span>
            </div>
            <div class="flex">
              <${PlusIcon} alt="plus" />
              <${DotsIcon} alt="dots" />
            </div>
          </div>
          <div class="column">
            <${Card}
              category="ONBOARDING"
              title="Improve signup flow"
              assignee="Anthony Hobday"
              tags="2"
              comments="4"
            />
            <${Card}
              category="DOCUMENTS"
              title="Add initial version of documents to app"
              assignee="Anthony Hobday"
              tags="2"
              comments="4"
            />
          </div>
        </div>
        <div class="w-33">
          <div class="p-3 pb-0 flex align-items-center justify-content-between">
            <div class="flex">
              <span class="circle me-2 bg-black"></span>
              <span>Done</span>
            </div>
            <div class="flex">
              <${PlusIcon} alt="plus" />
              <${DotsIcon} alt="dots" />
            </div>
          </div>
          <div class="column">
            <${Card}
              category="COLOUR"
              title="Remove all colour from the app"
              assignee="Anthony Hobday"
              tags="2"
              comments="4"
            />
            <${Card}
              category="TAGS"
              title="Follow up work on tags"
              assignee="Anthony Hobday"
              tags="2"
              comments="4"
            />
            <${Card}
              category="CARD DESCRIPTIONS"
              title="Improve editing features in card descriptions so text can be richer than before"
              assignee="Anthony Hobday"
              tags="2"
              comments="4"
            />
            <${Card}
              category="COLOUR"
              title="Found some more colour, so remove that too"
              assignee="Anthony Hobday"
              tags="2"
              comments="4"
            />
          </div>
        </div>
      </div>
    </div> `;
}
