import {useState} from 'react';
import {useTranslation} from 'react-i18next';
import {ExperienceTimeline} from '../../organisms/ExperienceTimeline/ExperienceTimeline.tsx';
import {ExperienceCard} from '../../organisms/ExperienceCard/ExperienceCard.tsx';
import './experience.css';

const stepIds = ['tech', 'courses', 'work', "uni"];

export const ExperienceTemplate = () => {
    const {t, i18n} = useTranslation();
    const [activeStepId, setActiveStepId] = useState('uni');

    const steps = stepIds.map((id) => ({
        id,
        title: t(`experience.steps.${id}.title`),
        period: t(`experience.steps.${id}.period`, {defaultValue: ''}),
    }));

    const activeIndex = steps.findIndex((step) => step.id === activeStepId);
    const activeStep = steps[activeIndex];

    return (
        <section id="experience" className="experience-template" aria-labelledby="experience-title">
            <header className="experience-heading">
                <span className="experience-eyebrow">01 / {t('experience.label')}</span>
                <h2 id="experience-title" className="experience-title">
                    <span aria-hidden="true">&lt;</span>
                    {t('experience.title')}
                    <span aria-hidden="true"> /&gt;</span>
                </h2>
            </header>

            <div className="experience-layout">
                <ExperienceTimeline
                    steps={steps}
                    activeStepId={activeStepId}
                    onSelect={setActiveStepId}
                />
                <ExperienceCard
                    stepId={activeStepId}
                    title={activeStep.title}
                    description={t(`experience.steps.${activeStepId}.description`)}
                    period={activeStep.period}
                    position={activeIndex + 1}
                    total={steps.length}
                    animationKey={`${activeStepId}-${i18n.resolvedLanguage}`}
                />
            </div>
        </section>
    );
};
