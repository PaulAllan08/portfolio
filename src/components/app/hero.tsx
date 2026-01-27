import { AnimatedGridPattern } from "@/components/magicui/animated-grid-pattern";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { BlurFade } from "@/components/magicui/blur-fade";
import { cn } from "@/lib/utils";
import Image from "next/image";

export default function Home() {
  return (
    <div className="  mx-auto w-full  ">
      <BlurFade delay={0.5} inView>
        <div className="relative flex h-[450px] w-full flex-col items-center justify-center overflow-hidden rounded-lg  bg-background">
          <AnimatedGridPattern
            numSquares={30}
            maxOpacity={0.1}
            duration={3}
            repeatdelay={1}
            className={cn(
              "[mask-image:radial-gradient(250px_circle_at_center,white,transparent)]",
              "inset-x-0 inset-y-[-50%] h-[200%] skew-y-0"
            )}
          />

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
                  Web Developer | Product Designer
                </div>
              </div>
            </div>
            <div className="space-y-2  flex flex-col lg:items-end  mt-6 lg:mt-0">
              <div className="flex animate-pulse items-center justify-center lg:justify-start ">
                <div className="mr-2 h-2 w-2 rounded-full border-green-700 bg-green-600"></div>
                <div className="text-sm text-muted-foreground">
                  Open to work
                </div>
              </div>
            </div>
          </div>
        </div>
      </BlurFade>

      <BlurFade delay={0.5} inView>
        <div className=" space-y-4">
          <div className="text-xs text-muted-foreground">ABOUT ME</div>
          <div>
            Product-focused Web Developer and Product Designer with hands-on experience designing and building digital 
            products from MVP to launch. I bridge design and engineering by crafting intuitive, brand-aligned interfaces and 
            implementing them through scalable solutions. Experienced working cross-functionally with product managers, 
            stakeholders, and engineers, with a strong foundation in both UI/UX design and full-stack development.
          </div>
        </div>
      </BlurFade>

      <BlurFade delay={0.5} inView>
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
      </BlurFade>

      <BlurFade delay={0.5} inView>
        <div className="space-y-4 mt-12">
          <div className="text-sm text-muted-foreground">EXPERIENCE</div>
          <ul className="mb-4 ml-6 border-l">
            <li className="relative ml-10 mb-12">
              <div className="absolute -left-16 top-2 flex items-center justify-center bg-white rounded-full">
                <Avatar className="border size-12 m-auto">
                  <AvatarImage
                    src="/img/copiloted.jpg"
                    alt="copiloted ai"
                    className="object-cover"
                  />
                  <AvatarFallback>logo</AvatarFallback>
                </Avatar>
              </div>

              <div className="flex flex-col-reverse  md:flex-row md:items-center md:justify-between md:pt-3">
                <div>
                  <div>Copiloted AI</div>
                  <div className="text-sm text-muted-foreground">
                    Junior Software Engineer (On-site)
                  </div>
                </div>
                
                <div className="text-sm  ">
                  <div className="text-end font-bold">Contract</div>
                  <div className="text-muted-foreground">   Aug 2025 to Present</div>
                </div>
              </div>
            </li>

            <li className="relative ml-10 mb-12">
              <div className="absolute -left-16 top-2 flex items-center justify-center bg-white rounded-full">
                <Avatar className="border size-12 m-auto">
                  <AvatarImage
                    src="/img/frost.jpg"
                    alt="frost design"
                    className="object-cover"
                  />
                  <AvatarFallback>logo</AvatarFallback>
                </Avatar>
              </div>

              <div className="flex flex-col-reverse  md:flex-row md:items-center md:justify-between md:pt-3">
                <div>
                  <div>Frost Design & Consulting Group Inc.</div>
                  <div className="text-sm text-muted-foreground">
                    UI/Visual Designer (Remote)
                  </div>
                </div>
                <div className="text-sm  ">
                  <div className="text-end font-bold">Contract</div>
                  <div className="text-muted-foreground">July to Sep 2025</div>
                </div>
              </div>
            </li>

            <li className="relative ml-10 mb-12">
              <div className="absolute -left-16 top-2 flex items-center justify-center bg-white rounded-full">
                <Avatar className="border size-12 m-auto">
                  <AvatarImage
                    src="/img/pito.webp"
                    alt="pito logo"
                    className="object-cover"
                  />
                  <AvatarFallback>logo</AvatarFallback>
                </Avatar>
              </div>

              <div className="flex flex-col-reverse  md:flex-row md:items-center md:justify-between md:pt-3">
                <div>
                  <div>
                    Provincial Information Technology Office Bataan (PITO)
                  </div>
                  <div className="text-sm text-muted-foreground">
                    Web Developer/Designer (On-site)
                  </div>
                </div>
                <div className="text-sm ">
                  <div className="text-end font-bold">Internship</div>
                  <div className="text-muted-foreground">Aug to Dec 2024</div>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </BlurFade>
    </div>
  );
}
