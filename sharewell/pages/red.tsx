// pages/red.tsx
import React from 'react';
import Modal from '../components/Modal';
import { useModalStore } from '../store/modalStore';

const RedPage: React.FC = () => {
  const { setActiveModal } = useModalStore();

  return (
    <div className="min-h-screen bg-red-500 text-white p-8">
      <h1 className="text-4xl">RED</h1>
      <button className="mt-4" onClick={() => setActiveModal(1)}>Open Modal 1</button>
      <button className="mt-4" onClick={() => setActiveModal(3)}>Open Modal 3</button>

      <Modal modalNumber={1}>
        <div>Content for Modal 1</div>
      </Modal>
      <Modal modalNumber={3}>
        <div>Content for Modal 3</div>
      </Modal>
    </div>
  );
};

export default RedPage;
