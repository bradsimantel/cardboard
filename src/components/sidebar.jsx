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
      <div
        className="flex flex-column justify-content-between border-right"
        style={{ width: "20rem" }}
      >
        <div>
          <div className="p-3 border-bottom">
            <div className="flex align-items-center justify-content-between mb-1 py-1">
              <div className="flex">
                <div className="circle bg-black me-2">
                  <small>PI</small>
                </div>
                <span>Playful Industries</span>
              </div>
              <DownIcon />
            </div>
            <div className="flex align-items-center p-1 rounded cursor-pointer inner-border-hover">
              <SearchIcon height="18" className="me-2" />
              <span>Search</span>
            </div>
            <div className="flex align-items-center p-1 rounded cursor-pointer inner-border-hover">
              <BellIcon height="18" className="me-2" />
              <span>Notifications</span>
            </div>
            <div className="flex align-items-center p-1 rounded cursor-pointer inner-border-hover">
              <MenuIcon height="18" className="me-2" />
              <span>All Tasks</span>
            </div>
          </div>
          <div className="p-3">
            <div className="flex justify-content-between align-items-center mb-2">
              <small>BOARDS</small>
              <PlusIcon height="18" />
            </div>
            <Link
              href="/boards/1"
              activeClass="bg-black"
              className="flex align-items-center p-1 rounded cursor-pointer text-decoration-none"
            >
              <SpaIcon height="18" className="me-2" />
              <span>Design</span>
            </Link>
            <Link
              href="/boards/2"
              activeClass="bg-black"
              className="flex align-items-center p-1 rounded cursor-pointer text-decoration-none"
            >
              <LeafIcon height="18" className="me-2" />
              <span>Green Initiatives</span>
            </Link>
            <Link
              href="/boards/3"
              activeClass="bg-black"
              className="flex align-items-center p-1 rounded cursor-pointer text-decoration-none"
            >
              <PyramidIcon height="18" className="me-2" />
              <span>Active Development</span>
            </Link>
          </div>
        </div>
        <div className="p-3 border-top"></div>
        <div
          className="flex align-items-center p-1 rounded cursor-pointer inner-border-hover"
          onClick={openModal}
        >
          <ToneIcon height="18" className="me-2" />
          <span>Colors</span>
        </div>
        <div className="flex align-items-center p-1 rounded cursor-pointer inner-border-hover">
          <CogIcon height="18" className="me-2" />
          <span>Settings</span>
        </div>
      </div>
      <ColorsModal isOpen={isModalOpen} onClose={closeModal} />
    </>
  );
}
