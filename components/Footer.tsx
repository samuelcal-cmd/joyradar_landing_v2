import React from 'react';
import { Twitter, Instagram, Github } from 'lucide-react';
import { TEXTS, LINKS } from '../constants';

const Footer: React.FC = () => {
  return (
    <footer className="bg-joy-black py-8 border-t border-white/5">
      <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4">
        <div className="text-gray-500 font-display text-sm tracking-widest uppercase">
          {TEXTS.FOOTER_COPY}
        </div>
        
        <div className="flex gap-6">
          <a href={LINKS.TWITTER} className="text-gray-600 hover:text-white transition-colors">
            <Twitter className="w-5 h-5" />
          </a>
          <a href={LINKS.INSTAGRAM} className="text-gray-600 hover:text-white transition-colors">
            <Instagram className="w-5 h-5" />
          </a>
          <a href="#" className="text-gray-600 hover:text-white transition-colors">
            <Github className="w-5 h-5" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;