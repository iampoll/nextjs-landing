import React from "react";

import Hero from "./_hero";
import SocialProof from "./_social-proof";
import { HeroScroll } from "./_hero-scroll";

export default function Home() {
  return (
    <main>
      <Hero />
      <HeroScroll />
      <SocialProof />
    </main>
  );
}
