import DotPattern from "@/components/magicui/dot-pattern";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import React from "react";

function Testimonial() {
  return (
    <section className="relative text-center text-balance flex flex-col gap-4 justify-center items-center text-muted-foreground py-8 md:py-16 lg:py-24 min-h-[100svh] md:gap-8 lg:gap-12 md:text-xl lg:text-2xl">
      <Button className="rounded-full w-fit md:size-12 lg:size-16">A</Button>

      <p className="max-w-4xl">
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit.
        Exercitationem omnis iure sed quibusdam ullam fugiat quas minima,
        molestiae velit doloribus."
      </p>

      <div>
        <h4 className="tracking-tight font-bold">Lorem, ipsum.</h4>
        <p className="text-sm md:text-base">Lorem ipsum dolor sit.</p>
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
