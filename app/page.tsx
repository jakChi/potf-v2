"use client";

import { motion } from "framer-motion";
import React from "react";

import { AuroraBackground } from "../components/ui/aurora-background";
import { HoverEffect } from "../components/ui/card-hover-effect";
import { CoolButton } from "@/components/ui/cool-button";

import { projects } from "@/lib/someProjects";
import Link from "next/link";
// import Image from "next/image";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-between p-24">
      <section className="w-full m-10">
        <AuroraBackground>
          <motion.div
            initial={{ opacity: 0.0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              delay: 0.3,
              duration: 0.8,
              ease: "easeInOut",
            }}
            className="relative flex flex-col gap-4 items-center justify-center px-4"
          >
            <div className="text-3xl md:text-7xl font-bold dark:text-white text-center">
              Background lights are cool you know.
            </div>
            <div className="font-extralight text-base md:text-4xl dark:text-neutral-200 py-4">
              And this, is chemical burn.
            </div>
            <button className="bg-black dark:bg-white rounded-full w-fit text-white dark:text-black px-4 py-2">
              Debug now
            </button>
          </motion.div>
        </AuroraBackground>
      </section>
      <section>
        <div className="max-w-5xl mx-auto px-8">
          <h2 className="text-3xl md:text-6xl font-semibold text-center">
            Some of my projects
          </h2>
          <div>
            <HoverEffect items={projects} />
          </div>

          <CoolButton>
            <Link href="/projects">See All Projects</Link>
          </CoolButton>
        </div>
      </section>
    </div>
  );
}
