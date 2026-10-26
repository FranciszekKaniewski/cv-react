import {useEffect, useRef} from 'react';
import {IconStar, IconUsers, IconX} from '@tabler/icons-react';
import {useTranslation} from 'react-i18next';
import type {Project} from '../../../data/projects';
import {Budge} from '../../atoms/Budge/Budge';
import {TechnologyBadge} from '../../molecules/TechnologyBadge/TechnologyBadge';
import {ProjectGallery} from '../../molecules/ProjectGallery/ProjectGallery';
import {ProjectYear} from '../../atoms/ProjectYear/ProjectYear';
import {ProjectProgress} from '../../atoms/ProjectProgress/ProjectProgress';
import {ProjectActions} from '../../molecules/ProjectActions/ProjectActions';
import './projectmodal.css';

type Props = {
    project: Project;
    onClose: () => void;
};

export const ProjectModal = ({project, onClose}: Props) => {
    const {t} = useTranslation();
    const dialogRef = useRef<HTMLDialogElement>(null);
    const pointerStartedOutside = useRef(false);
    const title = t(`projects.items.${project.id}.title`);
    const hasGallery = Boolean(project.image || project.gallery?.length);
    const description = t(`projects.items.${project.id}.details`, {
        defaultValue: t(`projects.items.${project.id}.description`),
    });

    useEffect(() => {
        const dialog = dialogRef.current;
        if (!dialog) return;
        const previousOverflow = document.documentElement.style.overflow;
        const previousGutter = document.documentElement.style.scrollbarGutter;
        document.documentElement.style.scrollbarGutter = 'stable';
        document.documentElement.style.overflow = 'hidden';
        if (!dialog.open) dialog.showModal();

        return () => {
            document.documentElement.style.overflow = previousOverflow;
            document.documentElement.style.scrollbarGutter = previousGutter;
        };
    }, []);

    const isOutside = (x: number, y: number) => {
        const bounds = dialogRef.current?.getBoundingClientRect();
        return Boolean(bounds && (x < bounds.left || x > bounds.right || y < bounds.top || y > bounds.bottom));
    };

    return (
        <dialog
            ref={dialogRef}
            className={`project-modal${project.featured ? ' project-modal--featured' : ''}${project.inProgress ? ' project-modal--in-progress' : ''}${hasGallery ? '' : ' project-modal--text-only'}`}
            aria-labelledby="project-modal-title"
            onClose={onClose}
            onPointerDown={(event) => { pointerStartedOutside.current = isOutside(event.clientX, event.clientY); }}
            onClick={(event) => {
                if (pointerStartedOutside.current && isOutside(event.clientX, event.clientY)) dialogRef.current?.close();
                pointerStartedOutside.current = false;
            }}
        >
            {project.inProgress && <ProjectProgress/>}
            <header className="project-modal-header">
                <span className="project-modal-eyebrow">{t('projects.label')} <span aria-hidden="true">/</span> {t('projects.modal.caseStudy')}</span>
                <button type="button" className="project-modal-close" onClick={() => dialogRef.current?.close()} aria-label={t('projects.modal.close')} autoFocus>
                    <IconX size={20} stroke={1.6} aria-hidden="true"/>
                </button>
            </header>
            <div className="project-modal-layout">
                <div className="project-modal-details">
                    <div className="project-modal-meta">
                        <div className="project-modal-badges">
                            <Budge text={t(`projects.filters.${project.category}`)} variant="accent"/>
                            {project.featured && <Budge text={t('projects.featured')} icon={<IconStar size={13}/>} variant="accent"/>}
                            {project.group && <Budge text={t('projects.group')} icon={<IconUsers size={13}/>}/>}
                            {project.inProgress && <Budge text={t('projects.inProgress')} icon={<span className="project-progress-dot"/>} className="project-progress-badge"/>}
                        </div>
                        <ProjectYear year={project.createdYear} endYear={project.endYear}/>
                    </div>
                    <h2 id="project-modal-title" className="project-modal-title">{title}</h2>
                    <div className="project-modal-description">
                        <h3>{t('projects.modal.overview')}</h3>
                        {description.split('\n\n').map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
                    </div>
                    <div className="project-modal-stack">
                        <h3>{t('projects.technologies')}</h3>
                        <ul>
                            {project.technologies.map((technologyId) => <li key={technologyId}><TechnologyBadge technologyId={technologyId}/></li>)}
                        </ul>
                    </div>
                    <ProjectActions project={project} className="project-modal-actions"/>
                </div>
                {hasGallery && <ProjectGallery project={project}/>}
            </div>
        </dialog>
    );
};
