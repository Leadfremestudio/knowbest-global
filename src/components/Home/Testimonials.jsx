import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import { MapPin } from "lucide-react";
import { siteData } from "../../data/data";

const Testimonials = () => {
  return (
    <section className="py-12 md:py-32 bg-primary fade-up-section overflow-hidden">
      <div className="w-full max-w-[1400px] mx-auto px-6 text-center mb-10 md:mb-16">
        <h4 className="text-accent font-semibold tracking-widest uppercase text-sm mb-4 reveal-item">
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
          className="w-full cursor-grab active:cursor-grabbing reveal-group"
        >
          {siteData.testimonials.map((testimonial, idx) => (
            <SwiperSlide key={idx} className="h-auto reveal-item-child">
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
  );
};

export default Testimonials;
