import { create } from 'zustand';

export type DemoStore = {
  count: number;
  increment: () => void;
  decrement: () => void;
};

export const useDemoStore = create<DemoStore>((set) => ({
  count: 0,
  increment: () => set((state) => ({ count: state.count + 1 })),
  decrement: () => set((state) => ({ count: state.count - 1 })),
}));
