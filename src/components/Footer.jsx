import { Link } from "react-router-dom";
import {
  Mail,
  Phone,
  MapPin,
  Instagram,
  Facebook,
  Linkedin,
} from "lucide-react";
import logo from "../assets/images/knowbest-global-logo.png";
import { siteData } from "../data/data";

const Footer = () => {
  return (
    <footer className="bg-primary text-light/80 pt-12 md:pt-20 pb-8 md:pb-10 border-t border-secondary">
      <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-10 md:gap-12 mb-10 md:mb-16">
        {/* Brand */}
        <div className="col-span-1 md:col-span-1 flex flex-col gap-6">
          <Link
            to="/"
            className="flex items-center gap-3 text-3xl font-bold text-accent tracking-tighter shrink-0 z-50"
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
            Elevating your ambitions into global success with expert guidance and trusted excellence.
          </p>
          <div className="flex gap-4">
            <a
              href="#"
              className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center hover:bg-accent hover:text-primary transition-colors"
            >
              <Instagram size={18} />
            </a>
            <a
              href="#"
              className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center hover:bg-accent hover:text-primary transition-colors"
            >
              <Facebook size={18} />
            </a>
            <a
              href="#"
              className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center hover:bg-accent hover:text-primary transition-colors"
            >
              <Linkedin size={18} />
            </a>
          </div>
        </div>

        {/* Quick Links & Study Abroad */}
        <div className="md:col-span-1">
          <h4 className="text-lg font-semibold text-light mb-6">Quick Links</h4>
          <div className="flex flex-wrap gap-2 mb-8">
            <Link to="/" className="px-3 py-1.5 bg-secondary hover:bg-accent hover:text-primary rounded-full text-xs transition-all font-medium border border-secondary hover:border-accent">
              Home
            </Link>
            <Link to="/#about" className="px-3 py-1.5 bg-secondary hover:bg-accent hover:text-primary rounded-full text-xs transition-all font-medium border border-secondary hover:border-accent">
              About Us
            </Link>
            <Link
              to="/#contact"
              className="px-3 py-1.5 bg-secondary hover:bg-accent hover:text-primary rounded-full text-xs transition-all font-medium border border-secondary hover:border-accent"
            >
              Contact Us
            </Link>
          </div>

          <h4 className="text-lg font-semibold text-light mb-6">Study Abroad</h4>
          <div className="flex flex-wrap gap-2">
            {siteData.studyAbroad.map((country) => (
              <Link
                key={country.id}
                to={`/study-abroad/${country.id}`}
                className="px-3 py-1.5 bg-secondary/50 hover:bg-accent hover:text-primary rounded-full text-[11px] transition-all border border-white/5 hover:border-accent"
              >
                {country.name}
              </Link>
            ))}
          </div>
        </div>

        {/* Job Abroad */}
        <div className="md:col-span-1">
          <h4 className="text-lg font-semibold text-light mb-6">Job Abroad</h4>
          <div className="flex flex-wrap gap-2">
            <Link
              to="/job-abroad"
              className="px-3 py-1.5 bg-secondary/50 hover:bg-accent hover:text-primary rounded-full text-[11px] transition-all border border-white/5 hover:border-accent"
            >
              All Jobs
            </Link>
          </div>
        </div>

        {/* Contact Info */}
        <div className="md:col-span-1">
          <h4 className="text-lg font-semibold text-light mb-6 text-center md:text-left">Get In Touch</h4>
          <ul className="flex flex-col gap-4 text-sm">
            <li className="flex items-start gap-3 justify-center md:justify-start">
              <MapPin size={18} className="text-accent shrink-0 mt-0.5" />
              <span className="text-center md:text-left">
                123 Global Way, Metro Business Park,
                <br />
                New York, NY 10001
              </span>
            </li>
            <li className="flex items-center gap-3 justify-center md:justify-start">
              <Phone size={18} className="text-accent shrink-0" />
              <span>+1 (555) 123-4567</span>
            </li>
            <li className="flex items-center gap-3 justify-center md:justify-start">
              <Mail size={18} className="text-accent shrink-0" />
              <span>contact@knowbestglobal.com</span>
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
