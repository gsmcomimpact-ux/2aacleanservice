import { Service, Testimonial, BlogPost } from './types';

export const SERVICES: Service[] = [
  {
    id: 'cleaning-home',
    title: 'Nettoyage de Maisons',
    description: 'Un service complet pour votre foyer : dépoussiérage, lavage des sols, vitres et assainissement des pièces de vie.',
    icon: 'Home',
    image: 'https://picsum.photos/seed/cleaning-home/800/600',
    category: 'cleaning'
  },
  {
    id: 'cleaning-office',
    title: 'Nettoyage de Bureaux',
    description: 'Maintenez un environnement de travail productif et sain pour vos collaborateurs avec nos passages réguliers.',
    icon: 'Building2',
    image: 'https://picsum.photos/seed/cleaning-office/800/600',
    category: 'cleaning'
  },
  {
    id: 'gardening',
    title: 'Jardinage & Espaces Verts',
    description: 'Entretien complet de vos jardins : tonte, taille des arbres, arrosage et aménagement paysager à Niamey.',
    icon: 'Leaf',
    image: 'https://picsum.photos/seed/gardening/800/600',
    category: 'gardening'
  },
  {
    id: 'disinfection',
    title: 'Désinfection & Traitement',
    description: 'Élimination des bactéries et virus. Traitement sanitaire certifié pour maisons et locaux professionnels.',
    icon: 'ShieldCheck',
    image: 'https://picsum.photos/seed/disinfection/800/600',
    category: 'disinfection'
  },
  {
    id: 'cleaning-construction',
    title: 'Fin de Chantier',
    description: 'Nettoyage intensif après travaux pour une livraison de chantier impeccable et prête à l\'emploi.',
    icon: 'HardHat',
    image: 'https://picsum.photos/seed/construction/800/600',
    category: 'cleaning'
  },
  {
    id: 'cleaning-industrial',
    title: 'Nettoyage Industriel',
    description: 'Solutions spécialisées pour entrepôts, usines et grandes surfaces nécessitant un matériel professionnel.',
    icon: 'Factory',
    image: 'https://picsum.photos/seed/industrial/800/600',
    category: 'cleaning'
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: '1',
    name: 'Moussa Diallo',
    role: 'Directeur d\'Entreprise',
    content: '2AA Clean Net s\'occupe de nos bureaux depuis un an. Le professionnalisme et la discrétion de l\'équipe sont exemplaires.'
  },
  {
    id: '2',
    name: 'Fatima Ibrahim',
    role: 'Particulier',
    content: 'Le service de jardinage a transformé ma cour. Ils sont ponctuels et font un travail très soigné. Je recommande vivement !'
  },
  {
    id: '3',
    name: 'Jean-Pierre Koffi',
    role: 'Gérant d\'Immeuble',
    content: 'Pour nos nettoyages de fin de chantier, c\'est le partenaire idéal. Efficace, rapide et à un prix très compétitif.'
  }
];

export const BLOG_POSTS: BlogPost[] = [
  {
    id: '1',
    title: '5 conseils pour garder votre maison saine',
    excerpt: 'Découvrez les gestes simples au quotidien pour maintenir une hygiène parfaite chez vous.',
    date: '15 Mai 2026',
    image: 'https://picsum.photos/seed/blog1/800/600',
    category: 'Conseils'
  },
  {
    id: '2',
    title: 'L\'importance de la désinfection des bureaux',
    excerpt: 'Pourquoi une désinfection régulière réduit l\'absentéisme et améliore le bien-être au travail.',
    date: '10 Mai 2026',
    image: 'https://picsum.photos/seed/blog2/800/600',
    category: 'Santé'
  }
];
