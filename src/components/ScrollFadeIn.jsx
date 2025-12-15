import React from "react";
import { useEffect, useRef } from "react";

function ScrollFadeIn({ children }) {
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && ref.current) {
          ref.current.classList.add("animate-fadein");
        } else {
          ref.current.classList.remove("animate-fadein");
        }
      },
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} className="opacity-0">
      {children}
    </div>
  );
}

export default ScrollFadeIn;
