import { Link } from "react-router-dom";
import {
  Mail,
  Phone,
  MapPin,
  Instagram,
} from "lucide-react";
import logo from "../assets/images/knowbest-global-logo.png";
import { siteData } from "../data/data";

const Footer = () => {
  return (
    <footer className="bg-primary text-light/80 pt-12 md:pt-20 pb-8 md:pb-10 border-t border-secondary">
      <div className="container mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 md:gap-12 mb-10 md:mb-16">
        {/* Brand */}
        <div className="col-span-1 md:col-span-1 flex flex-col gap-6">
          <Link
            to="/"
            onClick={() => {
              if (window.location.pathname === "/" && !window.location.hash) {
                window.scrollTo({ top: 0, behavior: "smooth" });
              }
            }}
            className="flex items-center gap-3 text-2xl md:text-[20px] font-bold text-accent tracking-tighter shrink-0"
          >
            <img
              src={logo}
              alt="Knowbest Global"
              className="h-10 w-auto object-contain"
            />
            <span>
              Knowbest Global<span className="text-light">.</span>
            </span>
          </Link>
          <p className="text-sm leading-relaxed max-w-xs">
            Elevating your ambitions into global success with expert guidance
            and trusted excellence.
          </p>
          <div className="flex gap-4">
            <a
              href="https://www.instagram.com/knowbestglobalconsultancy?igsh=OGl1N2psNGIwZGRp"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center hover:bg-accent hover:text-primary transition-colors text-light"
            >
              <Instagram size={18} />
            </a>
            <a
              href="tel:+919443892026"
              className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center hover:bg-accent hover:text-primary transition-colors text-light"
            >
              <Phone size={18} />
            </a>
          </div>
        </div>

        {/* Quick Links & Study Abroad */}
        <div className="md:col-span-1">
          <h4 className="text-lg font-semibold text-light mb-6">Quick Links</h4>
          <div className="flex flex-wrap gap-2 mb-8">
            <Link
              to="/"
              onClick={() => {
                if (window.location.pathname === "/" && !window.location.hash) {
                  window.scrollTo({ top: 0, behavior: "smooth" });
                }
              }}
              className="px-3 py-1.5 bg-secondary hover:bg-accent hover:text-primary rounded-lg text-xs transition-all font-medium border border-secondary hover:border-accent"
            >
              Home
            </Link>
            <Link
              to="/#about"
              className="px-3 py-1.5 bg-secondary hover:bg-accent hover:text-primary rounded-lg text-xs transition-all font-medium border border-secondary hover:border-accent"
            >
              About Us
            </Link>
            <Link
              to="/#contact"
              onClick={() => {
                if (window.location.pathname === "/") {
                  const id = "contact";
                  const element = document.getElementById(id);
                  if (element) {
                    element.scrollIntoView({ behavior: "smooth" });
                  }
                }
              }}
              className="px-3 py-1.5 bg-secondary hover:bg-accent hover:text-primary rounded-lg text-xs transition-all font-medium border border-secondary hover:border-accent"
            >
              Contact Us
            </Link>
          </div>

          <h4 className="text-lg font-semibold text-light mb-4">Job Abroad</h4>
          <div className="mb-8">
            <Link
              to="/job-abroad"
              className="inline-block px-4 py-2 bg-secondary/50 hover:bg-accent hover:text-primary rounded-lg text-xs transition-all border border-white/5 hover:border-accent font-medium"
            >
              Explore Jobs Abroad
            </Link>
          </div>

          <h4 className="text-lg font-semibold text-light mb-6">
            Study Abroad
          </h4>
          <div className="flex flex-wrap gap-2">
            {siteData.studyAbroad.map((country) => (
              <Link
                key={country.id}
                to={`/study-abroad/${country.id}`}
                className="px-3 py-1.5 bg-secondary/50 hover:bg-accent hover:text-primary rounded-lg text-[11px] transition-all border border-white/5 hover:border-accent"
              >
                {country.name}
              </Link>
            ))}
          </div>
        </div>

        {/* Head Office */}
        <div className="md:col-span-1">
          <h4 className="text-lg font-semibold text-light mb-6">Head Office</h4>
          <ul className="flex flex-col gap-4 text-sm">
            <li className="flex items-start gap-3 text-light/80">
              <MapPin size={18} className="text-accent shrink-0 mt-0.5" />
              <span>
                Lukes complex, Thadagam Road,
                <br />
                Velandipalayam, Coimbatore 641025.
              </span>
            </li>
            <li className="flex items-center gap-3 text-light/80">
              <Phone size={18} className="text-accent shrink-0" />
              <a href="tel:+919443892026" className="hover:text-accent transition-colors">+91 94438 92026</a>
            </li>
            <li className="flex items-center gap-3 text-light/80">
              <Mail size={18} className="text-accent shrink-0" />
              <a href="mailto:knowbestglobalconsultancy@gmail.com" className="hover:text-accent transition-colors break-all">knowbestglobal@gmail.com</a>
            </li>
          </ul>
        </div>

        {/* Our Branches */}
        <div className="md:col-span-1">
          <h4 className="text-lg font-semibold text-light mb-6">Our Branches</h4>
          <ul className="flex flex-col gap-6 text-sm">
            <li className="flex items-start gap-3 text-light/80">
              <MapPin size={18} className="text-accent shrink-0 mt-0.5" />
              <div>
                <p className="text-accent font-medium mb-1">Chennai Branch</p>
                <p className="text-xs leading-relaxed opacity-90 capitalize">
                  Plot no 65, thirupugal st,
                  <br />
                  kamakshi nagar, valasaravakkam,
                  <br />
                  chennai. 87
                </p>
              </div>
            </li>
            <li className="flex items-start gap-3 text-light/80">
              <MapPin size={18} className="text-accent shrink-0 mt-0.5" />
              <div>
                <p className="text-accent font-medium mb-1">Thrissur Branch</p>
                <p className="text-xs leading-relaxed opacity-90 capitalize">
                  Plot no 135, wadakkanchery,
                  <br />
                  near st ferona church, thrissur, kerala
                </p>
              </div>
            </li>
          </ul>
        </div>
      </div>

      <div className="container mx-auto px-6 pt-8 border-t border-secondary/50 flex flex-col md:flex-row items-center justify-between text-xs text-light/50">
        <p>
          &copy; {new Date().getFullYear()} Knowbest Global Consultancy. All
          rights reserved.
        </p>
        <div className="flex gap-4 mt-4 md:mt-0">
          <Link to="#" className="hover:text-light transition-colors">
            Privacy Policy
          </Link>
          <Link to="#" className="hover:text-light transition-colors">
            Terms of Service
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
