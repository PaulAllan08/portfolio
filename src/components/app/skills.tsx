import { Icon } from "@iconify/react";
import { Badge } from "@/components/ui/badge";

export const skills = [
  { name: "HTML", icon: "flowbite:html-solid" },
  { name: "CSS", icon: "flowbite:css-solid" },
  { name: "Tailwind CSS", icon: "mdi:tailwind" },
  { name: "Svelte 5", icon: "ri:svelte-fill" },
  { name: "Sveltekit", icon: "ri:svelte-fill" },
  { name: "React", icon: "akar-icons:react-fill" },
  { name: "Next.js", icon: "ri:nextjs-fill" },
  { name: "Node.js", icon: "mdi:nodejs" },
  { name: "TypeScript", icon: "tabler:brand-typescript" },
  { name: "Shadcn", icon: "simple-icons:shadcnui" },
  { name: "Supabase", icon: "ri:supabase-line" },
  { name: "Drizzle ORM", icon: "simple-icons:drizzle" },
  { name: "Postgres SQL", icon: "akar-icons:postgresql-fill" },
  { name: "Figma", icon: "solar:figma-outline" },
  { name: "Framer", icon: "teenyicons:framer-outline" },
  { name: "Adobe XD", icon: "dhugeicons:adobe-xd" },
  { name: "Git", icon: "mdi:git" },
  { name: "Github", icon: "mdi:github" },
  { name: "Vercel", icon: "gg:vercel" },
  { name: "Docker", icon: "mdi:docker" },
  { name: "PayPal", icon: "hugeicons:paypal" },
];

export default function Skills() {
  return (
    <div className="space-y-4 mt-12">
      <div className="text-sm text-muted-foreground">TECHNICAL SKILLS</div>
      <div className="gap-2 flex flex-wrap">
        {skills.map((skill) => (
          <Badge
            key={skill.name}
            className="bg-primary dark:bg-secondary border border-transparent hover:border-primary transition-colors duration-300 ease-in-out "
          >
            <Icon icon={skill.icon} className="w-4 h-4" />
            {skill.name}
          </Badge>
        ))}
      </div>
    </div>
  );
}

export { Skills };
