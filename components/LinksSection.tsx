import React from 'react';
import { motion } from 'framer-motion';
import { Smartphone, BookOpen, FileText, ArrowUpRight } from 'lucide-react';
import { LINKS } from '../constants';

const LinksSection: React.FC = () => {
  return (
    <section className="py-32 bg-joy-black relative">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-joy-orange/5 rounded-full blur-[100px]" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-12">
          <h2 className="font-display text-3xl md:text-5xl font-bold mb-4">Explora el proyecto</h2>
          <p className="text-gray-500">Documentación técnica, diseño y concepto.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          
          <a href={LINKS.PROTOTYPE} target="_blank" rel="noopener noreferrer" className="group">
            <motion.div 
              className="h-full bg-joy-gray border border-white/5 p-8 rounded-2xl hover:border-joy-orange/50 hover:bg-joy-orange/5 transition-all duration-300 flex flex-col items-center text-center"
              whileHover={{ y: -5 }}
            >
              <Smartphone className="w-10 h-10 mb-6 text-joy-orange" />
              <h3 className="text-xl font-bold mb-2 group-hover:text-joy-orange transition-colors">Prototipo Interactivo</h3>
              <p className="text-sm text-gray-400 mb-6 flex-grow">
                Navega por la interfaz simulada en Figma. UI completa y flujos de usuario.
              </p>
              <div className="flex items-center text-sm font-semibold mt-auto">
                Ver Demo <ArrowUpRight className="w-4 h-4 ml-1" />
              </div>
            </motion.div>
          </a>

          <a href={LINKS.MEDIUM_ARTICLE} target="_blank" rel="noopener noreferrer" className="group">
             <motion.div 
              className="h-full bg-joy-gray border border-white/5 p-8 rounded-2xl hover:border-white/30 transition-all duration-300 flex flex-col items-center text-center"
              whileHover={{ y: -5 }}
            >
              <BookOpen className="w-10 h-10 mb-6 text-white" />
              <h3 className="text-xl font-bold mb-2">Artículo en Medium</h3>
              <p className="text-sm text-gray-400 mb-6 flex-grow">
                Lectura profunda sobre la filosofía "Datos vs Criterio" y el tech stack.
              </p>
              <div className="flex items-center text-sm font-semibold mt-auto">
                Leer Artículo <ArrowUpRight className="w-4 h-4 ml-1" />
              </div>
            </motion.div>
          </a>

          <a href={LINKS.INFOGRAPHIC} target="_blank" rel="noopener noreferrer" className="group">
             <motion.div 
              className="h-full bg-joy-gray border border-white/5 p-8 rounded-2xl hover:border-joy-blue/50 hover:bg-joy-blue/5 transition-all duration-300 flex flex-col items-center text-center"
              whileHover={{ y: -5 }}
            >
              <FileText className="w-10 h-10 mb-6 text-joy-blue" />
              <h3 className="text-xl font-bold mb-2 group-hover:text-joy-blue transition-colors">Infografía PDF</h3>
              <p className="text-sm text-gray-400 mb-6 flex-grow">
                Resumen visual del sistema, arquitectura y propuesta de valor.
              </p>
              <div className="flex items-center text-sm font-semibold mt-auto">
                Descargar <ArrowUpRight className="w-4 h-4 ml-1" />
              </div>
            </motion.div>
          </a>

        </div>

        <div className="mt-16 text-center">
            <p className="text-xs text-gray-600 italic border-t border-white/5 inline-block pt-4 px-8">
              Nota metodológica: Vídeo conceptual para ambientación; la interfaz real y la lógica se muestran en el prototipo.
            </p>
        </div>
      </div>
    </section>
  );
};

export default LinksSection;