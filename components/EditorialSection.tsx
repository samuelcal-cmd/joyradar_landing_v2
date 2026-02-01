import React from 'react';
import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';

const EditorialSection: React.FC = () => {
  return (
    <section className="py-24 bg-joy-black overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Left: Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-2 mb-4 text-joy-orange">
              <Quote className="rotate-180 w-5 h-5" />
              <span className="font-mono uppercase tracking-widest text-sm">Manifiesto</span>
            </div>
            <h2 className="font-display text-4xl md:text-5xl font-bold mb-6 leading-tight">
              Datos vs <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-500">Criterio Humano</span>
            </h2>
            <p className="text-gray-400 text-lg leading-relaxed mb-8">
              En un mundo saturado de información, el verdadero lujo es el filtro. JoyRadAR no te muestra todo lo que hay; te muestra lo que vale la pena ver.
              Combinamos la precisión de la geolocalización con la sensibilidad de editores culturales locales.
            </p>
          </motion.div>

          {/* Right: Visual Card Example */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            {/* Abstract Decorative elements behind */}
            <div className="absolute -inset-4 bg-joy-blue/20 rounded-xl blur-2xl opacity-30" />
            
            {/* The Card */}
            <div className="relative bg-joy-gray border border-white/10 rounded-xl overflow-hidden shadow-2xl max-w-md mx-auto transform rotate-2 hover:rotate-0 transition-transform duration-500">
              {/* Image Placeholder */}
              <div className="h-48 bg-gray-800 relative overflow-hidden group">
                 <div className="absolute inset-0 bg-gradient-to-t from-joy-gray to-transparent z-10" />
                 <img 
                   src="https://picsum.photos/600/400?grayscale" 
                   alt="Ruta cultural" 
                   className="w-full h-full object-cover opacity-70 group-hover:scale-105 transition-transform duration-700"
                 />
                 <div className="absolute bottom-4 left-4 z-20">
                   <span className="px-2 py-1 bg-joy-orange text-black text-xs font-bold uppercase rounded-sm">Ruta destacada</span>
                 </div>
              </div>
              
              <div className="p-6">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="font-display text-xl font-bold">Santiago Oculto: Leyendas de Piedra</h3>
                  <span className="text-xs text-gray-500 border border-gray-700 px-2 py-1 rounded-full">1.2 km</span>
                </div>
                <p className="text-gray-400 text-sm mb-4">
                  Una caminata por los callejones olvidados del casco antiguo, donde la arquitectura cuenta historias que no están en los libros.
                </p>
                <div className="flex gap-2">
                  <span className="text-xs text-joy-blue bg-joy-blue/10 px-2 py-1 rounded">Arquitectura</span>
                  <span className="text-xs text-joy-blue bg-joy-blue/10 px-2 py-1 rounded">Historia</span>
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default EditorialSection;