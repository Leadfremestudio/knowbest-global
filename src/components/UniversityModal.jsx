import { X, Calendar, DollarSign, Euro, PoundSterling, CheckCircle, GraduationCap, Info } from "lucide-react";
import { useEffect, useRef } from "react";
import gsap from "gsap";

const UniversityModal = ({ isOpen, onClose, university, programName }) => {
  const modalRef = useRef(null);
  const contentRef = useRef(null);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
      gsap.to(modalRef.current, {
        opacity: 1,
        duration: 0.3,
        ease: "power2.out",
      });
      gsap.fromTo(contentRef.current, 
        { scale: 0.9, opacity: 0, y: 20 },
        { scale: 1, opacity: 1, y: 0, duration: 0.4, delay: 0.1, ease: "back.out(1.7)" }
      );
    } else {
      document.body.style.overflow = "auto";
    }
  }, [isOpen]);

  if (!isOpen || !university) return null;

  return (
    <div
      ref={modalRef}
      className="fixed inset-0 z-[1100] flex items-center justify-center p-4 md:p-6 opacity-0"
    >
      <div 
        className="absolute inset-0 bg-primary/80 backdrop-blur-md"
        onClick={onClose}
      ></div>
      
      <div 
        ref={contentRef}
        className="relative w-full max-w-2xl bg-white border border-primary/10 rounded-[2rem] overflow-hidden shadow-[0_25px_50px_-12px_rgba(0,0,0,0.15)] max-h-[90vh] flex flex-col"
      >
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 z-10 p-2 bg-gray-100 hover:bg-primary text-primary hover:text-white rounded-full transition-all"
        >
          <X size={20} />
        </button>

        <div className="p-6 md:p-10 overflow-y-auto custom-scrollbar">
          <div className="flex items-center gap-3 text-primary/40 mb-2">
            <GraduationCap size={24} className="text-primary" />
            <span className="text-sm font-bold uppercase tracking-widest">{programName} Program</span>
          </div>
          
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6 leading-tight">
            {university.university}
          </h2>

          <div className="bg-primary/5 p-6 rounded-2xl mb-8 border border-primary/5">
            <p className="text-primary/80 text-sm md:text-base leading-relaxed">
              {university.description}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <div className="space-y-4">
              <div className="flex items-center gap-4 bg-primary text-white p-4 rounded-2xl shadow-lg shadow-primary/20">
                <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center text-accent">
                  <Calendar size={22} />
                </div>
                <div>
                  <p className="text-[10px] text-white/50 uppercase font-bold tracking-widest">Duration</p>
                  <p className="text-lg font-semibold">{university.duration}</p>
                </div>
              </div>
              
              <div className="flex items-center gap-4 bg-accent text-primary p-4 rounded-2xl shadow-lg shadow-accent/20">
                <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary font-bold text-xl">
                  {university.fees && university.fees.includes("€") ? <Euro size={22} /> : 
                   university.fees && university.fees.includes("£") ? <PoundSterling size={22} /> : 
                   <DollarSign size={22} />}
                </div>
                <div>
                  <p className="text-[10px] text-primary/50 uppercase font-bold tracking-widest">Annual Fees</p>
                  <p className="text-lg font-bold">{university.fees}</p>
                </div>
              </div>
            </div>

            <div className="bg-primary/5 p-6 rounded-2xl border border-primary/5">
              <h4 className="text-primary font-bold text-sm uppercase tracking-widest mb-4 flex items-center gap-2">
                <CheckCircle size={16} className="text-primary" /> Eligibility
              </h4>
              <ul className="space-y-3">
                {university.eligibility.map((item, idx) => (
                  <li key={idx} className="text-sm text-primary/70 flex items-start gap-3">
                    <span className="w-2 h-2 bg-accent rounded-full mt-1.5 shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {university.highlights && (
            <div className="mb-8">
              <h4 className="text-primary font-bold mb-4 flex items-center gap-2 text-xl">
                Key <span className="text-primary/50 italic">Highlights</span>
              </h4>
              <div className="grid grid-cols-1 gap-3">
                {university.highlights.map((highlight, idx) => (
                  <div key={idx} className="bg-primary/5 p-5 rounded-2xl border border-primary/5 text-sm text-primary/80 flex items-center gap-3">
                    <div className="w-1.5 h-6 bg-accent rounded-full shrink-0" />
                    {highlight}
                  </div>
                ))}
              </div>
            </div>
          )}

          <div className="pt-8 border-t border-gray-100 flex flex-col gap-6 items-center mt-4">
            <a
              href={`https://wa.me/919443892026?text=${encodeURIComponent(
                `Hello Knowbest Global, I'm interested in the ${programName} program at ${university.university}. Please share more details.`
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full md:w-auto px-10 py-4 bg-primary text-white font-bold rounded-2xl hover:bg-accent hover:text-primary transition-all text-center shadow-xl shadow-primary/20 flex items-center justify-center gap-2 group"
            >
              Consult Now
              <div className="w-2 h-2 bg-accent rounded-full group-hover:bg-primary transition-colors animate-pulse" />
            </a>
            <p className="text-gray-400 text-[10px] md:text-xs italic text-center max-w-sm">
              *All fees are indicative and subject to change based on exchange rates and university policies.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UniversityModal;
