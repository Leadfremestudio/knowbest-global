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
            Guiding you towards world-class education and promising career
            opportunities abroad. Dream big, we handle the rest.
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

        {/* Quick Links */}
        <div>
          <h4 className="text-lg font-semibold text-light mb-6">Quick Links</h4>
          <ul className="flex flex-col gap-3 text-sm">
            <li>
              <Link to="/" className="hover:text-accent transition-colors">
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/#about"
                className="hover:text-accent transition-colors"
              >
                About Us
              </Link>
            </li>
            <li>
              <Link
                to="/study-abroad/uk"
                className="hover:text-accent transition-colors"
              >
                Study in UK
              </Link>
            </li>
            <li>
              <Link
                to="/study-abroad/us"
                className="hover:text-accent transition-colors"
              >
                Study in USA
              </Link>
            </li>
            <li>
              <Link
                to="/study-abroad/canada"
                className="hover:text-accent transition-colors"
              >
                Study in Canada
              </Link>
            </li>
            <li>
              <Link
                to="/study-abroad/ukraine"
                className="hover:text-accent transition-colors"
              >
                Study in Ukraine
              </Link>
            </li>
          </ul>
        </div>

        {/* Quick Links Job */}
        <div>
          <h4 className="text-lg font-semibold text-light mb-6">Job Abroad</h4>
          <ul className="flex flex-col gap-3 text-sm">
            <li>
              <Link
                to="/job-abroad/uk"
                className="hover:text-accent transition-colors"
              >
                Work in UK
              </Link>
            </li>
            <li>
              <Link
                to="/job-abroad/us"
                className="hover:text-accent transition-colors"
              >
                Work in USA
              </Link>
            </li>
            <li>
              <Link
                to="/job-abroad/canada"
                className="hover:text-accent transition-colors"
              >
                Work in Canada
              </Link>
            </li>
            <li>
              <Link
                to="/job-abroad/ukraine"
                className="hover:text-accent transition-colors"
              >
                Work in Ukraine
              </Link>
            </li>
          </ul>
        </div>

        {/* Contact Info */}
        {/* Contact Info */}
        <div>
          <h4 className="text-lg font-semibold text-light mb-6">Contact Us</h4>
          <ul className="flex flex-col gap-4 text-sm">
            <li className="flex items-start gap-3">
              <MapPin size={18} className="text-accent shrink-0 mt-0.5" />
              <span>
                123 Global Way, Metro Business Park,
                <br />
                New York, NY 10001
              </span>
            </li>
            <li className="flex items-center gap-3">
              <Phone size={18} className="text-accent shrink-0" />
              <span>+1 (555) 123-4567</span>
            </li>
            <li className="flex items-center gap-3">
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
