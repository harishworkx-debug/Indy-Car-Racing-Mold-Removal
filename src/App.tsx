import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ScrollToTop from '@/components/ScrollToTop';
import Home from '@/pages/Home';
import ServicesLanding from '@/pages/ServicesLanding';
import ServiceDetailPage from '@/pages/ServiceDetailPage';
import ServiceAreasLanding from '@/pages/ServiceAreasLanding';
import LocationPage from '@/pages/LocationPage';
import About from '@/pages/About';
import Contact from '@/pages/Contact';
import FAQs from '@/pages/FAQs';
import NotFound from '@/pages/NotFound';
import DynamicRouter from '@/pages/DynamicRouter';
import { BUSINESS } from '@/data/business';

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <div className="flex min-h-screen flex-col">
        <Navbar />
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/services" element={<ServicesLanding />} />
            <Route path="/service-areas" element={<ServiceAreasLanding />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/faqs" element={<FAQs />} />
            <Route path="/:slug" element={<DynamicRouter />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
        <Footer />
        
        {/* Floating Call Button */}
        <a 
          href={BUSINESS.phoneLink}
          className="fixed bottom-6 right-6 bg-teal-600 text-white p-4 rounded-full shadow-lg shadow-teal-600/30 hover:bg-teal-700 hover:scale-110 transition-transform duration-300 z-50 flex items-center justify-center"
          aria-label="Call Now"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-phone"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
        </a>
      </div>
    </BrowserRouter>
  );
}
