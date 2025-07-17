"use client";

import * as React from "react";
import { Icon } from "@iconify/react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Tabs,
  TabsList,
  TabsTrigger,
  TabsContent,
  TabsContents,
} from "@/components/animate-ui/components/tabs";

import Image from "next/image";
import Link from "next/link";

export const courseQuestStack = [
  { name: "Svelte 5", icon: "ri:svelte-fill" },
  { name: "Sveltekit", icon: "ri:svelte-fill" },
  { name: "Tailwind CSS", icon: "mdi:tailwind" },
  { name: "Node.js", icon: "mdi:nodejs" },
  { name: "TypeScript", icon: "tabler:brand-typescript" },
  { name: "Shadcn", icon: "simple-icons:shadcnui" },
  { name: "Supabase", icon: "ri:supabase-line" },
  { name: "Drizzle ORM", icon: "simple-icons:drizzle" },
  { name: "Vercel", icon: "gg:vercel" },
  { name: "Lucia Auth", icon: "simple-icons:lucia" },
];

export const monitlyStack = [
  { name: "Svelte 5", icon: "ri:svelte-fill" },
  { name: "Sveltekit", icon: "ri:svelte-fill" },
  { name: "Tailwind CSS", icon: "mdi:tailwind" },
  { name: "Node.js", icon: "mdi:nodejs" },
  { name: "TypeScript", icon: "tabler:brand-typescript" },
  { name: "Shadcn", icon: "simple-icons:shadcnui" },
  { name: "Supabase", icon: "ri:supabase-line" },
  { name: "Drizzle ORM", icon: "simple-icons:drizzle" },
  { name: "Vercel", icon: "gg:vercel" },
  { name: "Apex Chart", icon: "gg:vercel" },
  { name: "PayPal", icon: "hugeicons:paypal" },
  { name: "Oauth", icon: "tabler:brand-oauth" },
];

export const eventStack = [
  { name: "Svelte 5", icon: "ri:svelte-fill" },
  { name: "Sveltekit", icon: "ri:svelte-fill" },
  { name: "Tailwind CSS", icon: "mdi:tailwind" },
  { name: "Node.js", icon: "mdi:nodejs" },
  { name: "TypeScript", icon: "tabler:brand-typescript" },
  { name: "Shadcn", icon: "simple-icons:shadcnui" },
  { name: "Drizzle ORM", icon: "simple-icons:drizzle" },
];

export const nextStack = [
  { name: "React", icon: "mdi:react" },
  { name: "Next js", icon: "ri:nextjs-fill" },
  { name: "Tailwind CSS", icon: "mdi:tailwind" },
  { name: "TypeScript", icon: "tabler:brand-typescript" },
  { name: "Shadcn", icon: "simple-icons:shadcnui" },
  // { name: "Supabase", icon: "ri:supabase-line" },
  // { name: "Drizzle ORM", icon: "simple-icons:drizzle" },
  { name: "Vercel", icon: "gg:vercel" },
];

export const design = [
  {
    name: "Figma",
    icon: "solar:figma-outline",
  },
];

export const coursequestImg = [
  "/img/coursequest/landingpage-new.png",
  "/img/coursequest/landingpage-dark.png",
  "/img/coursequest/courses.png",
  "/img/coursequest/courses-dark.png",
  "/img/coursequest/preview.png",
  "/img/coursequest/seminars.png",
  "/img/coursequest/user-dashboard.png",
  "/img/coursequest/enrolled.png",
  "/img/coursequest/learn-new.png",
  "/img/coursequest/quiz-new.png",
  "/img/coursequest/create-course.png",
  "/img/coursequest/edit-course.png",
];

export const monitlyImg = [
  "/img/monitly/new-home.png",
  "/img/monitly/uptime.png",
  "/img/monitly/login.png",
  "/img/monitly/register.png",
  "/img/monitly/monitor.png",
  "/img/monitly/email-new.png",
];

export const eventImg = [
  "/img/event/login.png",
  "/img/event/create-event.png",
  "/img/event/qr-code.png",
  "/img/event/filter.png",
  "/img/event/scan.png",
  "/img/event/attendance.png",
];

export const genifileImg = [
  "/img/genifile/cropped-home.png",
  "/img/genifile/cropped-generate.png",
];

