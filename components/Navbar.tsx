import React, { useEffect, useState } from 'react'
import { motion, useMotionValue, useSpring, AnimatePresence } from "framer-motion";
import AnimatedButton from './ui/AnimatedBtn';

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("home");

  useEffect(() => {
    const sectionIds = [
      "home",
      "about",
      "skills",
      "portfolio",
      "experience",
      "contact",
    ];

    const sections = sectionIds.map((id) => document.getElementById(id));

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(entry.target.id);
          }
        });
      },
      {
        threshold: 0.5,
      }
    );

    sections.forEach((section) => {
      if (section) observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = ["Home", "About", "Skills", "Portfolio", "Experience", "Contact"];

  return (
    <header
      className={`fixed top-0 z-50 w-full transition-all duration-300 ${
        scrolled ? "bg-white/80 backdrop-blur-md shadow-sm" : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-8 py-6">
        {/* Logo */}
        <div className="flex items-center gap-2 text-2xl font-bold">
          {/* <span className="text-orange-500">/\</span> */}
          <span className="text-indigo-900">A</span>
          <span className="text-orange-500">B</span>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden items-center gap-8 text-gray-500 md:flex">
          {links.map((link) => {
            const id = link.toLowerCase();

            return (
              <a
                key={link}
                href={link === "Home" ? "#home" : `#${id}`}
                className={`font-medium text-lg transition ${
                  active === id
                    ? "text-orange-500"
                    : "hover:text-indigo-600"
                }`}
              >
                {link}
              </a>
            );
          })}
        </nav>

        {/* Hire button */}
        <AnimatedButton
          as="link"
          href="#contact"
          className='px-6! py-3! md:block! hidden!'
        >
            Hire Me
        </AnimatedButton>

        {/* Mobile menu button */}
        <button
          onClick={() => setOpen(!open)}
          className="text-2xl md:hidden text-black"
        >
          ☰
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden bg-white/95 backdrop-blur-md shadow-lg"
          >
            <div className="flex flex-col gap-4 px-6 py-6">
              {links.map((link, i) => (
                <a
                  key={link}
                  href={link === "Home" ? "/" : `#${link.toLowerCase()}`}
                  className={`text-lg font-medium ${
                    i === 0 ? "text-orange-500" : "text-gray-700"
                  }`}
                  onClick={() => setOpen(false)}
                >
                  {link}
                </a>
              ))}

              <button className="mt-2 rounded-xl bg-orange-500 px-6 py-3 font-semibold text-white">
                Hire Me
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

export default Navbar