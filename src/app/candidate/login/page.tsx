"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useCandidateData } from "@/lib/hooks/useCandidateData";

const formSchema = z.object({
  name: z.string().min(2, {
    message: "Name must be at least 2 characters.",
  }),
  email: z.string().email({
    message: "Please enter a valid email address.",
  }),
  phone: z.string().min(10, {
    message: "Please enter a valid phone number.",
  }),
  skills: z
    .string()
    .transform((val) => val.split(",").map((skill) => skill.trim())),
  experience: z.number().min(0, {
    message: "Experience must be a positive number.",
  }),
  education: z.string().min(2, {
    message: "Please enter your highest education level.",
  }),
  bio: z.string().max(500, {
    message: "Bio must not exceed 500 characters.",
  }),
});

export default function CandidateLogin() {
  const router = useRouter();
  const { createOrUpdateCandidate, getCandidate } = useCandidateData();
  const [isLoading, setIsLoading] = useState(false);

  const existingCandidate = getCandidate();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: existingCandidate?.name || "",
      email: existingCandidate?.email || "",
      phone: existingCandidate?.phone || "",
      skills: existingCandidate?.skills as string[],
      experience: existingCandidate?.experience || 0,
      education: existingCandidate?.education || "",
      bio: existingCandidate?.bio || "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    setIsLoading(true);
    setTimeout(() => {
      createOrUpdateCandidate(values);
      setIsLoading(false);
      router.push("/candidate");
    }, 1000);
  }

  return (
    <div className="container max-w-2xl mx-auto py-8">
      <h1 className="text-3xl font-bold mb-6">
        {existingCandidate ? "Update Profile" : "Candidate Registration"}
      </h1>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Full Name</FormLabel>
                <FormControl>
                  <Input placeholder="John Doe" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input
                    type="email"
                    placeholder="john@example.com"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="phone"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Phone Number</FormLabel>
                <FormControl>
                  <Input placeholder="+1 (555) 123-4567" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="skills"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Skills</FormLabel>
                <FormControl>
                  <Input placeholder="React, Node.js, TypeScript" {...field} />
                </FormControl>
                <FormDescription>
                  Enter your skills separated by commas.
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="experience"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Years of Experience</FormLabel>
                <FormControl>
                  <Input
                    type="number"
                    {...field}
                    onChange={(e) => field.onChange(parseInt(e.target.value))}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="education"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Highest Education</FormLabel>
                <FormControl>
                  <Input
                    placeholder="Bachelor's in Computer Science"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="bio"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Bio</FormLabel>
                <FormControl>
                  <Textarea
                    placeholder="Tell us about yourself..."
                    className="resize-none"
                    {...field}
                  />
                </FormControl>
                <FormDescription>
                  Brief description about yourself (max 500 characters).
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button type="submit" className="w-full" disabled={isLoading}>
            {isLoading
              ? "Submitting..."
              : existingCandidate
              ? "Update Profile"
              : "Register"}
          </Button>
        </form>
      </Form>
    </div>
  );
}
