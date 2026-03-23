import { useRef, useEffect } from "react";
import { ChevronDown, ArrowRight } from "lucide-react";
import gsap from "gsap";

const CourseAccordion = ({
  title,
  items,
  isOpen,
  onClick,
  className = "",
  countryName = "",
  isJob = false,
}) => {
  const contentRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      if (isOpen) {
        gsap.to(contentRef.current, {
          height: "auto",
          opacity: 1,
          duration: 0.4,
          ease: "power2.out",
        });
      } else {
        gsap.to(contentRef.current, {
          height: 0,
          opacity: 0,
          duration: 0.3,
          ease: "power2.inOut",
        });
      }
    });

    return () => ctx.revert();
  }, [isOpen]);

  return (
    <div className={`border border-primary rounded-xl overflow-hidden bg-primary mb-4 transition-all shadow-md hover:shadow-lg ${className}`}>
      <button
        onClick={onClick}
        className="w-full flex items-center justify-between p-5 md:p-6 text-left focus:outline-none group bg-primary relative z-10"
      >
        <h3 className="text-lg md:text-xl font-semibold text-light group-hover:text-accent transition-colors">
          {title}
        </h3>
        <div
          className={`w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 ${isOpen ? "bg-accent text-primary rotate-180" : "bg-secondary text-accent border border-accent/30 group-hover:bg-accent group-hover:text-primary"}`}
        >
          <ChevronDown size={20} />
        </div>
      </button>

      <div ref={contentRef} className="h-0 opacity-0 overflow-hidden">
        <div className="p-5 md:p-6 pt-0 border-t border-accent/20 bg-primary">
          <p className="text-light/80 text-sm mb-4">
            Top institutions offering this program:
          </p>
          <ul className="flex flex-col gap-3">
            {items.map((item, index) => (
              <li
                key={index}
                className="flex items-center gap-3 text-light hover:text-accent transition-colors p-3 rounded-lg hover:bg-secondary/80 group"
              >
                <ArrowRight
                  size={16}
                  className="text-accent opacity-0 -ml-2 group-hover:opacity-100 group-hover:ml-0 transition-all duration-300"
                />
                <span className="font-medium transform group-hover:translate-x-1 transition-transform duration-300">
                  {item}
                </span>
              </li>
            ))}
          </ul>

          <div className="mt-8 pt-6 border-t border-accent/10">
            <a
              href={`https://wa.me/919789184846?text=${encodeURIComponent(
                `Hello Knowbest Global, I'm interested in the ${title} ${isJob ? "job sector" : "program"} in ${countryName}. Please share more details.`
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-accent text-primary px-6 py-3 rounded-xl font-bold hover:bg-white transition-all shadow-md group/btn"
            >
              Apply Now
              <div className="bg-primary text-accent rounded-full p-1 group-hover/btn:bg-secondary group-hover/btn:text-white transition-all duration-300">
                <ArrowRight
                  size={14}
                  className="group-hover/btn:translate-x-0.5 transition-transform"
                />
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseAccordion;
