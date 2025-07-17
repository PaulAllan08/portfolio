import { cn } from "@/lib/utils";
import { Marquee } from "@/components/magicui/marquee";
import { Button } from "@/components/ui/button";
import { Dribbble } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
const reviews = [
  { img: "/img/designs/drizzup.png" },
  { img: "/img/designs/login.png" },
  { img: "/img/designs/chainsaw.png" },
  { img: "/img/designs/coffee-app.png" },
  { img: "/img/designs/crypto.png" },
  { img: "/img/designs/monitly.png" },
  { img: "/img/designs/coursequest.png" },
  { img: "/img/designs/error.png" },
  { img: "/img/designs/student-portal.png" },
  { img: "/img/designs/plant.png" },
  { img: "/img/designs/contact.png" },
];

const DesignCard = ({ img }: { img: string }) => (
  <figure
    className={cn(
      "relative w-xs md:w-xl flex-shrink-0 overflow-hidden rounded-xl",
      "border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05]",
      "dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]"
    )}
  >
    <Image
      src={img}
      alt="Paul Palacio design"
      width={800}
      height={600}
      className="w-full h-auto object-cover border"
    />
  </figure>
);

export default function MarqueeDemo() {
  return (
    <div>
      <div className="mx-auto max-w-4xl px-4 flex md:flex-row flex-col items-start md:items-center justify-between space-y-4">
        <div className="flex flex-col">
          <div className="text-sm text-muted-foreground">MY GALLERY</div>
          <div>These are the designs that I have worked on.</div>
        </div>
        <Link href="https://dribbble.com/Saul_08" target="_blank">
          <Button>
            <Dribbble />
            View Designs
          </Button>
        </Link>
      </div>
      <div className="mt-4 relative flex w-full items-center justify-center overflow-hidden">
        <Marquee pauseOnHover className="[--duration:30s]">
          {reviews.map((r) => (
            <DesignCard key={r.img} img={r.img} />
          ))}
        </Marquee>
      </div>
    </div>
  );
}
