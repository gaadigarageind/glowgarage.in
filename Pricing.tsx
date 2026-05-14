import React, { useState } from 'react';
import { MapPin, Phone, Clock, Mail, Send, MessageCircle, Instagram, ChevronLeft, ChevronRight, Facebook, Youtube, Linkedin } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

const GALLERY_IMAGES = [
  "https://images.unsplash.com/photo-1725382360491-98feb282f7be?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1592198084033-aade902d1aae?q=80&w=1200&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1605559424843-9e4c228bf1c2?q=80&w=1200&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1558981403-c5f9899a28bc?q=80&w=1200&auto=format&fit=crop"
];

function ImageCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => setCurrentIndex((prev) => (prev + 1) % GALLERY_IMAGES.length);
  const prevSlide = () => setCurrentIndex((prev) => (prev - 1 + GALLERY_IMAGES.length) % GALLERY_IMAGES.length);

  return (
    <div className="relative w-full max-w-5xl mx-auto rounded-2xl overflow-hidden aspect-video group bg-zinc-900 border border-white/10">
      <AnimatePresence mode="wait">
        <motion.img
          key={currentIndex}
          src={GALLERY_IMAGES[currentIndex]}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="absolute inset-0 w-full h-full object-cover"
          alt="Gallery Transformation"
        />
      </AnimatePresence>
      
      <button 
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/80 text-white p-3 rounded-full backdrop-blur-md transition-all opacity-0 md:group-hover:opacity-100 border border-white/10"
        aria-label="Previous image"
      >
        <ChevronLeft size={24} />
      </button>
      <button 
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/80 text-white p-3 rounded-full backdrop-blur-md transition-all opacity-0 md:group-hover:opacity-100 border border-white/10"
        aria-label="Next image"
      >
        <ChevronRight size={24} />
      </button>

      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2">
        {GALLERY_IMAGES.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrentIndex(idx)}
            className={`w-2.5 h-2.5 rounded-full transition-all ${idx === currentIndex ? 'bg-gold-500 w-6' : 'bg-white/50 hover:bg-white'}`}
            aria-label={`Go to image ${idx + 1}`}
          />
        ))}
      </div>
    </div>
  );
}

