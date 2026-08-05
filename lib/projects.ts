import { projects } from "@/data/projects";

import type {
  Project,
  ProjectCategory,
} from "@/types/project";

import type { TechnologyName } from "@/lib/technologies";

/**
 * Returns every project sorted by display order.
 */
export function getProjects(): Project[] {
  return [...projects].sort(
    (a, b) => a.displayOrder - b.displayOrder
  );
}

/**
 * Returns a single project by id.
 */
export function getProjectById(
  id: string
): Project | undefined {
  return projects.find(
    (project) => project.id === id
  );
}

/**
 * Returns projects marked as featured.
 */
export function getFeaturedProjects(): Project[] {
  return getProjects()
    .filter((project) => project.featured)
    .sort(
      (a, b) =>
        (a.featuredPriority ?? Number.MAX_SAFE_INTEGER) -
        (b.featuredPriority ?? Number.MAX_SAFE_INTEGER)
    );
}

/**
 * Returns projects belonging to a category.
 */
export function getProjectsByCategory(
  category: ProjectCategory
): Project[] {
  return getProjects().filter(
    (project) => project.category === category
  );
}

/**
 * Returns projects using a specific technology.
 */
export function getProjectsByTechnology(
  technology: TechnologyName
): Project[] {
  return getProjects().filter((project) =>
    project.technologies.includes(technology)
  );
}

export function getProjectIds(): string[] {
  return projects.map((project) => project.id);
}