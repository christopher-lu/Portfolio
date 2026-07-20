import type { Experience } from "@/types/experience";

export const experiences: Experience[] = [
  {
    id: "tern-systems",

    company: "Tern Systems",
    companyUrl: "https://ternsystems.com",

    role: "Full Stack Software Engineer",
    employmentType: "Full-time",

    location: "New York, NY",

    startDate: "2024",
    endDate: "Present",
    current: true,

    description:
      "Developing scalable full-stack web applications using modern frontend frameworks, backend APIs, and cloud technologies.",

    achievements: [
      "Optimized navigation efficiency between the application and website using Next.js shallow routing, reducing unnecessary page reloads by 33% while improving page load times by 25% and maintaining accurate URL state updates.",

      "Improved billing accuracy by more than 60% and reduced manual tax errors by 40% by automating tax calculations through an external tax API integrated into payment workflows.",

      "Applied Tailwind CSS and mobile-first design principles to improve responsiveness, reducing CSS bundle size by 40% and accelerating frontend development by 30%.",
    ],

    technologies: [
      "Next.js",
      "React",
      "TypeScript",
      "Node.js",
      "Tailwind CSS",
      "REST APIs",
      "Firebase",
      "Google Cloud",
    ],
  },

  {
    id: "oslabs",

    company: "OSLabs",
    companyUrl: "https://opensourcelabs.io",

    role: "Software Engineer",
    employmentType: "Open Source",

    location: "New York, NY",

    startDate: "2023",
    endDate: "Present",
    current: true,

    description:
      "Developing open-source observability tools that simplify Kubernetes monitoring for software engineers and SRE teams.",

    achievements: [
      "Created KlusterBud, an open-source Kubernetes monitoring platform that identifies node failures and surfaces Kubernetes cluster health metrics through an intuitive dashboard.",

      "Leveraged Prometheus and PromQL to generate targeted Kubernetes health queries, enabling engineers to monitor replica sets and identify abnormal CPU utilization above established thresholds.",

      "Implemented reusable React components and custom hooks to manage complex application state powering Kubernetes observability dashboards.",

      "Improved anomaly detection accuracy by 10% over kubectl by optimizing PromQL scraping intervals, allowing SRE teams to identify node failures before service disruption.",

      "Engineered a Kubernetes integration platform using Node.js and Express that processed CPU utilization, network latency, and pod runtime metrics, reducing average API response times by 20%.",

      "Containerized the application with Docker to improve portability, simplify deployments, and eliminate dependency conflicts across development environments.",
    ],

    technologies: [
      "React",
      "JavaScript",
      "Node.js",
      "Express",
      "Docker",
      "Kubernetes",
      "Helm",
      "Prometheus",
      "Grafana",
      "AWS",
    ],
  },

  {
    id: "loadsmart",

    company: "Loadsmart",
    companyUrl: "https://loadsmart.com",

    role: "Customer Support Analyst II",
    employmentType: "Full-time",

    location: "Remote (Chicago, IL)",

    startDate: "2022",
    endDate: "2023",
    current: false,

    description:
      "Delivered technical SaaS support while partnering with engineering and product teams to improve customer experience and platform adoption.",

    achievements: [
      "Designed and implemented a training curriculum for new associates while authoring customer-facing documentation, reducing onboarding time by approximately 60%.",

      "Resolved more than 95% of client support tickets within one hour using Jira, Zendesk, Salesforce, and Lattice, improving customer satisfaction and operational efficiency.",

      "Supported customer migrations from an acquired SaaS platform to a newly deployed solution, achieving a retention rate exceeding 70% while providing UI and UX feedback before production releases.",

      "Generated and rotated API keys for enterprise customer integrations, enabling secure communication between customer systems and internal services.",

      "Established workload metrics and SLA reporting standards that increased customer engagement and satisfaction by more than 10%.",
    ],

    technologies: [
      "REST APIs",
      "Zendesk",
      "Jira",
      "Salesforce",
      "Lattice",
      "VoIP",
    ],
  },

  {
    id: "apple",

    company: "Apple",
    companyUrl: "https://apple.com",

    role: "Technical Specialist",
    employmentType: "Full-time",

    location: "New York, NY",

    startDate: "2018",
    endDate: "2022",
    current: false,

    description:
      "Provided technical support, customer education, and business solutions across Apple's hardware and software ecosystem.",

    achievements: [
      "Leveraged proprietary CRM platforms and omni-channel communication systems to identify customer needs and deliver tailored business solutions that contributed to an 85% customer retention rate.",

      "Delivered live technical training covering Apple hardware, software, and services, achieving product proficiency rates above 80% among customers and team members.",

      "Led cross-functional coaching initiatives that encouraged knowledge sharing and workflow improvements, increasing overall customer satisfaction by 5%.",
    ],

    technologies: [
      "Apple Ecosystem",
      "Technical Support",
      "CRM",
      "Salesforce",
      "Proprietary Voice and Chat Platform",
    ],
  },
];