export function AboutContact() {
  return (
    <>
      {/* Gallery Section */}
      <section id="gallery" className="py-32 bg-zinc-950 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="text-center mb-16 max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tight mb-6">Our Work Speaks for Itself</h2>
            <p className="text-zinc-400 text-lg">
              Check out the transformation — from dull to dazzling.
            </p>
          </div>
          
          <ImageCarousel />
          
          <div className="mt-12 flex flex-col md:flex-row justify-center gap-4 md:gap-8 text-zinc-300 font-medium">
            <div className="flex items-center justify-center gap-2 px-4 py-2 bg-white/5 rounded-full"><span className="text-gold-500">✔</span> Before & After Results</div>
            <div className="flex items-center justify-center gap-2 px-4 py-2 bg-white/5 rounded-full"><span className="text-gold-500">✔</span> Premium Finishing</div>
            <div className="flex items-center justify-center gap-2 px-4 py-2 bg-white/5 rounded-full"><span className="text-gold-500">✔</span> Customer Satisfaction</div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 bg-zinc-900 border-t border-white/5">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-2xl md:text-4xl font-black uppercase tracking-tight mb-8">About Glow Garage</h2>
          <p className="text-zinc-300 text-lg leading-relaxed mb-6">
            Glow Garage is dedicated to delivering high-quality detailing services for car and bike owners who care about their vehicle’s appearance and protection.
          </p>
          <p className="text-zinc-400 leading-relaxed mb-8">
            With a passion for perfection and attention to detail, we use professional techniques and premium products to achieve outstanding results. Our mission is simple — to give every vehicle a showroom shine and long-lasting protection.
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-32 bg-black relative overflow-hidden">
        {/* Glow element */}
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-gold-500/20 rounded-full blur-[100px] pointer-events-none" />
        
        <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10 flex flex-col md:flex-row gap-16 items-start">
          <div className="w-full md:w-1/2">
            <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tight mb-6">Get In Touch</h2>
            <p className="text-zinc-400 text-lg mb-12">
              Have questions or want to book a service? Contact us today!
            </p>
            
            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center shrink-0">
                  <Phone size={20} className="text-gold-500" />
                </div>
                <div>
                  <h3 className="text-white font-bold text-lg mb-1">Phone</h3>
                  <div className="flex flex-col gap-1">
                    <a href="tel:+919990017934" className="text-zinc-400 hover:text-white transition-colors block">+91 9990017934</a>
                    <a href="tel:+919990019684" className="text-zinc-400 hover:text-white transition-colors block">+91 9990019684</a>
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center shrink-0">
                  <Mail size={20} className="text-gold-500" />
                </div>
                <div>
                  <h3 className="text-white font-bold text-lg mb-1">Email</h3>
                  <a href="mailto:info@glowgarage.in" className="text-zinc-400 hover:text-white transition-colors block">info@glowgarage.in</a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center shrink-0">
                  <MapPin size={20} className="text-gold-500" />
                </div>
                <div className="flex-1">
                  <h3 className="text-white font-bold text-lg mb-1">Address</h3>
                  <p className="text-zinc-400 max-w-sm mb-4">Glow Garage, Shop No.4, Plot no. 16, Khasra No. 152/22, Shiva Enclave, Najafgarh, New Delhi-110043</p>
                  <a href="https://www.google.com/maps/search/?api=1&query=28.6225353,76.9889058" target="_blank" rel="noopener noreferrer" className="block rounded-2xl overflow-hidden border border-white/10 h-48 w-full max-w-sm relative group">
                    <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors z-10"></div>
                    <iframe
                      src="https://maps.google.com/maps?q=28.6225353,76.9889058&hl=en&z=15&output=embed"
                      width="100%"
                      height="100%"
                      style={{ border: 0 }}
                      allowFullScreen={true}
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      className="pointer-events-none"
                    ></iframe>
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center shrink-0">
                  <Clock size={20} className="text-gold-500" />
                </div>
                <div>
                  <h3 className="text-white font-bold text-lg mb-1">Timing</h3>
                  <p className="text-zinc-400">Open All Days: 9:00 AM – 7:00 PM</p>
                </div>
              </div>
            </div>
          </div>

          <div className="w-full md:w-1/2 flex flex-col gap-8">
            <div className="bg-zinc-900 border border-gold-500/20 shadow-[0_0_50px_rgba(245,158,11,0.05)] p-8 md:p-12 rounded-3xl text-center">
              <svg width="48" height="48" viewBox="0 0 24 24" fill="currentColor" className="text-green-500 mx-auto mb-6">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
              </svg>
              <h3 className="text-2xl font-bold mb-4">Fastest Way to Reach Us</h3>
              <p className="text-zinc-400 mb-8">
                Drop us a message on WhatsApp. We typically reply within a few minutes to discuss your requirements.
              </p>
              <a 
                href="https://wa.me/919990019684?text=Hi,%20I%20want%20to%20book%20a%20detailing%20service%20for%20my%20vehicle."
                className="inline-flex items-center justify-center gap-2 w-full bg-green-500 hover:bg-green-400 text-black px-8 py-4 rounded-full text-lg font-bold tracking-wide transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                </svg>
                Chat on WhatsApp
              </a>
            </div>
            
            <div className="bg-zinc-900 border border-white/5 p-8 md:p-10 rounded-3xl">
              <h3 className="text-2xl font-bold mb-6 text-center">Inquiry Form</h3>
              <form className="space-y-4" onSubmit={(e) => { e.preventDefault(); alert("Thanks for your inquiry! We'll get back to you soon."); }}>
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-zinc-400 mb-1">Name</label>
                  <input type="text" id="name" required className="w-full bg-black/50 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-gold-500 transition-colors" placeholder="John Doe" />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-zinc-400 mb-1">Phone Number</label>
                  <input type="tel" id="phone" required className="w-full bg-black/50 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-gold-500 transition-colors" placeholder="+91 9999999999" />
                </div>
                <div>
                  <label htmlFor="service" className="block text-sm font-medium text-zinc-400 mb-1">Service Interested In</label>
                  <select id="service" className="w-full bg-black/50 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-gold-500 transition-colors appearance-none">
                    <option value="">Select a service</option>
                    <option value="ceramic">Ceramic Coating</option>
                    <option value="ppf">Paint Protection Film (PPF)</option>
                    <option value="detailing">Premium Detailing</option>
                    <option value="correction">Paint Correction</option>
                    <option value="other">Other / General Inquiry</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-zinc-400 mb-1">Message (Optional)</label>
                  <textarea id="message" rows={3} className="w-full bg-black/50 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-gold-500 transition-colors resize-none" placeholder="Tell us about your vehicle..."></textarea>
                </div>
                <button type="submit" className="w-full bg-gold-600 hover:bg-gold-500 text-white font-bold py-4 rounded-xl transition-colors mt-2">
                  Submit Inquiry
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-zinc-950 py-12 border-t border-white/5 text-center px-6">
        <p className="text-white font-medium mb-6">Follow us on social media</p>
        <div className="flex justify-center items-center gap-4 mb-6 flex-wrap">
          <a href="https://instagram.com/glowgaragein" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-zinc-400 hover:text-white hover:border-white/30 hover:bg-white/5 transition-colors" title="@glowgaragein">
            <Instagram size={18} />
          </a>
          <a href="https://www.facebook.com/share/18nDSrnMV3/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-zinc-400 hover:text-white hover:border-white/30 hover:bg-white/5 transition-colors" title="Facebook">
            <Facebook size={18} />
          </a>
          <a href="https://www.youtube.com/@GlowGaragein" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-zinc-400 hover:text-white hover:border-white/30 hover:bg-white/5 transition-colors" title="@GlowGaragein">
            <Youtube size={18} />
          </a>
          <a href="https://www.linkedin.com/in/glowgaragein" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-zinc-400 hover:text-white hover:border-white/30 hover:bg-white/5 transition-colors" title="LinkedIn">
            <Linkedin size={18} />
          </a>
          <a href="https://x.com/glowgarage" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-zinc-400 hover:text-white hover:border-white/30 hover:bg-white/5 transition-colors" title="@glowgarage">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
              <path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z" />
            </svg>
          </a>
          <a href="https://t.me/+919990019684" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-zinc-400 hover:text-white hover:border-white/30 hover:bg-white/5 transition-colors" title="Telegram">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="22" y1="2" x2="11" y2="13"></line>
              <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
            </svg>
          </a>
          <a href="https://www.snapchat.com/add/glowgarage?share_id=0VZIvdOjh70&locale=en-IN" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-zinc-400 hover:text-white hover:border-white/30 hover:bg-white/5 transition-colors" title="Snapchat">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12.206.793c.99 0 4.347.276 5.93 3.821.529 1.193.403 3.219.299 4.847l-.003.06c-.012.18-.022.345-.03.51.075.045.203.09.401.09.3-.016.659-.12 1.033-.301.165-.088.344-.104.464-.104.182 0 .359.029.509.09.45.149.734.479.734.838.015.449-.39.839-1.213 1.168-.089.029-.209.075-.344.119-.45.135-1.139.36-1.333.81-.09.224-.061.524.12.868l.015.015c.06.136 1.526 3.475 4.791 4.014.255.044.435.27.42.509 0 .075-.015.149-.045.225-.24.569-1.273.988-3.146 1.271-.059.091-.12.375-.164.57-.029.179-.074.36-.134.553-.076.271-.27.405-.555.405h-.03c-.135 0-.313-.031-.538-.074-.36-.075-.765-.135-1.273-.135-.3 0-.599.015-.913.074-.6.104-1.123.464-1.723.884-.853.599-1.826 1.288-3.294 1.288-.06 0-.119-.015-.18-.015h-.149c-1.468 0-2.427-.675-3.279-1.288-.599-.42-1.107-.779-1.707-.884-.314-.045-.629-.074-.928-.074-.54 0-.958.089-1.272.149-.211.043-.391.074-.54.074-.374 0-.523-.224-.583-.42-.061-.192-.09-.389-.135-.567-.046-.181-.105-.494-.166-.57-1.918-.222-2.95-.642-3.189-1.226-.031-.063-.052-.15-.055-.225-.015-.243.165-.465.42-.509 3.264-.54 4.73-3.879 4.791-4.02l.016-.029c.18-.345.224-.645.119-.869-.195-.434-.884-.658-1.332-.809-.121-.029-.24-.074-.346-.119-1.107-.435-1.257-.93-1.197-1.273.09-.479.674-.793 1.168-.793.146 0 .27.029.383.074.42.194.789.3 1.104.3.234 0 .384-.06.465-.105l-.046-.569c-.098-1.626-.225-3.651.307-4.837C7.392 1.077 10.739.807 11.727.807l.419-.015h.06z"/>
            </svg>
          </a>
        </div>
        <p className="text-zinc-500 text-sm">
          &copy; {new Date().getFullYear()} Glow Garage. All rights reserved. The Art of Perfection.
        </p>
      </footer>
    </>
  );
}
