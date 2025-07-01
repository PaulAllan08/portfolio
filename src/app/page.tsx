import {
  Hero,
  Skills,
  Projects,
  Competitions,
  GetInTouch,
} from "@/components/app";

import { BlurFade } from "@/components/magicui/blur-fade";

export default function Home() {
  return (
    <div className="px-4   mx-auto w-full max-w-4xl pb-32">
      <Hero />
      <BlurFade delay={1} inView>
        <div className="mt-32">
          <Skills />
        </div>
      </BlurFade>
      <BlurFade delay={1.25} inView>
        <div>
          <Projects />
        </div>
      </BlurFade>
      <BlurFade delay={1.5} inView>
        <div className="mt-32">
          <Competitions />
        </div>
      </BlurFade>
      <BlurFade delay={1.75} inView>
        <div className="mt-32">
          <GetInTouch />
        </div>
      </BlurFade>
    </div>
  );
}
