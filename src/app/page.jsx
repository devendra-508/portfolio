import dynamic from "next/dynamic";
import Navbar from "@/components/Navbar/Navbar";
import Hero from "@/components/Hero/Hero";
import About from "@/components/About/About";
import Skills from "@/components/Skills/Skills";
import Experience from "@/components/Experience/Experience";
import Work from "@/components/Work/Work";
import Education from "@/components/Education/Education";
import Contact from "@/components/Contact/Contact";
import Footer from "@/components/Footer/Footer";
import BlurBlob from "@/components/BlurBlob";
import FilmNoise from "@/components/Common/FilmNoise";
import SpotlightTracker from "@/components/Common/SpotlightTracker";

// Client-only dynamic components
const ThreeBackground = dynamic(() => import("@/components/ThreeBackground"), {
  ssr: false,
});

const AwwwardsCursor = dynamic(() => import("@/components/Common/AwwwardsCursor"), {
  ssr: false,
});

export default function HomePage() {
  return (
    <main className="relative min-h-screen overflow-x-hidden bg-[#030712] text-white selection:bg-[#00d2ff] selection:text-black">
      {/* Three.js Interactive Particle Field */}
      <ThreeBackground />

      {/* Awwwards Film Grain / Velvety Texture Overlay */}
      <FilmNoise />

      {/* Awwwards Fluid Magnetic Cursor */}
      <AwwwardsCursor />

      {/* Spotlight Mouse Tracker for Interactive Cards */}
      <SpotlightTracker />

      {/* Atmospheric Ambient Glow Blobs */}
      <BlurBlob
        position={{ top: "25%", left: "15%" }}
        size={{ width: "35%", height: "45%" }}
      />
      <BlurBlob
        position={{ top: "65%", left: "85%" }}
        size={{ width: "30%", height: "40%" }}
      />

      {/* Architectural Geometric Ambient Grid */}
      <div
        className="pointer-events-none fixed inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:32px_32px] [mask-image:radial-gradient(ellipse_80%_60%_at_50%_20%,#000_60%,transparent_100%)] z-0"
        aria-hidden="true"
      />

      {/* Main Content Layers */}
      <div className="relative z-10">
        <Navbar />
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Work />
        <Education />
        <Contact />
        <Footer />
      </div>
    </main>
  );
}
