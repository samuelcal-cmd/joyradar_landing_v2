import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Sparkles, UserCheck } from 'lucide-react';

const features = [
  {
    icon: MapPin,
    title: "Geolocalización",
    desc: "Descubre eventos culturales a tu alrededor en tiempo real. Sin búsquedas infinitas.",
    color: "text-joy-blue"
  },
  {
    icon: UserCheck,
    title: "Criterio Editorial",
    desc: "Rutas curadas por expertos locales. Historias sobre listados.",
    color: "text-joy-orange"
  },
  {
    icon: Sparkles,
    title: "IA Contextual",
    desc: "Inteligencia que filtra el ruido y personaliza tu radar cultural.",
    color: "text-purple-400"
  }
];

const Features: React.FC = () => {
  return (
    <section className="py-24 bg-joy-black relative">
      <div className="container mx-auto px-6">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">¿Qué es JoyRadAR?</h2>
          <p className="text-gray-400 max-w-xl mx-auto">Tecnología al servicio de la experiencia cultural local.</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((f, i) => (
            <motion.div
              key={i}
              className="bg-joy-gray/50 border border-white/5 p-8 rounded-2xl hover:border-white/20 transition-all duration-300 group"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <div className={`p-3 rounded-full bg-white/5 w-fit mb-6 group-hover:bg-white/10 transition-colors ${f.color}`}>
                <f.icon className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold mb-3 font-display">{f.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed">{f.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;