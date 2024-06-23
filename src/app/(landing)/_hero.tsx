"use client";

import React from "react";

import AnimatedGradientText from "@/components/magicui/animated-gradient-text";
import { ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

import { motion } from "framer-motion";
import { HeroHighlight, Highlight } from "@/components/magicui/hero-highlight";
import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";
import Particles from "@/components/magicui/particles";

function Hero() {
  return (
    <div className="relative h-[100svh] overflow-hidden py-20 text-center">
      <Particles
        className="absolute inset-0"
        quantity={100}
        ease={80}
        color="#000000"
        refresh
      />

      <AnimatedGradientText>
        🎉 <hr className="mx-2 h-4 w-[1px] shrink-0 bg-gray-300" />{" "}
        <span
          className={cn(
            `inline animate-gradient bg-gradient-to-r from-[#ffaa40] via-[#9c40ff] to-[#ffaa40] bg-[length:var(--bg-size)_100%] bg-clip-text text-transparent`
          )}
        >
          Explore Our Demo Now
        </span>
        <ChevronRight className="ml-1 size-3 transition-transform duration-300 ease-in-out group-hover:translate-x-0.5" />
      </AnimatedGradientText>

      <h1 className="relative max-w-[46.5rem] text-balance bg-gradient-to-br from-black from-50% to-neutral-200/60 bg-clip-text pt-5 text-4xl font-semibold tracking-tighter text-transparent dark:text-white sm:text-7xl mx-auto md:px-4 md:py-2 md:text-center md:text-7xl lg:text-7xl my-4">
        Student Information Management System
      </h1>

      <HeroHighlight>
        <motion.h1
          initial={{
            opacity: 0,
            y: 20,
          }}
          animate={{
            opacity: 1,
            y: [20, -5, 0],
          }}
          transition={{
            duration: 0.5,
            ease: [0.4, 0.0, 0.2, 1],
          }}
        >
          <p className="text-balance max-w-[80ch] mx-auto tracking-tight inline">
            Leverage the power of {""}
          </p>
          <Highlight className="text-balance max-w-[80ch] mx-auto tracking-tight inline font-medium">
            modern technology
          </Highlight>
          <p className="text-balance max-w-[80ch] mx-auto tracking-tight inline">
            {""} with our advanced SIMS, <br className="hidden md:block" />{" "}
            providing intuitive tools for educators and seamless experiences for
            students.
          </p>
        </motion.h1>
      </HeroHighlight>

      <section className="flex px-4 max-w-[500px] mx-auto mt-8">
        <Link
          href="/"
          className={cn(
            buttonVariants({
              size: "lg",
              variant: "outline",
            }),
            "gap-2 whitespace-pre md:flex",
            "group relative w-full gap-1 overflow-hidden  text-sm font-semibold tracking-tighter transition-all duration-150 ease-in-out hover:ring-2 hover:ring-neutral-300 hover:ring-offset-2 hover:ring-offset-inherit dark:hover:ring-primary dark:hover:ring-offset-primary mr-4"
          )}
        >
          Learn More
          <ChevronRight className="ml-1 size-4 flex-shrink-0 transition-all duration-300 ease-out group-hover:translate-x-1" />
        </Link>

        <Link
          href="/"
          className={cn(
            buttonVariants({
              variant: "default",
              size: "lg",
            }),
            "gap-2 whitespace-pre md:flex",
            "group relative w-full gap-1  text-sm font-semibold tracking-tighter ring-offset-inherit transition-all duration-150 ease-in-out hover:ring-2 hover:ring-primary hover:ring-offset-2 hover:ring-offset-current dark:hover:ring-neutral-50 ml-4"
          )}
        >
          Get Started
          <ChevronRight className="ml-1  size-4 flex-shrink-0 transition-all duration-300 ease-out group-hover:translate-x-1" />
        </Link>
      </section>
    </div>
  );
}

export default Hero;
