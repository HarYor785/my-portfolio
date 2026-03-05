"use client";

import { experiences } from "@/lib/utils";
import { motion } from "framer-motion";
import Link from "next/link";


export default function ExperienceSection() {
  return (
    <section id="experience" className="relative bg-linear-to-r from-[#f6f7fb] to-[#eef2f9]">

      {/* Background Glow */}
      <div className="absolute inset-0 -z-10 opacity-30 bg-gradient-to-b from-blue-50 to-white" />

    <div className="py-16 px-6 md:px-16 max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-28"
        >
            <h2 className="text-5xl md:text-7xl font-bold tracking-tight bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Professional Experience
            </h2>

            <p className="mt-6 text-lg text-gray-600 max-w-2xl mx-auto">
            Real-world impact, engineering leadership, and production contributions.
            </p>
        </motion.div>

        {/* Experience Timeline */}
        <div className="space-y-20 relative">

            {/* Timeline Line */}
            <div className="absolute left-6 top-0 bottom-0 w-[2px] bg-gradient-to-b from-blue-600 to-purple-600" />

            {experiences.map((exp, index) => (
            <motion.div
                key={exp.company}
                initial={{ opacity: 0, x: -60 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.15 }}
                viewport={{ once: true }}
                className="relative pl-16 group"
            >

                {/* Timeline Node */}
                <div className="absolute left-[19px] top-2 w-4 h-4 rounded-full bg-blue-600 shadow-lg" />

                <div
                className="
                    p-10 rounded-3xl
                    border border-gray-200
                    bg-white/70 backdrop-blur-xl
                    shadow-lg hover:shadow-2xl
                    transition duration-500
                "
                >

                {/* Role + Company */}
                <div className="mb-8">
                    <h3 className="text-2xl text-gray-400 md:text-3xl font-semibold group-hover:text-purple-600 transition">
                        {exp.role}
                    </h3>

                    <div className="flex justify-between mt-3 text-gray-600 text-sm md:text-base">
                    <span>{exp.company}</span>
                    <span>{exp.period}</span>
                    </div>

                    <p className="mt-6 text-gray-600 leading-relaxed max-w-2xl">
                    {exp.description}
                    </p>
                </div>

                {/* Achievements */}
                <div className="space-y-4">
                    {exp.achievements.map((item) => (
                    <div key={item} className="flex gap-4 items-start">
                        <span className="mt-2 w-2 h-2 rounded-full bg-blue-600 flex-shrink-0" />
                        <span className="text-gray-700">{item}</span>
                    </div>
                    ))}
                </div>

                </div>
            </motion.div>
            ))}
        </div>
    </div>
    </section>
  );
}