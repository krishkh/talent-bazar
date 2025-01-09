"use client";

import { useJobs } from "@/lib/hooks/useJobs";
import { Job } from "@/lib/jobsData";
import { motion } from "framer-motion";

const JobCard = ({ job }: { job: Job }) => (
  <motion.div
    whileHover={{ scale: 1.05 }}
    className="min-w-[300px] p-4 bg-white rounded-lg shadow-md mr-4 border border-gray-200"
  >
    <h3 className="font-semibold text-lg">{job.title}</h3>
    <p className="text-primary">{job.company}</p>
    <p className="text-sm text-gray-600">{job.location}</p>
    <p className="text-sm text-gray-600">{job.salary}</p>
  </motion.div>
);

const JobSection = ({ title, jobs }: { title: string; jobs: Job[] }) => (
  <div className="mb-8">
    <h2 className="text-2xl font-bold mb-4">{title}</h2>
    <div className="flex overflow-x-auto pb-4 -mx-4 px-4">
      <div className="flex">
        {jobs.map((job) => (
          <JobCard key={job.id} job={job} />
        ))}
      </div>
    </div>
  </div>
);

export default function OpportunitiesPage() {
  const jobs = useJobs();

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Explore Opportunities</h1>

      <JobSection title="Top Companies" jobs={jobs.getTopCompanies()} />
      <JobSection title="Companies Nearby" jobs={jobs.getNearbyCompanies()} />
      <JobSection
        title="Recommended for You"
        jobs={jobs.getRecommendedCompanies()}
      />

      <div className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Roles</h2>
        <div className="flex flex-wrap gap-2 mb-4">
          {["Frontend", "Backend", "Full Stack", "DevOps", "ML/AI"].map(
            (role) => (
              <button
                key={role}
                className="px-4 py-2 rounded-full bg-gray-100 hover:bg-gray-200"
              >
                {role}
              </button>
            )
          )}
        </div>
        <JobSection title="" jobs={jobs.getRoleBasedJobs("tech")} />
      </div>

      <JobSection title="Startups" jobs={jobs.getStartups()} />
    </div>
  );
}
