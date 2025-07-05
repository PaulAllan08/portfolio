import { Button } from "@/components/ui/button";
import { ChevronLeft, ExternalLink } from "lucide-react";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { Icon } from "@iconify/react";
import { BlurFade } from "@/components/magicui/blur-fade";
import { projectData } from "@/components/app/project-data";

// ✅ Static generation: works with Vercel
export const dynamicParams = false;

export async function generateStaticParams() {
  return Object.keys(projectData).map((projectName) => ({
    projectName,
  }));
}

// ✅ DO NOT use a custom PageProps type — inline the type instead
export default async function ProjectShotsPage({
  params,
}: {
  params: { projectName: string };
}) {
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
