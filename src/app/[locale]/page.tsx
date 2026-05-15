import Hero from "@/components/sections/Hero";
import Services from "@/components/sections/Services";
import Projects from "@/components/sections/Projects";
import Process from "@/components/sections/Process";
import TechStack from "@/components/sections/TechStack";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/sections/Footer";
import Navbar from "@/components/sections/Navbar";

export default function Home() {
  return (
    <main className="bg-black text-white">
      <Navbar />
      <Hero />
      <Services />
      <Projects />
      <Process />
      <TechStack />
      <Contact />
      <Footer />
    </main>
  );
}