import React from "react";
import Link from "next/link";
import Image from "next/image";

import { Button } from "./ui/button";
import { siteConfig } from "@/config/site";
import { ChevronRightIcon } from "lucide-react";

import { NavMenu } from "./nav";

function MainNav() {
  return (
    <header className="py-4 px-16 justify-between items-center sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 hidden md:flex">
      <section className="flex gap-4 items-center">
        <Link href="/">
          <Image
            src={siteConfig.logo}
            alt="Logo"
            width={10}
            height={10}
            className="h-auto w-auto max-h-[3rem] max-w-[3rem] sm:max-h-[5rem] sm:max-w-[5rem]"
          ></Image>
        </Link>

        <NavMenu />
      </section>

      <section className="flex gap-4">
        <Button variant="outline">Contact Us</Button>
        <Button className="group transition-all duration-300 ease-out hover:ring-2 hover:ring-primary hover:ring-offset-2">
          Get Started
          <ChevronRightIcon className="ml-1 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
        </Button>
      </section>
    </header>
  );
}

export default MainNav;
