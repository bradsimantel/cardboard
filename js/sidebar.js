import { html, useState } from "./lib/preact.js";

import ColorsModal from "./colors-modal.js";

import DownIcon from "./icons/down.js";
import SearchIcon from "./icons/search.js";
import BellIcon from "./icons/bell.js";
import MenuIcon from "./icons/menu.js";
import PlusIcon from "./icons/plus.js";
import SpaIcon from "./icons/spa.js";
import LeafIcon from "./icons/leaf.js";
import PyramidIcon from "./icons/pyramid.js";
import ToneIcon from "./icons/tone.js";
import CogIcon from "./icons/cog.js";

export default function Sidebar() {
  const [isModalOpen, setModalOpen] = useState(false);

  const openModal = () => setModalOpen(true);
  const closeModal = () => setModalOpen(false);

  return html`
    <div
      class="flex flex-column justify-content-between border-right"
      style="width: 20rem"
    >
      <div>
        <div class="p-3 border-bottom">
          <div
            class="flex align-items-center justify-content-between mb-1 py-1"
          >
            <div class="flex">
              <div class="circle bg-black me-2">
                <small>PI</small>
              </div>
              <span>Playful Industries</span>
            </div>
            <${DownIcon} />
          </div>
          <div
            class="flex align-items-center p-1 rounded cursor-pointer inner-border-hover"
          >
            <${SearchIcon} height="18" className="me-2" />
            <span>Search</span>
          </div>
          <div
            class="flex align-items-center p-1 rounded cursor-pointer inner-border-hover"
          >
            <${BellIcon} height="18" className="me-2" />
            <span>Notifications</span>
          </div>
          <div
            class="flex align-items-center p-1 rounded cursor-pointer inner-border-hover"
          >
            <${MenuIcon} height="18" className="me-2" />
            <span>All Tasks</span>
          </div>
        </div>
        <div class="p-3">
          <div class="flex justify-content-between align-items-center mb-2">
            <small>BOARDS</small>
            <${PlusIcon} height="18" />
          </div>
          <div
            class="flex align-items-center p-1 rounded cursor-pointer inner-border-hover"
          >
            <${SpaIcon} height="18" className="me-2" />
            <span>Design</span>
          </div>
          <div
            class="flex align-items-center p-1 rounded cursor-pointer inner-border-hover"
          >
            <${LeafIcon} height="18" className="me-2" />
            <span>Green Initiatives</span>
          </div>
          <div
            class="bg-black rounded flex align-items-center p-1 rounded cursor-pointer inner-border-hover"
          >
            <${PyramidIcon} height="18" className="me-2" invertColor="true" />
            <span>Active Development</span>
          </div>
        </div>
      </div>
      <div class="p-3 border-top">
        <div
          class="flex align-items-center p-1 rounded cursor-pointer inner-border-hover rounded cursor-pointer inner-border-hover"
          onClick=${openModal}
        >
          <${ToneIcon} height="18" className="me-2" />
          <span>Colors</span>
        </div>
        <div
          class="flex align-items-center p-1 rounded cursor-pointer inner-border-hover"
        >
          <${CogIcon} height="18" className="me-2" />
          <span>Settings</span>
        </div>
      </div>
      <${ColorsModal} isOpen=${isModalOpen} onClose=${closeModal} />
    </div>
  `;
}
