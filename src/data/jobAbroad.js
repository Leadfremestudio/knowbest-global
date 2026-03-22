import ukHero from "../assets/images/countries/uk-hero.webp";
import germanyHero from "../assets/images/countries/german-hero.webp";
import australiaHero from "../assets/images/countries/australia-hero.webp";

export const jobAbroad = [
  {
    id: "uk",
    name: "United Kingdom",
    flag: "https://flagcdn.com/w80/gb.png",
    heroImage: ukHero,
    description: "Build a prominent career in the UK with excellent healthcare, banking, and technology demand.",
    courses: [
      { courseName: "Healthcare", details: ["NHS Nurses", "Care Workers", "Doctors"] },
      { courseName: "IT & Tech", details: ["Software Developer", "Data Analyst", "Cybersecurity"] },
    ],
  },
  {
    id: "ireland",
    name: "Ireland",
    flag: "https://flagcdn.com/w80/ie.png",
    heroImage: "https://images.unsplash.com/photo-1590089415225-401ed6f9db8e?auto=format&fit=crop&q=80&w=1200",
    description: "Ireland is a major hub for technology and pharmaceuticals, offering excellent job prospects for skilled professionals.",
    courses: [
      { courseName: "Technology", details: ["Software Engineer", "Cloud Architect", "Data Scientist"] },
      { courseName: "Pharmaceuticals", details: ["Quality Control", "Research Scientist", "Lab Tech"] },
    ],
  },
  {
    id: "germany",
    name: "Germany",
    flag: "https://flagcdn.com/w80/de.png",
    heroImage: germanyHero,
    description: "Growing opportunities in tech outsourcing and reconstruction projects requiring skilled international professionals.",
    courses: [
      { courseName: "Engineering", details: ["Mechanical Engineer", "Electrical Engineer", "Automotive"] },
      { courseName: "IT Sector", details: ["Software Developer", "QA Engineer", "DevOps"] },
    ],
  },
  {
    id: "france",
    name: "France",
    flag: "https://flagcdn.com/w80/fr.png",
    heroImage: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&q=80&w=1200",
    description: "France offers diverse opportunities in luxury, engineering, and technology with a strong focus on innovation.",
    courses: [
      { courseName: "Luxury & Fashion", details: ["Product Designer", "Brand Manager", "Retail Operations"] },
      { courseName: "Engineering", details: ["Aerospace Engineer", "Civil Engineer", "Renewable Energy"] },
    ],
  },
  {
    id: "australia",
    name: "Australia",
    flag: "https://flagcdn.com/w80/au.png",
    heroImage: australiaHero,
    description: "Australia has a strong demand for healthcare and trade professionals, offering high wages and a great lifestyle.",
    courses: [
      { courseName: "Healthcare", details: ["Registered Nurse", "Occupational Therapist", "Physiotherapist"] },
      { courseName: "Skilled Trades", details: ["Electrician", "Plumber", "Carpenter"] },
    ],
  },
  {
    id: "new-zealand",
    name: "New Zealand",
    flag: "https://flagcdn.com/w80/nz.png",
    heroImage: "https://images.unsplash.com/photo-1469521669194-babc9501805a?auto=format&fit=crop&q=80&w=1200",
    description: "New Zealand is seeking skilled workers in healthcare and construction to support its growing infrastructure.",
    courses: [
      { courseName: "Healthcare", details: ["Midwives", "General Practitioners", "Psychologists"] },
      { courseName: "Construction", details: ["Project Manager", "Site Supervisor", "Quantity Surveyor"] },
    ],
  },
  {
    id: "poland",
    name: "Poland",
    flag: "https://flagcdn.com/w80/pl.png",
    heroImage: "https://images.unsplash.com/photo-1519197924294-4ba991a11128?auto=format&fit=crop&q=80&w=1200",
    description: "Poland is one of Europe's fastest-growing economies with a massive demand for IT and logistics expertise.",
    courses: [
      { courseName: "IT & Tech", details: ["Full Stack Dev", "Project Manager", "UX Designer"] },
      { courseName: "Logistics", details: ["Supply Chain Manager", "Warehouse Supervisor", "Export Specialist"] },
    ],
  },
  {
    id: "slovakia",
    name: "Slovakia",
    flag: "https://flagcdn.com/w80/sk.png",
    heroImage: "https://images.unsplash.com/photo-1563297059-42d556391456?auto=format&fit=crop&q=80&w=1200",
    description: "Slovakia is a leading destination for automotive manufacturing and industrial engineering in Central Europe.",
    courses: [
      { courseName: "Automotive", details: ["Assembly Line Lead", "Quality Engineer", "Maintenance Tech"] },
      { courseName: "Electronics", details: ["Test Engineer", "Production Coordinator", "Technician"] },
    ],
  },
  {
    id: "czech-republic",
    name: "Czech Republic",
    flag: "https://flagcdn.com/w80/cz.png",
    heroImage: "https://images.unsplash.com/photo-1541849543166-70d70ad84435?auto=format&fit=crop&q=80&w=1200",
    description: "With one of the lowest unemployment rates in Europe, the Czech Republic seeks industrial and tech talent.",
    courses: [
      { courseName: "Industrial", details: ["Factory Manager", "Safety Officer", "CNC Operator"] },
      { courseName: "IT", details: ["Front-end Dev", "Backend Dev", "System Admin"] },
    ],
  },
  {
    id: "serbia",
    name: "Serbia",
    flag: "https://flagcdn.com/w80/rs.png",
    heroImage: "https://images.unsplash.com/photo-1555529733-d824220c3260?auto=format&fit=crop&q=80&w=1200",
    description: "Serbia is growing rapidly as a regional hub for technology and agriculture export in the Balkans.",
    courses: [
      { courseName: "Technology", details: ["Mobile Developer", "IT Support", "Software Tester"] },
      { courseName: "Agriculture", details: ["Agro-Technologist", "Export Manager", "Food Safety Auditor"] },
    ],
  },
  {
    id: "moldova",
    name: "Moldova",
    flag: "https://flagcdn.com/w80/md.png",
    heroImage: "https://images.unsplash.com/photo-1561565151-0a63aa68b209?auto=format&fit=crop&q=80&w=1200",
    description: "Moldova offers expanding opportunities in the textile industry and modern agriculture sectors.",
    courses: [
      { courseName: "Textiles", details: ["Fashion Designer", "Garment Technician", "Production Lead"] },
      { courseName: "IT Services", details: ["Data Entry", "BPO Specialist", "Customer Support"] },
    ],
  },
  {
    id: "estonia",
    name: "Estonia",
    flag: "https://flagcdn.com/w80/ee.png",
    heroImage: "https://images.unsplash.com/photo-1548438294-1ad5d5f4f063?auto=format&fit=crop&q=80&w=1200",
    description: "As a global leader in e-governance, Estonia has a high demand for cybersecurity and fintech professionals.",
    courses: [
      { courseName: "Fintech", details: ["Blockchain Developer", "Financial Analyst", "Compliance Officer"] },
      { courseName: "Cybersecurity", details: ["Security Analyst", "Ethical Hacker", "Risk Manager"] },
    ],
  },
  {
    id: "latvia",
    name: "Latvia",
    flag: "https://flagcdn.com/w80/lv.png",
    heroImage: "https://images.unsplash.com/photo-1563200782-953e5e415fb5?auto=format&fit=crop&q=80&w=1200",
    description: "Latvia is a key logistics hub with growing opportunities in wood processing and the chemical industry.",
    courses: [
      { courseName: "Logistics", details: ["Freight Forwarder", "Logistics Coordinator", "Route Planner"] },
      { courseName: "Manufacturing", details: ["Process Engineer", "Shift Supervisor", "Lab Analyst"] },
    ],
  },
  {
    id: "hungary",
    name: "Hungary",
    flag: "https://flagcdn.com/w80/hu.png",
    heroImage: "https://images.unsplash.com/photo-1524143491959-54d9203a3d24?auto=format&fit=crop&q=80&w=1200",
    description: "Hungary offers a stable job market with a strong focus on the automotive and pharmaceutical sectors.",
    courses: [
      { courseName: "Automotive", details: ["Robotics Engineer", "Plant Manager", "R&D Specialist"] },
      { courseName: "Pharmaceuticals", details: ["Pharmacologist", "Regulatory Affairs", "Chemical Engineer"] },
    ],
  },
  {
    id: "portugal",
    name: "Portugal",
    flag: "https://flagcdn.com/w80/pt.png",
    heroImage: "https://images.unsplash.com/photo-1555881400-74d7acaacd8b?auto=format&fit=crop&q=80&w=1200",
    description: "Portugal is a booming hub for tech startups and tourism, offering a welcoming atmosphere for global talent.",
    courses: [
      { courseName: "IT & Software", details: ["Product Owner", "Software Engineer", "Scrum Master"] },
      { courseName: "Tourism", details: ["Hotel Manager", "Tour Guide Coordinator", "Event Planner"] },
    ],
  },
];
