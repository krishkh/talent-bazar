import { create } from "zustand";
import { persist } from "zustand/middleware";

export interface Candidate {
  id: string;
  name: string;
  email: string;
  phone: string;
  skills: string[];
  experience: number;
  education: string;
  bio: string;
}

interface CandidateStore {
  candidate: Candidate | null;
  setCandidate: (candidate: Candidate) => void;
  updateCandidate: (updates: Partial<Candidate>) => void;
  clearCandidate: () => void;
}

export const useCandidateStore = create<CandidateStore>()(
  persist(
    (set) => ({
      candidate: null,
      setCandidate: (candidate) => set({ candidate }),
      updateCandidate: (updates) =>
        set((state) => ({
          candidate: state.candidate
            ? { ...state.candidate, ...updates }
            : null,
        })),
      clearCandidate: () => set({ candidate: null }),
    }),
    {
      name: "candidate-storage",
    }
  )
);
