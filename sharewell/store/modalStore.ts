// stores/modalStore.ts
import { create } from 'zustand';

type ModalState = {
  activeModal: number | null
  setActiveModal: (modalNumber: number | null) => void
}

export const useModalStore = create<ModalState>((set) => ({
  activeModal: null,
  setActiveModal: (modalNumber) => set({ activeModal: modalNumber }),
}));
