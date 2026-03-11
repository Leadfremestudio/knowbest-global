import { useEffect, useRef, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/pagination";
import {
  ChevronRight,
  ChevronLeft,
  ArrowUpRight,
  GraduationCap,
  MapPin,
  Briefcase,
} from "lucide-react";
import { siteData } from "../data/data";
import ContactForm from "../components/ContactForm";
import heroBanner from "../assets/images/hero-banner.webp";
// About section images
import aboutSection1 from "../assets/images/about-section/about-1.webp";
import aboutSection2 from "../assets/images/about-section/about-3.webp";
import aboutSection3 from "../assets/images/about-section/about-3.webp";
const aboutImages = [aboutSection1, aboutSection2, aboutSection3];

gsap.registerPlugin(ScrollTrigger);

const splitText = (element) => {
  if (!element || element.classList.contains("split-done")) return;
  element.classList.add("split-done");

  const walk = (node) => {
    if (node.nodeType === 3) {
      const text = node.nodeValue;
      if (!text.trim()) return node;
      const fragment = document.createDocumentFragment();
      const chars = text.split("");
      chars.forEach((char) => {
        if (char === " ") {
          fragment.appendChild(document.createTextNode(" "));
        } else {
          const span = document.createElement("span");
          span.textContent = char;
          span.style.display = "inline-block";
          span.style.opacity = "0";
          span.style.transform = "translateY(20px)";
          fragment.appendChild(span);
        }
      });
      return fragment;
    } else if (node.nodeType === 1) {
      if (node.nodeName === "BR") return node;
      Array.from(node.childNodes).forEach((child) => {
        const replacement = walk(child);
        if (replacement !== child) {
          node.replaceChild(replacement, child);
        }
      });
      return node;
    }
    return node;
  };

  Array.from(element.childNodes).forEach((child) => {
    const replacement = walk(child);
    if (replacement !== child) {
      element.replaceChild(replacement, child);
    }
  });
};

const Home = () => {
  const heroRef = useRef(null);
  const { hash } = useLocation();
  const [activeDest, setActiveDest] = useState(0);
  const [swiperRef, setSwiperRef] = useState(null);

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

    // Animated Titles
    document.querySelectorAll(".animated-title").forEach((title) => {
      splitText(title);

      gsap.to(title.querySelectorAll("span"), {
        scrollTrigger: {
          trigger: title,
          start: "top 85%",
          toggleActions: "play none none reverse",
        },
        y: 0,
        opacity: 1,
        duration: 0.5,
        ease: "power4.out",
        stagger: 0.02,
      });
    });
  }, []);

  // Smooth scroll to hash on load or hash change
  useEffect(() => {
    if (hash) {
      const id = hash.replace("#", "");
      const element = document.getElementById(id);
      if (element) {
        // Delay slightly for any other layout calculations or animations to complete
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
    <div className="bg-primary min-h-screen text-light">
      {/* Hero Section */}
      <section className="relative w-full h-[100vh] min-h-[600px] p-3 md:p-4 lg:p-5 bg-white flex flex-col items-center">
        {/* Full Viewport Container */}
        <div className="hero-container relative w-full h-full flex-grow flex items-center justify-center rounded-[2rem] md:rounded-[2.5rem] overflow-hidden shadow-2xl">
          {/* Background Image with Parallax & Gradient Overlay */}
          <div className="absolute inset-0 z-0">
            <img
              ref={heroRef}
              src={heroBanner}
              alt="World Landmarks"
              className="absolute w-full h-[125%] object-cover object-center -top-[20%]"
            />
            {/* Reduced gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-tr from-primary/30 via-primary/10 to-transparent mix-blend-multiply"></div>
            <div className="absolute inset-0 bg-black/40"></div>
          </div>

          <div className="relative z-10 w-full flex flex-col items-center justify-end text-center px-6 h-full pb-[6%] mt-0">
            {/* Centered Column - Typography */}
            <div className="w-full max-w-5xl text-center z-20">
              <h1 className="hero-title text-3xl md:text-5xl lg:text-[4rem] font-bold leading-[1.1] mb-6 text-white tracking-tight will-change-transform opacity-0 drop-shadow-md">
                Europe is the hope.
                <br />
                <span className="text-accent">Knowbest Global</span>
                <br />
                is the path.
              </h1>
              <p className="hero-subtitle text-base md:text-xl text-white/95 mb-10 max-w-2xl mx-auto font-light leading-relaxed will-change-transform opacity-0 drop-shadow-sm">
                Your Trusted Partner for Global Education, connecting you with
                over 1000 top-ranked universities worldwide.
              </p>

              <div className="hero-btn opacity-0 will-change-transform">
                <a
                  href="#contact"
                  className="inline-flex items-center justify-center gap-2 bg-accent text-primary px-6 py-3 rounded-full font-semibold text-base hover:bg-white transition-all duration-300 shadow-lg group"
                >
                  Book Free Consultation
                  <div className="bg-primary text-white rounded-full p-1 group-hover:bg-primary transition-colors">
                    <ChevronRight size={16} />
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
        className="py-12 md:py-32 relative bg-primary fade-up-section"
      >
        <div className="w-full max-w-[1400px] mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-10 md:gap-16 items-center">
          <div className="lg:col-span-5 flex justify-center lg:justify-start">
            <div className="relative w-full md:w-[400px] lg:w-[420px]">
              <div className="hidden md:block absolute -inset-4 bg-secondary rounded-[2rem] transform -rotate-3 transition-transform hover:rotate-0 duration-500 origin-center"></div>
              <Swiper
                effect="fade"
                autoplay={{ delay: 3000, disableOnInteraction: false }}
                modules={[Autoplay, EffectFade]}
                loop={true}
                className="relative rounded-[2rem] w-full aspect-[4/5] shadow-2xl z-10"
              >
                {aboutImages.map((img, idx) => (
                  <SwiperSlide key={idx}>
                    <img
                      src={img}
                      alt={`Students talking ${idx + 1}`}
                      className="w-full h-full object-cover rounded-[2rem]"
                    />
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>

          <div className="lg:col-span-7 lg:pl-10">
            <h4 className="text-accent font-semibold tracking-widest uppercase text-sm mb-4">
              About Us
            </h4>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-8 text-light animated-title">
              Elevating aspirations into{" "}
              <span className="text-accent font-bold">
                <br /> achievements.
              </span>
            </h2>
            <p className="text-light/70 text-base md:text-lg lg:text-xl leading-relaxed mb-6 md:mb-8 max-w-2xl font-light">
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
      <section className="bg-white relative overflow-hidden border-y border-gray-100">
        <div className="w-full max-w-[1400px] mx-auto px-6 py-12 md:py-24 fade-up-section">
          <div className="flex flex-col md:flex-row justify-between items-end mb-6 md:mb-12 gap-4 md:gap-6">
            <div className="max-w-2xl">
              <h4 className="text-secondary font-semibold tracking-widest uppercase text-sm mb-4">
                What's happening
              </h4>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-primary animated-title">
                See the latest from Knowbest.
              </h2>
            </div>

            <div className="flex items-center gap-3">
              <button
                onClick={() => {
                  setActiveDest((prev) =>
                    prev === 0 ? siteData.studyAbroad.length - 1 : prev - 1,
                  );
                  swiperRef?.slidePrev();
                }}
                className="h-12 w-12 rounded-lg bg-primary/5 hover:bg-primary/10 text-primary transition-colors flex items-center justify-center shadow-sm"
              >
                <ChevronLeft size={24} />
              </button>
              <button
                onClick={() => {
                  setActiveDest(
                    (prev) => (prev + 1) % siteData.studyAbroad.length,
                  );
                  swiperRef?.slideNext();
                }}
                className="h-12 w-12 rounded-lg bg-primary/5 hover:bg-primary/10 text-primary transition-colors flex items-center justify-center shadow-sm"
              >
                <ChevronRight size={24} />
              </button>
            </div>
          </div>

          {/* Desktop Accordion */}
          <div className="hidden md:flex h-[600px] w-full gap-4 overflow-hidden py-4">
            {siteData.studyAbroad.map((country, index) => {
              const isActive = activeDest === index;
              return (
                <div
                  key={country.id}
                  onClick={() => setActiveDest(index)}
                  className={`group relative overflow-hidden rounded-2xl cursor-pointer transition-all duration-[800ms] ease-[cubic-bezier(0.25,1,0.5,1)] ${
                    isActive
                      ? "flex-grow shadow-xl w-[80%]"
                      : "w-[6%] min-w-[80px]"
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
                    className={`absolute inset-0 p-12 flex flex-col justify-end transition-all duration-500 ease-out transform ${isActive ? "opacity-100 translate-y-0 delay-300" : "opacity-0 translate-y-8 pointer-events-none"}`}
                  >
                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-white/20 shadow-lg">
                        <img
                          src={country.flag}
                          alt={country.name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white tracking-tight">
                        {country.name}
                      </h3>
                    </div>

                    <p className="text-lg text-white/90 line-clamp-3 mb-8 max-w-2xl font-light">
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
                    className={`absolute inset-0 flex items-center justify-center transition-all duration-300 ${!isActive ? "opacity-100 delay-300" : "opacity-0 pointer-events-none"}`}
                  >
                    <h3
                      className="text-xl font-bold text-white tracking-widest opacity-80 group-hover:opacity-100 transition-opacity whitespace-nowrap"
                      style={{
                        writingMode: "vertical-rl",
                        transform: "rotate(180deg)",
                      }}
                    >
                      {country.name}
                    </h3>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Mobile Swiper */}
          <div className="block md:hidden w-full py-2">
            <Swiper
              onSwiper={setSwiperRef}
              slidesPerView={1}
              spaceBetween={16}
              loop={true}
              autoplay={{ delay: 3500, disableOnInteraction: false }}
              modules={[Autoplay]}
              className="h-[450px] rounded-2xl"
            >
              {siteData.studyAbroad.map((country) => (
                <SwiperSlide key={country.id}>
                  <div className="relative w-full h-full overflow-hidden rounded-2xl shadow-lg">
                    <img
                      src={country.heroImage}
                      alt={country.name}
                      className="absolute inset-0 w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-dark/95 via-dark/50 to-transparent"></div>

                    <div className="absolute inset-0 p-6 flex flex-col justify-end">
                      <div className="flex items-center gap-3 mb-3">
                        <div className="w-10 h-10 rounded-full overflow-hidden border-2 border-white/20 shadow-md shrink-0">
                          <img
                            src={country.flag}
                            alt={country.name}
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <h3 className="text-2xl font-bold text-white tracking-tight">
                          {country.name}
                        </h3>
                      </div>
                      <p className="text-sm text-white/90 line-clamp-3 mb-6 font-light">
                        {country.description}
                      </p>
                      <div>
                        <Link
                          to={`/study-abroad/${country.id}`}
                          className="inline-flex items-center gap-2 bg-white text-primary px-5 py-2.5 rounded-full font-bold text-sm hover:bg-accent hover:text-primary transition-all shadow-md"
                        >
                          Explore Programs <ChevronRight size={16} />
                        </Link>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-12 md:py-32 bg-primary fade-up-section overflow-hidden">
        <div className="w-full max-w-[1400px] mx-auto px-6 text-center mb-10 md:mb-16">
          <h4 className="text-accent font-semibold tracking-widest uppercase text-sm mb-4">
            Success Stories
          </h4>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight animated-title">
            Hear from our{" "}
            <span className="text-accent font-bold">Scholars</span>
          </h2>
        </div>

        <div className="w-full max-w-[1400px] mx-auto px-6">
          <Swiper
            slidesPerView={1}
            breakpoints={{
              768: {
                slidesPerView: 2,
                spaceBetween: 32,
              },
              992: {
                slidesPerView: 3,
                spaceBetween: 32,
              },
            }}
            spaceBetween={24}
            loop={true}
            autoplay={{ delay: 4000, disableOnInteraction: false }}
            modules={[Autoplay]}
            grabCursor={true}
            className="w-full cursor-grab active:cursor-grabbing"
          >
            {siteData.testimonials.map((testimonial, idx) => (
              <SwiperSlide key={idx} className="h-auto">
                <div className="h-full bg-secondary p-8 rounded-2xl border border-secondary hover:border-accent/40 transition-colors relative flex flex-col justify-between">
                  <div>
                    <div className="text-accent text-6xl font-serif leading-none absolute top-6 left-6 opacity-20">
                      "
                    </div>
                    <p className="text-light/80 text-lg mb-8 relative z-10 pt-4 leading-relaxed font-light">
                      {testimonial.text}
                    </p>
                  </div>
                  <div className="flex items-center gap-4 mt-auto">
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-14 h-14 rounded-full object-cover border-2 border-primary shrink-0"
                    />
                    <div>
                      <h5 className="font-bold text-light line-clamp-1">
                        {testimonial.name}
                      </h5>
                      <p className="text-accent text-sm flex items-center gap-1 line-clamp-1">
                        <MapPin size={12} className="shrink-0" />
                        {testimonial.university}
                      </p>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>

      {/* Contact Form Section */}
      <ContactForm />

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
