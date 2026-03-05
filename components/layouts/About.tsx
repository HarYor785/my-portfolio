"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import AnimatedButton from "../ui/AnimatedBtn";

const capabilities = [
  {
    title: "Frontend Engineering",
    description:
    "High-performance, responsive interfaces built with precision and strong attention to interaction detail.",
    img: '/frontend.png',
  },
  {
    title: "Backend Systems",
    description:
      "Scalable APIs and structured server architecture designed for reliability and long-term growth.",
    img: '/backend.png',
  },
  {
    title: "System Architecture",
    description:
      "Application-level thinking — data flow, performance, and maintainable system design.",
    img: '/system.png',
  },
];

export default function About() {
  return (
    <section
      id="about"
      className="
        relative
        bg-linear-to-r from-[#f6f7fb] to-[#eef2f9]
      "
    >
      <div className="max-w-7xl mx-auto md:py-16 py-8 px-4 md:px-16 grid lg:grid-cols-2 gap-20 items-start">
        
        {/* LEFT */}
        <div>
          <span className="text-sm uppercase tracking-widest text-gray-500">
            About Me
          </span>

          <h2 className="mt-6 text-2xl md:text-4xl text-gray-500 font-bold leading-tight tracking-tight">
            <span className="bg-linear-to-r from-indigo-600 via-purple-500 to-blue-500 bg-clip-text text-transparent">
              Why build
            </span>{" "}
            your next project with me?
          </h2>

          <p className="mt-2 text-base text-gray-600 leading-relaxed max-w-xl">
            I’m a Full Stack Engineer focused on building scalable, production-grade platforms that solve real business problems.
          </p>
          <p className="mt-2 text-base text-gray-600 leading-relaxed max-w-xl">
            Over the past few years, I’ve architected and delivered systems across service operations, fintech integrations, and real-time platforms, handling payments, subscriptions, operational dashboards, and live event-driven applications.
          </p>
          <p className="mt-2 text-base text-gray-600 leading-relaxed max-w-xl">
            My approach goes beyond feature development. I design systems with scalability, performance, and long-term maintainability in mind.
          </p>
          <p className="mt-2 text-base text-gray-600 leading-relaxed max-w-xl">
            Technically, I work primarily with Node.js, NestJS, PHP and Python for backend architecture, 
            and Next.js, React, and TypeScript for frontend platforms. I’ve implemented secure
            payment infrastructures using Paystack and subscription workflows with Apple In-App 
            Purchase APIs. I also design CI/CD pipelines with Docker, Kubernetes and cloud infrastructure to 
            ensure reliable production deployments.
          </p>
          <p className="mt-2 text-base text-gray-600 leading-relaxed max-w-xl">
            I care about:
          </p>
          <ul className="text-base list-disc font-jost text-gray-600 pl-8 mt-3">
            <li>
              Clean architecture and modular design
            </li>
            <li>
              Real-time system performance
            </li>
            <li>
              Reliable payment and transaction workflows
            </li>
            <li>
              Deployment automation and infrastructure efficiency
            </li>
            <li>
              Building systems that can scale across regions
            </li>
          </ul>
          <p className="mt-2 text-base text-gray-600 leading-relaxed max-w-xl">
            My goal is to continue working on high-impact platforms within fintech, SaaS, and product-driven startups where architecture and engineering quality truly matter.
          </p>

            <AnimatedButton
              as="link"
              href="#contact"
              className="mt-8"
            >
                Let’s Build
            </AnimatedButton>
        </div>

        {/* RIGHT */}
        <div className="space-y-8 md:mt-12">
          {capabilities.map((item, index) => (
            <motion.div
              key={item.title}
              whileHover={{
                rotateX: 10,
                rotateY: -15,
                scale: 1.03,
              }}
              transition={{ type: "spring", stiffness: 900, damping: 50 }}
              className="
                bg-white/60 backdrop-blur-lg
                border border-white/40
                md:p-8 p-5 rounded-2xl
                shadow-md
                transition duration-300
                transform-gpu
                perspective-1000 
                flex items-start gap-6
                hover:shadow-2xl
              "
            >
                <Image
                src={item.img}
                width={50}
                height={50}
                alt={item.title}
                className=""
                />
             <div>
                 <h3 className="text-2xl font-semibold font-lexend mb-4 text-indigo-600">
                    {item.title}
                </h3>

                <p className="text-gray-600 leading-relaxed">
                    {item.description}
                </p>
             </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}