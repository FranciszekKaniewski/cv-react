import {useRef, useState} from 'react';
import {IconFolderSearch} from '@tabler/icons-react';
import {useTranslation} from 'react-i18next';
import {projects} from '../../../data/projects';
import type {Project} from '../../../data/projects';
import {createProjectFilters, filterProjects} from '../../../utils/projectFilters';
import {ProjectFilters} from '../../organisms/ProjectFilters/ProjectFilters';
import {ProjectCard} from '../../organisms/ProjectCard/ProjectCard';
import {ProjectModal} from '../../organisms/ProjectModal/ProjectModal';
import {Button} from '../../atoms/Button/Button';
import './projects.css';

export const ProjectsTemplate = () => {
    const {t} = useTranslation();
    const [filters, setFilters] = useState(createProjectFilters);
    const [selectedProject, setSelectedProject] = useState<Project | null>(null);
    const triggerRef = useRef<HTMLButtonElement | null>(null);
    const openProject = (project: Project, trigger: HTMLButtonElement) => {
        triggerRef.current = trigger;
        setSelectedProject(project);
    };
    const closeProject = () => {
        setSelectedProject(null);
        triggerRef.current?.focus({preventScroll: true});
    };
    const visibleProjects = filterProjects(projects, filters);
    const hasFilters = filters.category !== 'all' || filters.featured || filters.group
        || filters.demo || filters.technologies.length > 0;
    const resetFilters = () => setFilters(createProjectFilters());

    return (
        <section id="projects" className="projects-template" aria-labelledby="projects-title">
            <header className="projects-heading">
                <div>
                    <span className="projects-eyebrow">03 / {t('projects.label')}</span>
                    <h2 id="projects-title" className="projects-title">
                        <span aria-hidden="true">&lt;</span>
                        {t('projects.title')}
                        <span aria-hidden="true"> /&gt;</span>
                    </h2>
                </div>
                <p className="projects-description">{t('projects.description')}</p>
            </header>
            <ProjectFilters
                projects={projects}
                filters={filters}
                onChange={setFilters}
                onReset={resetFilters}
                hasFilters={hasFilters}
            />
            <p className="projects-count" role="status" aria-live="polite" aria-atomic="true">
                {t('projects.resultCount', {count: visibleProjects.length, total: projects.length})}
            </p>
            <div id="projects-results">
                {visibleProjects.length > 0 ? (
                    <div className="projects-grid">
                        {visibleProjects.map((project) => <ProjectCard key={project.id} project={project} onOpen={openProject}/>)}
                    </div>
                ) : (
                    <div className="projects-empty">
                        <IconFolderSearch size={32} stroke={1.3} aria-hidden="true"/>
                        <h3>{t('projects.empty.title')}</h3>
                        <p>{t('projects.empty.description')}</p>
                        <Button text={t('projects.resetFilters')} variant="secondary" onClick={resetFilters}/>
                    </div>
                )}
            </div>
            {selectedProject && <ProjectModal key={selectedProject.id} project={selectedProject} onClose={closeProject}/>}
        </section>
    );
};
