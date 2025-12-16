import { Github, Linkedin, Mail } from "lucide-react";
import { BsFillPersonLinesFill } from "react-icons/bs";

export default function Footer() {
  return (
    <footer className="relative mt-32 border-t border-white/10 bg-black/40 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 py-10 flex flex-col md:flex-row items-center md:justify-between gap-8">
        {/* Left: Social Links stacked vertically */}
        <div className="flex flex-col items-start gap-4">
          <a
            href="https://github.com/Stamkopoulos"
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 text-gray-400 hover:text-white transition"
          >
            <Github size={20} /> Stamkopoulos
          </a>

          <a
            href="https://www.linkedin.com/in/ioannis-stamkopoulos-36a7901b8"
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 text-gray-400 hover:text-white transition"
          >
            <Linkedin size={20} /> Ioannis Stamkopoulos
          </a>

          <a
            href="mailto:johnstamkopoulos@gmail.com"
            className="flex items-center gap-2 text-gray-400 hover:text-white transition"
          >
            <Mail size={20} /> johnstamkopoulos@gmail.com
          </a>

          <a
            href="/Stamkopoulos Ioannis CV.pdf"
            download
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 text-gray-400 hover:text-white transition"
          >
            <BsFillPersonLinesFill size={20} /> Resume
          </a>
        </div>

        {/* Right: Copyright */}
        <p className="text-gray-400 text-sm text-center md:text-right">
          © {new Date().getFullYear()} Stamkopoulos Giannis. All rights
          reserved.
        </p>
      </div>
    </footer>
  );
}
