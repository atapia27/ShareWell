// stores/modalStore.ts
import { create } from 'zustand';



type ModalState = {
  //   readonly activeModal: number | null; 
  // Making activeModal readonly not necessary since Zustand ensures immutability in state updates
  activeModal: number | null
}

type ModalActions = {
  setActiveModal: (modalNumber: number | null) => void
}


const initialState: ModalState = {
  activeModal: null,
};

export const useModalStore = create<ModalState & ModalActions>((set) => ({
  ...initialState,

  /* 
  *immutability*

  " The spread (...) syntax allows an iterable, such as an array or string, 
  to be expanded in places where zero or more arguments (for function calls) 
  or elements (for array literals) are expected."

  set((state) => ({ ...state, count: state.count + 1 }))
  However, as this is a common pattern, set actually merges state, and we can skip the ...state part:
  */

  /* 
  new state does not depend on the previous state, no need to use:
    setActiveModal: (modalNumber) => set(() => ({ activeModal: modalNumber })),

  Above code is useful when the new state depends on the previous state because 
  it ensures that you're working with the most current state, avoiding potential 
  issues with stale state in asynchronous operations or closures.
  e.g. If you want to increment a counter
  */
  setActiveModal: (modalNumber) => set({ activeModal: modalNumber }),
}));