// import { BlurFade } from "@/components/magicui/blur-fade";
import { Button } from "@/components/ui/button";
import HeroVideoDialog from "@/components/magicui/hero-video-dialog";
import { ChevronLeft } from "lucide-react";
import Link from "next/link";

export default function Home() {
  return (
    <div className="px-4   mx-auto w-full max-w-4xl pb-32 mt-12 space-y-24">
      <div>
        <div className="pb-12">
          <Link href="/">
            <Button variant="ghost">
              <ChevronLeft />
              Go Back
            </Button>
          </Link>
        </div>
        <div className="space-y-4">
          <div>
            <div className="text-sm text-muted-foreground text-start ">
              COURESQUEST MARKETING VIDEO
            </div>
            <div className="text-xl">
              A marketing video I created for a competition called APPCON 2024.
            </div>
          </div>
          <div className="relative">
            <HeroVideoDialog
              className="block dark:hidden"
              animationStyle="from-center"
              videoSrc="https://www.youtube.com/embed/sZSXkdR37hw?si=D70J8K-XewJSY9rE"
              thumbnailSrc="/img/thumbnail-coursequest.png"
              thumbnailAlt="Hero Video"
            />
            <HeroVideoDialog
              className="hidden dark:block"
              animationStyle="from-center"
              videoSrc="https://www.youtube.com/embed/sZSXkdR37hw?si=D70J8K-XewJSY9rE"
              thumbnailSrc="/img/thumbnail-coursequest.png"
              thumbnailAlt="Hero Video"
            />
          </div>
        </div>
      </div>

      <div className="space-y-4">
        <div>
          <div className="text-sm text-muted-foreground text-start ">
            READI PROTOTYPE DEMO
          </div>
          <div className="text-xl">
            A prototype I designed in Figma that I presented to the governor of
            our province during my internship.
          </div>
        </div>
        <div className="relative">
          <HeroVideoDialog
            className="block dark:hidden"
            animationStyle="from-center"
            videoSrc="https://www.youtube.com/embed/oO12JXydw00?si=_2QDA3m5eWm_AGL9"
            thumbnailSrc="/img/thumbnail-readi.png"
            thumbnailAlt="Hero Video"
          />
          <HeroVideoDialog
            className="hidden dark:block"
            animationStyle="from-center"
            videoSrc="https://www.youtube.com/embed/oO12JXydw00?si=_2QDA3m5eWm_AGL9"
            thumbnailSrc="/img/thumbnail-readi.png"
            thumbnailAlt="Hero Video"
          />
        </div>
      </div>

      <div className="space-y-4">
        <div>
          <div className="text-sm text-muted-foreground text-start ">
            CALMITY PRODUCT PITCH VIDEO
          </div>
          <div className="text-xl">
            A product video I created for a competition called APPCON 2023.
          </div>
        </div>
        <div className="relative">
          <HeroVideoDialog
            className="block dark:hidden"
            animationStyle="from-center"
            videoSrc="https://www.youtube.com/embed/RtviJ_A11W4?si=oD0ERJ3Mhmzi8BhJ"
            thumbnailSrc="/img/thumbnail-calmity.png"
            thumbnailAlt="Hero Video"
          />
          <HeroVideoDialog
            className="hidden dark:block"
            animationStyle="from-center"
            videoSrc="https://www.youtube.com/embed/RtviJ_A11W4?si=oD0ERJ3Mhmzi8BhJ"
            thumbnailSrc="/img/thumbnail-calmity.png"
            thumbnailAlt="Hero Video"
          />
        </div>
      </div>
    </div>
  );
}
