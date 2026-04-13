import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, CheckCircle2, Star, Shield, Clock, Users } from 'lucide-react';
import { Link } from 'react-router-dom';
import { SERVICES, TESTIMONIALS } from '../constants';
import * as Icons from 'lucide-react';

export default function Home() {
  const teamImageUrl = "/api/attachments/chat/181567458859/chat-attachment-1741963678000.png";

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://picsum.photos/seed/hero/1920/1080"
            alt="Service de nettoyage professionnel Niamey"
            className="w-full h-full object-cover brightness-[0.7]"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900/40 via-slate-900/10 to-transparent" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl"
          >
            <span className="inline-block px-4 py-1.5 bg-primary/20 border border-primary/30 rounded-full text-primary font-semibold text-sm mb-6 backdrop-blur-sm">
              N°1 du Nettoyage à Niamey
            </span>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-tight mb-6 drop-shadow-lg">
              2AA Clean Net – Votre partenaire professionnel de <span className="text-primary">nettoyage</span> à Niamey
            </h1>
            <p className="text-lg md:text-xl text-white mb-10 leading-relaxed drop-shadow-md font-medium">
              Entreprise spécialisée dans les services de nettoyage, jardinage et désinfection pour particuliers, entreprises et institutions au Niger.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                to="/contact"
                className="bg-primary hover:bg-primary-dark text-white px-8 py-4 rounded-xl font-bold text-lg transition-all flex items-center justify-center group shadow-xl shadow-primary/20"
              >
                Demander un devis
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/services"
                className="bg-white/20 hover:bg-white/30 text-white border border-white/40 backdrop-blur-md px-8 py-4 rounded-xl font-bold text-lg transition-all flex items-center justify-center"
              >
                Nos Services
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Intro Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <div className="aspect-square rounded-3xl overflow-hidden shadow-2xl">
                <img
                  src={teamImageUrl}
                  alt="Équipe de nettoyage 2AA Clean Net"
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="absolute -bottom-8 -right-8 bg-primary p-8 rounded-3xl shadow-xl hidden md:block animate-float">
                <div className="text-white text-center">
                  <div className="text-4xl font-bold mb-1">100%</div>
                  <div className="text-sm font-medium opacity-90">Satisfaction Garantie</div>
                </div>
              </div>
            </div>
            <div className="space-y-8">
              <div>
                <h2 className="text-primary font-bold tracking-wider uppercase text-sm mb-3">À Propos de Nous</h2>
                <h3 className="text-3xl md:text-4xl font-bold text-slate-900 leading-tight">
                  Une expertise reconnue pour un environnement impeccable
                </h3>
              </div>
              <p className="text-slate-600 text-lg leading-relaxed">
                2AA Clean Net est née de la volonté d'offrir aux habitants et entreprises de Niamey un service de nettoyage d'excellence. Nous combinons rigueur, matériel de pointe et respect de l'environnement pour sublimer vos espaces.
              </p>
              <ul className="space-y-4">
                {[
                  'Équipe formée et certifiée',
                  'Produits respectueux de l\'environnement',
                  'Flexibilité horaire totale',
                  'Contrôle qualité rigoureux'
                ].map((item, i) => (
                  <li key={i} className="flex items-center space-x-3 text-slate-700 font-medium">
                    <CheckCircle2 className="text-primary" size={24} />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <Link
                to="/a-propos"
                className="inline-flex items-center text-primary font-bold hover:underline group"
              >
                En savoir plus sur notre mission
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-primary font-bold tracking-wider uppercase text-sm mb-3">Nos Services</h2>
            <h3 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">Des solutions sur mesure pour chaque besoin</h3>
            <p className="text-slate-600">Que vous soyez un particulier ou une grande institution, nous avons l'expertise nécessaire pour répondre à vos exigences les plus élevées.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {SERVICES.slice(0, 3).map((service) => {
              const IconComponent = (Icons as any)[service.icon];
              return (
                <motion.div
                  key={service.id}
                  whileHover={{ y: -10 }}
                  className="bg-white rounded-2xl overflow-hidden shadow-lg border border-slate-100 group"
                >
                  <div className="h-56 overflow-hidden relative">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute top-4 left-4 bg-white p-3 rounded-xl shadow-lg text-primary">
                      <IconComponent size={24} />
                    </div>
                  </div>
                  <div className="p-8">
                    <h4 className="text-xl font-bold text-slate-900 mb-3">{service.title}</h4>
                    <p className="text-slate-600 mb-6 line-clamp-2">{service.description}</p>
                    <Link
                      to="/services"
                      className="text-primary font-semibold flex items-center hover:underline"
                    >
                      Détails du service
                      <ArrowRight className="ml-2" size={16} />
                    </Link>
                  </div>
                </motion.div>
              );
            })}
          </div>

          <div className="mt-12 text-center">
            <Link
              to="/services"
              className="inline-flex items-center bg-slate-900 text-white px-8 py-3 rounded-xl font-bold hover:bg-slate-800 transition-colors"
            >
              Voir tous nos services
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1 space-y-8">
              <div>
                <h2 className="text-primary font-bold tracking-wider uppercase text-sm mb-3">Pourquoi Nous ?</h2>
                <h3 className="text-3xl md:text-4xl font-bold text-slate-900 leading-tight">
                  La référence de l'hygiène et de la propreté au Niger
                </h3>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                {[
                  { icon: Users, title: 'Équipe Qualifiée', desc: 'Des professionnels formés aux dernières techniques.' },
                  { icon: Shield, title: 'Matériel Pro', desc: 'Utilisation d\'équipements de pointe certifiés.' },
                  { icon: Clock, title: 'Intervention Rapide', desc: 'Réactivité maximale pour vos urgences.' },
                  { icon: Star, title: 'Prix Compétitifs', desc: 'Le meilleur rapport qualité-prix à Niamey.' },
                ].map((item, i) => (
                  <div key={i} className="space-y-3">
                    <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center text-primary">
                      <item.icon size={24} />
                    </div>
                    <h4 className="font-bold text-slate-900">{item.title}</h4>
                    <p className="text-slate-600 text-sm">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="order-1 lg:order-2 relative">
              <div className="aspect-video lg:aspect-square rounded-3xl overflow-hidden shadow-2xl">
                <img
                  src="https://picsum.photos/seed/disinfect/1000/1000"
                  alt="Expert en désinfection Niamey"
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-primary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-white/80 font-bold tracking-wider uppercase text-sm mb-3">Témoignages</h2>
            <h3 className="text-3xl md:text-4xl font-bold text-white">Ce que nos clients disent de nous</h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {TESTIMONIALS.map((t) => (
              <div key={t.id} className="bg-white/10 backdrop-blur-md border border-white/20 p-8 rounded-3xl text-white">
                <div className="flex text-yellow-400 mb-6">
                  {[...Array(5)].map((_, i) => <Star key={i} size={18} fill="currentColor" />)}
                </div>
                <p className="text-lg italic mb-8 leading-relaxed">"{t.content}"</p>
                <div>
                  <div className="font-bold text-xl">{t.name}</div>
                  <div className="text-white/60 text-sm">{t.role}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-slate-900 rounded-[3rem] p-12 md:p-20 text-center relative overflow-hidden shadow-2xl">
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary/20 rounded-full -mr-32 -mt-32 blur-3xl" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-primary/20 rounded-full -ml-32 -mb-32 blur-3xl" />
            
            <div className="relative z-10">
              <h2 className="text-3xl md:text-5xl font-bold text-white mb-8">Prêt pour un environnement plus propre ?</h2>
              <p className="text-slate-400 text-lg mb-12 max-w-2xl mx-auto">
                Contactez-nous dès aujourd'hui pour une étude personnalisée de vos besoins et recevez votre devis gratuit sous 24h.
              </p>
              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <Link
                  to="/contact"
                  className="bg-primary hover:bg-primary-dark text-white px-10 py-4 rounded-2xl font-bold text-lg transition-all shadow-xl shadow-primary/30"
                >
                  Demander mon devis
                </Link>
                <a
                  href="tel:+22792719148"
                  className="bg-white text-slate-900 px-10 py-4 rounded-2xl font-bold text-lg hover:bg-slate-100 transition-all"
                >
                  Nous appeler
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
