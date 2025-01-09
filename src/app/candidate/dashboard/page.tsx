"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Building2,
  Briefcase,
  Clock,
  CheckCircle2,
  Users,
  Edit,
  Trash,
} from "lucide-react";
import { useCandidate } from "@/lib/hooks/useCandidate";

export default function CandidateDashboard() {
  const router = useRouter();
  const { candidate, removeCandidate } = useCandidate();

  useEffect(() => {
    if (!candidate) {
      router.push("/candidate/login");
    }
  }, [candidate, router]);

  if (!candidate) {
    return null;
  }

  const handleEdit = () => {
    router.push("/candidate/login");
  };

  const handleDelete = () => {
    removeCandidate();
    router.push("/candidate/login");
  };

  return (
    <div className="space-y-8">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">
            Welcome back, {candidate.name}
          </h1>
          <p className="text-muted-foreground">
            Here's an overview of your profile
          </p>
        </div>
        <div className="space-x-2">
          <Button onClick={handleEdit}>
            <Edit className="mr-2 h-4 w-4" /> Edit Profile
          </Button>
          <Button variant="destructive" onClick={handleDelete}>
            <Trash className="mr-2 h-4 w-4" /> Delete Profile
          </Button>
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Skills</CardTitle>
            <Briefcase className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{candidate.skills.length}</div>
            <p className="text-xs text-muted-foreground">
              {candidate.skills.join(", ")}
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Experience</CardTitle>
            <Clock className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">
              {candidate.experience} years
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Education</CardTitle>
            <CheckCircle2 className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{candidate.education}</div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Contact</CardTitle>
            <Users className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-sm">{candidate.email}</div>
            <div className="text-sm">{candidate.phone}</div>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Your Profile</CardTitle>
          <CardDescription>Your professional information</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div>
              <h3 className="font-medium">Bio</h3>
              <p className="text-sm text-muted-foreground">{candidate.bio}</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
