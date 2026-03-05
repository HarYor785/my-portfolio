"use client";

import { motion, useMotionValue, useSpring } from "framer-motion";
import { useEffect } from "react";
import { FaFacebookF, FaGithub, FaLinkedinIn } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import CursorGlow from "../ui/CursorGlow";
import Navbar from "../Navbar";
import AnimatedButton from "../ui/AnimatedBtn";
import Link from "next/link";


export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen overflow-hidden bg-gradient-to-r from-[#f6f7fb] to-[#eaf2ff] flex items-center">
        <Navbar/>
      {/* Cursor glow */}
      <CursorGlow />

      <div className="mx-auto grid max-w-7xl grid-cols-1 items-start gap-12 px-6 md:px-10 py-28 lg:grid-cols-2">
        {/* LEFT */}
        <div className="relative z-10">
          <p className="text-5xl font-semibold text-gray-400 font-lexend">Hi! I’m</p>

          <h1 className="mt-2 text-6xl font-extrabold leading-tight lg:text-7xl">
            <span className="bg-gradient-to-r from-purple-600 to-pink-500 bg-clip-text text-transparent font-lexend">
              Abdullahi
            </span>{" "}
            <span
              className="text-transparent font-lexend"
              style={{ WebkitTextStroke: "1px rgba(99,102,241,0.6)" }}
            >
              Oluwafemi
            </span>
          </h1>

          <h2 className="mt-5 text-2xl font-semibold text-gray-500 lg:text-5xl">
            Full-stack <span className="text-indigo-600">Developer</span>
          </h2>

          <p className="mt-6 max-w-xl text-lg leading-relaxed text-gray-500 font-jost normal-case">
            Focused on building scalable, production-ready platforms, I combine clean architecture, payment infrastructure, and real-time systems to create digital products that are built to perform and built to scale.
          </p>

          {/* Social icons */}
          <div className="mt-12 flex gap-5 text-xl text-indigo-600">
            <Link href="https://github.com/HarYor785" target="_blank">
              <FaGithub />
            </Link>
            <Link href="https://www.linkedin.com/in/abdullahi-oluwafemi-a91987255/" target="_blank">
              <FaLinkedinIn />
            </Link>
            <Link href="mailto:oluwafemiayobami2@gmail.com" target="_blank">
              <MdEmail />
            </Link>
            
          </div>

          {/* Buttons */}
          <div className="mt-12 flex items-center gap-6">
            <AnimatedButton
              download
              as="link"
              href="/myresume.pdf"
            >
                Download CV ✉️
            </AnimatedButton>

            <Link href="#contact" className="font-semibold text-indigo-600 underline underline-offset-4 md:text-2xl">
              Let’s Talk
            </Link>
          </div>
        </div>

        {/* RIGHT */}
        <div className="relative flex justify-center">
          {/* Circular gradient panel */}
          <div className="absolute h-[600px] w-[450px] 
          rounded-full bg-gradient-to-br from-blue-100 to-transparent
          border-2 border-white/40" />

          {/* Decorative rings */}
          {/* <div className="absolute h-[600px] w-[450px] rounded-full border border-white/40" /> */}
          <div className="absolute h-[650px] w-[500px] -top-7 rounded-full border-2 border-white/20" />

          {/* Image */}
          <motion.img
            src="/profile.png"
            alt="developer"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="relative z-10 w-[420px] lg:w-[500px]"
          />

          {/* Floating badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="absolute right-4 top-32 z-20 rounded-2xl 
            bg-white/80 px-6 py-3 shadow-xl backdrop-blur-md"
          >
            <div className="flex items-center gap-4">
                <p className="text-3xl font-bold text-indigo-600">4+</p>
                <p className="text-base text-gray-500"><strong>Years</strong> <br/> Happy Clients</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
