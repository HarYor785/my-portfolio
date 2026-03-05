"use client";

import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { projects } from "@/lib/utils";
import Navbar from "@/components/Navbar";
import Contact from "@/components/layouts/Contact";

const categories = [
  "All",
  "Full Stack / Real-Time Systems",
  "FinTech / Distributed Systems",
  "Enterprise / Business Systems",
  "Content Platforms",
  "Internal Tools",
];

export default function Portfolio() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProjects = useMemo(() => {
    if (activeCategory === "All") return projects;
    return projects.filter((p) => p.category === activeCategory);
  }, [activeCategory]);

  const featuredProject = projects[0];

  return (
    <>
        <Navbar/>
        <div className="relative min-h-screen bg-linear-to-r from-[#f6f7fb] to-[#eef2f9] overflow-hidden">
        {/* Background Glow */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(120,119,198,0.15),_transparent_40%)] pointer-events-none" />

        {/* HERO */}
        <section className="max-w-7xl mx-auto px-6 pt-28 pb-20 text-center">
            <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-6xl font-bold leading-tight"
            >
            Engineering Systems. <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-500">
                Solving Real Problems.
            </span>
            </motion.h1>

            <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mt-6 text-gray-400 max-w-2xl mx-auto text-lg"
            >
            A curated collection of scalable applications, internal tools,
            real-time architectures, and production-grade systems.
            </motion.p>
        </section>


        {/* FEATURED PROJECT */}
            <section className="max-w-7xl mx-auto px-6 mb-24">
            <motion.div
                initial={{ opacity: 40, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="grid md:grid-cols-2 gap-10 items-center bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8"
            >
                <div className="overflow-hidden rounded-2xl">
                <img
                    src={featuredProject.images?.[0]}
                    alt={featuredProject.title}
                    className="w-full h-[350px] object-cover rounded-2xl hover:scale-105 transition duration-500"
                />
                </div>

                <div>
                <p className="uppercase text-xs tracking-widest text-indigo-400 mb-3">
                    Featured Project
                </p>
                <h2 className="text-3xl font-bold mb-4">
                    {featuredProject.title}
                </h2>
                <p className="text-gray-400 mb-6 line-clamp-4">
                    {featuredProject.overview}
                </p>

                <Link
                    href={`/portfolio/${featuredProject.slug}`}
                    className="inline-block px-6 py-3 text-white bg-indigo-600 hover:bg-indigo-500 transition rounded-xl font-medium"
                >
                    View Case Study →
                </Link>
                </div>
            </motion.div>
            </section>

        {/* PROJECT GRID */}
        <section className="max-w-7xl mx-auto px-6 pb-32">
            <motion.div layout className="grid md:grid-cols-2 gap-10">
            <AnimatePresence>
                {filteredProjects.map((project) => (
                <motion.div
                    key={project.id}
                    layout
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 40 }}
                    transition={{ duration: 0.4 }}
                    className="group bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl overflow-hidden hover:border-indigo-500/50 transition-all duration-300"
                >
                    <div className="overflow-hidden">
                    <img
                        src={project.images?.[0]}
                        alt={project.title}
                        className="w-full h-60 object-cover group-hover:scale-105 transition duration-500"
                    />
                    </div>

                    <div className="p-6">
                    <p className="text-xs uppercase tracking-widest text-gray-500 mb-2">
                        {project.category}
                    </p>

                    <h3 className="text-xl font-semibold mb-3 group-hover:text-indigo-400 transition">
                        {project.title}
                    </h3>

                    <p className="text-gray-400 text-sm mb-4 line-clamp-3">
                        {project.overview}
                    </p>

                    <div className="flex flex-wrap gap-2 mb-6">
                        {project.techStack?.frontendWeb?.slice(0, 3).map(
                        (tech: string) => (
                            <span
                            key={tech}
                            className="text-xs px-3 py-1 bg-white/10 rounded-full text-gray-300"
                            >
                            {tech}
                            </span>
                        )
                        )}
                    </div>

                    <Link
                        href={`/portfolio/${project.slug}`}
                        className="inline-flex items-center text-sm font-medium text-indigo-400 group-hover:translate-x-1 transition"
                    >
                        View Case Study →
                    </Link>
                    </div>
                </motion.div>
                ))}
            </AnimatePresence>
            </motion.div>
        </section>

        {/* CTA */}
        <Contact/>
        </div>
    </>
  );
}