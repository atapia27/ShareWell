// components/Modal.tsx
import React from 'react';
import { useModalStore } from '../store/modalStore';
import ModalHeader from './ModalParts/ModalHeader';
import ModalBodyOne from './ModalParts/ModalBodyOne';
import ModalBodyTwo from './ModalParts/ModalBodyTwo';
import ModalFooter from './ModalParts/ModalFooter';

interface ModalProps {
  modalNumber: number;
}

const Modal: React.FC<ModalProps> = ({ modalNumber }) => {

  const { activeModal, setActiveModal } = useModalStore();

  ///////////////////////////////////////// this can be moved to a helper file ?/////////////////////////////////////////
  // If the active modal is not the current modal, return null
  if (activeModal !== modalNumber) return null;

  // Check if the variant is valid to avoid type errors
  const isValidVariant = (num: number): num is 1 | 2 | 3 => {
    return [1, 2, 3].includes(num);
  };

  // Default to modal 1 if the number is invalid
  const modalVariant = isValidVariant(modalNumber) ? modalNumber : 1; 
  ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

  
  return (
    <div
      className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50"
      onClick={() => setActiveModal(null)}
    >
      {/* 
        Consider Font Size when reading from different devices

          Mobile: 
          - Width: 90vw
          - max-height: 80vh
          - This will make the modal scrollable if the content is too long, and will prevent it from taking up the whole screen
          - user can exit popup comfortably
          - e.stopPropagation() is used to prevent the modal from closing when clicking inside it
  
          Tablet:
          - Width: 60vw
          - max-height: 80vh
          - Less width to make it more readable, and looks less like a virus lol

          Desktop:
          - Width: 50vw
          - max-height: 80vh
          - Less width to make it more readable, and looks less like a virus lol
      */}
      <div
        className=" max-h-[80vh] w-[90vw] sm:w-[60vw] md:w-[50vw] flex flex-col items-center overflow-hidden rounded-xl bg-white"
        onClick={(e) => e.stopPropagation()}
      >
        <ModalHeader variant={modalVariant} />        
        <ModalBodyOne variant={modalVariant} />
        <ModalBodyTwo variant={modalVariant}/>
        <ModalFooter variant={modalVariant}/>
      </div>
    </div>
  );
};

export default Modal;