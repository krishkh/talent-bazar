import { useMemo } from "react";
import { jobsData, Job } from "@/lib/jobsData";

export function useJobs() {
  const getTopCompanies = () => jobsData.filter((job) => job.isTopCompany);
  const getNearbyCompanies = () => jobsData.filter((job) => job.distance <= 20);
  const getRecommendedCompanies = () =>
    jobsData.filter((job) => job.category.includes("tech")); // Example logic
  const getRoleBasedJobs = (role: string) =>
    jobsData.filter((job) => job.category.includes(role));
  const getStartups = () =>
    jobsData.filter((job) => job.companySize === "startup");

  return {
    getTopCompanies,
    getNearbyCompanies,
    getRecommendedCompanies,
    getRoleBasedJobs,
    getStartups,
  };
}
