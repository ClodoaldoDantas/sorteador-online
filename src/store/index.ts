import { create } from 'zustand'

type Result = string[] | number[]

interface AppState {
  result: Result
  setResult: (payload: Result) => void
  reset: () => void
}

export const useAppStore = create<AppState>((set) => ({
  result: [],
  setResult: (payload) => set({ result: payload }),
  reset: () => set({ result: [] }),
}))
