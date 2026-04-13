import React from 'react';
import { motion } from 'motion/react';
import { Phone, Mail, MapPin, MessageCircle } from 'lucide-react';

export default function Contact() {
  return (
    <div className="pt-24">
      {/* Header */}
      <section className="bg-slate-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-bold text-slate-900 mb-6"
          >
            Contactez-nous
          </motion.h1>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Une question ? Un projet ? Notre équipe est à votre écoute pour vous proposer les meilleures solutions de nettoyage à Niamey.
          </p>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            {/* Contact Info */}
            <div className="space-y-12">
              <div>
                <h2 className="text-3xl font-bold text-slate-900 mb-8 text-center">Nos Coordonnées</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="flex items-start space-x-6">
                    <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center text-primary shrink-0">
                      <MapPin size={28} />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-slate-900 mb-2">Adresse</h3>
                      <p className="text-slate-600 leading-relaxed">
                        Kalley Sud, Rue NM 7 Porte 36<br />
                        Niamey – Niger
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-6">
                    <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center text-primary shrink-0">
                      <Phone size={28} />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-slate-900 mb-2">Téléphones</h3>
                      <div className="flex flex-col space-y-1">
                        <a href="tel:+22792719148" className="text-slate-600 hover:text-primary transition-colors">(+227) 92 71 91 48</a>
                        <a href="tel:+22790350484" className="text-slate-600 hover:text-primary transition-colors">(+227) 90 35 04 84</a>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-start space-x-6">
                    <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center text-primary shrink-0">
                      <Mail size={28} />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-slate-900 mb-2">Email</h3>
                      <a href="mailto:info@2aacleannet.com" className="text-slate-600 hover:text-primary transition-colors">info@2aacleannet.com</a>
                    </div>
                  </div>
                </div>
              </div>

              {/* WhatsApp Quick Link */}
              <div className="bg-green-50 p-8 rounded-3xl border border-green-100 text-center">
                <div className="flex items-center justify-center space-x-4 mb-4">
                  <div className="w-12 h-12 bg-green-500 text-white rounded-full flex items-center justify-center">
                    <MessageCircle size={24} />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900">WhatsApp Direct</h3>
                </div>
                <p className="text-slate-600 mb-6">Besoin d'une réponse immédiate ? Échangez avec nous directement sur WhatsApp.</p>
                <a
                  href="https://wa.me/22792719148"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-green-500 text-white px-8 py-3 rounded-xl font-bold hover:bg-green-600 transition-colors"
                >
                  Démarrer la discussion
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
