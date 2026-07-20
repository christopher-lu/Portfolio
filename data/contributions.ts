import type { Contribution } from "@/types/contribution";

export const contributions: Contribution[] = [
  {
    id: "klusterbud-medium",

    title: "KlusterBud: K8s Anomaly Detection Made Simple",

    type: "article",

    organization: "Medium",

    organizationHref:
        "https://medium.com/@AMitchell-Smith/klusterbud-k8s-anomaly-detection-made-simple-060ca496aebc",

    date: "2024-01",

    description:
        "An in-depth technical article exploring the architecture behind KlusterBud, an open-source Kubernetes monitoring platform designed to simplify anomaly detection using Prometheus metrics, PromQL queries, and a React-based user interface.",

    href:
        "https://medium.com/@AMitchell-Smith/klusterbud-k8s-anomaly-detection-made-simple-060ca496aebc",

    tags: [
        "React",
        "Node.js",
        "Express",
        "Kubernetes",
        "Prometheus",
        "Grafana",
        "Docker",
        "TypeScript",
    ],

    featured: true,
  },

  {
    id: "caseblink-graphql-panel",

    title: "GraphQL: GraphQL vs REST",

    type: "panel",

    organization: "CaseBlink Software Engineering Speaker Series",

    date: "2023-12",

    description: "A discussion on the implementation of GraphQL and REST with focus on the key differences and trade offs of utilization.",

    href: "#",

    tags: [
      "GraphQL",
      "REST APIs",
    ],

    featured: true,
  },
];