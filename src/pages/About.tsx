import React from 'react';
import { motion } from 'motion/react';
import { Shield, Target, Eye, Heart, CheckCircle2 } from 'lucide-react';

export default function About() {
  const teamImageUrl = "/api/attachments/chat/181567458859/chat-attachment-1741963678000.png";

  return (
    <div className="pt-24">
      {/* Hero */}
      <section className="bg-slate-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-bold text-slate-900 mb-6"
          >
            À Propos de 2AA Clean Net
          </motion.h1>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Votre expert local en solutions d'hygiène et d'entretien à Niamey depuis plus de 10 ans.
          </p>
        </div>
      </section>

      {/* Story */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <h2 className="text-3xl font-bold text-slate-900">Notre Histoire</h2>
              <p className="text-slate-600 text-lg leading-relaxed">
                Fondée à Niamey, 2AA Clean Net est née d'un constat simple : le besoin croissant de services de nettoyage professionnels, fiables et accessibles au Niger. Au fil des années, nous avons bâti une réputation solide basée sur la qualité de nos interventions et la confiance de nos clients.
              </p>
            </div>
            <div className="relative">
              <div className="aspect-square rounded-[3rem] overflow-hidden shadow-2xl">
                <img
                  src={teamImageUrl}
                  alt="Notre équipe au travail"
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Vision Values */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="bg-white p-10 rounded-[2.5rem] shadow-xl border border-slate-100 space-y-6">
              <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center text-primary">
                <Target size={32} />
              </div>
              <h3 className="text-2xl font-bold text-slate-900">Notre Mission</h3>
              <p className="text-slate-600 leading-relaxed">
                Offrir des services de nettoyage fiables et professionnels qui améliorent la qualité de vie et le bien-être de nos clients à Niamey.
              </p>
            </div>

            <div className="bg-white p-10 rounded-[2.5rem] shadow-xl border border-slate-100 space-y-6">
              <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center text-primary">
                <Eye size={32} />
              </div>
              <h3 className="text-2xl font-bold text-slate-900">Notre Vision</h3>
              <p className="text-slate-600 leading-relaxed">
                Devenir la référence incontournable des services d'hygiène et d'entretien au Niger par l'innovation et l'excellence opérationnelle.
              </p>
            </div>

            <div className="bg-white p-10 rounded-[2.5rem] shadow-xl border border-slate-100 space-y-6">
              <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center text-primary">
                <Heart size={32} />
              </div>
              <h3 className="text-2xl font-bold text-slate-900">Nos Valeurs</h3>
              <ul className="space-y-3">
                {[
                  'Professionnalisme',
                  'Efficacité',
                  'Confiance',
                  'Satisfaction Client',
                  'Éco-responsabilité'
                ].map((val, i) => (
                  <li key={i} className="flex items-center space-x-2 text-slate-600">
                    <CheckCircle2 size={18} className="text-primary" />
                    <span>{val}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
