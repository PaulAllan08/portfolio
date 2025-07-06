import {
  Hero,
  Skills,
  Projects,
  Competitions,
  GetInTouch,
  DesignMarquee,
} from "@/components/app";

import { BlurFade } from "@/components/magicui/blur-fade";

export default function Home() {
  return (
    <div className=" pb-32">
      <div className="px-4  mx-auto w-full max-w-4xl">
        <Hero />
      </div>
      <BlurFade delay={1} inView>
        <div className="px-4  mx-auto w-full max-w-4xl">
          <Skills />
        </div>
      </BlurFade>
      <BlurFade delay={1} inView>
        <div className="px-4  mt-32 mx-auto w-full max-w-4xl">
          <Projects />
        </div>
      </BlurFade>
      <BlurFade delay={1} inView>
        <div className="px-4  mt-32">
          <DesignMarquee />
        </div>
      </BlurFade>
      <BlurFade delay={1} inView>
        <div className="px-4  mt-32 mx-auto w-full max-w-4xl">
          <Competitions />
        </div>
      </BlurFade>
      <BlurFade delay={1} inView>
        <div className="px-4  mt-32 mx-auto w-full max-w-4xl">
          <GetInTouch />
        </div>
      </BlurFade>
    </div>
  );
}
