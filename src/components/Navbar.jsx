import { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import { ChevronDown, ChevronRight, Menu, X } from "lucide-react";
import { siteData } from "../data/data";
import CountryDropdown from "./CountryDropdown";
import logo from "../assets/images/knowbest-global-logo.png";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [visible, setVisible] = useState(true);
  const lastScrollY = useRef(0);
  const [studyDropdownOpen, setStudyDropdownOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileStudyOpen, setMobileStudyOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const currentScrollY = window.scrollY;

          setScrolled(currentScrollY > 50);

          // Hide navbar when scrolling down, show when scrolling up
          if (currentScrollY > lastScrollY.current && currentScrollY > 100) {
            setVisible(false);
          } else {
            setVisible(true);
          }

          lastScrollY.current = currentScrollY;
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    // Close mobile menu on route change
    setMobileMenuOpen(false);
  }, [location.pathname]);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About Us", path: "/#about" },
  ];

  return (
    <div
      className={`fixed top-4 md:top-8 lg:top-10 left-0 w-full px-4 md:px-10 lg:px-12 z-50 transition-all duration-500 ease-in-out flex justify-center pointer-events-none ${
        visible ? "translate-y-0 opacity-100" : "-translate-y-[150%] opacity-0"
      }`}
    >
      <div className="w-full max-w-[1360px] mx-auto flex items-center justify-center">
        <header
          className={`w-full bg-white/95 backdrop-blur-md rounded-full pointer-events-auto transition-all duration-500 ease-in-out flex flex-col justify-center shadow-md border border-white/50 ${
            scrolled ? "py-2 px-4 md:px-8" : "py-3 px-4 md:px-8"
          }`}
        >
          <div className="flex justify-between items-center relative w-full">
            {/* Logo Left */}
            <Link to="/" className="flex items-center shrink-0 z-50 gap-2">
              <img
                src={logo}
                alt="Knowbest Global"
                className={`w-auto object-contain transition-all duration-500 ease-in-out origin-left ${
                  scrolled ? "h-10 md:h-12" : "h-12 md:h-14"
                }`}
              />
              <span className="font-bold text-primary text-xl hidden lg:block tracking-tight">
                Knowbest Global
              </span>
            </Link>

            {/* Desktop Nav Right */}
            <nav className="hidden md:flex items-center gap-6 lg:gap-8 justify-end flex-1 pr-6 z-10 w-max">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  className="text-primary hover:text-accent transition-colors font-bold text-[15px]"
                >
                  {link.name}
                </Link>
              ))}

              <div
                className="relative group"
                onMouseEnter={() => setStudyDropdownOpen(true)}
                onMouseLeave={() => setStudyDropdownOpen(false)}
              >
                <button className="flex items-center gap-1 text-primary hover:text-accent transition-colors font-bold text-[15px] py-1 border-none focus:outline-none">
                  Study Abroad
                  <ChevronDown
                    className={`w-4 h-4 transition-transform duration-300 ${studyDropdownOpen ? "rotate-180" : ""}`}
                  />
                </button>
                <CountryDropdown
                  isOpen={studyDropdownOpen}
                  items={siteData.studyAbroad}
                  basePath="/study-abroad"
                />
              </div>

              <Link
                to="/job-abroad"
                className="text-primary hover:text-accent transition-colors font-bold text-[15px] py-1"
              >
                Job Abroad
              </Link>
            </nav>

            {/* Contact Button Right */}
            <div className="hidden md:flex z-50 justify-end items-center">
              <Link
                to="/#contact"
                className="flex items-center gap-2 bg-transparent border border-primary/20 hover:bg-primary/5 text-primary px-5 py-2 rounded-full font-bold text-[15px] transition-all duration-300"
              >
                Contact Us{" "}
                <ChevronRight
                  size={16}
                  className="bg-primary text-white rounded-full p-0.5"
                />
              </Link>
            </div>

            {/* Mobile Nav Toggle */}
            <button
              className="md:hidden z-50 p-2 text-primary"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>

            {/* Mobile Nav Overlay */}
            <div
              className={`fixed -top-4 -left-4 w-[100vw] h-[100vh] bg-white z-40 md:hidden transition-transform duration-300 ${mobileMenuOpen ? "translate-x-0" : "translate-x-full"} flex flex-col items-center pt-28 pb-8 overflow-y-auto`}
            >
              <div className="flex flex-col items-center justify-start gap-6 w-full px-6 flex-1">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  className="text-xl font-medium text-primary hover:text-accent"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.name}
                </Link>
              ))}
              <div className="flex flex-col items-center w-full mt-2">
                <button
                  className="flex items-center justify-center gap-2 text-xl font-medium text-primary pb-2 w-full max-w-[200px]"
                  onClick={() => setMobileStudyOpen(!mobileStudyOpen)}
                >
                  Study Abroad
                  <ChevronDown
                    className={`w-6 h-6 transition-transform duration-300 ${mobileStudyOpen ? "rotate-180" : ""}`}
                  />
                </button>
                <div
                  className={`flex flex-col items-center transition-all duration-300 w-full ${mobileStudyOpen ? "max-h-[50vh] overflow-y-auto opacity-100 mt-4" : "max-h-0 overflow-hidden opacity-0"}`}
                >
                  <div className="flex flex-col gap-3 w-full max-w-[250px]">
                    {siteData.studyAbroad.map((country) => (
                      <Link
                        key={country.id}
                        to={`/study-abroad/${country.id}`}
                        className="flex items-center gap-3 bg-primary/5 px-4 py-3 rounded-lg text-primary hover:bg-primary hover:text-white transition-colors"
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        <img
                          src={country.flag}
                          alt={country.name}
                          className="w-6 h-4 object-cover rounded-sm shadow-sm"
                        />
                        <span className="text-base font-medium">{country.name}</span>
                      </Link>
                    ))}
                  </div>
                </div>
              </div>

              <div className="flex flex-col items-center w-full mt-2">
                <Link
                  to="/job-abroad"
                  className="flex items-center justify-center gap-2 text-xl font-medium text-primary pb-2 w-full max-w-[200px]"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Job Abroad
                </Link>
              </div>

              <Link
                to="/#contact"
                className="mt-6 bg-primary text-white px-8 py-3 rounded-full font-bold text-base hover:bg-accent transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                Contact Us
              </Link>
              </div>
            </div>
          </div>
        </header>
      </div>
    </div>
  );
};

export default Navbar;
