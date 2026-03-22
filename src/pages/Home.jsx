import { useRef, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useReveal } from "../hooks/useReveal";

// Components
import Hero from "../components/Home/Hero";
import AboutSection from "../components/Home/AboutSection";
import Destinations from "../components/Home/Destinations";
import Testimonials from "../components/Home/Testimonials";
import ContactForm from "../components/ContactForm";

const Home = () => {
  const mainRef = useRef(null);
  const { hash } = useLocation();

  // Centralized animation reveal hook
  useReveal(mainRef);

  // Smooth scroll to hash on load or hash change
  useEffect(() => {
    if (hash) {
      const id = hash.replace("#", "");
      const element = document.getElementById(id);
      if (element) {
        setTimeout(() => {
          const offset = 100; // Account for navbar height
          const bodyRect = document.body.getBoundingClientRect().top;
          const elementRect = element.getBoundingClientRect().top;
          const elementPosition = elementRect - bodyRect;
          const offsetPosition = elementPosition - offset;

          window.scrollTo({
            top: offsetPosition,
            behavior: "smooth",
          });
        }, 100);
      }
    }
  }, [hash]);

  return (
    <div ref={mainRef} className="bg-primary min-h-screen text-light">
      <Hero />
      <AboutSection />
      <Destinations />
      <Testimonials />
      <ContactForm />

      <style
        dangerouslySetInnerHTML={{
          __html: `
        .border-text {
          -webkit-text-stroke: 1px var(--color-light);
          color: transparent;
        }
        @keyframes fade-in-up {
          0% {
            opacity: 0;
            transform: translateY(30px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `,
        }}
      />
    </div>
  );
};

export default Home;
