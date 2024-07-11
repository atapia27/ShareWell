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

  // If the active modal is not the current modal, return null
  if (activeModal !== modalNumber) return null;

  // Check if the variant is valid to avoid type errors
  const isValidVariant = (num: number): num is 1 | 2 | 3 => {
    return [1, 2, 3].includes(num);
  };

  // Default to modal 1 if the number is invalid
  const modalVariant = isValidVariant(modalNumber) ? modalNumber : 1; 

  return (
    <div
      className="rounded-xl fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50"
      onClick={() => setActiveModal(null)}
    >
      <div
        className="flex flex-col items-center w-[640px] overflow-hidden rounded-xl bg-white"
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