import { useModalStore } from '../store/modalStore';
import Modal from './Modal';
import React from 'react';

export const ButtonOptionOne: React.FC<{ modalNumber: number }> = ({ modalNumber }) => {
    const { setActiveModal } = useModalStore();

    return (
        <>
            <button className="bg-pink-500 hover:bg-pink-700 text-white font-bold py-2 px-4 mr-4 rounded"
            onClick={() => setActiveModal(modalNumber)}>
            Open Modal {modalNumber}
            </button>
            <Modal modalNumber={modalNumber} />
        </>
    )
}

export const ButtonOptionTwo: React.FC<{ modalNumber: number }> = ({ modalNumber }) => {
    const { setActiveModal } = useModalStore();

    return (
        <>
        <button className="bg-indigo-500 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded"
        onClick={() => setActiveModal(modalNumber)}>
        Open Modal {modalNumber}
        </button>
            <Modal modalNumber={modalNumber} />
        </>
    )
}

export const ButtonOptionInput: React.FC<{ modalNumber: number }> = ({ modalNumber }) => {
    const { setActiveModal } = useModalStore();

    return (
        <button
            className="bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-2 px-4 mr-4 rounded"
            onClick={() => setActiveModal(modalNumber)}
        >
            Open Modal {modalNumber}
        </button>
    );
}

// Component ButtonOptionInput (modified from ButtonOptionOne):
//   - Props: modalNumber (numeric value from InputForm)
//   - Use useModalStore to get setActiveModal
//   - Render:
//     - Button that on click sets the active modal to modalNumber