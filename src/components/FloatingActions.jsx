import { useState, useEffect } from "react";
import { MessageCircle, FileText, X } from "lucide-react";

const FloatingActions = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Floating Action Buttons */}
      <div
        className={`fixed bottom-8 right-8 flex flex-col gap-4 z-40 transition-all duration-500 ease-[cubic-bezier(0.25,1,0.5,1)] ${
          isVisible
            ? "translate-y-0 opacity-100"
            : "translate-y-20 opacity-0 pointer-events-none"
        }`}
      >
        <button
          onClick={() => setIsModalOpen(true)}
          className="w-14 h-14 bg-primary text-accent rounded-full shadow-lg flex items-center justify-center hover:scale-110 hover:shadow-xl hover:bg-secondary transition-all group relative border border-secondary"
          aria-label="Submit Inquiry"
        >
          <FileText
            size={24}
            className="group-hover:-translate-y-0.5 transition-transform"
          />
          <span className="absolute right-full mr-4 bg-primary text-light px-3 py-1.5 rounded-md text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap border border-secondary">
            Quick Inquiry
          </span>
        </button>

        <a
          href="https://wa.me/1234567890"
          target="_blank"
          rel="noopener noreferrer"
          className="w-14 h-14 bg-green-500 text-white rounded-full shadow-lg flex items-center justify-center hover:scale-110 hover:shadow-xl transition-all group relative"
          aria-label="Chat on WhatsApp"
        >
          <MessageCircle
            size={28}
            className="group-hover:-translate-y-0.5 transition-transform"
          />
          <span className="absolute right-full mr-4 bg-primary text-light px-3 py-1.5 rounded-md text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap border border-secondary">
            Chat with us
          </span>
        </a>
      </div>

      {/* Inquiry Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div
            className="absolute inset-0 bg-primary/80 backdrop-blur-sm"
            onClick={() => setIsModalOpen(false)}
          ></div>
          <div className="relative bg-light text-primary w-full max-w-md rounded-2xl shadow-2xl p-8 transform transition-all scale-100 animate-in fade-in zoom-in duration-300">
            <button
              onClick={() => setIsModalOpen(false)}
              className="absolute top-4 right-4 text-primary/50 hover:text-primary transition-colors bg-light/50 rounded-full p-1"
            >
              <X size={24} />
            </button>

            <h3 className="text-2xl font-bold mb-2">How can we help?</h3>
            <p className="text-primary/70 text-sm mb-6">
              Fill out the quick form below and our consultants will get back to
              you shortly.
            </p>

            <form className="flex flex-col gap-4">
              <div>
                <label className="block text-sm font-medium mb-1">
                  Full Name
                </label>
                <input
                  type="text"
                  className="w-full bg-white border border-gray-200 rounded-lg px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-all"
                  placeholder="John Doe"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-1">
                  Email <span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  required
                  className="w-full bg-white border border-gray-200 rounded-lg px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-all"
                  placeholder="john@example.com"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-1">
                  Target Country
                </label>
                <select className="w-full bg-white border border-gray-200 rounded-lg px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-all">
                  <option>United Kingdom</option>
                  <option>United States</option>
                  <option>Canada</option>
                  <option>Germany</option>
                  <option>Other</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium mb-1">
                  Message
                </label>
                <textarea
                  rows="3"
                  className="w-full bg-white border border-gray-200 rounded-lg px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-all resize-none"
                  placeholder="What courses are you interested in?"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-accent text-primary font-bold py-3 rounded-lg mt-2 hover:bg-accent-hover transition-colors shadow-md"
              >
                Submit Inquiry
              </button>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default FloatingActions;
