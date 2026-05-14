import React from 'react';
import { Car, Bike, Check } from 'lucide-react';
import { motion } from 'motion/react';

const AUTO_PACKAGES = [
  {
    name: 'Essential Glow',
    desc: '1-Step Polish + 1yr Ceramic',
    price: '14,999',
    features: ['Standard Interior Cleaning', '1-Stage Paint Correction', '1-Year Ceramic Coating', 'Wheel Face Cleaning']
  },
  {
    name: 'Signature Shield',
    desc: 'Full Correction + 5yr Ceramic',
    price: '29,999',
    featured: true,
    features: ['Deep Interior Detailing', 'Multi-Stage Correction', '5-Year 9H Ceramic Coating', 'Wheel & Caliper Coating', 'Glass Coating']
  },
  {
    name: 'Ultra PPF Armor',
    desc: 'Full Body Film + Ceramic Top',
    price: '49,999',
    features: ['Full Exterior PPF Wrap', '10-Year Warranty', 'Ceramic Top Coat', 'Interior Protection', 'Ultimate Peace of Mind']
  }
];

const BIKE_PACKAGES = [
  {
    name: "Rider's Revive",
    desc: 'Deep Clean + Wax Protection',
    price: '4,999',
    features: ['Foam Wash & Decontamination', 'Chain Clean & Lube', 'Premium Carnauba Wax']
  },
  {
    name: 'Moto Ceramic',
    desc: 'Engine + Body 3yr Coating',
    price: '9,999',
    featured: true,
    features: ['1-Stage Paint Polish', '3-Year Ceramic Coating', 'Engine Bay Heat-resistant Coating', 'Plastics Restoration']
  },
  {
    name: 'Track Armor',
    desc: 'Front Fairing PPF + Full Polish',
    price: '11,999',
    features: ['Front Impact Area PPF', 'Multi-Stage Polish', 'Ceramic Coating over PPF', 'Helmet Visor Coating']
  }
];

function PackageGroup({ title, icon: Icon, packages }: { title: string, icon: any, packages: any[] }) {
  return (
    <div className="mb-24 last:mb-0">
      <div className="flex items-center gap-4 mb-12 justify-center md:justify-start">
        <Icon size={32} className="text-gold-500" />
        <h3 className="text-2xl md:text-3xl font-bold uppercase tracking-wide">{title}</h3>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {packages.map((pkg, i) => (
          <motion.div
            key={pkg.name}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1, duration: 0.5 }}
            className={`relative p-8 rounded-2xl border ${
              pkg.featured 
                ? 'bg-zinc-900 border-gold-500/50 shadow-[0_0_30px_rgba(245,158,11,0.1)]' 
                : 'bg-zinc-950/50 border-white/5 hover:border-white/10'
            } flex flex-col`}
          >
            {pkg.featured && (
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-to-r from-gold-600 to-gold-400 text-black text-xs font-bold uppercase py-1 px-4 rounded-full tracking-widest">
                Most Popular
              </div>
            )}
            
            <div className="mb-8">
              <h4 className="text-xl font-bold mb-2 text-white">{pkg.name}</h4>
              <p className="text-zinc-400 text-sm mb-6 h-10">{pkg.desc}</p>
              <div className="flex items-baseline gap-1">
                <span className="text-zinc-500 text-lg">From ₹</span>
                <span className="text-4xl font-black text-white">{pkg.price}*</span>
              </div>
            </div>

            <ul className="space-y-4 mb-8 flex-grow">
              {pkg.features.map((feat: string, j: number) => (
                <li key={j} className="flex items-start gap-3 text-sm text-zinc-300">
                  <Check size={16} className="text-gold-500 shrink-0 mt-0.5" />
                  <span>{feat}</span>
                </li>
              ))}
            </ul>

            <a
              href={`https://wa.me/919990019684?text=Hi,%20I'm%20interested%20in%20the%20${pkg.name}%20package.`}
              className={`block w-full py-3 rounded-xl font-bold tracking-wide text-center transition-colors ${
                pkg.featured
                  ? 'bg-white text-black hover:bg-zinc-200'
                  : 'bg-zinc-800 text-white hover:bg-zinc-700'
              }`}
              target="_blank"
              rel="noopener noreferrer"
            >
              Book Package
            </a>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export function Pricing() {
  return (
    <section id="packages" className="py-32 bg-zinc-950 relative border-t border-white/5">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-zinc-900/40 via-zinc-950 to-zinc-950" />
      
      <div className="relative max-w-7xl mx-auto px-6 md:px-12">
        <div className="text-center mb-20 max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tight mb-6">Detailing Packages</h2>
          <p className="text-zinc-400 text-lg">
            Transparent pricing for uncompromising quality. Choose the level of perfection your vehicle deserves.
          </p>
        </div>

        <PackageGroup title="Automobile Detailing" icon={Car} packages={AUTO_PACKAGES} />
        <PackageGroup title="Superbike Detailing" icon={Bike} packages={BIKE_PACKAGES} />
      </div>
    </section>
  );
}
