import { useEffect } from 'react';
import Preloader from './components/Preloader';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Philosophy from './components/Philosophy';
import Experience from './components/Experience';
import Location from './components/Location';
import Footer from './components/Footer';
import FloatingLeaves from './components/FloatingLeaves';
import WhatsAppButton from './components/WhatsAppButton';

function App() {
  useEffect(() => {
    // Intersection Observer for reveal animations
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('revealed');
        }
      });
    }, observerOptions);

    // Observe all reveal elements
    document.querySelectorAll('.reveal-up, .reveal-text').forEach((el) => {
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="relative min-h-screen overflow-x-hidden">
      {/* Noise Overlay */}
      <div className="noise-overlay"></div>

      {/* Mist Effect */}
      <div className="mist-effect"></div>

      {/* Floating Leaves */}
      <FloatingLeaves />

      {/* Preloader */}
      <Preloader />

      {/* Navbar */}
      <Navbar />

      {/* Hero Section */}
      <Hero />

      {/* Philosophy Section */}
      <Philosophy />

      {/* Experience Section */}
      <Experience />

      {/* Location Section */}
      <Location />

      {/* Footer */}
      <Footer />

      {/* WhatsApp Button */}
      <WhatsAppButton />
    </div>
  );
}

export default App;
