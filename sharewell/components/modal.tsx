// components/Modal.tsx
import React from 'react';
import { useModalStore } from '../store/modalStore';
import ModalComplete from './ModalParts/ModalComplete';


const Modal: React.FC<{ modalNumber: number; children: React.ReactNode }> = ({ modalNumber, children }) => {
  const { activeModal, setActiveModal } = useModalStore();

  if (activeModal !== modalNumber) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50" onClick={() => setActiveModal(null)}>
      <div
        className="flex flex-col items-center bg-white"
        onClick={(e) => e.stopPropagation()}
      >
        <ModalComplete />

      </div>
    </div>
  );
};

export default Modal;
