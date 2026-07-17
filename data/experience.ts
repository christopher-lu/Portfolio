import type { Experience } from "@/types/experience";

export const experiences: Experience[] = [
  {
    id: "current",

    company: "Tern Systems",

    role: "Full Stack Software Engineer",

    location: "New York, NY",

    startDate: "2024",

    endDate: "Present",

    current: true,

    description:
      "Developing scalable web applications using modern frontend and backend technologies.",

    achievements: [
      "Optimized navigation efficency between the application and website using Next.js shallow routing, reudcing unnessecary page reoloads by 33% and improving load times by 25%, while maintaining accurate URL state updates for a seamless user experience",

      "Improved billing accuracy by 60%+ and decreased manual tax errors by 40% by automating tax calculations within payment routes based on client zip codes using an external tax API",

      "Applied Tailwind CSS and mobile-first design principles to enhance responsiveness, cutting CSS file size by 40% and accelerating development time by 30% for a seamless multi-device experience.",
    ],

    technologies: [
      "React",
      "Next.js",
      "TypeScript",
      "Node.js",
      "GCP",
      "Firebase",
    ],
  },
    {
    id: "currentOpenSource",

    company: "OSLabs",

    role: "Software Engineer",

    location: "New York, NY",

    startDate: "2023",

    endDate: "Present",

    current: true,

    description:
      "Developing scalable web applications using modern frontend and backend technologies.",

    achievements: [
      "Created a Kubernetes monitoring developer tool targeting and acquiring node status data to identify and isolate instances of node failure within k8 clusters",

      "Leveraged Prometheus and its query language, PromQL in order to generate queries reflecting node health status in a result dependant drop down to fetch targeted status metrics for users involving selecing a specific replica set to monitor and presenting any abnormal spikes in CPU usage above 5% average range back to the client",

      "Implemented modernized React techniques, including custom hooks, to manage complex state for K8 Observabilty Dashboards,rendering CPU usage irregularities for SRE teams",

      "Increased anomaly detection accuracy by 10% over Kubectl by refining PromQL-based scraping intervals, allowing SRE teams to mitigate node failures before service disruption ",

      "Engineered the Kubernetes Integration Platform using Node.js and Express, ingesting a stream of k8 cluster CPU utilization, network latency, and pod runtime metrics for SRE teams to monitor their microservices at scales achieving a 20% reduction in average response time due to efficient routing and management of HTTP requests",

      "Employed Docker images to bundle the application along with its dependencies, enhancing workflow and leveraging its isolation capabilities to mitigate potential conflicts within the application when run on more than 1 device",
    ],

    technologies: [
      "Kubernetes",
      "Docker",
      "Helm",
      "Grafana",
      "Prometheus",
      "React",
      "Node.js",
      "Express",
      "AWS",
    ],
  },

  {
    id: "pastLoadsmart",

    company: "Loadsmart",

    role: "Customer Support Analyst II",

    location: "Based in Chicago, IL (Remote)",

    startDate: "2022",

    endDate: "2023",

    current: false,

    description:
      "Providing direct client support and troubleshooting through voice and text channels to create a smooth user experience",

    achievements: [
      "Composed and enacted a training curriculum for new associates and authored documentation for clients and end users for multiple SaaS products expediting onboarding time with a 60% decrease in time for training.",

      "Resolved 95%+ of client support tickets within an hour by streamlining communication via Jira, Zendesk, Lattice, and Salesforce, boosting customer satisfaction and operational efficency.",

      "Supported transition and migration with a 70%+ retention from acquired SaaS product to a newly deployed solution and provided development feedback for UI/UX prior to production deployment of new features for scaling",

      "Initated API key rotation and generation for client integration to their native workflows.",

      "Spearheaded and authored a standard of metrics to gauge workload balances and identify areas of improvement and success within current workflow to upkeep SLAs amongst the client base leading to a 10%+ in client engagement and satisfaction",
    ],

    technologies: [
      "Zendesk",
      "Jira",
      "Lattice",
      "Salesforce",
      "VoIP",
    ],
  },
  {
    id: "pastApple",

    company: "Apple",

    role: "Specialist/Tier 1 Customer Support (Product, Business)",

    location: "New York, NY",

    startDate: "2018",

    endDate: "2022",

    current: false,

    description:
      "Developing scalable web applications using modern frontend and backend technologies.",

    achievements: [
      "Operated an omni-channel communication system in conjunction with a proprietary CRM to identify future business needs and provided technical expertise in implementing effective business solutions creating over 85% retention rate",

      "Delivered live technical training on Apple hardware and software, ensuring 80%+ proficiency among customers and team members, leading to increased product adoption and customer retention",

      "Coordinated an initiative to encourage development in growth amongst team members to identify areas of opportunity in current workflows in which interdepartmental cross training benefitting the client experience leading to a client satisfaction of experience by 5%",
    ],

    technologies: [
      "Proprietary CRM",
      "Proprietary Voice and Chat platform",
      "Salesforce",
    ],
  },
];