"use client";

import * as React from "react";
import { Icon } from "@iconify/react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { ExternalLinkIcon, Dribbble } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export const personalStack = [
  {
    name: "Svelte 5",
    icon: "ri:svelte-fill",
  },
  {
    name: "Sveltekit",
    icon: "ri:svelte-fill",
  },
  {
    name: "Tailwind CSS",
    icon: "mdi:tailwind",
  },

  {
    name: "Node.js",
    icon: "mdi:nodejs",
  },

  {
    name: "TypeScript",
    icon: "tabler:brand-typescript",
  },
  {
    name: "Shadcn",
    icon: "simple-icons:shadcnui",
  },
  {
    name: "Supabase",
    icon: "ri:supabase-line",
  },
  {
    name: "Drizzle ORM",
    icon: "simple-icons:drizzle",
  },

  {
    name: "Vercel",
    icon: "gg:vercel",
  },
];

export const nextStack = [
  {
    name: "React",
    icon: "mdi:react",
  },
  {
    name: "Next js",
    icon: "ri:nextjs-fill",
  },
  {
    name: "Tailwind CSS",
    icon: "mdi:tailwind",
  },

  {
    name: "TypeScript",
    icon: "tabler:brand-typescript",
  },
  {
    name: "Shadcn",
    icon: "simple-icons:shadcnui",
  },
  {
    name: "Supabase",
    icon: "ri:supabase-line",
  },
  {
    name: "Drizzle ORM",
    icon: "simple-icons:drizzle",
  },

  {
    name: "Vercel",
    icon: "gg:vercel",
  },
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
  "/img/monitly/landingpage.png",
  "/img/monitly/dashboard.png",
  "/img/monitly/login.png",
  "/img/monitly/register.png",
  "/img/monitly/add-url.png",
  "/img/monitly/email.png",
];

export const eventImg = [
  "/img/event/login.png",
  "/img/event/create-event.png",
  "/img/event/qr-code.png",
  "/img/event/filter.png",
  "/img/event/scan.png",
  "/img/event/attendance.png",
];

