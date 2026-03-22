import { useState } from "react";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import { ChevronRight, ChevronLeft } from "lucide-react";
import { siteData } from "../../data/data";

const Destinations = () => {
  const [activeDest, setActiveDest] = useState(0);
  const [swiperRef, setSwiperRef] = useState(null);

  return (
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

          <div className="flex items-center gap-3 reveal-item">
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
        <div className="hidden md:flex h-[600px] w-full gap-4 overflow-hidden py-4 reveal-group">
          {siteData.studyAbroad.map((country, index) => {
            const isActive = activeDest === index;
            return (
              <div
                key={country.id}
                onClick={() => setActiveDest(index)}
                className={`group relative overflow-hidden rounded-2xl cursor-pointer transition-all duration-[800ms] ease-[cubic-bezier(0.25,1,0.5,1)] reveal-item-child ${
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
                      Explore more <ChevronRight size={18} />
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
        <div className="block md:hidden w-full py-2 reveal-item">
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
  );
};

export default Destinations;
