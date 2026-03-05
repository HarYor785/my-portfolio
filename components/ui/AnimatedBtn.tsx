"use client";

import { motion } from "framer-motion";
import Link from "next/link";

type CommonProps = {
  children: React.ReactNode;
  as?: "button" | "link";
  href?: string;
  className?: string;
};

type AnimatedButtonProps =
  | (CommonProps &
      { as?: "button" } &
      React.ButtonHTMLAttributes<HTMLButtonElement>)
  | (CommonProps &
      { as: "link"; href: string } &
      React.AnchorHTMLAttributes<HTMLAnchorElement>);

export default function AnimatedButton({
  children,
  href,
  as = "button",
  onClick,
  className = "",
  ...rest
}: AnimatedButtonProps) {
    const content = (
        <motion.div
        initial="initial"
        whileHover="hover"
        animate="initial"
        className={`
            relative inline-flex items-center justify-center
            overflow-hidden
            px-12 py-5
            rounded-full
            bg-orange-500 text-white
            text-lg font-medium
            shadow-xl
            transition-colors duration-500
            hover:bg-purple-600
            ${className}
        `}
        >
        <div className="relative h-6 overflow-hidden">
            <motion.div
            variants={{
                initial: {},
                hover: {},
            }}
            className="relative"
            >
            <motion.span
                variants={{
                initial: { y: "0%" },
                hover: { y: "-100%" },
                }}
                transition={{ duration: 0.3, ease: "easeInOut", delay: 0.15, }}
                className="block"
            >
                {children}
            </motion.span>

            <motion.span
                variants={{
                initial: { y: "100%" },
                hover: { y: "0%" },
                }}
                transition={{
                duration: 0.3,
                ease: "easeInOut",
                delay: 0.15,
                }}
                className="absolute inset-0 flex items-center justify-center"
            >
                {children}
            </motion.span>
            </motion.div>
        </div>
        </motion.div>
    );

    if (as === "link" && href) {
        return <Link href={href}
        {...(rest as React.AnchorHTMLAttributes<HTMLAnchorElement>)}>{content}</Link>;
    }

    return (
        <button type="button" {...(rest as React.ButtonHTMLAttributes<HTMLButtonElement>)}>
            {content}
        </button>
    );
}