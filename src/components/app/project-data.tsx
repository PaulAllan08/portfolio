export const projectData: Record<
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
      { name: "TypeScript", icon: "tabler:brand-typescript" },
      { name: "Shadcn", icon: "simple-icons:shadcnui" },
      { name: "Supabase", icon: "ri:supabase-line" },
      { name: "Drizzle ORM", icon: "simple-icons:drizzle" },
      { name: "Vercel", icon: "gg:vercel" },
      { name: "Lucia Auth", icon: "simple-icons:lucia" },
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
      { name: "TypeScript", icon: "tabler:brand-typescript" },
      { name: "Shadcn", icon: "simple-icons:shadcnui" },
      { name: "Supabase", icon: "ri:supabase-line" },
      { name: "Drizzle ORM", icon: "simple-icons:drizzle" },
      { name: "Vercel", icon: "gg:vercel" },
      { name: "Apex Chart", icon: "gg:vercel" },
      { name: "PayPal", icon: "hugeicons:paypal" },
      { name: "Oauth", icon: "tabler:brand-oauth" },
    ],
    images: [
      "/img/monitly/login.png",
      "/img/monitly/register.png",
      "/img/monitly/url-dashboard.png",
      "/img/monitly/dashboard.png",
      "/img/monitly/add-monitor.png",
      // "/img/monitly/email-new.png",
      "/img/monitly/landingpage-full.png",
    ],
  },
  event: {
    title: "Event Management System with QR Attendance Tracking (SPA)",
    description:
      "The system is an Event Management and Attendance Tracking platform that I developed during my internship it streamlines event organization and attendance recording using QR codes, developed in my internship at PITO (Provincial Information and Technology Office). Administrators can create custom events, manage employees, offices, and users, while each employee uses a unique QR code to check in at events.",
    tools: [
      { name: "Svelte 5", icon: "ri:svelte-fill" },
      { name: "Sveltekit", icon: "ri:svelte-fill" },
      { name: "Tailwind CSS", icon: "mdi:tailwind" },
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
  drizzup: {
    url: "https://drizzup.vercel.app/",
    title: "DrizzUp",
    description:
      "A modern and stylish e-commerce platform crafted for fashion-forward brands. DrizzUp combines clean design with seamless user experience, making it effortless for customers to explore, discover, and shop the latest trends in clothing and apparel.",
    tools: [
      { name: "React", icon: "mdi:react" },
      { name: "Next js", icon: "ri:nextjs-fill" },
      { name: "Tailwind CSS", icon: "mdi:tailwind" },
      { name: "TypeScript", icon: "tabler:brand-typescript" },
      { name: "Shadcn", icon: "simple-icons:shadcnui" },
      { name: "Vercel", icon: "gg:vercel" },
    ],
    images: [
      "/img/drizzup/landingpage.png",
      "/img/drizzup/landingpage-full.png",
    ],
  },
};
