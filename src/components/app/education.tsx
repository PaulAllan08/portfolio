import Image from "next/image";

export default function Education() {
  return (
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
  );
}
