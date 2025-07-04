// import { BlurFade } from "@/components/magicui/blur-fade";
import { Button } from "@/components/ui/button";
import HeroVideoDialog from "@/components/magicui/hero-video-dialog";
import { ChevronLeft } from "lucide-react";
import Link from "next/link";

export default function Videos() {
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
          <div className="space-y-2">
            <div className="text-xl font-semibold">READI PROTOTYPE DEMO</div>{" "}
            <div className="text-sm text-muted-foreground text-start">
              A prototype I designed in Figma that I presented to the governor
              of our province during my internship.
            </div>
          </div>
          <div className="relative mt-2">
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
      </div>
    </div>
  );
}
