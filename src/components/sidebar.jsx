import { h, Fragment } from "preact";
import { useState } from "preact/hooks";
import { Link } from "preact-router/match";

import ColorsModal from "./colors-modal";
import DownIcon from "./icons/down";
import SearchIcon from "./icons/search";
import BellIcon from "./icons/bell";
import MenuIcon from "./icons/menu";
import PlusIcon from "./icons/plus";
import SpaIcon from "./icons/spa";
import LeafIcon from "./icons/leaf";
import PyramidIcon from "./icons/pyramid";
import ToneIcon from "./icons/tone";
import CogIcon from "./icons/cog";

export default function Sidebar() {
  const [isModalOpen, setModalOpen] = useState(false);

  const openModal = () => setModalOpen(true);
  const closeModal = () => setModalOpen(false);

  return (
    <>
      <div className="flex flex-col justify-between border-r w-80">
        <div>
          <div className="p-3 border-b">
            <div className="flex items-center justify-between mb-1 py-1">
              <div className="flex items-center">
                <div className="w-8 h-8 rounded-full bg-black text-white flex items-center justify-center mr-2">
                  <small>PI</small>
                </div>
                <span>Playful Industries</span>
              </div>
              <DownIcon />
            </div>
            <div className="flex items-center p-1 rounded-lg cursor-pointer hover:bg-black hover:text-white group">
              <SearchIcon height="18" className="mr-2" />
              <span>Search</span>
            </div>
            <div className="flex items-center p-1 rounded-lg cursor-pointer hover:bg-black hover:text-white group">
              <BellIcon height="18" className="mr-2" />
              <span>Notifications</span>
            </div>
            <div className="flex items-center p-1 rounded-lg cursor-pointer hover:bg-black hover:text-white group">
              <MenuIcon height="18" className="mr-2" />
              <span>All Tasks</span>
            </div>
          </div>
          <div className="p-3">
            <div className="flex justify-between items-center mb-2">
              <small>BOARDS</small>
              <PlusIcon height="18" />
            </div>
            <Link
              href="/boards/1"
              activeClass="bg-black text-white group"
              className="flex items-center p-1 mb-0.5 rounded-lg cursor-pointer no-underline hover:bg-black hover:text-white group"
            >
              <SpaIcon height="18" className="mr-2" />
              <span>Design</span>
            </Link>
            <Link
              href="/boards/2"
              activeClass="bg-black text-white group"
              className="flex items-center p-1 mb-0.5 rounded-lg cursor-pointer no-underline hover:bg-black hover:text-white group"
            >
              <LeafIcon height="18" className="mr-2" />
              <span>Green Initiatives</span>
            </Link>
            <Link
              href="/boards/3"
              activeClass="bg-black text-white group"
              className="flex items-center p-1 mb-0.5 rounded-lg cursor-pointer no-underline hover:bg-black hover:text-white group"
            >
              <PyramidIcon height="18" className="mr-2" />
              <span>Active Development</span>
            </Link>
          </div>
        </div>
        <div className="p-3 border-t">
          <div
            className="flex items-center p-1 rounded-lg cursor-pointer hover:bg-black hover:text-white group"
            onClick={openModal}
          >
            <ToneIcon height="18" className="mr-2" />
            <span>Colors</span>
          </div>
          <div className="flex items-center p-1 rounded-lg cursor-pointer hover:bg-black hover:text-white group">
            <CogIcon height="18" className="mr-2" />
            <span>Settings</span>
          </div>
        </div>
      </div>
      <ColorsModal isOpen={isModalOpen} onClose={closeModal} />
    </>
  );
}
