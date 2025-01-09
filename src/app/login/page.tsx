"use client";

import { useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { UserCircle, Building2, Users } from "lucide-react";

export default function LoginPage() {
  const [loading, setLoading] = useState<string | null>(null);
  const router = useRouter();

  const handleContinueAs = async (role: string) => {
    setLoading(role);
    // Simulate navigation delay
    await new Promise((resolve) => setTimeout(resolve, 500));
    router.push(`/${role.toLowerCase()}`);
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="flex items-center justify-between p-4 border-b">
        <div className="flex items-center space-x-2">
          <Building2 className="w-8 h-8 text-primary" />
          <span className="text-xl font-semibold">Talent Bazar</span>
        </div>
        <div className="flex items-center gap-4">
          <Button variant="ghost" className="text-muted-foreground">
            Help
          </Button>
          <Button variant="outline">Sign in</Button>
        </div>
      </nav>

      {/* Main Content */}
      <div className="grid lg:grid-cols-2 gap-8 px-4 py-12 max-w-7xl mx-auto">
        <div className="flex flex-col justify-center max-w-md mx-auto w-full space-y-8">
          <div className="space-y-4">
            <h1 className="text-4xl font-bold tracking-tight">
              Welcome to your professional journey
            </h1>
            <p className="text-xl text-muted-foreground">
              Connect with opportunities, talent, and companies
            </p>
          </div>

          <div className="space-y-4">
            <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
              <Button
                variant="outline"
                size="lg"
                className="w-full justify-start h-16 text-left p-4"
                onClick={() => handleContinueAs("candidate")}
                disabled={loading === "candidate"}
              >
                <UserCircle className="w-6 h-6 mr-4" />
                <div>
                  <div className="font-semibold">Continue as Candidate</div>
                  <div className="text-sm text-muted-foreground">
                    Find your next opportunity
                  </div>
                </div>
              </Button>
            </motion.div>

            <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
              <Button
                variant="outline"
                size="lg"
                className="w-full justify-start h-16 text-left p-4"
                onClick={() => handleContinueAs("hiring-manager")}
                disabled={loading === "hiring-manager"}
              >
                <Users className="w-6 h-6 mr-4" />
                <div>
                  <div className="font-semibold">
                    Continue as Hiring Manager
                  </div>
                  <div className="text-sm text-muted-foreground">
                    Find perfect candidates
                  </div>
                </div>
              </Button>
            </motion.div>

            <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
              <Button
                variant="outline"
                size="lg"
                className="w-full justify-start h-16 text-left p-4"
                onClick={() => handleContinueAs("company")}
                disabled={loading === "company"}
              >
                <Building2 className="w-6 h-6 mr-4" />
                <div>
                  <div className="font-semibold">Continue as Company</div>
                  <div className="text-sm text-muted-foreground">
                    Manage your organization
                  </div>
                </div>
              </Button>
            </motion.div>
          </div>

          <div className="text-center text-sm text-muted-foreground">
            By continuing, you agree to our{" "}
            <Button variant="link" className="p-0 h-auto font-normal">
              Terms of Service
            </Button>{" "}
            and{" "}
            <Button variant="link" className="p-0 h-auto font-normal">
              Privacy Policy
            </Button>
          </div>
        </div>

        <div className="hidden lg:block relative">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-primary/5 to-background rounded-xl" />
          <div className="relative h-full">
            <Image
              src="/placeholder.svg?height=600&width=800"
              alt="Professional networking"
              width={800}
              height={600}
              className="rounded-xl object-cover h-full"
              priority
            />
            <div className="absolute bottom-8 left-8 right-8 bg-background/80 backdrop-blur-sm p-6 rounded-lg">
              <h2 className="text-2xl font-semibold mb-2">
                Find your perfect match
              </h2>
              <p className="text-muted-foreground">
                Whether you're looking for opportunities, talent, or building
                your company, we've got you covered.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Categories */}
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="flex flex-wrap gap-2">
          {[
            "Technology",
            "Healthcare",
            "Finance",
            "Education",
            "Marketing",
            "Design",
            "Sales",
          ].map((category) => (
            <Button key={category} variant="secondary" className="rounded-full">
              {category}
            </Button>
          ))}
        </div>
      </div>
    </div>
  );
}
