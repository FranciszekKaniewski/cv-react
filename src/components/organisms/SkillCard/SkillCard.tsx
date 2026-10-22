import {useTranslation} from 'react-i18next';
import type {SkillCategory} from '../../../data/skills';
import {TechnologyBadge} from '../../molecules/TechnologyBadge/TechnologyBadge.tsx';
import './skillcard.css';

type Props = {
    category: SkillCategory;
};

export const SkillCard = ({category}: Props) => {
    const {t} = useTranslation();

    return (
        <article className="skill-card" aria-labelledby={`skills-category-${category.id}`}>
            <h3 id={`skills-category-${category.id}`} className="skill-card-title">
                {t(`skills.${category.id}`)}
            </h3>
            <div className="skill-card-groups">
                {category.groups.map((group) => (
                    <section
                        key={group.level}
                        className="skill-group"
                        data-level={group.level}
                        aria-labelledby={`skills-${category.id}-${group.level}`}
                    >
                        <h4 id={`skills-${category.id}-${group.level}`} className="skill-group-label">
                            {t(`skills.${group.level}`)}
                        </h4>
                        <ul className="skill-group-items">
                            {group.technologies.map((technologyId) => (
                                <li key={technologyId}>
                                    <TechnologyBadge
                                        technologyId={technologyId}
                                        highlighted={group.level === 'main'}
                                    />
                                </li>
                            ))}
                        </ul>
                    </section>
                ))}
            </div>
        </article>
    );
};
