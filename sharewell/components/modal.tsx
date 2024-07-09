// components/Modal.tsx
import React from 'react';
import { useModalStore } from '../store/modalStore'

const Modal: React.FC<{ modalNumber: number; children: React.ReactNode }> = ({ modalNumber, children }) => {
  const { activeModal, setActiveModal } = useModalStore();

  if (activeModal !== modalNumber) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50" onClick={() => setActiveModal(null)}>
      <div className="bg-white p-4 rounded" onClick={(e) => e.stopPropagation()}>
        {children}
        <button onClick={() => setActiveModal(null)}>Close</button>
      </div>
    </div>
  );
};

export default Modal;
