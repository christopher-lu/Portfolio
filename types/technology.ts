import { IconType } from "react-icons";

export type TechnologyId =
  | "javascript"
  | "typescript"
  | "react"
  | "nextjs"
  | "redux"
  | "tailwind"
  | "sass"
  | "node"
  | "express"
  | "mongodb"
  | "postgresql"
  | "graphql"
  | "docker"
  | "kubernetes"
  | "grafana"
  | "prometheus";

export type Technology = {
  id: TechnologyId;
  name: string;
  icon: IconType;
  color: string;
};

export type TechnologySection = {
  title: string;
  items: Technology[];
};