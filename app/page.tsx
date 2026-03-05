import Image from "next/image";
import Hero from "../components/layouts/Hero";
import CursorGlow from "../components/ui/CursorGlow";
import About from "@/components/layouts/About";
import Skills from "@/components/layouts/Skills";
import Projects from "@/components/layouts/Projects";
import Experience from "@/components/layouts/Experience";
import EducationCertification from "@/components/layouts/Education";
import Contact from "@/components/layouts/Contact";

export default function Home() {
  return (
    <main className="relative w-full flex flex-col">
      <CursorGlow/>
      <Hero/>
      <About/>
      <Skills/>
      <Projects/>
      <Experience/>
      <EducationCertification/>
      <Contact/>
    </main>
  );
}
