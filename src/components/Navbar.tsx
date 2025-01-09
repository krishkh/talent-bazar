import { Building2 } from "lucide-react";
import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <div>
      {" "}
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-14 items-center">
          <div className="flex items-center space-x-2 mr-4 px-12 ">
            <Building2 className="h-6 w-6 text-primary" />
            <span className="hidden md:inline-block font-bold text-xl">
              Resume-bazaar
            </span>
          </div>
          <nav className="flex items-center space-x-6 text-sm font-medium flex-1">
            <Link
              href="/candidate/opportunities"
              className="transition-colors hover:text-primary text-muted-foreground"
            >
              Opportunities
            </Link>
            <Link
              href="/candidate/ongoing"
              className="transition-colors hover:text-primary text-muted-foreground"
            >
              Ongoing Interviews
            </Link>
            <Link
              href="/candidate/pending"
              className="transition-colors hover:text-primary text-muted-foreground"
            >
              Pending Approvals
            </Link>
            <Link
              href="/candidate/feed"
              className="transition-colors hover:text-primary text-muted-foreground"
            >
              Feed
            </Link>
            <Link
              href="/candidate/past"
              className="transition-colors hover:text-primary text-muted-foreground"
            >
              Past Interviews
            </Link>
          </nav>
          <div className="flex items-center space-x-4">
            <nav className="flex items-center space-x-2">
              <Link
                href="/candidate/profile"
                className="size-8 rounded-full border-2 border-muted bg-muted"
              >
                <span className="sr-only">Profile</span>
                {/* Profile image would go here */}
              </Link>
            </nav>
          </div>
        </div>
      </header>
      {/* Mobile Navigation */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 border-t bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <nav className="container flex items-center justify-between py-2">
          <Link
            href="/candidate/opportunities"
            className="flex flex-col items-center space-y-1 text-xs font-medium text-muted-foreground"
          >
            <span>Opportunities</span>
          </Link>
          <Link
            href="/candidate/ongoing"
            className="flex flex-col items-center space-y-1 text-xs font-medium text-muted-foreground"
          >
            <span>Ongoing</span>
          </Link>
          <Link
            href="/candidate/pending"
            className="flex flex-col items-center space-y-1 text-xs font-medium text-muted-foreground"
          >
            <span>Pending</span>
          </Link>
          <Link
            href="/candidate/feed"
            className="flex flex-col items-center space-y-1 text-xs font-medium text-muted-foreground"
          >
            <span>Feed</span>
          </Link>
          <Link
            href="/candidate/past"
            className="flex flex-col items-center space-y-1 text-xs font-medium text-muted-foreground"
          >
            <span>Past</span>
          </Link>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
