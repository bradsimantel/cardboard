import { h } from "preact";
import Modal from "./modal";
import Button from "./button";
import ButtonOutline from "./button-outline";
import Icon from "./icon";

export default function ModalUserSettings({ isOpen, onClose }) {
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <div className="p-3 border-b flex justify-between items-center">
        <div className="flex items-center">
          <span>Settings</span>
        </div>
        <Icon type="close" />
      </div>
      <div className="flex">User settings go here</div>
      <div className="flex justify-between p-3 border-t">
        <ButtonOutline onClick={onClose}>Close</ButtonOutline>
        <Button onClick={onClose}>Update</Button>
      </div>
    </Modal>
  );
}
