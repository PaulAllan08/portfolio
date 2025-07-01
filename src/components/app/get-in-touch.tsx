import { Button } from "@/components/ui/button";
import { Send } from "lucide-react";
import Link from "next/link";

export default function GetInTouch() {
  return (
    <div className="space-y-4 mt-12">
      <div className="text-sm text-muted-foreground text-center md:text-start">
        GET IN TOUCH
      </div>
      <div className="flex flex-col md:justify-between gap-4 md:flex-row md:items-center md:gap-0 items-center justify-center text-center  md:text-start">
        <div className="flex items-center gap-4">
          <div>
            <div className="text-xl">
              Let&apos;s work on something cool together!
            </div>
            <div className="text-sm text-muted-foreground">
              Send me a message
            </div>
          </div>
        </div>
        <div className="w-fit">
          <Link href="mailto:palaciopaulbermudez@gmail.com" target="_blank">
            <Button>
              <Send />
              Send a message
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
