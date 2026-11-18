export interface Project {
  id: string;
  title: string;
  titleAr: string;
  category: string;
  categoryAr: string;
  description: string;
  descriptionAr: string;
  details: string;
  detailsAr: string;
  image: string;
  tags: string[];
  liveUrl: string;
  githubUrl: string;
  featured?: boolean;
  metrics?: { label: string; value: string }[];
}

export interface SkillCategory {
  title: string;
  titleAr: string;
  skills: {
    name: string;
    level: number;
    icon: string;
    description: string;
    color: string;
  }[];
}

export interface Review {
  id: string;
  name: string;
  role: string;
  rating: number;
  comment: string;
  date: string;
  avatar?: string;
}
