import React from 'react';
import { motion } from 'motion/react';
import { SERVICES } from '../constants';
import * as Icons from 'lucide-react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

export default function Services() {
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
            Nos Services Professionnels
          </motion.h1>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Découvrez notre gamme complète de services d'hygiène et d'entretien pour transformer vos espaces de vie et de travail.
          </p>
        </div>
      </section>

      {/* Detailed Services */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-32">
            {SERVICES.map((service, index) => {
              const IconComponent = (Icons as any)[service.icon];
              const isEven = index % 2 === 0;

              return (
                <div
                  key={service.id}
                  className={`flex flex-col ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-16 items-center`}
                >
                  <motion.div
                    initial={{ opacity: 0, x: isEven ? -50 : 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className="flex-1 w-full"
                  >
                    <div className="relative">
                      <div className="aspect-[4/3] rounded-[2.5rem] overflow-hidden shadow-2xl">
                        <img
                          src={service.image}
                          alt={service.title}
                          className="w-full h-full object-cover"
                          referrerPolicy="no-referrer"
                        />
                      </div>
                      <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-3xl shadow-xl hidden md:block">
                        <div className="text-primary">
                          <IconComponent size={40} />
                        </div>
                      </div>
                    </div>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, x: isEven ? 50 : -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className="flex-1 space-y-8"
                  >
                    <div className="inline-block px-4 py-1.5 bg-primary/10 rounded-full text-primary font-bold text-sm uppercase tracking-wider">
                      {service.category === 'cleaning' ? 'Nettoyage' : service.category === 'gardening' ? 'Jardinage' : 'Désinfection'}
                    </div>
                    <h2 className="text-3xl md:text-4xl font-bold text-slate-900 leading-tight">
                      {service.title}
                    </h2>
                    <p className="text-slate-600 text-lg leading-relaxed">
                      {service.description}
                    </p>
                    <div className="space-y-4">
                      <h4 className="font-bold text-slate-900">Ce que nous incluons :</h4>
                      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        {[
                          'Équipement professionnel',
                          'Produits certifiés',
                          'Personnel qualifié',
                          'Assurance responsabilité',
                          'Contrôle qualité',
                          'Devis gratuit'
                        ].map((item, i) => (
                          <li key={i} className="flex items-center space-x-2 text-slate-600">
                            <Icons.Check className="text-primary" size={18} />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="pt-4">
                      <Link
                        to="/contact"
                        className="inline-flex items-center bg-primary hover:bg-primary-dark text-white px-8 py-4 rounded-xl font-bold transition-all shadow-lg shadow-primary/20 group"
                      >
                        Demander un devis pour ce service
                        <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                      </Link>
                    </div>
                  </motion.div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-24 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-primary font-bold tracking-wider uppercase text-sm mb-3">Notre Processus</h2>
            <h3 className="text-3xl md:text-4xl font-bold">Comment nous travaillons</h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
            {[
              { step: '01', title: 'Contact & Devis', desc: 'Vous nous contactez et nous évaluons vos besoins gratuitement.' },
              { step: '02', title: 'Planification', desc: 'Nous fixons une date et une heure qui vous conviennent.' },
              { step: '03', title: 'Intervention', desc: 'Notre équipe experte réalise la prestation avec rigueur.' },
              { step: '04', title: 'Validation', desc: 'Nous vérifions ensemble que tout est parfait avant de partir.' },
            ].map((item, i) => (
              <div key={i} className="relative">
                <div className="text-6xl font-black text-white/5 absolute -top-8 -left-4 z-0">{item.step}</div>
                <div className="relative z-10 space-y-4">
                  <h4 className="text-xl font-bold text-primary">{item.title}</h4>
                  <p className="text-slate-400 leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
