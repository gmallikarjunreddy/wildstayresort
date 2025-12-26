import { MapPin, MessageCircle } from 'lucide-react';

const Location = () => {
  return (
    <section id="location" className="py-40 px-6 relative overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1511497584788-876760111969?auto=format&fit=crop&w=1920&q=80"
          className="w-full h-full object-cover opacity-20"
          alt="Forest Background"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-theme-bg via-transparent to-theme-bg"></div>
      </div>

      <div className="container mx-auto relative z-10 text-center">
        <div className="inline-flex items-center gap-3 text-theme-gold mb-10 reveal-up">
          <MapPin className="w-5 h-5" />
          <span className="uppercase tracking-[0.5em] text-[10px] font-bold">
            Ananthagiri Hills, Telangana
          </span>
        </div>

        <h2 className="font-serif text-5xl md:text-7xl mb-10 reveal-up delay-100">
          Your Forest <span className="text-theme-gold italic">Sanctuary</span> Awaits
        </h2>

        <p className="text-theme-muted max-w-2xl mx-auto mb-16 text-lg font-light reveal-up delay-200">
          Construction is underway to bring you the ultimate nature retreat. Join our exclusive list
          to receive updates and early access to bookings.
        </p>

        <div className="flex flex-col items-center gap-8 reveal-up delay-300">
          <a
            href="https://wa.me/917032360083?text=I%20am%20interested%20in%20Wild%20Stay%20Resort%20Ananthagiri%20Hills"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-4 px-16 py-6 bg-transparent border border-theme-gold text-theme-gold hover:bg-theme-gold hover:text-theme-bg transition-all duration-700 rounded-full font-bold uppercase tracking-[0.3em] text-xs group"
          >
            <MessageCircle className="w-5 h-5 group-hover:scale-110 transition-transform" />
            Register Interest
          </a>
          <p className="text-[10px] text-white/30 uppercase tracking-[0.4em]">
            Limited Availability Upon Completion
          </p>
        </div>
      </div>
    </section>
  );
};

export default Location;

