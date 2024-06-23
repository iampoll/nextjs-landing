"use client";
import React from "react";
import Image from "next/image";

import { ContainerScroll } from "@/components/container-scroll-animation";
import { BorderBeam } from "@/components/magicui/border-beam";

export function HeroScroll() {
  return (
    <div className="flex flex-col overflow-hidden">
      <ContainerScroll titleComponent={<></>}>
        <BorderBeam size={500} duration={12} delay={9} />
        <Image
          src="/dashboard.png"
          alt="hero"
          height={720}
          width={1400}
          className="mx-auto rounded-2xl object-cover h-full object-left-top"
          draggable={false}
        />
      </ContainerScroll>
    </div>
  );
}
