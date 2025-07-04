import { Button } from "@/components/ui/button";
import { ChevronLeft, ExternalLink } from "lucide-react";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { Icon } from "@iconify/react";
import { BlurFade } from "@/components/magicui/blur-fade";

const projectData: Record<
  string,
  {
    title: string;
    description: string;
    tools: { name: string; icon: string }[];
    images: string[];
    url?: string;
  }
> = {
  coursequest: {
    url: "https://coursequest.vercel.app/",
    title: "CourseQuest",
    description:
      "CourseQuest is a learning management system for IT courses, developed as my CAPSTONE Project for DICT Bataan. It streamlines courses to make learning more efficient, offering free IT courses with certification provided by DICT upon completion.",
    tools: [
      { name: "Svelte 5", icon: "ri:svelte-fill" },
      { name: "Sveltekit", icon: "ri:svelte-fill" },
      { name: "Tailwind CSS", icon: "mdi:tailwind" },
      { name: "Node.js", icon: "mdi:nodejs" },
      { name: "TypeScript", icon: "tabler:brand-typescript" },
      { name: "Shadcn", icon: "simple-icons:shadcnui" },
      { name: "Supabase", icon: "ri:supabase-line" },
      { name: "Drizzle ORM", icon: "simple-icons:drizzle" },
      { name: "Vercel", icon: "gg:vercel" },
    ],
    images: [
      "/img/coursequest/full-landingpage.png",
      "/img/coursequest/courses.png",
      "/img/coursequest/preview.png",
      "/img/coursequest/user-dashboard.png",
      "/img/coursequest/enrolled.png",
      "/img/coursequest/learn-new.png",
      "/img/coursequest/quiz-new.png",
      "/img/coursequest/create-course.png",
      "/img/coursequest/edit-course.png",
    ],
  },
  monitly: {
    url: "https://monitly.vercel.app/",
    title: "Monitly",
    description:
      "Monitly a micro SaaS that I built in Svelte/Sveltekit it is a uptime website monitoring tool designed to help website owners and developers stay informed about their sites health and quickly respond to issues by alerting them once the website is down.",
    tools: [
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
    ],
    images: [
      "/img/monitly/landingpage-full.png",
      "/img/monitly/url-dashboard.png",
      "/img/monitly/dashboard.png",
      "/img/monitly/add-monitor.png",
      "/img/monitly/login.png",
      "/img/monitly/register.png",
      "/img/monitly/email-new.png",
    ],
  },
  event: {
    title: "Event Management System",
    description:
      "The system is an Event Management and Attendance Tracking platform that I developed during my internship it streamlines event organization and attendance recording using QR codes, developed in my internship at PITO (Provincial Information and Technology Office). Administrators can create custom events, manage employees, offices, and users, while each employee uses a unique QR code to check in at events.",
    tools: [
      { name: "Svelte 5", icon: "ri:svelte-fill" },
      { name: "Sveltekit", icon: "ri:svelte-fill" },
      { name: "Tailwind CSS", icon: "mdi:tailwind" },
      { name: "Node.js", icon: "mdi:nodejs" },
      { name: "TypeScript", icon: "tabler:brand-typescript" },
      { name: "Shadcn", icon: "simple-icons:shadcnui" },
      { name: "Drizzle ORM", icon: "simple-icons:drizzle" },
      { name: "Docker", icon: "mdi:docker" },
    ],
    images: [
      "/img/event/login.png",
      "/img/event/create-event.png",
      "/img/event/qr-code.png",
      "/img/event/filter.png",
      "/img/event/scan.png",
      "/img/event/attendance.png",
    ],
  },
  genifile: {
    url: "https://genifile.vercel.app/",
    title: "Genifile",
    description:
      "An Invoice Generator app that helps freelancers and businesses create professional invoices instantly. Still in development.",
    tools: [
      { name: "Next.js", icon: "teenyicons:nextjs-outline" },
      { name: "Tailwind CSS", icon: "mdi:tailwind" },
      { name: "TypeScript", icon: "tabler:brand-typescript" },
    ],
    images: [
      "/img/genifile/cropped-home.png",
      "/img/genifile/cropped-generate.png",
    ],
  },
};
type PageProps = {
  params: {
    projectName: string;
  };
};

export const dynamicParams = false;

export async function generateStaticParams() {
  return Object.keys(projectData).map((projectName) => ({
    projectName,
  }));
}

export default function ProjectShotsPage({ params }: PageProps) {
  const { projectName } = params;
  const project = projectData[projectName];

  if (!project) return notFound();

  return (
    <div className="px-4 mx-auto w-full max-w-4xl pb-32 mt-12 space-y-24">
      <div>
        <BlurFade delay={0.25} inView>
          <div className="pb-12">
            <Link href="/">
              <Button variant="ghost">
                <ChevronLeft />
                Go Back
              </Button>
            </Link>
          </div>
        </BlurFade>
        <div className="space-y-4">
          <BlurFade delay={0.25} inView>
            <div className="flex justify-between items-start space-y-4 md:items-center md:flex-row flex-col">
              <div className="text-xl font-semibold">{project.title}</div>{" "}
              {project.url && (
                <Link href={project.url} target="_blank">
                  <Button>
                    <ExternalLink />
                    Visit Project
                  </Button>
                </Link>
              )}
            </div>
            <div className="text-sm text-muted-foreground text-start">
              {project.description}
            </div>

            <div className="gap-2 flex flex-wrap mt-2">
              {project.tools.map((tool) => (
                <Badge
                  key={tool.name}
                  className="bg-primary border border-transparent hover:border-primary transition-colors duration-300 ease-in-out dark:bg-secondary"
                >
                  <Icon icon={tool.icon} className="w-4 h-4 mr-1" />
                  {tool.name}
                </Badge>
              ))}
            </div>
          </BlurFade>
          <BlurFade delay={0.5} inView>
            <div className="grid grid-cols-1 gap-4 pt-6 ">
              {project.images.map((src, index) => (
                <Image
                  key={index}
                  src={src}
                  alt={`${project.title} screenshot ${index + 1}`}
                  width={1200}
                  height={800}
                  className="rounded-lg border shadow-lg"
                />
              ))}
            </div>
          </BlurFade>
        </div>
      </div>
    </div>
  );
}
