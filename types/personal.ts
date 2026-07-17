export interface Stat {
  label: string;
  value: string;
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
  stats: Stat[];
}