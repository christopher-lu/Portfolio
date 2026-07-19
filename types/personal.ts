export interface PersonalStat {
  label: string;
  value: string;
}

export interface SocialLinks {
  email: string;
  github: string;
  linkedin: string;
}

export interface Personal {
  name: string;
  title: string;
  tagline: string;

  bio: string;
  mission: string;

  location: string;

  website: string;
  resume: string;

  social: SocialLinks;

  stats: PersonalStat[];
}