"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import AnimatedButton from "../ui/AnimatedBtn";
import { useRef, useState } from "react";
import emailjs from '@emailjs/browser';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");
  const form = useRef<HTMLFormElement | null>(null);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    setLoading(true);
    setError("");
    setSuccess(false);

    try {
      await emailjs.sendForm(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
        form.current!,
        process.env.NEXT_PUBLIC_EMAILJS_USER_ID!
      );

      setSuccess(true);
      setFormData({ name: "", email: "", message: "" });

    } catch (error) {
      console.error(error);
      setError("Failed to send message. Please try again later.");
    } finally {
      setLoading(false);
    }
  };
  return (
    <section
      id="contact"
      className="relative bg-gradient-to-b from-[#f7f9fc] via-white to-[#f4f6fb] overflow-hidden"
    >
      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-purple-100/40 via-transparent to-blue-100/40 blur-3xl" />

      <div className="max-w-7xl mx-auto px-6 md:px-16 py-24">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-6xl font-bold tracking-tight bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Let’s Build Something Exceptional
          </h2>

          <p className="mt-6 text-lg text-gray-600 max-w-2xl mx-auto">
            Have a project idea, collaboration, or opportunity? Send a message —
            I’ll get back to you as soon as possible.
          </p>
        </motion.div>

        {/* Grid Layout */}
        <div className="grid md:grid-cols-2 gap-16 items-start">

          {/* Contact Form */}
          <motion.form
            ref={form}
            onSubmit={handleSubmit}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white p-10 rounded-3xl shadow-xl border border-gray-100"
          >
            <div className="space-y-6">

              <div>
                <label className="block text-sm font-medium text-gray-600 mb-2">
                  Your Name
                </label>
                <input
                  type="text"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-purple-500 transition"
                  placeholder="John Doe"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-600 mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-purple-500 transition"
                  placeholder="john@example.com"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-600 mb-2">
                  Message
                </label>
                <textarea
                  name="message"
                  rows={5}
                  required
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-purple-500 transition resize-none"
                  placeholder="Tell me about your project..."
                />
              </div>

            <AnimatedButton
            type="submit"
              as="button"
              disabled={loading}
              className="mx-auto! w-full! disabled:cursor-not-allowed disabled:opacity-30"
            >
                {loading ? "Sending..." : "Send Message 🚀"}
            </AnimatedButton>

              {error && (
                <p className="text-red-600 text-sm mt-3">
                  {error}
                </p>
              )}
              {success && (
                <p className="text-green-600 text-sm mt-3">
                  Message sent successfully. I’ll respond soon.
                </p>
              )}
            </div>
          </motion.form>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            {[
              {
                title: "WhatsApp",
                value: "Chat directly",
                link: "https://wa.me/message/ZYOFIWOSI7BWB1",
              },
              {
                title: "GitHub",
                value: "github.com/HarYor785",
                link: "https://github.com/HarYor785",
              },
              {
                title: "LinkedIn",
                value: "Connect professionally",
                link: "https://www.linkedin.com/in/abdullahi-oluwafemi-a91987255/",
              },
              {
                title: "Location",
                value: "Remote • Open to global roles",
                link: "#",
              },
            ].map((item) => (
              <a
                key={item.title}
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                className="block p-8 rounded-3xl bg-white border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition duration-500"
              >
                <h3 className="text-lg font-semibold text-gray-800">
                  {item.title}
                </h3>
                <p className="text-gray-600 mt-2">{item.value}</p>
              </a>
            ))}
          </motion.div>
        </div>

        {/* Footer */}
        <p className="mt-24 text-center text-gray-400 text-sm">
          © {new Date().getFullYear()} — Abdullahi Oluwafemi Solomon
        </p>
      </div>
    </section>
  );
}