import {IconArrowUpRight, IconBrandGithub, IconDownload, IconPlayerPlay, IconWorld} from '@tabler/icons-react';
import {useTranslation} from 'react-i18next';
import type {Project} from '../../../data/projects';
import '../../atoms/Button/button.css';
import './projectactions.css';

type Props = {project: Project; className?: string};

export const ProjectActions = ({project, className = ''}: Props) => {
    const {t} = useTranslation();
    const title = t(`projects.items.${project.id}.title`);
    const actions = [
        {
            id: 'github',
            url: project.githubUrl,
            text: project.backendGithubUrl ? t('projects.frontendCode') : 'GitHub',
            label: t(project.backendGithubUrl ? 'projects.frontendCodeFor' : 'projects.codeFor', {title}),
            icon: IconBrandGithub,
        },
        {id: 'backend', url: project.backendGithubUrl, text: t('projects.backendCode'), label: t('projects.backendCodeFor', {title}), icon: IconBrandGithub},
        {id: 'demo', url: project.demoUrl, text: t('projects.viewDemo'), label: t('projects.demoFor', {title}), icon: IconPlayerPlay},
        {id: 'download', url: project.downloadUrl, text: t('projects.downloadApp'), label: t('projects.downloadFor', {title}), icon: IconDownload},
        {id: 'website', url: project.websiteUrl, text: t('projects.visitWebsite'), label: t('projects.websiteFor', {title}), icon: IconWorld},
    ].filter((action) => action.url);

    if (!actions.length) return null;

    return (
        <div className={`project-actions ${className}`.trim()}>
            {actions.map(({id, url, text, label, icon: Icon}) => (
                <a
                    key={id}
                    className={`button button--${id === 'demo' ? 'primary' : 'secondary'}`}
                    href={url}
                    download={id === 'download' ? true : undefined}
                    target={id === 'download' ? undefined : '_blank'}
                    rel={id === 'download' ? undefined : 'noopener noreferrer'}
                    aria-label={label}
                >
                    <Icon size={17} stroke={1.7} aria-hidden="true"/>
                    {text}
                    {id !== 'download' && <IconArrowUpRight size={14} aria-hidden="true"/>}
                </a>
            ))}
        </div>
    );
};
