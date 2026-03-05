"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import AnimatedButton from "../ui/AnimatedBtn";
import { projects } from "@/lib/utils";


export default function Projects() {
    const featured = projects[0];
    const secondary = projects.slice(1, 3);
  return (
    <section id="portfolio" 
    className="relative bg-linear-to-r from-[#f6f7fb] to-[#eef2f9]">

        <div className="py-16 px-6 md:px-16 max-w-7xl mx-auto">
            {/* Header */}
            <div className="flex justify-between items-end mb-20">
                <div>
                <h2 className="text-4xl md:text-6xl font-bold tracking-tight bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                    Featured Projects
                </h2>
                <p className="text-gray-600 mt-5 max-w-xl text-lg">
                    Real-world applications demonstrating engineering and product thinking.
                </p>
                </div>

                <AnimatedButton
                as="link"
                href="/portfolio"
                className="mt-8"
                >
                    View All Projects
                </AnimatedButton>
            </div>

            <div className="grid md:grid-cols-2 gap-12">

          {/* FEATURED PROJECT */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <Link href={`/portfolio/${featured.slug}`}>
              <div className="group relative h-[520px] rounded-3xl overflow-hidden border border-white/10">

                <img
                  src={featured.images?.[0]}
                  alt={featured.title}
                  className="absolute inset-0 w-full h-full object-cover scale-105 group-hover:scale-110 transition duration-700"
                />

                {/* Dark Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent" />

                {/* Content */}
                <div className="absolute bottom-0 p-10">
                  <p className="text-sm uppercase tracking-widest text-indigo-400 mb-4">
                    Featured Project
                  </p>

                  <h3 className="text-3xl md:text-4xl font-bold mb-4 text-white group-hover:text-indigo-400 transition">
                    {featured.title}
                  </h3>

                  <p className="text-gray-300 max-w-md mb-6 line-clamp-3">
                    {featured.overview}
                  </p>

                  <span className="inline-block px-6 py-3 bg-white text-black rounded-xl font-medium">
                    View Case Study →
                  </span>
                </div>
              </div>
            </Link>
          </motion.div>

          {/* SECONDARY STACK */}
          <div className="flex flex-col gap-12">
            {secondary.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, x: 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <Link href={`/portfolio/${project.slug}`}>
                  <div className="group relative h-[240px] rounded-3xl overflow-hidden border border-white/10">

                    <img
                      src={project.images?.[0]}
                      alt={project.title}
                      className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition duration-700"
                    />

                    <div className="absolute inset-0 bg-black/60 group-hover:bg-black/50 transition" />

                    <div className="absolute bottom-0 p-8">
                      <h4 className="text-2xl font-semibold text-white group-hover:text-indigo-400 transition">
                        {project.title}
                      </h4>

                      <span className="text-sm text-gray-200">
                        View Project →
                      </span>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>

        </div>
        </div>

    </section>
  );
}

// "use client";

// import { motion } from "framer-motion";
// import Link from "next/link";
// import { projects } from "@/data/projects";

// export default function Projects() {
//   const featured = projects[0];
//   const secondary = projects.slice(1, 3);

//   return (
//     <section className="relative bg-[#0B0F19] text-white overflow-hidden">

//       {/* Background Glow Layers */}
//       <div className="absolute -top-40 -left-40 w-[600px] h-[600px] bg-indigo-600/20 blur-[140px] rounded-full pointer-events-none" />
//       <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-purple-600/20 blur-[120px] rounded-full pointer-events-none" />

//       <div className="relative py-32 px-6 md:px-16 max-w-7xl mx-auto">

//         {/* HEADER */}
//         <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-24">
//           <div>
//             <h2 className="text-5xl md:text-7xl font-bold leading-tight tracking-tight">
//               Selected
//               <br />
//               <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-500">
//                 Systems.
//               </span>
//             </h2>

//             <p className="text-gray-400 mt-6 max-w-xl text-lg">
//               Production-grade applications engineered with scalability,
//               performance, and long-term architecture in mind.
//             </p>
//           </div>

//           <Link
//             href="/projects"
//             className="mt-10 md:mt-0 inline-flex items-center gap-2 text-indigo-400 hover:translate-x-2 transition"
//           >
//             View All Projects →
//           </Link>
//         </div>

//         {/* MAIN GRID */}
//         <div className="grid md:grid-cols-2 gap-12">

//           {/* FEATURED PROJECT */}
//           <motion.div
//             initial={{ opacity: 0, y: 40 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.6 }}
//             viewport={{ once: true }}
//           >
//             <Link href={`/projects/${featured.slug}`}>
//               <div className="group relative h-[520px] rounded-3xl overflow-hidden border border-white/10">

//                 <img
//                   src={featured.images?.[0]}
//                   alt={featured.title}
//                   className="absolute inset-0 w-full h-full object-cover scale-105 group-hover:scale-110 transition duration-700"
//                 />

//                 {/* Dark Overlay */}
//                 <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent" />

//                 {/* Content */}
//                 <div className="absolute bottom-0 p-10">
//                   <p className="text-sm uppercase tracking-widest text-indigo-400 mb-4">
//                     Featured Project
//                   </p>

//                   <h3 className="text-3xl md:text-4xl font-bold mb-4 group-hover:text-indigo-400 transition">
//                     {featured.title}
//                   </h3>

//                   <p className="text-gray-300 max-w-md mb-6 line-clamp-3">
//                     {featured.overview}
//                   </p>

//                   <span className="inline-block px-6 py-3 bg-white text-black rounded-xl font-medium">
//                     View Case Study →
//                   </span>
//                 </div>
//               </div>
//             </Link>
//           </motion.div>

//           {/* SECONDARY STACK */}
//           <div className="flex flex-col gap-12">
//             {secondary.map((project, index) => (
//               <motion.div
//                 key={project.id}
//                 initial={{ opacity: 0, x: 40 }}
//                 whileInView={{ opacity: 1, x: 0 }}
//                 transition={{ delay: index * 0.2 }}
//                 viewport={{ once: true }}
//               >
//                 <Link href={`/projects/${project.slug}`}>
//                   <div className="group relative h-[240px] rounded-3xl overflow-hidden border border-white/10">

//                     <img
//                       src={project.images?.[0]}
//                       alt={project.title}
//                       className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition duration-700"
//                     />

//                     <div className="absolute inset-0 bg-black/60 group-hover:bg-black/50 transition" />

//                     <div className="absolute bottom-0 p-8">
//                       <h4 className="text-2xl font-semibold group-hover:text-indigo-400 transition">
//                         {project.title}
//                       </h4>

//                       <span className="text-sm text-gray-400">
//                         View Project →
//                       </span>
//                     </div>
//                   </div>
//                 </Link>
//               </motion.div>
//             ))}
//           </div>

//         </div>

//       </div>
//     </section>
//   );
// }