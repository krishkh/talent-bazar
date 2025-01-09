"use client";

import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button"; // Adjust the import based on your button component

export default function NoOngoingInterviews() {
  const router = useRouter();

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">
          No Past Interviews
        </h1>
        <p className="text-lg text-gray-600 mb-6">
          It looks like you don't have any past interviewees at the moment.
        </p>
        <Button
          variant="outline"
          onClick={() => router.push("/candidate/dashboard")}
          className="mt-4"
        >
          Go to Dashboard
        </Button>
      </div>
      <div className="mt-8"></div>
    </div>
  );
}
