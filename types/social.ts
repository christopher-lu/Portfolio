export type SocialId =
  | "github"
  | "linkedin"
  | "email";

export interface SocialLink {
  id: SocialId;
  label: string;
  href: string;
}