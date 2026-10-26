import type {Project, ProjectCategory} from '../data/projects';
import type {TechnologyId} from '../data/technologies';

export type ProjectFilters = {
    category: ProjectCategory;
    featured: boolean;
    group: boolean;
    demo: boolean;
    technologies: TechnologyId[];
};

export const createProjectFilters = (): ProjectFilters => ({
    category: 'all',
    featured: false,
    group: false,
    demo: false,
    technologies: [],
});

export const filterProjects = (projects: readonly Project[], filters: ProjectFilters): Project[] =>
    projects.filter((project) =>
        (filters.category === 'all' || project.category === filters.category)
        && (!filters.featured || project.featured)
        && (!filters.group || project.group)
        && (!filters.demo || Boolean(project.demoUrl))
        && filters.technologies.every((technology) => project.technologies.includes(technology)),
    );
