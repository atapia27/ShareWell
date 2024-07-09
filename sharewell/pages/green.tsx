// pages/green.tsx
import React from 'react';
import Modal from '../components/modal'
import { useModalStore } from '../store/modalStore';

const GreenPage: React.FC = () => {
  const { setActiveModal } = useModalStore();

  return (
    <div className="min-h-screen bg-green-500 text-white p-8">
      <h1 className="text-4xl">GREEN</h1>
      <button className="mt-4" onClick={() => setActiveModal(1)}>Open Modal 1</button>
      <button className="mt-4" onClick={() => setActiveModal(2)}>Open Modal 2</button>

      <Modal modalNumber={1}>
        <div>Content for Modal 1</div>
      </Modal>
      <Modal modalNumber={2}>
        <div>Content for Modal 2</div>
      </Modal>
    </div>
  );
};

export default GreenPage;
