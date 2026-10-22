import {useTranslation} from 'react-i18next';
import {skillCategories} from '../../../data/skills';
import {SkillCard} from '../../organisms/SkillCard/SkillCard.tsx';
import './skills.css';

export const SkillsTemplate = () => {
    const {t} = useTranslation();

    return (
        <section id="skills" className="skills-template" aria-labelledby="skills-title">
            <header className="skills-heading">
                <div>
                    <span className="skills-eyebrow">02 / {t('skills.label')}</span>
                    <h2 id="skills-title" className="skills-title">
                        <span aria-hidden="true">&lt;</span>
                        {t('skills.title')}
                        <span aria-hidden="true"> /&gt;</span>
                    </h2>
                </div>
                <p className="skills-description">{t('skills.description')}</p>
            </header>
            <div className="skills-grid">
                {skillCategories.map((category) => <SkillCard key={category.id} category={category}/>)}
            </div>
        </section>
    );
};
