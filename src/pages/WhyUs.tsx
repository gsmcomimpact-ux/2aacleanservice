import React from 'react';
import { motion } from 'motion/react';
import { Users, Shield, Clock, Star, CheckCircle2, Award, ThumbsUp, Zap } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function WhyUs() {
  const reasons = [
    {
      icon: Users,
      title: 'Équipe Qualifiée',
      desc: 'Nos agents sont rigoureusement sélectionnés et formés aux techniques de nettoyage les plus avancées et aux normes d\'hygiène strictes.'
    },
    {
      icon: Shield,
      title: 'Matériel Professionnel',
      desc: 'Nous utilisons des équipements de pointe et des produits certifiés, respectueux de vos surfaces et de l\'environnement.'
    },
    {
      icon: Clock,
      title: 'Intervention Rapide',
      desc: 'Nous comprenons l\'urgence de certains besoins. Notre réactivité nous permet d\'intervenir dans les plus brefs délais à Niamey.'
    },
    {
      icon: Star,
      title: 'Prix Compétitifs',
      desc: 'Nous proposons des tarifs transparents et adaptés à votre budget, sans compromis sur la qualité de la prestation.'
    },
    {
      icon: Award,
      title: 'Expertise Reconnue',
      desc: 'Plus de 10 ans d\'expérience au service des particuliers et des plus grandes institutions du Niger.'
    },
    {
      icon: Zap,
      title: 'Flexibilité Totale',
      desc: 'Nous nous adaptons à vos contraintes horaires pour ne jamais perturber votre quotidien ou votre activité professionnelle.'
    }
  ];

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
            Pourquoi Choisir 2AA Clean Net ?
          </motion.h1>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Découvrez ce qui fait de nous le partenaire privilégié pour l'hygiène et la propreté au Niger.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            {reasons.map((reason, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white p-10 rounded-[2.5rem] shadow-xl border border-slate-100 hover:border-primary/20 transition-all group"
              >
                <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center text-primary mb-8 group-hover:scale-110 transition-transform">
                  <reason.icon size={32} />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-4">{reason.title}</h3>
                <p className="text-slate-600 leading-relaxed">
                  {reason.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Guarantee Section */}
      <section className="py-24 bg-slate-900 text-white overflow-hidden relative">
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary/10 rounded-full -mr-48 -mt-48 blur-3xl" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <h2 className="text-3xl md:text-4xl font-bold leading-tight">Notre Engagement : Votre Satisfaction Totale</h2>
              <p className="text-slate-400 text-lg leading-relaxed">
                Chez 2AA Clean Net, nous ne nous contentons pas de nettoyer. Nous créons des environnements où il fait bon vivre et travailler. Chaque intervention est soumise à un contrôle qualité rigoureux.
              </p>
              <div className="space-y-4">
                {[
                  'Contrôle qualité après chaque passage',
                  'Écoute active de vos retours',
                  'Ré-intervention gratuite en cas d\'insatisfaction',
                  'Suivi personnalisé par un chargé de compte'
                ].map((item, i) => (
                  <div key={i} className="flex items-center space-x-3">
                    <ThumbsUp className="text-primary" size={20} />
                    <span className="text-slate-200">{item}</span>
                  </div>
                ))}
              </div>
              <div className="pt-4">
                <Link
                  to="/contact"
                  className="inline-block bg-primary hover:bg-primary-dark text-white px-10 py-4 rounded-xl font-bold transition-all shadow-xl shadow-primary/20"
                >
                  Tester nos services
                </Link>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-video rounded-3xl overflow-hidden shadow-2xl border border-white/10">
                <img
                  src="https://picsum.photos/seed/guarantee/1000/800"
                  alt="Qualité garantie"
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
