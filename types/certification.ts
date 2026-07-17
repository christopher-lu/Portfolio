export interface Certification {
  id: string;

  name: string;

  issuer: string;

  issued: string;

  expires?: string;

  credentialId?: string;

  skills: string[];

  url?: string;

  featured: boolean;
}