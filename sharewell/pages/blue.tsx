// pages/blue.tsx
import React from 'react';
import Modal from '../components/Modal';
import { useModalStore } from '../store/modalStore';

const BluePage: React.FC = () => {
  const { setActiveModal } = useModalStore();

  return (
    <div className="min-h-screen bg-blue-500 text-white p-8">
      <h1 className="text-4xl">BLUE</h1>
      <button className="mt-4" onClick={() => setActiveModal(2)}>Open Modal 2</button>
      <button className="mt-4" onClick={() => setActiveModal(3)}>Open Modal 3</button>

      <Modal modalNumber={2}>
        <div>Content for Modal 2</div>
      </Modal>
      <Modal modalNumber={3}>
        <div>Content for Modal 3</div>
      </Modal>
    </div>
  );
};

export default BluePage;
