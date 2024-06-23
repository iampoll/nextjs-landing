import DotPattern from "@/components/magicui/dot-pattern";
import { cn } from "@/lib/utils";
import Image from "next/image";
import React from "react";

function Testimonial() {
  return (
    <section className="relative text-center text-balance flex flex-col gap-4 justify-center items-center text-muted-foreground py-8 md:py-16 lg:py-24 min-h-[100svh] md:gap-8 lg:gap-12 md:text-xl lg:text-2xl">
      <Image
        unoptimized
        src="https://scontent.fmnl7-2.fna.fbcdn.net/v/t39.30808-6/317476380_3406264189620627_8615193188420405841_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeFfnz8KxwIL__rAlwf03B8Y0ropRF61AHLSuilEXrUAcnYuhQWpH4BkPEgOvZ3DtCwaG5AGcbrdXRSk6dO8cwcL&_nc_ohc=BmmS_ytJEKIQ7kNvgED8Pgj&_nc_ht=scontent.fmnl7-2.fna&oh=00_AYCcbsY72WXRDAtp6qt_ldbWK7oL_GaJrvE21taVLyP7pQ&oe=667DE43E"
        alt="Cristian Ferrond"
        width={50}
        height={50}
        className="md:size-12 lg:size-16 zoom-in-50 rounded-full mx-auto"
      ></Image>

      <p className="max-w-4xl mx-auto text-sm md:text-2xl text-center !leading-9  mb-8">
        "Using SIMS has greatly enhanced my ability to educate and guide my
        students, particularly in the area of tile printing. It has
        significantly improved the quality of our educational experience."
      </p>

      <div>
        <h4 className="tracking-tight font-bold">Cristian Ferrond</h4>
        <p className="text-sm md:text-base">
          Founder of Tile Printing University
        </p>
      </div>

      <DotPattern
        className={cn(
          "[mask-image:radial-gradient(200px_circle_at_center,white,transparent)]"
        )}
      />
    </section>
  );
}

export default Testimonial;