export default function Projects() {
  const [api, setApi] = React.useState<CarouselApi>();
  const [current, setCurrent] = React.useState(0);
  const [count, setCount] = React.useState(0);

  React.useEffect(() => {
    if (!api) return;

    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap() + 1);

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });
  }, [api]);
  return (
    <div className="space-y-4 mt-12" id="projects">
      <div className="text-sm text-muted-foreground">WEB DEV PROJECTS</div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        {/* CourseQuest */}
        <div className="space-y-4 border rounded-xl p-6">
          <div className="relative group rounded-xl overflow-hidden">
            <Image
              src="/img/coursequest/learn-new.png"
              alt="coursequest"
              className="border w-full h-52 object-cover rounded-xl transition-transform duration-300 group-hover:scale-105"
              width={5000}
              height={5000}
            />

            <div className="absolute inset-0 bg-black/60 opacity-100 lg:opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
              <Dialog>
                <DialogTrigger asChild>
                  <Button>View Project</Button>
                </DialogTrigger>
                <DialogContent className="sm:max-w-6xl">
                  <DialogHeader>
                    <DialogTitle>
                      CourseQuest
                      <Button
                        asChild
                        className="ml-4 rounded-full animate-bounce duration-300 ease-in-out"
                      >
                        <Link
                          href="https://coursequest.vercel.app/"
                          target="_blank"
                        >
                          <ExternalLinkIcon />
                        </Link>
                      </Button>
                    </DialogTitle>

                    <div className="mt-4">
                      <Carousel setApi={setApi} className="w-full ">
                        <CarouselContent>
                          {coursequestImg.map((img, index) => (
                            <CarouselItem key={index}>
                              <Image
                                src={img}
                                alt={`CourseQuest image ${index + 1}`}
                                width={5000}
                                height={600}
                                className="w-full h-[600px] object-cover rounded-xl border p-4"
                              />
                            </CarouselItem>
                          ))}
                        </CarouselContent>
                        <div className="pt-4 text-center text-sm text-muted-foreground">
                          <CarouselPrevious className="left-4" />
                          Slide {current} of {count}{" "}
                          <CarouselNext className="right-4" />
                        </div>
                      </Carousel>
                    </div>
                  </DialogHeader>
                </DialogContent>
              </Dialog>
            </div>
          </div>

          <div className="text-xl">
            CourseQuest
            <Button
              asChild
              className="ml-2 rounded-full animate-bounce duration-300 ease-in-out"
            >
              <Link href="https://coursequest.vercel.app/" target="_blank">
                <ExternalLinkIcon />
              </Link>
            </Button>
          </div>
          <div className="text-sm text-muted-foreground">
            CourseQuest is a learning management system for IT courses,
            developed as my CAPSTONE Project for DICT Bataan. It streamlines
            courses to make learning more efficient, offering free IT courses
            with certification provided by DICT upon completion.
          </div>

          <div className="gap-2 flex flex-wrap">
            {personalStack.map((stack) => (
              <Badge
                key={stack.name}
                className="bg-primary border border-transparent hover:border-primary transition-colors duration-300 ease-in-out dark:bg-secondary"
              >
                <Icon icon={stack.icon} className="w-4 h-4" />
                {stack.name}
              </Badge>
            ))}
          </div>
        </div>

        {/* Monitly */}
        <div className="space-y-4 border rounded-xl p-6">
          <div className="relative group rounded-xl overflow-hidden">
            <Image
              src="/img/monitly/landingpage.png"
              alt="monitly"
              className="border w-full h-52 object-cover rounded-xl transition-transform duration-300 group-hover:scale-105"
              width={5000}
              height={5000}
            />

            <div className="absolute inset-0 bg-black/60 opacity-100 lg:opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
              <Dialog>
                <DialogTrigger asChild>
                  <Button>View Project</Button>
                </DialogTrigger>
                <DialogContent className="sm:max-w-6xl">
                  <DialogHeader>
                    <DialogTitle>
                      Monitly{" "}
                      <Button
                        asChild
                        className="ml-4 rounded-full animate-bounce duration-300 ease-in-out"
                      >
                        <Link
                          href="https://monitly.vercel.app/"
                          target="_blank"
                        >
                          <ExternalLinkIcon />
                        </Link>
                      </Button>
                    </DialogTitle>
                    <div className="mt-4">
                      <Carousel setApi={setApi} className="w-full ">
                        <CarouselContent>
                          {monitlyImg.map((img, index) => (
                            <CarouselItem key={index}>
                              <Image
                                src={img}
                                alt={`Monitly image ${index + 1}`}
                                width={5000}
                                height={600}
                                className="w-full h-[600px] object-cover rounded-xl border p-4"
                              />
                            </CarouselItem>
                          ))}
                        </CarouselContent>
                        <div className="pt-4 text-center text-sm text-muted-foreground">
                          <CarouselPrevious className="left-4" />
                          Slide {current} of {count}{" "}
                          <CarouselNext className="right-4" />
                        </div>
                      </Carousel>
                    </div>
                  </DialogHeader>
                </DialogContent>
              </Dialog>
            </div>
          </div>

          <div className="text-xl">
            Monitly
            <Button
              asChild
              className="ml-2 rounded-full animate-bounce duration-300 ease-in-out"
            >
              <Link href="https://monitly.vercel.app/" target="_blank">
                <ExternalLinkIcon />
              </Link>
            </Button>
          </div>
          <div className="text-sm text-muted-foreground">
            Monitly a micro SaaS that I built in Svelte/Sveltekit it is a
            website monitoring tool designed to help website owners and
            developers stay informed about their sites health and quickly
            respond to issues by alerting them once the website is down.
          </div>

          <div className="gap-2 flex flex-wrap">
            {personalStack.map((stack) => (
              <Badge
                key={stack.name}
                className="bg-primary border border-transparent hover:border-primary transition-colors duration-300 ease-in-out dark:bg-secondary"
              >
                <Icon icon={stack.icon} className="w-4 h-4" />
                {stack.name}
              </Badge>
            ))}
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        {/* Event */}
        <div className="space-y-4 border rounded-xl p-6">
          <div className="relative group rounded-xl overflow-hidden">
            <Image
              src="/img/event/login.png"
              alt="coursequest"
              className="border w-full h-full object-cover rounded-xl transition-transform duration-300 group-hover:scale-105"
              width={5000}
              height={5000}
            />

            <div className="absolute inset-0 bg-black/60 opacity-100 lg:opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
              <Dialog>
                <DialogTrigger asChild>
                  <Button>View Project</Button>
                </DialogTrigger>
                <DialogContent className="sm:max-w-6xl">
                  <DialogHeader>
                    <DialogTitle>
                      Event Management System with QR Attendance Tracking
                    </DialogTitle>
                    <div className="mt-4">
                      <Carousel setApi={setApi} className="w-full ">
                        <CarouselContent>
                          {eventImg.map((img, index) => (
                            <CarouselItem key={index}>
                              <Image
                                src={img}
                                alt={`Eventimage ${index + 1}`}
                                width={5000}
                                height={600}
                                className="w-full h-[600px] object-cover rounded-xl border p-4 "
                              />
                            </CarouselItem>
                          ))}
                        </CarouselContent>
                        <div className="pt-4 text-center text-sm text-muted-foreground">
                          <CarouselPrevious className="left-4" />
                          Slide {current} of {count}{" "}
                          <CarouselNext className="right-4" />
                        </div>
                      </Carousel>
                    </div>
                  </DialogHeader>
                </DialogContent>
              </Dialog>
            </div>
          </div>

          <div className="text-xl">
            Event Management System with QR Attendance Tracking
          </div>
          <div className="text-sm text-muted-foreground">
            The system is an Event Management and Attendance Tracking platform
            that I developed during my internship it streamlines event
            organization and attendance recording using QR codes, developed in
            my internship at PITO (Provincial Information and Technology
            Office). Administrators can create custom events, manage employees,
            offices, and users, while each employee uses a unique QR code to
            check in at events.
          </div>

          <div className="gap-2 flex flex-wrap">
            {personalStack.map((stack) => (
              <Badge
                key={stack.name}
                className="bg-primary border border-transparent hover:border-primary transition-colors duration-300 ease-in-out dark:bg-secondary"
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
              src="/img/genifile/home.png"
              alt="coursequest"
              className="border w-full h-full object-cover rounded-xl transition-transform duration-300 group-hover:scale-105"
              width={5000}
              height={5000}
            />

            <div className="absolute inset-0 bg-black/60 opacity-100 lg:opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
              <Button>In Progress</Button>
            </div>
          </div>

          <div className="text-xl">Genifile</div>
          <div className="text-sm text-muted-foreground">
            Monitly is a micro SaaS website monitoring tool built for website
            owners, developers, and business operators. It keeps track of your
            site’s health and instantly alerts you when downtime is detected so
            you can take action before users notice.
          </div>

          <div className="gap-2 flex flex-wrap">
            {nextStack.map((stack) => (
              <Badge
                key={stack.name}
                className="bg-primary border border-transparent hover:border-primary transition-colors duration-300 ease-in-out dark:bg-secondary"
              >
                <Icon icon={stack.icon} className="w-4 h-4" />
                {stack.name}
              </Badge>
            ))}
          </div>
        </div>
      </div>

      {/* UI/UX */}
      <div className="space-y-4 mt-12">
        <div className="text-sm text-muted-foreground">
          UI/UX DESIGN PROJECTS
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          {" "}
          {/* READI */}
          <div className="space-y-4 border rounded-xl p-6">
            <div className="relative group rounded-xl overflow-hidden">
              <Image
                src="/img/readi/mobile-screens.png"
                alt="coursequest"
                className="border w-full h-52 object-cover rounded-xl transition-transform duration-300 group-hover:scale-105"
                width={5000}
                height={5000}
              />

              <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <Button>View Project</Button>
              </div>
            </div>

            <div className="text-xl">
              READI
              <Button
                asChild
                className="ml-2 rounded-full animate-bounce duration-300 ease-in-out"
              >
                <Link href="https://dribbble.com/Saul_08" target="_blank">
                  <Dribbble />
                </Link>
              </Button>
            </div>
            <div className="text-sm text-muted-foreground">
              An incident report application with an internal system for
              monitoring and responding to reports by deploying rescuers to
              specific locations. The app also allows users to send incident
              reports and view emergency places like evacuation centers, police
              stations, and fire stations in their respective municipality.
            </div>

            <div className="gap-2 flex flex-wrap">
              {design.map((stack) => (
                <Badge
                  key={stack.name}
                  className="bg-primary border border-transparent hover:border-primary transition-colors duration-300 ease-in-out dark:bg-secondary"
                >
                  <Icon icon={stack.icon} className="w-4 h-4" />
                  {stack.name}
                </Badge>
              ))}
            </div>
          </div>
          {/* PARA PO */}
          <div className="space-y-4 border rounded-xl p-6">
            <div className="relative group rounded-xl overflow-hidden">
              <Image
                src="/img/para-po/pwd-mobile.png"
                alt="coursequest"
                className="border w-full h-52 object-cover rounded-xl transition-transform duration-300 group-hover:scale-105"
                width={5000}
                height={5000}
              />

              <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <Button>View Project</Button>
              </div>
            </div>

            <div className="text-xl">
              PARA PO{" "}
              <Button
                asChild
                className="ml-2 rounded-full animate-bounce duration-300 ease-in-out"
              >
                <Link href="https://dribbble.com/Saul_08" target="_blank">
                  <Dribbble />
                </Link>
              </Button>
            </div>
            <div className="text-sm text-muted-foreground">
              PARA PO is an application for PWDs that enables them to travel
              safely to their destination. I designed PARA PO for a start up
              competition called Founders Live.
            </div>

            <div className="gap-2 flex flex-wrap">
              {design.map((stack) => (
                <Badge
                  key={stack.name}
                  className="bg-primary border border-transparent hover:border-primary transition-colors duration-300 ease-in-out dark:bg-secondary"
                >
                  <Icon icon={stack.icon} className="w-4 h-4" />
                  {stack.name}
                </Badge>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export { Projects };
