import ScrollFadeIn from "./ScrollFadeIn";

const projects = [
  {
    title: "Inventory App",
    description:
      "A Full-Stack Inventory Management System with Clerk authentication and Shadcn UI components.",
    image: "/projects/Inventory.png",
    tech: [
      "React",
      "Vite",
      "Clerk",
      "Shadcn UI",
      "Tailwind",
      "Node.js",
      "Express",
      "PostgreSQL",
      "Prisma",
    ],
    github: "https://github.com/Stamkopoulos/Inventory-app",
  },
  {
    title: "BRIEFIFY",
    description:
      "Web tool that summarizes articles and webpages from URLs using React, Redux, and Tailwind CSS.",
    image: "/projects/Briefify.png",
    tech: ["React", "Vite", "Redux", "Tailwind"],
    github: "https://github.com/Stamkopoulos/BRIEFIFY",
  },
  {
    title: "DocWebox",
    description:
      "Search doctors based on location and profession, with appointment booking functionality.",
    image: "/projects/DocWebox.png",
    tech: ["PHP", "HTML", "CSS", "JavaScript"],
    github: "https://github.com/tzarhs/DocWebox",
  },
  {
    title: "E-commerce Platform",
    description:
      "Full-stack e-commerce application with React frontend, Node.js/Express backend, MongoDB database, and Clerk authentication. Stripe integration coming soon.",
    image: "/projects/Ecommerce.png",
    tech: ["React", "Tailwind", "Node.js", "Express", "MongoDB", "Clerk"],
    github: "https://github.com/Stamkopoulos/e-commerce",
  },
  {
    title: "Lottery Dapp",
    description:
      "Web3 Lottery App on the Sepolia network. Users participate in a lottery using Metamask.",
    image: "/projects/Lottery.png",
    tech: ["Web3", "Ethereum", "Solidity", "React"],
    github: "https://github.com/Stamkopoulos/Lottery-Dapp",
  },
  {
    title: "Issue Tracker",
    description:
      "Next.js app for tracking issues, with Prisma/MySQL backend, status tracking, and CRUD functionality.",
    image: "/projects/Issue-Tracker.png",
    tech: ["Next.js", "Prisma", "MySQL", "React"],
    github: "https://github.com/Stamkopoulos/issue-tracker",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-20 scroll-mt-24">
      <ScrollFadeIn>
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
          {/* Title */}
          <h1 className="text-4xl md:text-5xl font-bold text-gray-100 text-center mb-12">
            Projects
          </h1>

          {/* Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div
                key={index}
                className="group bg-gray-900/60 backdrop-blur-md border border-white/10 rounded-3xl overflow-hidden shadow-xl transition-all duration-300 hover:scale-[1.03] hover:shadow-3xl hover:shadow-blue-900/70 hover:bg-blue-950/30 flex flex-col"
              >
                {/* Image */}
                <div className="overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-auto object-contain transition-transform duration-500 group-hover:scale-105"
                  />
                </div>

                {/* Content */}
                <div className="p-6 flex flex-col flex-1 justify-between">
                  <div>
                    <h3 className="text-xl font-semibold text-gray-100">
                      {project.title}
                    </h3>

                    <p className="text-gray-400 text-sm leading-relaxed mt-2">
                      {project.description}
                    </p>

                    {/* Tech stack */}
                    <div className="flex flex-wrap gap-2 mt-4">
                      {project.tech.map((tech, i) => (
                        <span
                          key={i}
                          className="px-3 py-1 text-xs rounded-full bg-gray-800 text-gray-300 border border-white/10"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* GitHub Button at bottom */}
                  <div className="mt-6">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full inline-block text-center py-2 rounded-xl bg-gradient-to-r from-[#89a5ec] via-[#9d92e3] to-[#a292fc] text-black font-semibold hover:opacity-90 transition"
                    >
                      GitHub
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </ScrollFadeIn>
    </section>
  );
}