export default function Projects() {
  return (
    <div className="space-y-4 mt-12" id="projects">
      <Tabs>
        <TabsList>
          <TabsTrigger value="fullstack" className="text-sm font-normal">
            FULL-STACK PROJECTS
          </TabsTrigger>
          <TabsTrigger value="design" className="text-sm font-normal">
            DESIGN PROJECTS
          </TabsTrigger>
        </TabsList>
        <TabsContents>
          <TabsContent value="fullstack">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Link href={`/project/coursequest/`}>
                <div className="space-y-4 border rounded-xl p-6 h-full">
                  <div className="relative group rounded-xl overflow-hidden">
                    <Image
                      src="/img/coursequest/landingpage-new.png"
                      alt="coursequest"
                      className="border w-full h-full md:h-52 object-cover rounded-xl transition-transform duration-300 group-hover:scale-105"
                      width={5000}
                      height={5000}
                    />
                    <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <Button>View Project</Button>
                    </div>
                  </div>

                  <div className="text-xl">CourseQuest</div>
                  <div className="text-sm text-muted-foreground">
                    CourseQuest is a learning management system for IT courses,
                    developed as my CAPSTONE Project for DICT Bataan. It
                    streamlines courses to make learning more efficient,
                    offering free IT courses with certification provided by DICT
                    upon completion.
                  </div>

                  <div className="gap-2 flex flex-wrap">
                    {courseQuestStack.map((stack) => (
                      <Badge
                        key={stack.name}
                        className="bg-primary dark:bg-secondary border border-transparent hover:border-primary dark:hover:bg-primary transition-colors duration-300 ease-in-out text-sm"
                      >
                        <Icon icon={stack.icon} className="w-4 h-4" />
                        {stack.name}
                      </Badge>
                    ))}
                  </div>
                </div>
              </Link>

              <Link href={`/project/monitly/`}>
                <div className="space-y-4 border rounded-xl p-6 h-full">
                  <div className="relative group rounded-xl overflow-hidden">
                    <Image
                      src="/img/monitly/landingpage.png"
                      alt="monitly"
                      className="border w-full h-full md:h-52 object-cover rounded-xl transition-transform duration-300 group-hover:scale-105"
                      width={5000}
                      height={5000}
                    />
                    <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <Button>View Project</Button>
                    </div>
                  </div>

                  <div className="text-xl">Monitly</div>
                  <div className="text-sm text-muted-foreground">
                    Monitly a micro SaaS that I built in Svelte/Sveltekit it is
                    a uptime website monitoring tool designed to help website
                    owners and developers stay informed about their sites health
                    and quickly respond to issues by alerting them once the
                    website is down.
                  </div>

                  <div className="gap-2 flex flex-wrap">
                    {monitlyStack.map((stack) => (
                      <Badge
                        key={stack.name}
                        className="bg-primary dark:bg-secondary border border-transparent hover:border-primary dark:hover:bg-primary transition-colors duration-300 ease-in-out text-sm"
                      >
                        <Icon icon={stack.icon} className="w-4 h-4" />
                        {stack.name}
                      </Badge>
                    ))}
                  </div>
                </div>
              </Link>
              <div className="space-y-4 border rounded-xl p-6 lg:col-span-2">
                <div className="relative group rounded-xl overflow-hidden">
                  <Image
                    src="/img/event/login.png"
                    alt="coursequest"
                    className="border w-full h-full object-cover rounded-xl transition-transform duration-300 group-hover:scale-105"
                    width={5000}
                    height={5000}
                  />
                  <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <Button>View Project</Button>
                  </div>
                </div>

                <div className="text-xl">
                  Event Management System with QR Attendance Tracking (SPA)
                </div>
                <div className="text-sm text-muted-foreground">
                  The system is an Event Management and Attendance Tracking
                  platform that I developed during my internship it streamlines
                  event organization and attendance recording using QR codes,
                  developed in my internship at PITO (Provincial Information and
                  Technology Office). Administrators can create custom events,
                  manage employees, offices, and users, while each employee uses
                  a unique QR code to check in at events.
                </div>

                <div className="gap-2 flex flex-wrap">
                  {eventStack.map((stack) => (
                    <Badge
                      key={stack.name}
                      className="bg-primary dark:bg-secondary border border-transparent hover:border-primary dark:hover:bg-primary transition-colors duration-300 ease-in-out text-sm"
                    >
                      <Icon icon={stack.icon} className="w-4 h-4" />
                      {stack.name}
                    </Badge>
                  ))}
                </div>
              </div>
            </div>
          </TabsContent>
          <TabsContent value="design">
            <div className="space-y-4 ">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {" "}
                <Link href={`/project/drizzup/`} className="lg:col-span-2">
                  {" "}
                  <div className="space-y-4 border rounded-xl p-6 ">
                    <div className="relative group rounded-xl overflow-hidden">
                      <Image
                        src="/img/drizzup/landingpage.png"
                        alt="drizzup"
                        className="border w-full h-full object-cover rounded-xl transition-transform duration-300 group-hover:scale-105"
                        width={5000}
                        height={5000}
                      />
                      <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                        <Button>View Project</Button>
                      </div>
                    </div>
                    <div className="text-xl">DrizzUp</div>
                    <div className="text-sm text-muted-foreground">
                      A modern and stylish e-commerce platform crafted for
                      fashion-forward brands. DrizzUp combines clean design with
                      seamless user experience, making it effortless for
                      customers to explore, discover, and shop the latest trends
                      in clothing and apparel.
                    </div>
                    <div className="gap-2 flex flex-wrap">
                      {nextStack.map((stack) => (
                        <Badge
                          key={stack.name}
                          className="bg-primary dark:bg-secondary border border-transparent hover:border-primary dark:hover:bg-primary transition-colors duration-300 ease-in-out text-sm"
                        >
                          <Icon icon={stack.icon} className="w-4 h-4" />
                          {stack.name}
                        </Badge>
                      ))}
                    </div>{" "}
                  </div>{" "}
                </Link>
                <div className="space-y-4 border rounded-xl p-6">
                  <div className="relative group rounded-xl overflow-hidden">
                    <Image
                      src="/img/readi/dashboard.png"
                      alt="coursequest"
                      className="border w-full h-full md:h-52 object-cover rounded-xl transition-transform duration-300 group-hover:scale-105"
                      width={5000}
                      height={5000}
                    />

                    <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <Link href="/project/videos">
                        <Button>View Project</Button>
                      </Link>
                    </div>
                  </div>

                  <div className="text-xl">READI</div>
                  <div className="text-sm text-muted-foreground">
                    An incident report application with an internal system for
                    monitoring and responding to reports by deploying rescuers
                    to specific locations. The app also allows users to send
                    incident reports and view emergency places like evacuation
                    centers, police stations, and fire stations in their
                    respective municipality.
                  </div>

                  <div className="gap-2 flex flex-wrap">
                    {design.map((stack) => (
                      <Badge
                        key={stack.name}
                        className="bg-primary dark:bg-secondary border border-transparent hover:border-primary dark:hover:bg-primary transition-colors duration-300 ease-in-out text-sm"
                      >
                        <Icon icon={stack.icon} className="w-4 h-4" />
                        {stack.name}
                      </Badge>
                    ))}
                  </div>
                </div>
                <div className="space-y-4 border rounded-xl p-6">
                  <div className="relative group rounded-xl overflow-hidden">
                    <Image
                      src="/img/para-po/pwd-mobile.png"
                      alt="coursequest"
                      className="border w-full h-full md:h-52 object-cover rounded-xl transition-transform duration-300 group-hover:scale-105"
                      width={5000}
                      height={5000}
                    />

                    <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <Button>View Project</Button>
                    </div>
                  </div>

                  <div className="text-xl">PARA PO </div>
                  <div className="text-sm text-muted-foreground">
                    PARA PO is an application for PWDs that enables them to
                    travel safely to their destination. I designed PARA PO for a
                    start up competition called Founders Live.
                  </div>

                  <div className="gap-2 flex flex-wrap">
                    {design.map((stack) => (
                      <Badge
                        key={stack.name}
                        className="bg-primary dark:bg-secondary border border-transparent hover:border-primary dark:hover:bg-primary transition-colors duration-300 ease-in-out text-sm"
                      >
                        <Icon icon={stack.icon} className="w-4 h-4" />
                        {stack.name}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </TabsContent>
        </TabsContents>
      </Tabs>
    </div>
  );
}

export { Projects };
