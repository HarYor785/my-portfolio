"use client";

import React from 'react'
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Navbar from '@/components/Navbar';
import Link from 'next/link';
import AnimatedButton from '@/components/ui/AnimatedBtn';


const PortfolioContent = ({project}:{project: any}) => {
  return (
    <>
        <Navbar/>
        <div className="min-h-screen bg-gradient-to-r from-[#f6f7fb] to-[#eaf2ff]">
        {/* HERO */}
        <section className="relative w-full overflow-hidden bg-blue-950">
            <div className="relative z-10 max-w-6xl mx-auto px-6 mt-56 h-full flex flex-col justify-end pb-16">
            <motion.h1
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="text-5xl md:text-7xl font-bold text-white"
            >
                {project.title}
            </motion.h1>
            <p className="mt-4 text-lg text-gray-300 max-w-2xl">
                {project.overview}
            </p>
            <div className="mt-6 flex items-center gap-4">
                <Badge className="rounded-full px-4 py-2 text-sm">
                  {project.category}
                </Badge>
                {
                  project.repoUrl && (
                    <AnimatedButton
                      as="link"
                      target='_blank'
                      href={project.repoUrl}
                      className='px-6! py-2! text-sm'
                    >
                      📦 View Source Code
                    </AnimatedButton>
                  )
                }
                {
                  project.liveUrl && (
                    <AnimatedButton
                      as="link"
                      target='_blank'
                      href={project.liveUrl}
                      className='px-6! py-2! text-sm'
                    >
                      🚀 View Live Project
                    </AnimatedButton>
                  )
                }
            </div>
            </div>
        </section>

        {/* CONTENT */}
        <section className="max-w-6xl mx-auto px-6 py-8 space-y-28">
          <p className="mt-4 text-lg text-gray-600">
                {project.overviewTwo}
            </p>
            {/* Challenges */}
            <SectionWithImage
            title="Project Challenges"
            items={project.projectChallenges}
            image={project.images[0]}
            />

            {/* Solutions */}
            <SectionWithImage
            title="Solutions"
            items={project.solutions}
            image={project.images[1]}
            reverse
            />

            <div className='w-full grid grid-cols-1 md:grid-cols-2 sm:grid-cols-1 gap-10'>
              {/* Key Features */}
              <ListSection title="Key Features" items={project.keyFeatures} />

              {/* Architecture */}
              <ListSection title="Architecture Highlights" items={project.architectureHighlights} />

              {/* Performance */}
              <ListSection title="Performance Optimizations" items={project.performanceOptimizations} />

              {/* Security */}
              <ListSection title="Security Measures" items={project.securityMeasures} />
            </div>

            {/* Tech Stack */}
            <div className="space-y-10">
            <h2 className="text-3xl font-semibold">Tech Stack</h2>
            <div className="grid md:grid-cols-3 gap-8">
                {Object.entries(project.techStack).map(([key, value]) => (
                <Card key={key} className="bg-white/5 border-white/10 rounded-2xl">
                    <CardContent className="p-6 space-y-4">
                    <h3 className="text-xl font-medium capitalize">{key}</h3>
                    {(value as any[]).map((tech, i) => (
                        <Badge key={i} className="mr-2 mb-2 rounded-full">
                        {tech}
                        </Badge>
                    ))}
                    </CardContent>
                </Card>
                ))}
            </div>
            </div>

            {/* Impact */}
            <ListSection title="Impact" items={project.impact} />
        </section>
        </div>
    </>
  )
}

function SectionWithImage({
  title,
  items,
  image,
  reverse = false,
}: {
  title: string;
  items: string[];
  image: string;
  reverse?: boolean;
}) {
  return (
    <div className={`grid md:grid-cols-2 gap-16 items-center ${reverse ? "md:flex-row-reverse" : ""}`}>
      <div className="space-y-6">
        <h2 className="text-3xl font-semibold">{title}</h2>
        <ul className="space-y-3 text-gray-400">
          {items.map((item, i) => (
            <li key={i}>• {item}</li>
          ))}
        </ul>
      </div>
      <img src={image} alt={title} className="rounded-2xl shadow-2xl" />
    </div>
  );
}

function ListSection({ title, items }: { title: string; items: string[] }) {
  return (
    <div className="space-y-6">
      <h2 className="text-3xl font-semibold">{title}</h2>
      <ul className="space-y-3 text-gray-400">
        {items.map((item, i) => (
          <li key={i}>• {item}</li>
        ))}
      </ul>
    </div>
  );
}

export default PortfolioContent