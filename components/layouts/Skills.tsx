"use client";

import { skills } from "@/lib/utils";
import { motion } from "framer-motion";


export default function Skills() {
  return (
    <section id="skills" className="
        relative
        bg-linear-to-r from-[#f6f7fb] to-[#eef2f9]
      ">
      
      {/* Background Glow */}
      <div className="absolute inset-0 -z-10 opacity-30 bg-gradient-to-b from-blue-50 to-white" />

        <div className="max-w-7xl mx-auto py-16 px-6 md:px-16">
            {/* Header */}
            <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="text-center mb-24"
            >
                <h2 className="text-4xl md:text-6xl font-bold tracking-tight bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Skills & Expertise
                </h2>

                <p className="mt-6 text-lg text-gray-600 max-w-2xl mx-auto">
                Technologies, tools, and engineering principles I use to build scalable products.
                </p>
            </motion.div>

            {/* Skills Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
                {skills.map((group, index) => (
                <motion.div
                    key={group.category}
                    initial={{ opacity: 0, scale: 0.95, y: 40 }}
                    whileInView={{ opacity: 1, scale: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="
                    relative md:p-8 p-5 rounded-2xl
                    border border-gray-200
                    bg-white/70 backdrop-blur-xl
                    shadow-lg hover:shadow-2xl
                    transition duration-500
                    "
                >
                    {/* Category Title */}
                    <h3 className="text-2xl font-semibold mb-6 text-gray-900">
                    {group.category}
                    </h3>

                    {/* Skill Pills */}
                    <div className="flex flex-wrap gap-3">
                    {group.items.map((item) => (
                        <span
                        key={item}
                        className="
                            px-4 py-2 text-sm
                            rounded-full
                            border border-gray-200
                            text-gray-700
                            hover:bg-gradient-to-r hover:from-blue-600 hover:to-purple-600
                            hover:text-white
                            hover:scale-105
                            transition-all duration-300
                            cursor-default
                        "
                        >
                        {item}
                        </span>
                    ))}
                    </div>

                    {/* Decorative Corner Glow */}
                    <div className="absolute -top-2 -right-2 w-24 h-24 bg-blue-400/20 blur-3xl rounded-full" />
                </motion.div>
                ))}
            </div>
        </div>
    </section>
  );
}