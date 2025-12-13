// import { useState } from "react";
// import Navbar from "./components/Navbar";
// import Hero from "./components/Hero";
// import About from "./components/About";
// import Projects from "./components/Projects";
// import Skills from "./components/Skills";
// import Contact from "./components/Contact";
// import Footer from "./components/Footer";
// import SocialLinks from "./components/SocialLinks";
// import Aurora from "./components/Aurora";

// import { ThemeProvider } from "@/components/theme-provider";

// function App() {
//   return (
//     <>
//       <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
//         <div className="aurora-container bg-[#060010] fixed inset-0 w-screen h-screen -z-20 pointer-events-none">
//           <Aurora
//             colorStops={["#112545", "#231453", "#271196"]}
//             blend={1}
//             amplitude={1.0}
//             speed={0.5}
//           />
//         </div>

//         <Navbar />

//         <main className="space-y-32 ">
//           <SocialLinks />
//           <Hero />
//           <About />
//           <Skills />
//           <Projects />
//           <Contact />
//         </main>

//         <Footer />
//       </ThemeProvider>
//     </>
//   );
// }

// export default App;

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

function AppContent() {
  const { theme } = useTheme();

  // Aurora colors based on theme
  const auroraColors =
    theme === "dark"
      ? ["#112545", "#231453", "#271196"] // dark mode colors
      : ["#a1c4fd", "#c2e9fb", "#fef9c3"]; // light mode colors

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
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>

      {/* Footer */}
      <Footer />
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
