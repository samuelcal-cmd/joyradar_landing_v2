import React from 'react';
import { motion } from 'framer-motion';

const steps = [
  {
    num: "01",
    title: "Ubicación",
    desc: "Activa el radar. JoyRadAR analiza tu entorno inmediato.",
  },
  {
    num: "02",
    title: "Descubrimiento",
    desc: "Recibe propuestas curadas, no publicidad masiva.",
  },
  {
    num: "03",
    title: "Decisión",
    desc: "Visualiza la ruta y vive la experiencia cultural.",
  }
];

const HowItWorks: React.FC = () => {
  return (
    <section className="py-24 bg-joy-dark border-y border-white/5">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-6">
           <h2 className="font-display text-3xl md:text-4xl font-bold max-w-xs">
             Del mapa a la <span className="text-joy-blue">experiencia</span>
           </h2>
           <p className="text-gray-500 pb-2">Flujo simplificado</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
          {/* Connector Line (Desktop) */}
          <div className="hidden md:block absolute top-12 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />

          {steps.map((step, i) => (
            <motion.div
              key={i}
              className="relative pt-8"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2 }}
            >
              {/* Dot */}
              <div className="absolute top-10 md:top-0 left-0 md:left-1/2 md:-translate-x-1/2 w-4 h-4 bg-joy-black border-2 border-joy-orange rounded-full z-10" />
              
              <div className="pl-8 md:pl-0 md:text-center mt-4 md:mt-12">
                <span className="block text-joy-orange font-mono text-sm mb-2">{step.num}</span>
                <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                <p className="text-gray-400 text-sm">{step.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;