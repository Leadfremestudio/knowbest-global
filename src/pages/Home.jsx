import { useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  ChevronRight,
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

  useEffect(() => {
    if (hash) {
      const id = hash.replace("#", "");
      const element = document.getElementById(id);
      if (element) {
        setTimeout(() => {
          if (window.lenis) {
            window.lenis.scrollTo(element, { offset: -80 }); // slight offset for header
          } else {
            element.scrollIntoView({ behavior: "smooth" });
          }
        }, 100);
      }
    }
  }, [hash]);

  useEffect(() => {
    // Parallax hero effect
    gsap.to(heroRef.current, {
      y: "15%",
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
      <section className="relative w-full h-screen min-h-[600px] overflow-hidden">
        {/* Full Viewport Container */}
        <div className="hero-container relative w-full h-full flex items-center justify-center bg-transparent">
          {/* Background Image with Parallax & Gradient Overlay */}
          <div className="absolute inset-0 z-0">
            <img
              ref={heroRef}
              src="https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?auto=format&fit=crop&q=80&w=2670"
              alt="World Landmarks"
              className="w-full h-[120%] object-cover object-center -mt-[10%]"
            />
            {/* Reduced gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-tr from-primary/30 via-primary/10 to-transparent mix-blend-multiply"></div>
            <div className="absolute inset-0 bg-black/10"></div>
          </div>

          <div className="relative z-10 w-full flex flex-col items-center justify-center text-center px-6 h-full mt-10">
            {/* Centered Column - Typography */}
            <div className="w-full max-w-5xl text-center z-20">
              <h1 className="hero-title text-5xl md:text-7xl lg:text-[5.5rem] font-medium leading-[1.1] mb-6 text-white tracking-tight will-change-transform opacity-0">
                Europe is the hope.
                <br />
                <span className="text-accent font-medium">
                  Knowbest Global
                </span>
                <br />
                is the path.
              </h1>
              <p className="hero-subtitle text-lg md:text-2xl text-white/90 mb-10 max-w-2xl mx-auto font-light leading-relaxed will-change-transform opacity-0">
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
        <div className="container mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
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
              At Nobest Global, we believe that education should have no
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
      <section className="py-24 bg-secondary/50 relative overflow-hidden fade-up-section border-y border-secondary">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <div className="max-w-2xl">
              <h4 className="text-accent font-semibold tracking-widest uppercase text-sm mb-4">
                Global Network
              </h4>
              <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
                Top Destinations
              </h2>
            </div>
            <button className="text-accent hover:text-accent-hover font-semibold flex items-center gap-2 group whitespace-nowrap">
              View All Countries
              <ChevronRight
                className="group-hover:translate-x-1 transition-transform"
                size={18}
              />
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {siteData.studyAbroad.map((country) => (
              <Link
                to={`/study-abroad/${country.id}`}
                key={country.id}
                className="group block relative overflow-hidden rounded-2xl aspect-[3/4] hover:-translate-y-2 transition-transform duration-500 bg-secondary"
              >
                <img
                  src={country.heroImage}
                  alt={country.name}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-60 group-hover:opacity-100 mix-blend-overlay group-hover:mix-blend-normal"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/60 to-transparent opacity-90 group-hover:opacity-70 transition-opacity"></div>

                <div className="absolute bottom-0 left-0 p-6 w-full flex flex-col h-full justify-end">
                  <div className="w-10 h-10 rounded-full overflow-hidden mb-4 border-2 border-accent shadow-lg transform translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300 delay-100">
                    <img
                      src={country.flag}
                      alt={country.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h3 className="text-2xl font-bold mb-1 flex items-center justify-between">
                    {country.name}
                    <ArrowUpRight className="opacity-0 group-hover:opacity-100 transition-opacity text-accent" />
                  </h3>
                  <p className="text-sm text-light/70 line-clamp-2 transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 delay-75">
                    {country.description}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 md:py-32 bg-primary fade-up-section overflow-hidden">
        <div className="container mx-auto px-6 text-center mb-16">
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

        <div className="container mx-auto px-6">
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
