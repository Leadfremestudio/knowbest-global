import { useState, useEffect } from "react";
import { MessageCircle, FileText, X } from "lucide-react";
import { useLocation } from "react-router-dom";

const FloatingActions = () => {
  const location = useLocation();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [targetCountry, setTargetCountry] = useState("");

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });
  const [status, setStatus] = useState("idle"); // idle, loading, success, error

  useEffect(() => {
    const handleOpenInquiry = (e) => {
      setIsModalOpen(true);
      if (e.detail?.country) {
        setTargetCountry(e.detail.country);
      }
    };
    window.addEventListener("open-inquiry", handleOpenInquiry);
    return () => window.removeEventListener("open-inquiry", handleOpenInquiry);
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus("loading");
    
    const googleFormUrl = "https://docs.google.com/forms/d/e/1FAIpQLSdPToBjw_xj8BzMPNk-IrKQ2EuUSS-b-bDRLbxGdIfFlQc5iw/formResponse";
    const formDataToSubmit = new FormData();
    formDataToSubmit.append("entry.440689354", formData.name);
    formDataToSubmit.append("entry.526440436", formData.email);
    formDataToSubmit.append("entry.1211320039", targetCountry);
    formDataToSubmit.append("entry.1609211582", formData.message);

    fetch(googleFormUrl, {
      method: "POST",
      mode: "no-cors",
      body: formDataToSubmit,
    })
      .then(() => {
        setStatus("success");
        setFormData({ name: "", email: "", message: "" });
        setTargetCountry("");
        setTimeout(() => {
          setIsModalOpen(false);
          setStatus("idle");
        }, 2000);
      })
      .catch((error) => {
        console.error("Error submitting inquiry:", error);
        setStatus("error");
        setTimeout(() => setStatus("idle"), 5000);
      });
  };

  return (
    <>
      {/* Floating Action Buttons */}
      {location.pathname === "/" && (
        <div className="fixed bottom-8 right-8 flex flex-col gap-4 z-40 transition-all duration-500 ease-[cubic-bezier(0.25,1,0.5,1)] translate-y-0 opacity-100">
          <button
            onClick={() => setIsModalOpen(true)}
            className="w-14 h-14 bg-accent text-primary rounded-full shadow-lg flex items-center justify-center hover:scale-110 hover:shadow-xl hover:bg-accent-hover transition-all group relative border border-accent"
            aria-label="Submit Inquiry"
          >
            <FileText
              size={24}
              className="group-hover:-translate-y-0.5 transition-transform"
            />
            <span className="absolute right-full mr-4 bg-accent text-primary px-3 py-1.5 rounded-md text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap border border-accent">
              Quick Inquiry
            </span>
          </button>

          <a
            href="https://wa.me/919789184846"
            target="_blank"
            rel="noopener noreferrer"
            className="w-14 h-14 bg-accent text-primary rounded-full shadow-lg flex items-center justify-center hover:scale-110 hover:shadow-xl hover:bg-accent-hover border border-accent transition-all group relative"
            aria-label="Chat on WhatsApp"
          >
            <MessageCircle
              size={28}
              className="group-hover:-translate-y-0.5 transition-transform"
            />
            <span className="absolute right-full mr-4 bg-accent text-primary px-3 py-1.5 rounded-md text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap border border-accent">
              Chat with us
            </span>
          </a>
        </div>
      )}

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

            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
              <div>
                <label className="block text-sm font-medium mb-1">
                  Full Name
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
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
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full bg-white border border-gray-200 rounded-lg px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-all"
                  placeholder="john@example.com"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-1">
                  Target Country
                </label>
                <input
                  type="text"
                  name="targetCountry"
                  value={targetCountry}
                  onChange={(e) => setTargetCountry(e.target.value)}
                  className="w-full bg-white border border-gray-200 rounded-lg px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-all"
                  placeholder="e.g. United Kingdom"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-1">
                  Message
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="3"
                  className="w-full bg-white border border-gray-200 rounded-lg px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-all resize-none"
                  placeholder="What courses are you interested in?"
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={status === "loading" || status === "success"}
                className={`w-full font-bold py-3 rounded-lg mt-2 transition-all shadow-md active:scale-95 disabled:scale-100 disabled:cursor-not-allowed ${
                  status === "success" 
                    ? "bg-green-600 text-white" 
                    : status === "error" 
                    ? "bg-red-600 text-white"
                    : "bg-accent text-primary hover:bg-accent-hover"
                }`}
              >
                {status === "idle" && "Submit Inquiry"}
                {status === "loading" && "Sending..."}
                {status === "success" && "Success! We'll contact you soon"}
                {status === "error" && "Error! Try Again"}
              </button>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default FloatingActions;
