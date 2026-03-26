import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { ChevronRight, Briefcase, MapPin, Clock, Languages, Users, CheckCircle } from "lucide-react";
import { useReveal } from "../hooks/useReveal";
import { jobsList } from "../data/jobsList";
import germanyHero from "../assets/images/countries/german-hero.webp";

const Jobs = () => {
  const mainRef = useRef(null);

  // Centralized animation reveal hook
  useReveal(mainRef);

  useEffect(() => {
    // Scroll to top is handled by ScrollToTop component in App.jsx
  }, []);

  return (
    <div ref={mainRef} className="bg-primary min-h-screen text-light font-sans">
      {/* Hero Section */}
      <section className="relative h-[60vh] md:h-[70vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0 overflow-hidden">
          <img
            src={germanyHero}
            alt="Jobs Abroad"
            className="w-full h-full object-cover g-parallax-bg scale-105 will-change-transform"
          />
          <div className="absolute inset-0 bg-primary/70 backdrop-blur-[2px]"></div>
        </div>

        <div className="container mx-auto px-6 relative z-10 text-center flex flex-col items-center mt-16 md:mt-20">
          <h4 className="text-accent font-semibold tracking-[0.2em] uppercase text-sm mb-4 animate-fade-in-up">
            Career Opportunities
          </h4>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tighter mb-6 text-light animate-fade-in-up">
            Work <span className="text-accent">Abroad</span>
          </h1>

          <div
            className="flex flex-wrap justify-center items-center gap-1.5 md:gap-2 text-sm md:text-base max-[450px]:text-[11px] text-light/70 uppercase tracking-widest font-medium animate-fade-in-up bg-white/5 backdrop-blur-md px-6 py-2 rounded-full border border-white/10"
            style={{ animationDelay: "0.2s" }}
          >
            <Link to="/" className="hover:text-accent transition-colors">
              Home
            </Link>
            <ChevronRight size={14} />
            <span className="text-accent">Job Abroad</span>
          </div>
        </div>
      </section>

      {/* Jobs Section */}
      <section className="py-16 md:py-24 bg-light text-primary relative">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16 md:mb-20 will-change-transform">
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-6 text-primary reveal-item">
              Latest <span className="text-accent font-serif italic">Europe</span> Job Openings 2026
            </h2>
            <div className="w-24 h-1.5 bg-accent mx-auto rounded-full mb-6 reveal-item"></div>
            <p className="text-primary/70 text-lg font-light leading-relaxed reveal-item">
              Explore the latest unskilled job opportunities with full visa sponsorship and comprehensive benefits across Europe.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10 reveal-group">
            {jobsList.map((job, index) => (
              <div 
                key={index} 
                className="group bg-white rounded-2xl shadow-sm border border-black/5 overflow-hidden flex flex-col h-full transform transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:border-accent/20 reveal-item-child"
              >
                <div className="p-8 pb-4 relative">
                  <div className="absolute top-8 right-8 text-accent/20 group-hover:text-accent/40 transition-colors">
                    <Briefcase size={32} />
                  </div>
                  <span className="inline-block px-3 py-1 bg-primary text-accent text-[10px] font-bold tracking-widest uppercase rounded-full mb-4">
                    Job #{index + 1}
                  </span>
                  <h3 className="text-2xl font-bold text-primary group-hover:text-secondary transition-colors leading-tight">
                    {job.title}
                  </h3>
                </div>
                
                <div className="px-8 pb-8 flex-grow">
                  <div className="space-y-4 pt-4 border-t border-black/5">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-lg bg-primary/5 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                        <MapPin size={16} />
                      </div>
                      <div className="flex flex-col">
                        <span className="text-[10px] text-primary/40 uppercase font-bold tracking-wider">Location</span>
                        <span className="text-sm font-semibold">{job.location}</span>
                      </div>
                    </div>

                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-lg bg-primary/5 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-colors duration-300 font-bold">
                        ₹
                      </div>
                      <div className="flex flex-col">
                        <span className="text-[10px] text-primary/40 uppercase font-bold tracking-wider">Salary</span>
                        <span className="text-sm font-semibold">{job.salary}</span>
                      </div>
                    </div>

                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-lg bg-primary/5 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                        <Users size={16} />
                      </div>
                      <div className="flex flex-col">
                        <span className="text-[10px] text-primary/40 uppercase font-bold tracking-wider">Openings</span>
                        <span className="text-sm font-semibold">{job.openings} Positions Available</span>
                      </div>
                    </div>

                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-lg bg-primary/5 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                        <Clock size={16} />
                      </div>
                      <div className="flex flex-col">
                        <span className="text-[10px] text-primary/40 uppercase font-bold tracking-wider">Schedule</span>
                        <span className="text-sm font-semibold">{job.workingHours}</span>
                      </div>
                    </div>

                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-lg bg-primary/5 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                        <Languages size={16} />
                      </div>
                      <div className="flex flex-col">
                        <span className="text-[10px] text-primary/40 uppercase font-bold tracking-wider">Requirement</span>
                        <span className="text-sm font-semibold text-primary/80">{job.language}</span>
                      </div>
                    </div>

                    <div className="mt-6 p-4 bg-accent/10 rounded-xl border border-accent/20">
                      <div className="flex items-start gap-2">
                        <CheckCircle size={14} className="text-accent mt-1 shrink-0" />
                        <p className="text-[12px] leading-relaxed italic text-primary/80">
                          Includes {job.includes}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="px-8 pb-8 mt-auto">
                  <a
                    href={`https://wa.me/919443892026?text=Hello, I am interested in applying for the ${job.title} position in ${job.location}.`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 bg-primary hover:bg-secondary text-white font-bold py-4 rounded-xl transition-all duration-500 shadow-md group transform active:scale-[0.98]"
                  >
                    Apply Now
                    <div className="bg-accent text-primary rounded-full p-1 group-hover:rotate-45 transition-transform duration-300">
                      <ChevronRight size={16} />
                    </div>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Jobs;
