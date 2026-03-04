import { useEffect, useRef, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  ChevronRight,
  ChevronLeft,
  ArrowUpRight,
  GraduationCap,
  MapPin,
  Briefcase,
} from "lucide-react";
import { siteData } from "../data/data";

gsap.registerPlugin(ScrollTrigger);

const Home = () => {
  const heroRef = useRef(null);
  const { hash } = useLocation();
  const [activeDest, setActiveDest] = useState(0);

  useEffect(() => {
    if (hash) {
      const id = hash.replace("#", "");
      const element = document.getElementById(id);
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: "smooth" });
        }, 100);
      }
    }
  }, [hash]);

  useEffect(() => {
    // Parallax hero effect
    gsap.to(heroRef.current, {
      yPercent: 20,
      ease: "none",
      scrollTrigger: {
        trigger: ".hero-container",
        start: "top top",
        end: "bottom top",
        scrub: true,
      },
    });

    // High performance GSAP animation sequence for hero content without GPU load layout reflows
    const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

    tl.fromTo(
      ".hero-title",
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 1, delay: 0.2 },
    )
      .fromTo(
        ".hero-subtitle",
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 0.8 },
        "-=0.6", // overlaps subtitle appearance with title
      )
      .fromTo(
        ".hero-btn",
        { opacity: 0, scale: 0.95, y: 20 },
        { opacity: 1, scale: 1, y: 0, duration: 0.6 },
        "-=0.4",
      );

    // Staggered fade up for sections
    const sections = gsap.utils.toArray(".fade-up-section");
    sections.forEach((section) => {
      gsap.fromTo(
        section,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: section,
            start: "top 80%",
            toggleActions: "play none none none",
          },
        },
      );
    });
  }, []);

  return (
    <div className="bg-primary min-h-screen text-light">
      {/* Hero Section */}
      <section className="relative w-full h-screen min-h-[600px] px-4 md:px-6 lg:px-8 pt-[104px] md:pt-[130px] pb-4 md:pb-6 lg:pb-8 bg-white flex flex-col items-center">
        {/* Full Viewport Container */}
        <div className="hero-container relative w-full flex-grow max-w-[1400px] flex items-center justify-center rounded-[2.5rem] md:rounded-[3rem] overflow-hidden shadow-2xl">
          {/* Background Image with Parallax & Gradient Overlay */}
          <div className="absolute inset-0 z-0">
            <img
              ref={heroRef}
              src="https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?auto=format&fit=crop&q=80&w=2670"
              alt="World Landmarks"
              className="absolute w-full h-[125%] object-cover object-center -top-[20%]"
            />
            {/* Reduced gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-tr from-primary/30 via-primary/10 to-transparent mix-blend-multiply"></div>
            <div className="absolute inset-0 bg-black/10"></div>
          </div>

          <div className="relative z-10 w-full flex flex-col items-center justify-center text-center px-6 h-full mt-0">
            {/* Centered Column - Typography */}
            <div className="w-full max-w-5xl text-center z-20">
              <h1 className="hero-title text-5xl md:text-7xl lg:text-[5.5rem] font-medium leading-[1.1] mb-6 text-white tracking-tight will-change-transform opacity-0 drop-shadow-sm">
                Europe is the hope.
                <br />
                <span className="text-accent font-medium">Knowbest Global</span>
                <br />
                is the path.
              </h1>
              <p className="hero-subtitle text-lg md:text-2xl text-white/95 mb-10 max-w-2xl mx-auto font-light leading-relaxed will-change-transform opacity-0 drop-shadow-sm">
                Your Trusted Partner for Global Education, connecting you with
                over 1000 top-ranked universities worldwide.
              </p>

              <div className="hero-btn opacity-0 will-change-transform">
                <a
                  href="#contact"
                  className="inline-flex items-center justify-center gap-3 bg-accent text-primary px-8 py-4 rounded-full font-semibold text-lg hover:bg-white transition-all duration-300 shadow-lg group"
                >
                  Book Free Consultation
                  <div className="bg-primary text-white rounded-full p-1 group-hover:bg-primary transition-colors">
                    <ChevronRight size={18} />
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Preview */}
      <section
        id="about"
        className="py-24 md:py-32 relative bg-primary fade-up-section"
      >
        <div className="w-full max-w-[1400px] mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          <div className="lg:col-span-5 relative">
            <div className="absolute -inset-4 bg-secondary rounded-[2rem] transform -rotate-3 transition-transform hover:rotate-0 duration-500 origin-center"></div>
            <img
              src="https://images.unsplash.com/photo-1541339907198-e08756dedf3f?q=80&w=2670&auto=format&fit=crop"
              alt="Students talking"
              className="relative rounded-[2rem] w-full aspect-[4/5] object-cover shadow-2xl z-10"
            />
          </div>

          <div className="lg:col-span-7 lg:pl-10">
            <h4 className="text-accent font-semibold tracking-widest uppercase text-sm mb-4">
              About Us
            </h4>
            <h2 className="text-4xl md:text-6xl font-bold tracking-tight mb-8 text-light">
              Elevating aspirations into{" "}
              <span className="font-serif italic text-accent font-light">
                achievements.
              </span>
            </h2>
            <p className="text-light/70 text-lg md:text-xl leading-relaxed mb-8 max-w-2xl font-light">
              At Knowbest Global, we believe that education should have no
              geographical limits. We provide bespoke consultancy services
              tailored to your unique academic and professional goals, ensuring
              a seamless transition to the world's most prestigious
              institutions.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-12">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-secondary flex items-center justify-center shrink-0">
                  <GraduationCap className="text-accent" />
                </div>
                <div>
                  <h4 className="font-bold text-lg mb-1">Expert Guidance</h4>
                  <p className="text-light/50 text-sm">
                    Personalized admission strategies for top global
                    universities.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-secondary flex items-center justify-center shrink-0">
                  <Briefcase className="text-accent" />
                </div>
                <div>
                  <h4 className="font-bold text-lg mb-1">Career Pathways</h4>
                  <p className="text-light/50 text-sm">
                    Comprehensive job consultancy for international
                    opportunities.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Popular Destinations / Study Abroad */}
      <section className="py-24 bg-light relative overflow-hidden fade-up-section border-y border-gray-100">
        <div className="w-full max-w-[1400px] mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
            <div className="max-w-2xl">
              <h4 className="text-secondary font-semibold tracking-widest uppercase text-sm mb-4">
                What's happening
              </h4>
              <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-primary">
                See the latest from Knowbest.
              </h2>
            </div>

            <div className="flex items-center gap-3">
              <button
                onClick={() =>
                  setActiveDest((prev) =>
                    prev === 0 ? siteData.studyAbroad.length - 1 : prev - 1,
                  )
                }
                className="h-12 w-12 rounded-lg bg-primary/5 hover:bg-primary/10 text-primary transition-colors flex items-center justify-center shadow-sm"
              >
                <ChevronLeft size={24} />
              </button>
              <button
                onClick={() =>
                  setActiveDest(
                    (prev) => (prev + 1) % siteData.studyAbroad.length,
                  )
                }
                className="h-12 w-12 rounded-lg bg-primary/5 hover:bg-primary/10 text-primary transition-colors flex items-center justify-center shadow-sm"
              >
                <ChevronRight size={24} />
              </button>
            </div>
          </div>

          <div className="flex h-[450px] md:h-[600px] w-full gap-2 md:gap-4 overflow-hidden py-4">
            {siteData.studyAbroad.map((country, index) => {
              const isActive = activeDest === index;
              return (
                <div
                  key={country.id}
                  onClick={() => setActiveDest(index)}
                  className={`group relative overflow-hidden rounded-2xl cursor-pointer transition-all duration-[800ms] ease-[cubic-bezier(0.25,1,0.5,1)] ${
                    isActive
                      ? "w-[75%] md:w-[80%] flex-grow shadow-xl"
                      : "w-[12%] md:w-[6%] min-w-[60px] md:min-w-[80px]"
                  }`}
                >
                  <img
                    src={country.heroImage}
                    alt={country.name}
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-[2s] ease-out group-hover:scale-105"
                  />

                  {/* Overlay */}
                  <div
                    className={`absolute inset-0 transition-all duration-1000 ${isActive ? "bg-gradient-to-t from-dark/90 via-dark/40 to-transparent" : "bg-dark/60 group-hover:bg-dark/40"}`}
                  ></div>

                  {/* Active Full Content */}
                  <div
                    className={`absolute inset-0 p-6 md:p-12 flex flex-col justify-end transition-all duration-500 ease-out transform ${isActive ? "opacity-100 translate-y-0 delay-300" : "opacity-0 translate-y-8 pointer-events-none"}`}
                  >
                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-white/20 shadow-lg">
                        <img
                          src={country.flag}
                          alt={country.name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <h3 className="text-3xl md:text-5xl font-bold text-white tracking-tight">
                        {country.name}
                      </h3>
                    </div>

                    <p className="text-base md:text-lg text-white/90 line-clamp-2 md:line-clamp-3 mb-8 max-w-2xl font-light">
                      {country.description}
                    </p>

                    <div>
                      <Link
                        to={`/study-abroad/${country.id}`}
                        className="inline-flex items-center gap-2 bg-white text-primary px-6 py-3.5 rounded-full font-bold hover:bg-accent hover:text-primary transition-all shadow-md"
                      >
                        Explore Programs <ChevronRight size={18} />
                      </Link>
                    </div>
                  </div>

                  {/* Squeezed text (only shows when not active) */}
                  <div
                    className={`absolute inset-0 flex items-end justify-center pb-12 md:pb-16 transition-all duration-300 ${!isActive ? "opacity-100 delay-300" : "opacity-0 pointer-events-none"}`}
                  >
                    <h3 className="text-xl md:text-2xl font-bold text-white whitespace-nowrap -rotate-90 tracking-widest opacity-80 group-hover:opacity-100 transition-opacity">
                      {country.name}
                    </h3>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 md:py-32 bg-primary fade-up-section overflow-hidden">
        <div className="w-full max-w-[1400px] mx-auto px-6 text-center mb-16">
          <h4 className="text-accent font-semibold tracking-widest uppercase text-sm mb-4">
            Success Stories
          </h4>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
            Hear from our{" "}
            <span className="font-serif italic text-accent font-light">
              Scholars
            </span>
          </h2>
        </div>

        <div className="w-full max-w-[1400px] mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {siteData.testimonials.map((testimonial, idx) => (
              <div
                key={idx}
                className="bg-secondary p-8 rounded-2xl border border-secondary hover:border-accent/40 transition-colors relative"
              >
                <div className="text-accent text-6xl font-serif leading-none absolute top-6 left-6 opacity-20">
                  "
                </div>
                <p className="text-light/80 text-lg mb-8 relative z-10 pt-4 leading-relaxed font-light">
                  {testimonial.text}
                </p>
                <div className="flex items-center gap-4">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-14 h-14 rounded-full object-cover border-2 border-primary"
                  />
                  <div>
                    <h5 className="font-bold text-light">{testimonial.name}</h5>
                    <p className="text-accent text-sm flex items-center gap-1">
                      <MapPin size={12} />
                      {testimonial.university}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CSS for custom classes */}
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
