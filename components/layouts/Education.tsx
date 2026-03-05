"use client";

import { certifications, education } from "@/lib/utils";
import { motion } from "framer-motion";



export default function LuxuryEducationSection() {
  return (
    <section id="education" className="relative bg-linear-to-r from-[#f6f7fb] to-[#eef2f9]">

      {/* Luxury Background Glow */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-white via-purple-50 to-white opacity-60" />

        <div className="py-16 px-6 md:px-16 max-w-7xl mx-auto">
            {/* Header */}
            <motion.div
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-center mb-28"
            >
                <h2 className="text-5xl md:text-7xl font-bold tracking-tight bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                    Education & Certifications
                </h2>

                <p className="mt-6 text-lg text-gray-600 max-w-2xl mx-auto">
                Academic foundation and professional learning achievements.
                </p>
            </motion.div>

            <div className="grid lg:grid-cols-2 gap-24">

                {/* Education Card */}
                <div className="space-y-12">
                {education.map((edu) => (
                    <motion.div
                    key={edu.school}
                    initial={{ opacity: 0, x: -60 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className="
                        relative p-14 rounded-[2.5rem]
                        border border-gray-200
                        bg-white/70 backdrop-blur-xl
                        shadow-2xl
                        hover:-translate-y-3
                        transition duration-700
                        overflow-hidden
                    "
                    >
                    {/* Luxury Glow Accent */}
                    <div className="absolute -right-32 -top-32 w-96 h-96 bg-purple-300/30 blur-3xl rounded-full" />

                    <span className="text-sm uppercase tracking-widest text-purple-600 font-semibold">
                        Education
                    </span>

                    <h3 className="text-3xl font-bold mt-6 text-gray-500">
                        {edu.degree}
                    </h3>

                    <p className="text-xl text-gray-600 mt-3">
                        {edu.school}
                    </p>

                    <p className="text-gray-500 mt-3">{edu.period}</p>

                    <p className="mt-8 text-gray-700 leading-relaxed max-w-xl">
                        {edu.description}
                    </p>
                    </motion.div>
                ))}
                </div>

                {/* Certifications Stack Cards */}
                <div className="space-y-8 mt-10 lg:mt-20">
                {certifications.map((cert, index) => (
                    <motion.div
                    key={cert.title}
                    initial={{ opacity: 0, x: 60, rotate: 1 }}
                    whileInView={{ opacity: 1, x: 0, rotate: 0 }}
                    transition={{ delay: index * 0.15 }}
                    viewport={{ once: true }}
                    className="
                        group relative p-10 rounded-[2rem]
                        bg-gradient-to-br from-white to-gray-50
                        border border-gray-200
                        shadow-lg
                        hover:shadow-2xl
                        transition duration-700
                        hover:-translate-y-2
                    "
                    >
                    <div className="flex justify-between items-start">
                        <div>
                        <h4 className="text-2xl text-gray-300 font-semibold group-hover:text-purple-600 transition">
                            {cert.title}
                        </h4>

                        <p className="text-gray-600 mt-3">
                            {cert.issuer}
                        </p>
                        </div>

                        <span className="text-sm text-gray-500 font-medium">
                        {cert.year}
                        </span>
                    </div>

                    {/* Luxury underline accent */}
                    <div className="mt-8 h-[2px] w-20 bg-gradient-to-r from-purple-600 to-blue-400" />
                    </motion.div>
                ))}
                </div>

            </div>
        </div>
    </section>
  );
}