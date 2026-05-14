import React from 'react';
import { motion } from 'motion/react';
import { Phone, MapPin, Sparkles } from 'lucide-react';

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background Image & Overlay */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-r from-zinc-950 via-zinc-950/95 to-zinc-950/20 z-10" />
        <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/60 to-transparent z-10" />
        <img
          src="https://images.unsplash.com/photo-1605559424843-9e4c228bf1c2?q=80&w=2664&auto=format&fit=crop"
          alt="Luxury Car Detailing"
          className="w-full h-full object-cover object-center opacity-40 brightness-[.60]"
        />
      </div>

      <div className="relative z-20 max-w-7xl mx-auto px-6 md:px-12 w-full">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-black uppercase tracking-tight leading-[0.9] mb-6">
              Glow Garage<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold-400 to-gold-600 block text-3xl md:text-5xl lg:text-6xl mt-4">
                Where Your Vehicle Truly Shines
              </span>
            </h1>
            
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-gold-500/30 bg-gold-500/10 text-gold-500 text-xs font-bold uppercase tracking-widest mb-8">
              <Sparkles size={14} />
              <span>Premium Detailing Studio</span>
            </div>
            
            <p className="text-xl md:text-2xl text-white font-medium mb-4">
              Premium Car & Bike Detailing Services for a Showroom-Like Finish
            </p>
            
            <p className="text-lg md:text-xl text-zinc-400 leading-relaxed max-w-2xl mb-10 font-light">
              At Glow Garage, we bring your vehicle back to life with professional detailing services. From deep cleaning to advanced paint protection, we ensure your car or bike looks as good as new — every time.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="tel:+919990019684"
                className="inline-flex items-center justify-center gap-2 bg-white text-black px-8 py-4 rounded-full font-bold tracking-wide hover:bg-zinc-200 transition-colors group"
              >
                <Phone size={18} className="group-hover:rotate-12 transition-transform" />
                Call Now
              </a>
              <a
                href="https://www.google.com/maps/search/?api=1&query=28.6225353,76.9889058"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 border border-white/20 text-white px-8 py-4 rounded-full font-bold tracking-wide hover:bg-white/5 transition-colors"
              >
                <MapPin size={18} />
                Locate Studio
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
