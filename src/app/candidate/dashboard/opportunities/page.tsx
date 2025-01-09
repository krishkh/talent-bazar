"use client";

import { useJobs } from "@/lib/hooks/useJobs";
import { Job } from "@/lib/jobsData";
import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Building2, MapPin, DollarSign, Briefcase } from "lucide-react";

const JobCard = ({ job }: { job: Job }) => (
  <motion.div
    whileHover={{ scale: 1.02, y: -5 }}
    transition={{ duration: 0.2 }}
    className="min-w-[340px] p-6 bg-secondary/50 backdrop-blur-sm rounded-xl shadow-lg mr-6 border border-border/50 hover:border-primary/20"
  >
    <div className="flex items-start justify-between mb-4">
      <div>
        <h3 className="font-semibold text-xl text-primary mb-1">{job.title}</h3>
        <div className="flex items-center text-muted-foreground">
          <Building2 className="w-4 h-4 mr-1" />
          <span>{job.company}</span>
        </div>
      </div>
      {job.isTopCompany && (
        <Badge variant="secondary" className="bg-primary/10 text-primary">
          Top Company
        </Badge>
      )}
    </div>

    <div className="space-y-2 mb-4">
      <div className="flex items-center text-sm text-muted-foreground">
        <MapPin className="w-4 h-4 mr-2" />
        <span>{job.location}</span>
      </div>
      <div className="flex items-center text-sm text-muted-foreground">
        <DollarSign className="w-4 h-4 mr-2" />
        <span>{job.salary}</span>
      </div>
      <div className="flex items-center text-sm text-muted-foreground">
        <Briefcase className="w-4 h-4 mr-2" />
        <span>{job.type}</span>
      </div>
    </div>

    <div className="flex flex-wrap gap-2">
      {job.category.map((cat) => (
        <Badge key={cat} variant="outline" className="text-xs">
          {cat}
        </Badge>
      ))}
    </div>
  </motion.div>
);

const JobSection = ({ title, jobs }: { title: string; jobs: Job[] }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
    className="mb-12"
  >
    <h2 className="text-2xl font-bold mb-6 text-primary">{title}</h2>
    <div className="relative">
      <div className="flex overflow-x-auto pb-6 -mx-4 px-4 scrollbar-hide">
        <div className="flex">
          {jobs.map((job) => (
            <JobCard key={job.id} job={job} />
          ))}
        </div>
      </div>
      <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-background to-transparent pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-background to-transparent pointer-events-none" />
    </div>
  </motion.div>
);

export default function OpportunitiesPage() {
  const jobs = useJobs();

  return (
    <div className="max-w-[1400px] mx-auto px-6 py-12">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-4xl font-bold mb-2 text-primary">
          Explore Opportunities
        </h1>
        <p className="text-lg text-muted-foreground mb-12">
          Discover your next career move from our curated selection
        </p>
      </motion.div>

      <JobSection
        title="Featured at Top Companies"
        jobs={jobs.getTopCompanies()}
      />
      <JobSection title="Near Your Location" jobs={jobs.getNearbyCompanies()} />
      <JobSection
        title="Recommended for You"
        jobs={jobs.getRecommendedCompanies()}
      />

      <div className="mb-12">
        <h2 className="text-2xl font-bold mb-6 text-primary">Browse by Role</h2>
        <div className="flex flex-wrap gap-3 mb-8">
          {[
            "Frontend",
            "Backend",
            "Full Stack",
            "DevOps",
            "ML/AI",
            "Mobile",
            "UI/UX",
            "Data Science",
          ].map((role) => (
            <motion.button
              key={role}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-6 py-3 rounded-full bg-secondary/80 hover:bg-secondary text-primary border border-border/50 hover:border-primary/20 transition-colors"
            >
              {role}
            </motion.button>
          ))}
        </div>
        <JobSection title="" jobs={jobs.getRoleBasedJobs("tech")} />
      </div>

      <JobSection title="Exciting Startups" jobs={jobs.getStartups()} />
    </div>
  );
}
