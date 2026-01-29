import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { ShieldCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Competitions() {
  return (
    <div className="space-y-4 mt-12 ">
      <div className="text-sm text-muted-foreground">
        HACKATHONS / CERTIFICATIONS
      </div>
      <ul className="mb-4 ml-4  border-l">
        <li className="relative ml-10 space-y-2 mb-12">
          <div className="absolute -left-16 top-2 flex items-center justify-center bg-white rounded-full">
            <Avatar className="border size-12 m-auto">
              <AvatarImage
                src="/img/frost.jpg"
                alt="logo"
                className="object-cover"
              />
              <AvatarFallback>logo</AvatarFallback>
            </Avatar>
          </div>
          <div className="text-sm text-muted-foreground">Jul 2025</div>
          <div>UI Design Boot Camp | Frost Design & Consulting Group Inc.</div>

          <div className="text-sm text-muted-foreground">
            UI Bootcamp organized by Frost Design & Consulting Group Inc.
          </div>
          <Link
            href={
              "https://www.linkedin.com/in/paulallanpalacio/details/certifications/"
            }
            target="_blank"
          >
            <Button className="mt-4 cursor-pointer">
              <ShieldCheck />
              View Certificate
            </Button>
          </Link>
        </li>
        <li className="relative ml-10 space-y-2 mb-12">
          <div className="absolute -left-16 top-2 flex items-center justify-center bg-white rounded-full">
            <Avatar className="border size-12 m-auto">
              <AvatarImage
                src="/img/synergy-2024.png"
                alt="logo"
                className="object-cover"
              />
              <AvatarFallback>logo</AvatarFallback>
            </Avatar>
          </div>
          <div className="text-sm text-muted-foreground">June 2024</div>
          <div> SYNERGY UP EEE Summit Software Solutions | Seven Seven</div>

          <div className="text-sm text-muted-foreground">
            software-development hackathon designed to utilize engineering minds
            in creating solutions to modern problems that bring forth societal
            impacts. Participants from different universities are challenged to
            provide solutions to a general problem, pitching it to actual
            industry representatives.
          </div>
          <Link
            href={
              "https://www.linkedin.com/in/paulallanpalacio/details/certifications/"
            }
            target="_blank"
          >
            <Button className="mt-4 cursor-pointer">
              <ShieldCheck />
              View Certificate
            </Button>
          </Link>
        </li>

        <li className="relative ml-10 space-y-2 mb-12">
          <div className="absolute -left-16 top-2 flex items-center justify-center bg-white rounded-full">
            <Avatar className="border size-12 m-auto">
              <AvatarImage
                src="/img/appcon-2023.png"
                alt="logo"
                className="object-cover"
              />
              <AvatarFallback>logo</AvatarFallback>
            </Avatar>
          </div>
          <div className="text-sm text-muted-foreground">
            Dec 2023 -Jun 2024
          </div>
          <div> AppCon 2023 | OTis Philippines Inc.</div>

          <div className="text-sm text-muted-foreground">
            AppCon is an annual web and mobile app competition in the
            Philippines, started in 2018 by the President of OTis Inc. (Japan)
            with support from ITCareer.ph, ITHured Philippines Inc., and PSITE.
            The competition aims to address social issues in the Philippines and
            provide participants with opportunities for recognition and societal
            contribution.
          </div>
          <Link
            href={
              "https://www.linkedin.com/in/paulallanpalacio/details/certifications/"
            }
            target="_blank"
          >
            <Button className="mt-4 cursor-pointer">
              <ShieldCheck />
              View Certificate
            </Button>
          </Link>
        </li>

        <li className="relative ml-10 space-y-2 mb-12">
          <div className="absolute -left-16 top-2 flex items-center justify-center bg-white rounded-full">
            <Avatar className="border size-12 m-auto">
              <AvatarImage
                src="/img/hack4gov.png"
                alt="logo"
                className="object-cover"
              />
              <AvatarFallback>logo</AvatarFallback>
            </Avatar>
          </div>
          <div className="text-sm text-muted-foreground">Sep 2023</div>
          <div> Hack4Gov 2 CERT-PH Cyber Challenge | DICT</div>

          <div className="text-sm text-muted-foreground">
            HackForGov is an annual government-backed Capture-the-Flag (CTF)
            cybersecurity competition in the Philippines, organized by
            DICT–CERT‑PH aimed at higher‑education students.
          </div>
          <Link
            href={
              "https://www.linkedin.com/in/paulallanpalacio/details/certifications/"
            }
            target="_blank"
          >
            <Button className="mt-4 cursor-pointer">
              <ShieldCheck />
              View Certificate
            </Button>
          </Link>
        </li>

        <li className="relative ml-10 space-y-2 mb-12">
          <div className="absolute -left-16 top-2 flex items-center justify-center bg-white rounded-full">
            <Avatar className="border size-12 m-auto">
              <AvatarImage
                src="/img/synergy-2023.png"
                alt="logo"
                className="object-cover"
              />
              <AvatarFallback>logo</AvatarFallback>
            </Avatar>
          </div>
          <div className="text-sm text-muted-foreground">June 2024</div>
          <div>
            {" "}
            SYNERGY UP EEE Summit Software Solutions | Converge ICT Solutions
            Inc.
          </div>

          <div className="text-sm text-muted-foreground">
            software-development hackathon designed to utilize engineering minds
            in creating solutions to modern problems that bring forth societal
            impacts. Participants from different universities are challenged to
            provide solutions to a general problem, pitching it to actual
            industry representatives.
          </div>
          <Link
            href={
              "https://www.linkedin.com/in/paulallanpalacio/details/certifications/"
            }
            target="_blank"
          >
            <Button className="mt-4 cursor-pointer">
              <ShieldCheck />
              View Certificate
            </Button>
          </Link>
        </li>

        <li className="relative ml-10 space-y-2 mb-12">
          <div className="absolute -left-16 top-2 flex items-center justify-center bg-white rounded-full">
            <Avatar className="border size-12 m-auto">
              <AvatarImage
                src="/img/founders-live.png"
                alt="logo"
                className="object-cover"
              />
              <AvatarFallback>logo</AvatarFallback>
            </Avatar>
          </div>
          <div className="text-sm text-muted-foreground">Jul 2024</div>
          <div> Founders Live Balanga</div>

          <div className="text-sm text-muted-foreground">
            Founders Live is a competition that brings together startup
            founders, innovators, and the community for an exciting 90-second
            pitch competition. In each event, selected entrepreneurs share their
            big ideas in just 90 seconds — no slides, no fluff — followed by
            live audience Q&A and voting.
          </div>
          <Link
            href={
              "https://www.linkedin.com/in/paulallanpalacio/details/certifications/"
            }
            target="_blank"
          >
            <Button className="mt-4 cursor-pointer">
              <ShieldCheck />
              View Certificate
            </Button>
          </Link>
        </li>
      </ul>
    </div>
  );
}

export { Competitions };
