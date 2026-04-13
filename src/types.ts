export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
  image: string;
  category: 'cleaning' | 'gardening' | 'disinfection';
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  content: string;
  avatar?: string;
}

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  date: string;
  image: string;
  category: string;
}
