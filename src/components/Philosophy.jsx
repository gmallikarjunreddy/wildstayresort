import { Leaf } from 'lucide-react';

const Philosophy = () => {
  return (
    <section id="the-resort" className="py-32 md:py-48 px-6 relative z-10 overflow-hidden">
      {/* Decorative Leaf Element */}
      <div className="absolute -left-20 top-1/4 opacity-10 rotate-45 pointer-events-none">
        <Leaf className="w-64 h-64 text-theme-leaf" />
      </div>

      <div className="container mx-auto">
        <div className="grid md:grid-cols-2 gap-24 items-center">
          <div className="space-y-10">
            <div className="inline-flex items-center gap-3 text-theme-gold reveal-up">
              <div className="w-12 h-[1px] bg-theme-gold"></div>
              <span className="text-[10px] uppercase tracking-[0.4em] font-bold">The Philosophy</span>
            </div>

            <h2 className="font-serif text-5xl md:text-6xl leading-[1.1] reveal-text">
              Where the Forest <br />
              <span className="text-theme-gold italic">Breathes</span>
            </h2>

            <p className="text-theme-muted text-xl leading-relaxed font-light reveal-up delay-200">
              Wild Stay is not just a resort; it's a dialogue with the earth. Nestled in the heart
              of Ananthagiri's dense canopy, we've crafted a sanctuary that respects the silence of
              the woods and the rhythm of the wild.
            </p>

            <div className="grid grid-cols-2 gap-12 pt-10 reveal-up delay-300">
              <div className="space-y-2">
                <span className="block text-4xl font-serif text-theme-gold">0%</span>
                <span className="text-[10px] text-white/40 uppercase tracking-[0.2em]">Urban Noise</span>
              </div>
              <div className="space-y-2">
                <span className="block text-4xl font-serif text-theme-gold">100%</span>
                <span className="text-[10px] text-white/40 uppercase tracking-[0.2em]">Forest Immersion</span>
              </div>
            </div>
          </div>

          <div className="relative group reveal-up delay-500">
            <div className="absolute -inset-6 border border-theme-gold/10 rounded-3xl transform -rotate-2 group-hover:rotate-0 transition-transform duration-1000"></div>
            <div className="relative rounded-3xl overflow-hidden h-[600px] shadow-2xl">
              <div className="absolute inset-0 bg-theme-bg/20 group-hover:bg-transparent transition-colors duration-700 z-10"></div>
              <img
                src="https://images.unsplash.com/photo-1448375240586-882707db888b?auto=format&fit=crop&w=1470&q=80"
                alt="Forest Canopy"
                className="w-full h-full object-cover transform scale-110 group-hover:scale-100 transition-transform duration-1000 ease-out"
              />
              {/* Floating Badge */}
              <div className="absolute bottom-8 left-8 z-20 bg-theme-bg/80 backdrop-blur-md p-6 rounded-2xl border border-white/10">
                <p className="text-theme-gold font-serif italic text-lg">
                  "In every walk with nature, one receives far more than he seeks."
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Philosophy;
