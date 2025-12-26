import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
    document.body.style.overflow = mobileMenuOpen ? '' : 'hidden';
  };

  const closeMenu = () => {
    setMobileMenuOpen(false);
    document.body.style.overflow = '';
  };

  const navLinks = [
    { href: '#the-resort', label: 'The Sanctuary' },
    { href: '#experience', label: 'Vibe' },
    { href: '#location', label: 'Location' },
  ];

  return (
    <>
      {/* Navigation */}
      <nav
        id="navbar"
        className={`fixed w-full z-40 transition-all duration-700 ${
          scrolled
            ? 'bg-theme-bg/90 backdrop-blur-md py-4 border-b border-white/5'
            : 'bg-transparent py-6 md:py-8'
        }`}
      >
        <div className="container mx-auto px-6 flex justify-between items-center">
          <div className="flex items-center gap-4 cursor-pointer group">
            <div className="relative">
              <img
                src="https://i.ibb.co/6Rbhhhnt/Screenshot-20251226-072315-Gallery.jpg"
                className="w-12 h-12 rounded-full border border-theme-gold/30 object-cover transition-transform duration-500 group-hover:scale-110"
                alt="Wild Stay Logo"
              />
              <div className="absolute -inset-1 border border-theme-gold/20 rounded-full animate-pulse-slow"></div>
            </div>
            <div className="flex flex-col">
              <span className="font-serif text-xl tracking-widest font-bold text-white leading-none">
                WILD STAY RESORT
              </span>
              <span className="text-[8px] tracking-[0.3em] text-theme-gold uppercase">
                Ananthagiri Hills
              </span>
            </div>
          </div>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center gap-10">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-xs uppercase tracking-[0.2em] text-theme-muted hover:text-theme-gold transition-all duration-300"
              >
                {link.label}
              </a>
            ))}
            <a
              href="https://wa.me/917032360083?text=I%20am%20interested%20in%20Wild%20Stay%20Resort%20Ananthagiri%20Hills"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3 bg-theme-gold/10 border border-theme-gold/50 text-theme-gold text-[10px] uppercase tracking-[0.3em] hover:bg-theme-gold hover:text-theme-bg transition-all duration-700 rounded-sm"
            >
              Register Interest
            </a>
          </div>

          {/* Mobile Toggle */}
          <button
            onClick={toggleMenu}
            className="md:hidden text-theme-gold p-2"
            aria-label="Toggle menu"
          >
            <Menu className="w-6 h-6" />
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div
        id="mobile-menu"
        className={`fixed inset-0 z-50 bg-theme-bg flex-col items-center justify-center space-y-10 transition-opacity duration-500 ${
          mobileMenuOpen ? 'flex opacity-100' : 'hidden opacity-0'
        }`}
      >
        <button
          onClick={closeMenu}
          className="absolute top-8 right-6 text-theme-gold"
          aria-label="Close menu"
        >
          <X className="w-10 h-10" />
        </button>
        {navLinks.map((link) => (
          <a
            key={link.href}
            href={link.href}
            onClick={closeMenu}
            className="font-serif text-4xl text-white hover:text-theme-gold transition-colors"
          >
            {link.label}
          </a>
        ))}
        <a
          href="#contact"
          onClick={closeMenu}
          className="font-serif text-4xl text-white hover:text-theme-gold transition-colors"
        >
          Contact
        </a>
      </div>
    </>
  );
};

export default Navbar;
