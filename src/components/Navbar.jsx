import { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import { ChevronDown, ChevronRight, Menu, X } from "lucide-react";
import { siteData } from "../data/data";
import CountryDropdown from "./CountryDropdown";
import logo from "../assets/images/nobest global -logo.png";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [visible, setVisible] = useState(true);
  const lastScrollY = useRef(0);
  const [studyDropdownOpen, setStudyDropdownOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      setScrolled(currentScrollY > 50);

      // Hide navbar when scrolling down, show when scrolling up
      if (currentScrollY > lastScrollY.current && currentScrollY > 100) {
        setVisible(false);
      } else {
        setVisible(true);
      }

      lastScrollY.current = currentScrollY;
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    // Close mobile menu on route change
    setMobileMenuOpen(false);
  }, [location.pathname]);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About Us", path: "/#about" },
    { name: "Achievements", path: "/#achievements" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ease-in-out ${
        visible ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0"
      } ${
        scrolled
          ? "bg-white/95 backdrop-blur-md shadow-md py-3"
          : "bg-transparent py-4 md:py-6"
      }`}
    >
      <div className="container mx-auto px-6 md:px-12 flex justify-between items-center relative">
        {/* Logo Left */}
        <Link to="/" className="flex items-center shrink-0 z-50">
          <img
            src={logo}
            alt="Nobest Global"
            className={`w-auto object-contain transition-all duration-500 ease-in-out origin-left ${
              scrolled ? "h-12 md:h-14" : "h-14 md:h-[65px]"
            }`}
          />
        </Link>

        {/* Desktop Nav Center */}
        <nav className="hidden md:flex items-center gap-8 absolute left-1/2 -translate-x-1/2 z-10 w-max">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className={`${scrolled ? "text-primary" : "text-white"} hover:text-accent transition-colors font-medium text-[15px] tracking-wide drop-shadow-sm`}
            >
              {link.name}
            </Link>
          ))}

          <div
            className="relative group"
            onMouseEnter={() => setStudyDropdownOpen(true)}
            onMouseLeave={() => setStudyDropdownOpen(false)}
          >
            <button
              className={`flex items-center gap-1 ${scrolled ? "text-primary" : "text-white"} hover:text-accent transition-colors font-medium text-[15px] tracking-wide py-1 border-none focus:outline-none drop-shadow-sm`}
            >
              Study Abroad
              <ChevronDown
                className={`w-4 h-4 transition-transform duration-300 ${studyDropdownOpen ? "rotate-180" : ""}`}
              />
            </button>
            <CountryDropdown
              isOpen={studyDropdownOpen}
              items={siteData.studyAbroad}
            />
          </div>
        </nav>

        {/* Contact Button Right */}
        <div className="hidden md:block z-50">
          <Link
            to="/#contact"
            className={`flex items-center gap-2 bg-transparent border px-6 py-2.5 rounded-full font-medium transition-all duration-300 ${
              scrolled
                ? "text-primary border-primary/20 hover:border-primary"
                : "text-white border-white/50 hover:border-white hover:bg-white/10 shadow-sm"
            }`}
          >
            Contact Us{" "}
            <ChevronRight
              size={16}
              className={`${scrolled ? "bg-primary text-white" : "bg-white text-primary"} rounded-full p-0.5`}
            />
          </Link>
        </div>

        {/* Mobile Nav Toggle */}
        <button
          className={`md:hidden z-50 p-2 ${scrolled ? "text-primary" : "text-white drop-shadow-sm"}`}
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>

        {/* Mobile Nav Overlay */}
        <div
          className={`fixed inset-0 top-0 left-0 w-full h-screen bg-white z-40 md:hidden transition-transform duration-300 ${mobileMenuOpen ? "translate-x-0" : "translate-x-full"} flex flex-col items-center justify-center gap-8 pt-20`}
        >
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className="text-2xl font-medium text-primary hover:text-accent"
              onClick={() => setMobileMenuOpen(false)}
            >
              {link.name}
            </Link>
          ))}
          <div className="flex flex-col items-center gap-4 w-full px-6">
            <span className="text-2xl font-medium text-primary border-b border-primary/10 pb-2">
              Study Abroad
            </span>
            <div className="flex flex-wrap justify-center gap-4">
              {siteData.studyAbroad.map((country) => (
                <Link
                  key={country.id}
                  to={`/study-abroad/${country.id}`}
                  className="flex items-center gap-2 bg-primary/5 px-4 py-2 rounded-lg text-primary hover:bg-primary hover:text-white transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <img
                    src={country.flag}
                    alt={country.name}
                    className="w-5 h-3 object-cover rounded-sm"
                  />
                  {country.name}
                </Link>
              ))}
            </div>
          </div>
          <Link
            to="/#contact"
            className="mt-4 bg-primary text-white px-8 py-3 rounded-full font-bold text-lg hover:bg-accent transition-colors"
            onClick={() => setMobileMenuOpen(false)}
          >
            Contact Us
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
