import {IconPlayerPlay, IconStar, IconUsers, IconX} from '@tabler/icons-react';
import {useTranslation} from 'react-i18next';
import {projectCategories, projectTechnologies} from '../../../data/projects';
import type {Project} from '../../../data/projects';
import type {ProjectFilters as FilterState} from '../../../utils/projectFilters';
import {TechnologyFilter} from '../../molecules/TechnologyFilter/TechnologyFilter';
import './projectfilters.css';

type Props = {
    projects: Project[];
    filters: FilterState;
    onChange: (filters: FilterState) => void;
    onReset: () => void;
    hasFilters: boolean;
};

const toggles = [
    {id: 'featured', icon: IconStar},
    {id: 'group', icon: IconUsers},
    {id: 'demo', icon: IconPlayerPlay},
] as const;

export const ProjectFilters = ({projects, filters, onChange, onReset, hasFilters}: Props) => {
    const {t} = useTranslation();

    return (
        <div className="project-filters">
            <div className="project-filters-toolbar">
                <div className="project-categories" role="group" aria-label={t('projects.categoryFilter')}>
                    {projectCategories.map((category) => (
                        <button
                            key={category}
                            type="button"
                            className="project-category"
                            aria-pressed={filters.category === category}
                            aria-controls="projects-results"
                            onClick={() => onChange({...filters, category})}
                        >
                            {t(`projects.filters.${category}`)}
                            <span className="project-category-count">
                                {projects.filter((project) => category === 'all' || project.category === category).length.toString().padStart(2, '0')}
                            </span>
                        </button>
                    ))}
                </div>
                <div className="project-property-filters" role="group" aria-label={t('projects.propertyFilters')}>
                    {toggles.map(({id, icon: Icon}) => (
                        <button
                            key={id}
                            type="button"
                            className="project-property-filter"
                            aria-label={t(`projects.only.${id}`)}
                            title={t(`projects.only.${id}`)}
                            aria-pressed={filters[id]}
                            aria-controls="projects-results"
                            onClick={() => onChange({...filters, [id]: !filters[id]})}
                        >
                            <Icon size={19} stroke={1.7} aria-hidden="true"/>
                        </button>
                    ))}
                </div>
                {hasFilters && (
                    <button type="button" className="project-reset" onClick={onReset}>
                        <IconX size={15} aria-hidden="true"/>
                        {t('projects.resetFilters')}
                    </button>
                )}
            </div>
            <div className="project-technologies" role="group" aria-label={t('projects.technologyFilter')}>
                {projectTechnologies.map((technologyId) => (
                    <TechnologyFilter
                        key={technologyId}
                        technologyId={technologyId}
                        selected={filters.technologies.includes(technologyId)}
                        onToggle={() => onChange({
                            ...filters,
                            technologies: filters.technologies.includes(technologyId)
                                ? filters.technologies.filter((id) => id !== technologyId)
                                : [...filters.technologies, technologyId],
                        })}
                    />
                ))}
            </div>
            <p className="project-filter-hint">{t('projects.technologyHint')}</p>
        </div>
    );
};
