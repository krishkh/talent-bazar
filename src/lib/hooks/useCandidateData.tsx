import React, { createContext, useContext, useState, useCallback } from "react";

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

interface CandidateContextType {
  candidate: Candidate | null;
  createOrUpdateCandidate: (candidateData: Omit<Candidate, "id">) => void;
  getCandidate: () => Candidate | null;
  updateCandidate: (updates: Partial<Candidate>) => void;
  deleteCandidate: () => void;
}

const CandidateContext = createContext<CandidateContextType | undefined>(
  undefined
);

export const CandidateProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [candidate, setCandidate] = useState<Candidate | null>(null);

  const createOrUpdateCandidate = useCallback(
    (candidateData: Omit<Candidate, "id">): void => {
      const newCandidate = {
        ...candidateData,
        id: candidate?.id || Math.random().toString(36).substr(2, 9),
      };
      setCandidate(newCandidate);
    },
    [candidate]
  );

  const getCandidate = useCallback((): Candidate | null => {
    return candidate;
  }, [candidate]);

  const updateCandidate = useCallback((updates: Partial<Candidate>): void => {
    setCandidate((prev) => (prev ? { ...prev, ...updates } : null));
  }, []);

  const deleteCandidate = useCallback((): void => {
    setCandidate(null);
  }, []);

  const value = {
    candidate,
    createOrUpdateCandidate,
    getCandidate,
    updateCandidate,
    deleteCandidate,
  };

  return (
    <CandidateContext.Provider value={value}>
      {children}
    </CandidateContext.Provider>
  );
};

export const useCandidateData = (): CandidateContextType => {
  const context = useContext(CandidateContext);
  if (context === undefined) {
    throw new Error("useCandidateData must be used within a CandidateProvider");
  }
  return context;
};
