import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade } from "swiper/modules";
import { Briefcase, GraduationCap } from "lucide-react";
import "swiper/css";
import "swiper/css/effect-fade";

import aboutSection1 from "../../assets/images/about-section/about-1.webp";
import aboutSection2 from "../../assets/images/about-section/about-3.webp";
import aboutSection3 from "../../assets/images/about-section/about-3.webp";

const aboutImages = [aboutSection1, aboutSection2, aboutSection3];

const AboutSection = () => {
  return (
    <section id="about" className="py-12 md:py-32 relative bg-primary fade-up-section">
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
          <h4 className="text-accent font-semibold tracking-widest uppercase text-sm mb-4 reveal-item">
            About Us
          </h4>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-8 text-light animated-title">
            Knowbest Global
            <span className="text-accent font-bold">
              <br /> Consultancy.
            </span>
          </h2>
          <p className="text-light/70 text-base md:text-lg lg:text-xl leading-relaxed mb-6 md:mb-8 max-w-2xl font-light reveal-item">
            is a trusted partner for individuals seeking rewarding career
            opportunities abroad. We are dedicated to helping ambitious
            candidates turn their dreams of working overseas into reality
            through expert guidance, reliable processes, and personalised
            support.
          </p>
          <p className="text-light/70 text-base md:text-lg lg:text-xl leading-relaxed mb-6 md:mb-8 max-w-2xl font-light reveal-item">
            With a strong understanding of global job markets and recruitment
            procedures, we connect skilled professionals with the right
            opportunities across various countries. Our goal is not just to
            place candidates in jobs, but to build successful international
            careers.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-12 reveal-group">
            <div className="flex items-start gap-4 reveal-item-child">
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
            <div className="flex items-start gap-4 reveal-item-child">
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
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
