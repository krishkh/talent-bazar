import { useState } from "react";
// import { Candidate } from "@/lib/types";
import { initialCandidate } from "@/lib/candidateData";

export function useCandidate() {
  const [candidate, setCandidate] = useState<any>(initialCandidate);

  const updateCandidate = (updatedData: any) => {
    setCandidate((prev: any) => (prev ? { ...prev, ...updatedData } : null));
  };

  const removeCandidate = () => {
    setCandidate(null);
  };

  return { candidate, updateCandidate, removeCandidate };
}
