import React, { useState, useRef, useEffect } from 'react';
import { Maximize2 } from 'lucide-react';
import { motion } from 'motion/react';

export function Visualizer() {
  const [position, setPosition] = useState(50);
  const containerRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);

  const handleMove = (clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = Math.max(0, Math.min(clientX - rect.left, rect.width));
    const percent = Math.max(0, Math.min((x / rect.width) * 100, 100));
    setPosition(percent);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (isDragging) handleMove(e.clientX);
  };
  
  const handleTouchMove = (e: React.TouchEvent) => {
    if (isDragging) handleMove(e.touches[0].clientX);
  };

  useEffect(() => {
    const handleMouseUp = () => setIsDragging(false);
    window.addEventListener('mouseup', handleMouseUp);
    window.addEventListener('touchend', handleMouseUp);
    return () => {
      window.removeEventListener('mouseup', handleMouseUp);
      window.removeEventListener('touchend', handleMouseUp);
    };
  }, []);

  return (
    <section id="visualizer" className="py-32 bg-black border-y border-white/5 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row gap-12 items-center">
          
          <div className="w-full md:w-1/3 z-10">
            <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tight mb-6">
              <span className="text-gold-500 block text-sm tracking-[0.2em] mb-4">Interactive</span>
              Detail Visualizer
            </h2>
            <p className="text-zinc-400 text-lg mb-8 leading-relaxed">
              Drag the slider to experience the dramatic transformation of a dull, scratched surface to our signature deep mirror finish.
            </p>
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-zinc-900 border border-white/10 flex items-center justify-center shrink-0">
                  <span className="text-xs font-bold text-zinc-500">01</span>
                </div>
                <span className="text-zinc-300 font-medium">9H Ceramic Shield Protection</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-zinc-900 border border-white/10 flex items-center justify-center shrink-0">
                  <span className="text-xs font-bold text-zinc-500">02</span>
                </div>
                <span className="text-zinc-300 font-medium">Stage 2 Paint Correction</span>
              </div>
            </div>
          </div>

          <div className="w-full md:w-2/3">
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative w-full aspect-[4/3] md:aspect-video rounded-2xl overflow-hidden cursor-ew-resize select-none border border-white/10"
              ref={containerRef}
              onMouseDown={(e) => {
                setIsDragging(true);
                handleMove(e.clientX);
              }}
              onTouchStart={(e) => {
                setIsDragging(true);
                handleMove(e.touches[0].clientX);
              }}
              onMouseMove={handleMouseMove}
              onTouchMove={handleTouchMove}
            >
              {/* After Image (Base layer) */}
              <div className="absolute inset-0 z-0">
                <img 
                  src="https://images.unsplash.com/photo-1494976388531-d1058494cdd8?q=80&w=2674&auto=format&fit=crop" 
                  alt="After" 
                  className="w-full h-full object-cover object-center"
                  draggable={false}
                />
              </div>

              {/* Before Image (Clipped overlay layer) */}
              <div 
                className="absolute inset-0 z-10"
                style={{ clipPath: `inset(0 ${100 - position}% 0 0)` }}
              >
                <img 
                  src="https://images.unsplash.com/photo-1594046626602-d961ce904b77?q=80&w=2671&auto=format&fit=crop" 
                  alt="Before" 
                  className="w-full h-full object-cover object-center grayscale opacity-80"
                  draggable={false}
                />
              </div>

              {/* Slider Handle */}
              <div 
                className="absolute top-0 bottom-0 w-1 bg-white cursor-ew-resize z-20"
                style={{ left: `${position}%`, transform: 'translateX(-50%)' }}
              >
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 bg-white rounded-full shadow-lg flex items-center justify-center text-black border-[3px] border-black/10">
                  <Maximize2 size={18} className="rotate-45" />
                </div>
              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
