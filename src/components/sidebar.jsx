import { h, Fragment } from "preact";
import { useState } from "preact/hooks";
import { Link } from "preact-router/match";

import ColorsModal from "./colors-modal";
import Icon from "./icon";

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
              <Icon type="down" />
            </div>
            <div className="flex items-center p-1 rounded-lg cursor-pointer hover:bg-black hover:text-white group">
              <Icon type="search" height="18" className="mr-2" />
              <span>Search</span>
            </div>
            <div className="flex items-center p-1 rounded-lg cursor-pointer hover:bg-black hover:text-white group">
              <Icon type="bell" height="18" className="mr-2" />
              <span>Notifications</span>
            </div>
            <div className="flex items-center p-1 rounded-lg cursor-pointer hover:bg-black hover:text-white group">
              <Icon type="menu" height="18" className="mr-2" />
              <span>All Tasks</span>
            </div>
          </div>
          <div className="p-3">
            <div className="flex justify-between items-center mb-2">
              <small>BOARDS</small>
              <Icon type="plus" height="18" />
            </div>
            <Link
              href="/boards/1"
              activeClass="bg-black text-white group"
              className="flex items-center p-1 mb-0.5 rounded-lg cursor-pointer no-underline hover:bg-black hover:text-white group"
            >
              <Icon type="spa" height="18" className="mr-2" />
              <span>Design</span>
            </Link>
            <Link
              href="/boards/2"
              activeClass="bg-black text-white group"
              className="flex items-center p-1 mb-0.5 rounded-lg cursor-pointer no-underline hover:bg-black hover:text-white group"
            >
              <Icon type="leaf" height="18" className="mr-2" />
              <span>Green Initiatives</span>
            </Link>
            <Link
              href="/boards/3"
              activeClass="bg-black text-white group"
              className="flex items-center p-1 mb-0.5 rounded-lg cursor-pointer no-underline hover:bg-black hover:text-white group"
            >
              <Icon type="pyramid" height="18" className="mr-2" />
              <span>Active Development</span>
            </Link>
          </div>
        </div>
        <div className="p-3 border-t">
          <div
            className="flex items-center p-1 rounded-lg cursor-pointer hover:bg-black hover:text-white group"
            onClick={openModal}
          >
            <Icon type="tone" height="18" className="mr-2" />
            <span>Colors</span>
          </div>
          <div className="flex items-center p-1 rounded-lg cursor-pointer hover:bg-black hover:text-white group">
            <Icon type="cog" height="18" className="mr-2" />
            <span>Settings</span>
          </div>
        </div>
      </div>
      <ColorsModal isOpen={isModalOpen} onClose={closeModal} />
    </>
  );
}
