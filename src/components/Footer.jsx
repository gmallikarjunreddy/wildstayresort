import { Phone, MessageCircle, Instagram } from 'lucide-react';

const Footer = () => {
  return (
    <footer id="contact" className="py-20 px-6 border-t border-white/5 bg-[#030706] relative z-10">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-12">
          <div className="flex items-center gap-6 group">
            <div className="relative">
              <img
                src="https://i.ibb.co/6Rbhhhnt/Screenshot-20251226-072315-Gallery.jpg"
                className="w-16 h-16 rounded-full border border-theme-gold/20 p-1 transition-transform duration-500 group-hover:rotate-12"
                alt="Logo"
              />
              <div className="absolute -inset-1 border border-theme-gold/10 rounded-full"></div>
            </div>
            <div>
              <h4 className="font-serif text-2xl text-white tracking-[0.2em]">WILD STAY RESORT</h4>
              <p className="text-[10px] text-theme-gold uppercase tracking-[0.4em]">
                Forest Sanctuary
              </p>
            </div>
          </div>

          <div className="flex flex-col items-center md:items-end gap-4">
            <p className="text-theme-muted text-sm font-light tracking-wide">
              © 2025 Wild Stay Resort. Ananthagiri Hills.
            </p>
            <div className="flex items-center gap-6">
              <a
                href="tel:+917032360083"
                className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-theme-gold hover:bg-theme-gold hover:text-theme-bg transition-all duration-500"
              >
                <Phone className="w-4 h-4" />
              </a>
              <a
                href="https://wa.me/917032360083"
                className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-theme-gold hover:bg-theme-gold hover:text-theme-bg transition-all duration-500"
              >
                <MessageCircle className="w-4 h-4" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-theme-gold hover:bg-theme-gold hover:text-theme-bg transition-all duration-500"
              >
                <Instagram className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

