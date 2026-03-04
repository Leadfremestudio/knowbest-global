import { useParams, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { ChevronRight } from "lucide-react";
import { siteData } from "../data/data";
import CourseAccordion from "../components/CourseAccordion";

const CountryDetail = () => {
  const { country } = useParams();
  const [countryData, setCountryData] = useState(null);
  const [openAccordion, setOpenAccordion] = useState(null);

  useEffect(() => {
    // Scroll to top on route change
    window.scrollTo(0, 0);

    // Find the country in the data
    const data = siteData.studyAbroad.find((c) => c.id === country);
    setCountryData(data);
  }, [country]);

  if (!countryData) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-primary">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-light mb-4">
            Country Not Found
          </h2>
          <Link to="/" className="text-accent hover:underline">
            Return to Home
          </Link>
        </div>
      </div>
    );
  }

  const toggleAccordion = (index) => {
    setOpenAccordion(openAccordion === index ? null : index);
  };

  return (
    <div className="bg-primary min-h-screen text-light">
      {/* Hero Section */}
      <section className="relative h-[60vh] md:h-[70vh] flex items-center justify-center overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <img
            src={countryData.heroImage}
            alt={countryData.name}
            className="w-full h-full object-cover g-parallax-bg"
          />
          <div className="absolute inset-0 bg-primary/70 backdrop-blur-[2px]"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-primary via-transparent to-transparent"></div>
        </div>

        {/* Content */}
        <div className="container mx-auto px-6 relative z-10 text-center flex flex-col items-center mt-20">
          <div className="w-20 h-20 md:w-24 md:h-24 rounded-full overflow-hidden border-4 border-accent mb-6 shadow-2xl animate-fade-in-up">
            <img
              src={countryData.flag}
              alt={`${countryData.name} flag`}
              className="w-full h-full object-cover"
            />
          </div>
          <h1
            className="text-5xl md:text-7xl font-bold tracking-tighter mb-4 text-light animate-fade-in-up"
            style={{ animationDelay: "0.1s" }}
          >
            Study in <span className="text-accent">{countryData.name}</span>
          </h1>

          <div
            className="flex items-center gap-2 text-sm md:text-base text-light/70 uppercase tracking-widest font-medium animate-fade-in-up"
            style={{ animationDelay: "0.2s" }}
          >
            <Link to="/" className="hover:text-accent transition-colors">
              Home
            </Link>
            <ChevronRight size={14} />
            <span>Study Abroad</span>
            <ChevronRight size={14} />
            <span className="text-accent">{countryData.name}</span>
          </div>
        </div>
      </section>

      {/* Overview & Courses Section */}
      <section className="py-20 bg-primary relative">
        <div className="container mx-auto px-6 grid grid-cols-1 lg:grid-cols-3 gap-16">
          {/* Overview sidebar */}
          <div className="lg:col-span-1 border-r-0 lg:border-r border-secondary pr-0 lg:pr-10">
            <h2 className="text-3xl font-bold tracking-tight mb-6 flex items-center gap-3">
              <span className="w-8 h-1 bg-accent inline-block rounded-full"></span>
              Overview
            </h2>
            <p className="text-light/80 text-lg leading-relaxed">
              {countryData.description}
            </p>

            <div className="mt-10 p-6 bg-secondary rounded-2xl border border-secondary hover:border-accent/30 transition-colors">
              <h4 className="text-accent font-semibold mb-2">Need Guidance?</h4>
              <p className="text-sm text-light/70 mb-4">
                Our expert counselors are ready to help you plan your journey to{" "}
                {countryData.name}.
              </p>
              <button className="w-full py-3 bg-accent text-primary font-bold rounded-lg hover:bg-accent-hover transition-colors">
                Consult Expert
              </button>
            </div>
          </div>

          {/* Courses List */}
          <div className="lg:col-span-2">
            <h2 className="text-3xl lg:text-4xl font-bold tracking-tight mb-10 text-light">
              Available{" "}
              <span className="text-accent font-serif italic">Programs</span>
            </h2>

            <div className="flex flex-col gap-2">
              {countryData.courses.map((course, index) => (
                <CourseAccordion
                  key={index}
                  title={course.courseName}
                  items={course.details}
                  isOpen={openAccordion === index}
                  onClick={() => toggleAccordion(index)}
                />
              ))}
            </div>

            {countryData.courses.length === 0 && (
              <p className="text-light/50 italic p-8 bg-secondary rounded-xl text-center border border-secondary">
                No active programs listed at the moment. Please contact us for
                details.
              </p>
            )}
          </div>
        </div>
      </section>
    </div>
  );
};

export default CountryDetail;
