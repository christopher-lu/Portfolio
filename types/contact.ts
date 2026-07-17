export interface ContactMethod {
  id: string;

  label: string;

  value: string;

  href: string;

  icon: React.ComponentType<{
    className?: string;
  }>;
}

export interface ContactInfo {
  availability: string;

  methods: ContactMethod[];
}