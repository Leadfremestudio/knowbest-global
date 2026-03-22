import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { lazy, Suspense } from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import FloatingActions from "./components/FloatingActions";

// Lazy Load Pages
const Home = lazy(() => import("./pages/Home"));
const CountryDetail = lazy(() => import("./pages/CountryDetail"));
const JobDetail = lazy(() => import("./pages/JobDetail"));
const Jobs = lazy(() => import("./pages/Jobs"));

// Loading Component
const PageLoader = () => (
  <div className="min-h-screen bg-primary flex items-center justify-center">
    <div className="w-12 h-12 border-4 border-accent border-t-transparent rounded-full animate-spin"></div>
  </div>
);

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow">
          <Suspense fallback={<PageLoader />}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/study-abroad/:country" element={<CountryDetail />} />
              <Route path="/job-abroad" element={<Jobs />} />
              <Route path="/job-abroad/:country" element={<JobDetail />} />
            </Routes>
          </Suspense>
        </main>
        <Footer />
        <FloatingActions />
      </div>
    </Router>
  );
}

export default App;
