import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Facebook, Instagram, Twitter, MessageCircle } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="space-y-6">
            <Link to="/" className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">2A</span>
              </div>
              <span className="font-bold text-xl tracking-tight">Clean Net</span>
            </Link>
            <p className="text-slate-400 text-sm leading-relaxed">
              Votre partenaire de confiance à Niamey pour tous vos besoins en nettoyage professionnel, jardinage et désinfection. Qualité garantie.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 bg-slate-800 rounded-full flex items-center justify-center hover:bg-primary transition-colors">
                <Facebook size={18} />
              </a>
              <a href="#" className="w-10 h-10 bg-slate-800 rounded-full flex items-center justify-center hover:bg-primary transition-colors">
                <Instagram size={18} />
              </a>
              <a href="#" className="w-10 h-10 bg-slate-800 rounded-full flex items-center justify-center hover:bg-primary transition-colors">
                <Twitter size={18} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Liens Rapides</h3>
            <ul className="space-y-4">
              <li><Link to="/" className="text-slate-400 hover:text-primary transition-colors text-sm">Accueil</Link></li>
              <li><Link to="/services" className="text-slate-400 hover:text-primary transition-colors text-sm">Nos Services</Link></li>
              <li><Link to="/a-propos" className="text-slate-400 hover:text-primary transition-colors text-sm">À Propos</Link></li>
              <li><Link to="/contact" className="text-slate-400 hover:text-primary transition-colors text-sm">Contact</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Nos Services</h3>
            <ul className="space-y-4">
              <li className="text-slate-400 text-sm">Nettoyage de Bureaux</li>
              <li className="text-slate-400 text-sm">Nettoyage de Maisons</li>
              <li className="text-slate-400 text-sm">Entretien de Jardins</li>
              <li className="text-slate-400 text-sm">Désinfection Sanitaire</li>
              <li className="text-slate-400 text-sm">Fin de Chantier</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Contactez-nous</h3>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3 text-sm text-slate-400">
                <MapPin size={18} className="text-primary shrink-0" />
                <span>Kalley Sud, Rue NM 7 Porte 36, Niamey – Niger</span>
              </li>
              <li className="flex items-center space-x-3 text-sm text-slate-400">
                <Phone size={18} className="text-primary shrink-0" />
                <div className="flex flex-col">
                  <a href="tel:+22792719148" className="hover:text-primary transition-colors">(+227) 92 71 91 48</a>
                  <a href="tel:+22790350484" className="hover:text-primary transition-colors">(+227) 90 35 04 84</a>
                </div>
              </li>
              <li className="flex items-center space-x-3 text-sm text-slate-400">
                <Mail size={18} className="text-primary shrink-0" />
                <a href="mailto:info@2aacleannet.com" className="hover:text-primary transition-colors">info@2aacleannet.com</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center text-slate-500 text-xs">
          <p>© 2026 2AA Clean Net – Tous droits réservés</p>
          <div className="mt-4 md:mt-0 flex space-x-6">
            <span>Design by Professional Team</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
