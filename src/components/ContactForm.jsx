import { useState } from "react";
import { Send, MapPin } from "lucide-react";
import formImage from "../assets/images/about-section/about-2.webp"

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    targetCountries: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data Submitted:", formData);
    alert("Thank you! Your message has been sent successfully.");
    setFormData({ name: "", email: "", targetCountries: "", message: "" });
  };

  return (
    <section
      id="contact"
      className="py-12 md:py-32 bg-white relative overflow-hidden"
    >
      <div className="w-full max-w-[1400px] mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-16 items-center">
          {/* Left Side: Text & Form */}
          <div className="flex flex-col gap-10">
            <div className="flex flex-col gap-4">
              
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-primary leading-[1.1]">
                Go anywhere with <br />
                <span className="text-accent">Knowbest</span>
              </h2>
            </div>

            <div className="bg-primary/5 p-4 md:p-8 rounded-[2rem] shadow-sm border border-black/5">
              <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                <div className="relative group">
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="Your Name"
                    className="w-full px-6 py-5 rounded-t-xl border-b border-black/10 bg-white text-primary placeholder-primary/40 focus:outline-none transition-all"
                  />
                </div>

                <div className="relative group">
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="Email address"
                    className="w-full px-6 py-5 border-b border-black/10 bg-white text-primary placeholder-primary/40 focus:outline-none transition-all"
                  />
                </div>

                <div className="relative group">
                  <input
                    type="text"
                    name="targetCountries"
                    value={formData.targetCountries}
                    onChange={handleChange}
                    required
                    placeholder="Target Countries"
                    className="w-full px-6 py-5 border-b border-black/10 bg-white text-primary placeholder-primary/40 focus:outline-none transition-all"
                  />
                </div>

                <div className="relative group">
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows="2"
                    placeholder="Your Message..."
                    className="w-full px-6 py-5 rounded-b-xl bg-white text-primary placeholder-primary/40 focus:outline-none transition-all resize-none"
                  ></textarea>
                </div>

                <div className="mt-6 md:mt-8 flex flex-col sm:flex-row items-center gap-4 md:gap-6">
                  <button
                    type="submit"
                    className="bg-primary text-white px-8 py-3.5 md:px-10 md:py-4 rounded-xl font-bold text-base md:text-lg hover:bg-black transition-all shadow-lg active:scale-95"
                  >
                    Send Message
                  </button>
                </div>
              </form>
            </div>
          </div>

          {/* Right Side: Image Only */}
          <div className="relative w-full aspect-square md:aspect-[4/5] lg:h-[700px] rounded-[2rem] overflow-hidden shadow-2xl">
            <img
              src={formImage}
              alt="Study abroad journey"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
