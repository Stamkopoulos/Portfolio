import { useRef } from "react";
import emailjs from "@emailjs/browser";

// Import EmailJS IDs from config file
import {
  EMAILJS_PUBLIC_KEY,
  EMAILJS_SERVICE_ID,
  EMAILJS_TEMPLATE_ID,
} from "../config/emailjs";

export default function Contact() {
  // Reference to the form element (EmailJS needs this)
  const form = useRef(null);

  // Function that runs when the form is submitted
  const sendEmail = (e) => {
    e.preventDefault(); // Prevent page reload

    // Send the form using EmailJS
    emailjs
      .sendForm(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        form.current,
        EMAILJS_PUBLIC_KEY
      )
      .then(
        () => {
          // Runs if email is sent successfully
          alert("Message sent successfully!");
          form.current.reset(); // Clear form fields
        },
        (error) => {
          // Runs if something goes wrong
          console.error("EmailJS error:", error);
        }
      );
  };

  return (
    <section id="contact" className="py-20 scroll-mt-24">
      <div className="max-w-4xl mx-auto px-6 sm:px-10 lg:px-16">
        {/* Section title */}
        <h1 className="text-4xl md:text-5xl font-bold text-gray-100 text-center mb-12">
          Contact Me
        </h1>

        {/* Form container */}
        <div className="bg-gray-900/60 backdrop-blur-md border border-white/10 rounded-3xl p-8 shadow-xl">
          {/* IMPORTANT: ref={form} is required for EmailJS */}
          <form ref={form} className="space-y-6" onSubmit={sendEmail}>
            {/* Name field */}
            <div>
              <label htmlFor="name" className="block text-gray-300 mb-2">
                Name
              </label>
              <input
                id="name"
                type="text"
                name="from_name" // Must match EmailJS template variable
                placeholder="Your name"
                required
                className="w-full rounded-xl bg-gray-800/70 border border-white/10 px-4 py-3 text-gray-200 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#9d92e3]/60 transition"
              />
            </div>

            {/* Email field */}
            <div>
              <label htmlFor="email" className="block text-gray-300 mb-2">
                Email
              </label>
              <input
                id="email"
                type="email"
                name="from_email" // Must match EmailJS template variable
                placeholder="you@email.com"
                required
                className="w-full rounded-xl bg-gray-800/70 border border-white/10 px-4 py-3 text-gray-200 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#9d92e3]/60 transition"
              />
            </div>

            {/* Message field */}
            <div>
              <label htmlFor="message" className="block text-gray-300 mb-2">
                Message
              </label>
              <textarea
                id="message"
                name="message" // Must match EmailJS template variable
                rows={5}
                placeholder="Your message..."
                required
                className="w-full rounded-xl bg-gray-800/70 border border-white/10 px-4 py-3 text-gray-200 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#9d92e3]/60 transition resize-none"
              />
            </div>

            {/* Submit button */}
            <button
              type="submit"
              className="w-full py-3 rounded-xl bg-gradient-to-r from-[#89a5ec] via-[#9d92e3] to-[#a292fc] text-black font-semibold hover:opacity-90 transition"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
