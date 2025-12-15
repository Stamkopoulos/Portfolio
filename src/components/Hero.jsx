import React from "react";

function Hero() {
  return (
    <section
      id="hero"
      className="min-h-[70vh] flex items-center justify-center scroll-mt-24"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-12 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        {/* LEFT — TEXT */}
        <div className="space-y-6 animate-fade-in">
          <h1 className="text-4xl md:text-6xl font-bold leading-tight text-gray-100">
            Hi, I’m{" "}
            <span className="bg-gradient-to-r from-[#3a4a75] via-[#4b3f9f] to-[#5b4cc3] bg-clip-text text-transparent">
              Giannis!
            </span>
          </h1>

          <h2 className="relative inline-block text-xl md:text-2xl text-gray-300">
            Software & Web Developer <span className="inline-block">💻</span>
            <span className="absolute left-0 -bottom-1 h-[2px] w-full bg-gradient-to-r from-[#3a4a75] via-[#4b3f9f] to-[#5b4cc3] opacity-70 animate-pulse" />
          </h2>

          <p className="text-gray-300 max-w-lg pt-2 leading-relaxed">
            I enjoy learning new technologies and building efficient, scalable
            solutions with clean and thoughtful architecture.
          </p>

          <p className="text-gray-400 max-w-lg leading-relaxed mt-4 pt-6 animate-fade-in">
            Thanks for visiting my portfolio — feel free to explore my work and
            reach out.
          </p>

          <div className="flex gap-4">
            <a
              href="#projects"
              // className="relative px-6 py-3 rounded-lg bg-[#112545] text-white font-medium transition hover:bg-[#231453] hover:-translate-y-0.5 hover:shadow-lg hover:shadow-[#271196]/30"
            >
              <button class="group relative inline-flex h-12 items-center justify-center overflow-hidden rounded-md bg-indigo-900 px-6 font-medium text-gray-100">
                <span>View Projects</span>
                <div class="absolute inset-0 flex h-full w-full justify-center [transform:skew(-12deg)_translateX(-100%)] group-hover:duration-1000 group-hover:[transform:skew(-12deg)_translateX(100%)]">
                  <div class="relative h-full w-8 bg-white/10"></div>
                </div>
              </button>
            </a>

            <a href="#contact" className="border border-white/10 rounded-lg">
              <button class="group relative inline-flex h-12 items-center justify-center overflow-hidden rounded-md bg-gray-800 px-6 font-medium text-gray-200 duration-500">
                <div class="translate-y-0 opacity-100 transition group-hover:-translate-y-[150%] group-hover:opacity-0">
                  Contact me
                </div>
                <div class="absolute translate-y-[150%] opacity-0 transition group-hover:translate-y-0 group-hover:opacity-100">
                  <svg
                    width="15"
                    height="15"
                    viewBox="0 0 15 15"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-6 w-6"
                  >
                    <path
                      d="M7.5 2C7.77614 2 8 2.22386 8 2.5L8 11.2929L11.1464 8.14645C11.3417 7.95118 11.6583 7.95118 11.8536 8.14645C12.0488 8.34171 12.0488 8.65829 11.8536 8.85355L7.85355 12.8536C7.75979 12.9473 7.63261 13 7.5 13C7.36739 13 7.24021 12.9473 7.14645 12.8536L3.14645 8.85355C2.95118 8.65829 2.95118 8.34171 3.14645 8.14645C3.34171 7.95118 3.65829 7.95118 3.85355 8.14645L7 11.2929L7 2.5C7 2.22386 7.22386 2 7.5 2Z"
                      fill="currentColor"
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                </div>
              </button>
            </a>
          </div>
        </div>

        {/* RIGHT — VISUAL */}
        <div className="flex justify-center py-8">
          <div className="relative w-full max-w-sm sm:max-w-md md:max-w-2xl lg:max-w-4xl mx-3">
            <div className="relative rounded-3xl border border-white/10 bg-white/5 backdrop-blur-lg p-3 sm:p-4 md:p-8 lg:p-12 shadow-xl overflow-hidden group transition duration-500 ease-in-out transform hover:scale-[1.03] hover:shadow-3xl hover:shadow-blue-900/70 hover:bg-blue-950/30">
              <pre className="relative z-10 text-xs sm:text-sm md:text-lg text-gray-200 font-mono whitespace-pre-wrap break-words">
                <code>
                  <span className="text-[#C792EA]">const</span> developer ={" "}
                  {"{"} <br />
                  &nbsp;&nbsp;<span className="text-[#FFCB6B]">name</span>:{" "}
                  <span className="text-[#82AAFF]">"Giannis"</span>, <br />
                  &nbsp;&nbsp;<span className="text-[#FFCB6B]">role</span>:{" "}
                  <span className="text-[#82AAFF]">
                    "Software & Web Developer"
                  </span>
                  , <br />
                  &nbsp;&nbsp;<span className="text-[#FFCB6B]">stack</span>: [
                  <span className="text-[#F07178]">"React"</span>,{" "}
                  <span className="text-[#F07178]">"Node.js"</span>,{" "}
                  <span className="text-[#F07178]">"Express"</span>], <br />
                  &nbsp;&nbsp;<span className="text-[#FFCB6B]">tools</span>: [
                  <span className="text-[#F07178]">"Git"</span>,{" "}
                  <span className="text-[#F07178]">"POSTMAN"</span>,{" "}
                  <span className="text-[#F07178]">"VSCode"</span>], <br />
                  &nbsp;&nbsp;<span className="text-[#FFCB6B]">
                    mindset
                  </span>:{" "}
                  <span className="text-[#82AAFF]">"Always learning 🚀"</span>,{" "}
                  <br />
                  &nbsp;&nbsp;<span className="text-[#FFCB6B]">
                    goals
                  </span>:{" "}
                  <span className="text-[#82AAFF]">
                    "Build scalable solutions"
                  </span>
                  , <br />
                  &nbsp;&nbsp;<span className="text-[#FFCB6B]">
                    location
                  </span>: <span className="text-[#82AAFF]">"Greece"</span>{" "}
                  <br />
                  {"};"}
                </code>
              </pre>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
