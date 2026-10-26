import {IconArrowRight, IconStar, IconUsers} from '@tabler/icons-react';
import {useTranslation} from 'react-i18next';
import type {Project} from '../../../data/projects';
import {Budge} from '../../atoms/Budge/Budge';
import {TechnologyBadge} from '../../molecules/TechnologyBadge/TechnologyBadge';
import {ProjectYear} from '../../atoms/ProjectYear/ProjectYear';
import {ProjectProgress} from '../../atoms/ProjectProgress/ProjectProgress';
import {ProjectActions} from '../../molecules/ProjectActions/ProjectActions';
import './projectcard.css';

type Props = {
    project: Project;
    onOpen: (project: Project, trigger: HTMLButtonElement) => void;
};

export const ProjectCard = ({project, onOpen}: Props) => {
    const {t} = useTranslation();
    const title = t(`projects.items.${project.id}.title`);

    return (
        <article className={`project-card${project.featured ? ' project-card--featured' : ''}${project.inProgress ? ' project-card--in-progress' : ''}`} aria-labelledby={`project-${project.id}-title`}>
            {project.inProgress && <ProjectProgress/>}
            {project.image && <div className="project-card-cover">
                <img src={project.image} alt="" width="800" height="450" loading="lazy" decoding="async"/>
            </div>}
            <div className="project-card-body">
                <div className="project-card-meta">
                    <div className="project-card-badges">
                        <Budge text={t(`projects.filters.${project.category}`)} variant="accent"/>
                        {project.featured && <Budge text={t('projects.featured')} icon={<IconStar size={13}/>} variant="accent"/>}
                        {project.group && <Budge text={t('projects.group')} icon={<IconUsers size={13}/>}/>}
                        {project.inProgress && <Budge text={t('projects.inProgress')} icon={<span className="project-progress-dot"/>} className="project-progress-badge"/>}
                    </div>
                    <ProjectYear year={project.createdYear} endYear={project.endYear}/>
                </div>
                <h3 id={`project-${project.id}-title`} className="project-card-title">
                    <button
                        type="button"
                        className="project-card-open"
                        aria-label={t('projects.openDetails', {title})}
                        aria-haspopup="dialog"
                        onClick={(event) => onOpen(project, event.currentTarget)}
                    >
                        {title}
                    </button>
                </h3>
                <p className="project-card-description">{t(`projects.items.${project.id}.description`)}</p>
                <span className="project-card-details-hint" aria-hidden="true">
                    {t('projects.viewDetails')} <IconArrowRight size={15} stroke={1.6}/>
                </span>
                <ul className="project-card-technologies" aria-label={t('projects.technologies')}>
                    {project.technologies.map((technologyId) => (
                        <li key={technologyId}><TechnologyBadge technologyId={technologyId}/></li>
                    ))}
                </ul>
                <ProjectActions project={project} className="project-card-actions"/>
            </div>
        </article>
    );
};
