// "use client";

// import { useEffect, useState } from "react";
// import { useRouter } from "next/navigation";
// import { Button } from "@/components/ui/button";
// import {
//   Card,
//   CardContent,
//   CardDescription,
//   CardHeader,
//   CardTitle,
// } from "@/components/ui/card";
// import { Building2, Briefcase, Clock, CheckCircle2, Users } from "lucide-react";
// import { useCandidateData, Candidate } from "@/lib/hooks/useCandidateData";

// export default function CandidateDashboard({
//   params,
// }: {
//   params: { id: string };
// }) {
//   const router = useRouter();
//   const { getCandidateById } = useCandidateData();
//   const [candidate, setCandidate] = useState<Candidate | undefined>(undefined);

//   useEffect(() => {
//     const fetchedCandidate = getCandidateById(params.id);
//     if (fetchedCandidate) {
//       setCandidate(fetchedCandidate);
//     } else {
//       router.push("/candidate/login");
//     }
//   }, [getCandidateById, params.id, router]);

//   if (!candidate) {
//     return null; // or a loading spinner
//   }

//   return (
//     <div className="space-y-8">
//       <div>
//         <h1 className="text-3xl font-bold tracking-tight">
//           Welcome back, {candidate.name}
//         </h1>
//         <p className="text-muted-foreground">
//           Here's an overview of your job search journey
//         </p>
//       </div>

//       <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
//         <Card>
//           <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
//             <CardTitle className="text-sm font-medium">
//               Active Applications
//             </CardTitle>
//             <Briefcase className="h-4 w-4 text-muted-foreground" />
//           </CardHeader>
//           <CardContent>
//             <div className="text-2xl font-bold">12</div>
//             <p className="text-xs text-muted-foreground">+2 this week</p>
//           </CardContent>
//         </Card>
//         <Card>
//           <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
//             <CardTitle className="text-sm font-medium">
//               Pending Interviews
//             </CardTitle>
//             <Clock className="h-4 w-4 text-muted-foreground" />
//           </CardHeader>
//           <CardContent>
//             <div className="text-2xl font-bold">4</div>
//             <p className="text-xs text-muted-foreground">
//               Next interview in 2 days
//             </p>
//           </CardContent>
//         </Card>
//         <Card>
//           <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
//             <CardTitle className="text-sm font-medium">
//               Completed Interviews
//             </CardTitle>
//             <CheckCircle2 className="h-4 w-4 text-muted-foreground" />
//           </CardHeader>
//           <CardContent>
//             <div className="text-2xl font-bold">8</div>
//             <p className="text-xs text-muted-foreground">+3 this month</p>
//           </CardContent>
//         </Card>
//         <Card>
//           <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
//             <CardTitle className="text-sm font-medium">
//               Companies Viewed
//             </CardTitle>
//             <Building2 className="h-4 w-4 text-muted-foreground" />
//           </CardHeader>
//           <CardContent>
//             <div className="text-2xl font-bold">24</div>
//             <p className="text-xs text-muted-foreground">+10 this week</p>
//           </CardContent>
//         </Card>
//       </div>

//       <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
//         <Card className="lg:col-span-4">
//           <CardHeader>
//             <CardTitle>Your Profile</CardTitle>
//             <CardDescription>Your professional information</CardDescription>
//           </CardHeader>
//           <CardContent>
//             <div className="space-y-4">
//               <div>
//                 <h3 className="font-medium">Skills</h3>
//                 <p className="text-sm text-muted-foreground">
//                   {candidate.skills.join(", ")}
//                 </p>
//               </div>
//               <div>
//                 <h3 className="font-medium">Experience</h3>
//                 <p className="text-sm text-muted-foreground">
//                   {candidate.experience} years
//                 </p>
//               </div>
//               <div>
//                 <h3 className="font-medium">Education</h3>
//                 <p className="text-sm text-muted-foreground">
//                   {candidate.education}
//                 </p>
//               </div>
//               <div>
//                 <h3 className="font-medium">Bio</h3>
//                 <p className="text-sm text-muted-foreground">{candidate.bio}</p>
//               </div>
//             </div>
//           </CardContent>
//         </Card>
//         <Card className="lg:col-span-3">
//           <CardHeader>
//             <CardTitle>Upcoming Interviews</CardTitle>
//             <CardDescription>Your scheduled interviews</CardDescription>
//           </CardHeader>
//           <CardContent>
//             <div className="space-y-4">
//               {[1, 2].map((_, i) => (
//                 <div key={i} className="flex items-center space-x-4">
//                   <div className="size-10 rounded-full bg-muted flex items-center justify-center">
//                     <Users className="size-6 text-muted-foreground" />
//                   </div>
//                   <div className="flex-1 space-y-1">
//                     <p className="text-sm font-medium leading-none">
//                       Technical Interview
//                     </p>
//                     <p className="text-sm text-muted-foreground">
//                       Tomorrow at 10:00 AM
//                     </p>
//                   </div>
//                   <Button variant="outline" size="sm">
//                     Join
//                   </Button>
//                 </div>
//               ))}
//             </div>
//           </CardContent>
//         </Card>
//       </div>
//     </div>
//   );
// }
