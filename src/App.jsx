import { ThemeProvider, useTheme } from "@/components/theme-provider";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import SocialLinks from "./components/SocialLinks";
import Aurora from "./components/Aurora";
import ScrollFadeIn from "./components/ScrollFadeIn";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/react";

function AppContent() {
  const { theme } = useTheme();

  // Aurora colors based on theme
  // const auroraColors =
  //   theme === "dark"
  //     ? ["#112545", "#231453", "#271196"] // dark mode colors
  //     : ["#a1c4fd", "#c2e9fb", "#fef9c3"]; // light mode colors

  const auroraColors = ["#112545", "#231453", "#271196"];

  return (
    <>
      {/* Aurora background */}
      <div className="aurora-container fixed inset-0 w-screen h-screen -z-20 pointer-events-none transition-colors duration-1000 bg-white dark:bg-[#060010]">
        <Aurora
          colorStops={auroraColors}
          blend={1}
          amplitude={1.0}
          speed={0.5}
        />
      </div>

      {/* Navbar */}
      <Navbar />

      {/* Main content */}
      <main className="space-y-32 relative z-10">
        <SocialLinks />

        <ScrollFadeIn>
          <Hero />
        </ScrollFadeIn>

        <ScrollFadeIn>
          <About />
        </ScrollFadeIn>

        <ScrollFadeIn>
          <Skills />
        </ScrollFadeIn>

        <ScrollFadeIn>
          <Projects />
        </ScrollFadeIn>

        <ScrollFadeIn>
          <Contact />
        </ScrollFadeIn>
      </main>

      {/* Footer */}
      <Footer />

      <Analytics />
      <SpeedInsights />
    </>
  );
}

export default function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <AppContent />
    </ThemeProvider>
  );
}
