import React from "react";
import MyPhoto from "../assets/cv-photo.png"; // replace with your actual photo path

function About() {
  return (
    <section
      id="about"
      className="min-h-[80vh] flex items-center justify-center scroll-mt-24 py-16 "
    >
      <div className="mx-auto max-w-7xl px-6 sm:px-10 lg:px-16 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* LEFT — PHOTO */}

        <div className="flex justify-center lg:justify-start ">
          <div className=" rounded-3xl p-2 border-white/10 bg-white/5 backdrop-blur-lg  shadow-xl overflow-hidden group transition duration-500 ease-in-out transform hover:scale-[1.03] hover:shadow-3xl hover:shadow-blue-900/70 hover:bg-blue-950/30">
            <img
              src={MyPhoto}
              alt="Giannis"
              className="rounded-3xl shadow-2xl w-96 sm:w-[24rem] md:w-[26rem] lg:w-[28rem] object-cover border border-white/10 "
            />
          </div>
        </div>

        {/* RIGHT — TEXT */}
        <div className="space-y-6">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-100  ">
            About Me
          </h1>

          <p className="text-gray-300 leading-relaxed">
            I am a{" "}
            <span className="bg-gradient-to-r from-[#89a5ec] via-[#9d92e3] to-[#a292fc] bg-clip-text text-transparent font-bold">
              Full Stack Developer{" "}
            </span>
            with a strong focus on{" "}
            <span className="bg-gradient-to-r from-[#89a5ec] via-[#9d92e3] to-[#a292fc] bg-clip-text text-transparent font-bold">
              backend development
            </span>
            . I love turning complex problems into efficient and maintainable
            solutions using modern technologies.
          </p>

          <p className="text-gray-300 leading-relaxed">
            I hold a{" "}
            <span className="bg-gradient-to-r from-[#89a5ec] via-[#9d92e3] to-[#a292fc] bg-clip-text text-transparent font-bold">
              Bachelor’s degree in Applied Informatics{" "}
            </span>
            from the{" "}
            <span className="bg-gradient-to-r from-[#89a5ec] via-[#9d92e3] to-[#a292fc] bg-clip-text text-transparent font-bold">
              University of Macedonia
            </span>{" "}
            and enjoy working on challenging projects that require creativity
            and logical thinking.
          </p>

          {/* BULLETS */}
          <ul className="list-disc list-inside text-gray-400 space-y-2 mt-4">
            <li>Strong problem-solving skills and attention to detail</li>

            <li>Collaborative team player with good communication skills</li>
            <li>
              Passionate about learning new technologies and best practices
            </li>
            <li>
              Backend-focused, but comfortable with full-stack development
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default About;
