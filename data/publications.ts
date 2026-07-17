import type { Publication } from "@/types/publication";

export const publications: Publication[] = [
  {
    id: "klusterbud-medium",

    title: "KlusterBud: K8s anomaly detection made simple",

    type: "Technical Article",

    publisher: "Medium",

    published: "2023",

    summary:
      "How the developer tool Klusterbud supports a more streamlined workflow for detecting anomolies within your Kubernetes cluster.",

    technologies: [
      "Kubernetes",
      "Docker",
      "Helm",
      "Grafana",
      "Prometheus",
      "React",
      "Node.js",
      "Express",
    ],

    url: "https://medium.com/@AMitchell-Smith/klusterbud-k8s-anomaly-detection-made-simple-060ca496aebc",

    featured: true,
  },
];