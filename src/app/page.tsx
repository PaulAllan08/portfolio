import Image from "next/image";
import { Skills } from "@/components/app/skills";
import { Projects } from "@/components/app/projects";
import { Competitions } from "@/components/app/competitions";
import { Button } from "@/components/ui/button";
import { FileSymlinkIcon } from "lucide-react";
import { DotPattern } from "@/components/magicui/dot-pattern";
import { cn } from "@/lib/utils";
import Link from "next/link";

export default function Home() {
  return (
    <div className="px-4   mx-auto w-full max-w-4xl ">
      <div className="relative flex h-[400px] w-full flex-col items-center justify-center overflow-hidden rounded-lg  bg-background">
        <DotPattern
          className={cn(
            "[mask-image:radial-gradient(250px_circle_at_center,white,transparent)]"
          )}
        />

        {/* HERO */}
        <div className="z-50 flex flex-col lg:flex-row  items-center justify-between w-full">
          <div className="flex flex-col lg:flex-row  items-center lg:text-start text-center gap-4 ">
            <Image
              src="/img/profile.jpg"
              alt="profile"
              className="w-20 h-20 rounded-full"
              width={1000}
              height={1000}
            />
            <div className="space-y-2">
              <div className="text-4xl font-semibold lg:text-5xl">
                Paul Allan Palacio
              </div>
              <div className="text-sm text-muted-foreground">
                Web Developer | UI/UX Designer
              </div>
            </div>
          </div>
          <div className="space-y-2  flex flex-col lg:items-end  mt-6 lg:mt-0">
            <div className="flex animate-pulse items-center justify-center lg:justify-start ">
              <div className="mr-2 h-2 w-2 rounded-full border-green-700 bg-green-600"></div>
              <div className="text-sm text-muted-foreground">Open to work</div>
            </div>
            <Button asChild className="bg-primary">
              <Link
                href="https://drive.google.com/file/d/1jP6_9JNayR_1fdPc1xS5qJeUGYTB6K79/view?usp=sharing"
                target="_blank"
              >
                <FileSymlinkIcon />
                View Resume
              </Link>
            </Button>
          </div>
        </div>
      </div>
      {/* ABOUT ME */}
      <div className=" space-y-4">
        <div className="text-xs text-muted-foreground">ABOUT ME</div>
        <div>
          Hi, I&apos;m Paul Allan Palacio, a enthusiastic Web Developer and
          UI/UX Designer. My journey began with C# and VB.NET, but over time, I
          discovered a deep love for crafting beautiful, user-centered
          interfaces and websites. With my technical and design expertise, I
          strive to develop intuitive web applications that enhance user
          experience and drive business growth through innovative, user-focused
          solutions.
        </div>
      </div>
      {/* EXPERIENCE */}
      <div className="space-y-4 mt-12">
        <div className="text-sm text-muted-foreground">EXPERIENCE</div>
        <div className="flex flex-col justify-between gap-4 md:flex-row md:items-center md:gap-0">
          <div className="flex items-center gap-4">
            <Image
              src="/img/pito.webp"
              alt="pito"
              className="h-16 w-16 rounded-full"
              width={5000}
              height={5000}
            />
            <div>
              <div className="text-xl">
                Privincial Information Technology Office
              </div>
              <div className="text-sm text-muted-foreground">
                Web Developer Intern (On-site)
              </div>
            </div>
          </div>
          <div className="text-sm text-muted-foreground">
            Aug 2024 to Dec 2024
          </div>
        </div>
      </div>
      {/* EDUCATION */}
      <div className="space-y-4 mt-12">
        <div className="text-sm text-muted-foreground">EDUCATION</div>
        <div className="flex flex-col justify-between gap-4 md:flex-row md:items-center md:gap-0">
          <div className="flex items-center gap-4">
            <Image
              src="/img/apcas.png"
              alt="apcas"
              className="h-16 w-16 rounded-full"
              width={5000}
              height={5000}
            />
            <div>
              <div className="text-xl">
                Asia Pacific College of Advanced Studies
              </div>
              <div className="text-sm text-muted-foreground">
                Bachelor of Science in Information Technology
              </div>
            </div>
          </div>
          <div className="text-sm text-muted-foreground">Jun 2025</div>
        </div>
      </div>
      <div className="mt-32">
        <Skills />
      </div>
      <div>
        <Projects />
      </div>
      <div className="mt-32">
        <Competitions />
      </div>
    </div>
  );
}
