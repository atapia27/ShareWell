import { useModalStore } from '../store/modalStore';
import React from 'react';

export const ButtonOptionOne: React.FC<{ modalNumber: number }> = ({ modalNumber }) => {
    const { setActiveModal } = useModalStore();

    return (
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 mr-4 rounded"
        onClick={() => setActiveModal(modalNumber)}>
        Open Modal {modalNumber}
        </button>
    )
}

export const ButtonOptionTwo: React.FC<{ modalNumber: number }> = ({ modalNumber }) => {
    const { setActiveModal } = useModalStore();

    return (
        <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
        onClick={() => setActiveModal(modalNumber)}>
        Open Modal {modalNumber}
        </button>
    )
}

export const ButtonOptionInput: React.FC<{ modalNumber: number }> = ({ modalNumber }) => {
    const { setActiveModal } = useModalStore();

    return (
        <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 mr-4 rounded"
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