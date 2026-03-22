import { useRef, useEffect } from "react";
import gsap from "gsap";
import { ChevronRight } from "lucide-react";
import heroBanner from "../../assets/images/hero-banner.webp";

const Hero = () => {
  const heroRef = useRef(null);

  useEffect(() => {
    // Parallax hero effect with hardware acceleration
    const parallax = gsap.to(heroRef.current, {
      yPercent: 15,
      ease: "none",
      scrollTrigger: {
        trigger: ".hero-container",
        start: "top top",
        end: "bottom top",
        scrub: true,
      },
    });

    // High performance GSAP animation sequence for hero content
    const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

    tl.fromTo(
      ".hero-title",
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 0.8, delay: 0.2 },
    )
      .fromTo(
        ".hero-subtitle",
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.6 },
        "-=0.4",
      )
      .fromTo(
        ".hero-btn",
        { opacity: 0, scale: 0.98, y: 15 },
        { opacity: 1, scale: 1, y: 0, duration: 0.5 },
        "-=0.3",
      );

    return () => {
      parallax.scrollTrigger?.kill();
      tl.kill();
    };
  }, []);

  return (
    <section className="relative w-full h-[100vh] min-h-[600px] p-3 md:p-4 lg:p-5 bg-white flex flex-col items-center">
      <div className="hero-container relative w-full h-full flex-grow flex items-center justify-center rounded-[2rem] md:rounded-[2.5rem] overflow-hidden shadow-2xl">
        <div className="absolute inset-0 z-0">
          <img
            ref={heroRef}
            src={heroBanner}
            alt="World Landmarks"
            className="absolute w-full h-[120%] object-cover object-center -top-[10%] will-change-transform"
          />
          <div className="absolute inset-0 bg-gradient-to-tr from-primary/30 via-primary/10 to-transparent mix-blend-multiply"></div>
          <div className="absolute inset-0 bg-black/40"></div>
        </div>

        <div className="relative z-10 w-full flex flex-col items-center justify-end text-center px-6 h-full pb-[6%] mt-0">
          <div className="w-full max-w-5xl text-center z-20 will-change-transform">
            <h2 className="hero-title text-2xl md:text-4xl lg:text-[3.5rem] font-bold leading-[1.1] mb-6 text-white tracking-tight will-change-transform opacity-0 drop-shadow-md">
              Your Future Abroad
              <br />
              Starts with the Right Guidance
            </h2>
            <p className="hero-subtitle text-base md:text-xl text-white/95 mb-10 max-w-2xl mx-auto font-light leading-relaxed will-change-transform opacity-0 drop-shadow-sm">
              Your Trusted Partner for Global Education, connecting you with
              over 1000 top-ranked universities worldwide.
            </p>

            <div className="hero-btn opacity-0 will-change-transform">
              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2 bg-accent text-primary px-6 py-3 rounded-full font-semibold text-base hover:bg-white transition-all duration-300 shadow-lg group"
              >
                Let’s Connect
                <div className="bg-primary text-white rounded-full p-1 group-hover:bg-primary transition-colors">
                  <ChevronRight size={16} />
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
