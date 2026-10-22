import type {KeyboardEvent} from 'react';
import {useTranslation} from 'react-i18next';
import './experiencetimeline.css';

type Step = {
    id: string;
    title: string;
    period: string;
};

type Props = {
    steps: Step[];
    activeStepId: string;
    onSelect: (stepId: string) => void;
};

export const ExperienceTimeline = ({steps, activeStepId, onSelect}: Props) => {
    const {t} = useTranslation();
    const activeIndex = steps.findIndex((step) => step.id === activeStepId);
    const hasPeriods = steps.some((step) => step.period);

    const handleKeyDown = (event: KeyboardEvent<HTMLDivElement>) => {
        if (event.altKey || event.ctrlKey || event.metaKey) return;

        let nextIndex: number;

        switch (event.key) {
            case 'ArrowDown':
                nextIndex = (activeIndex + 1) % steps.length;
                break;
            case 'ArrowUp':
                nextIndex = (activeIndex - 1 + steps.length) % steps.length;
                break;
            case 'Home':
                nextIndex = 0;
                break;
            case 'End':
                nextIndex = steps.length - 1;
                break;
            default:
                return;
        }

        event.preventDefault();
        onSelect(steps[nextIndex].id);
        event.currentTarget.querySelectorAll<HTMLButtonElement>('[role="tab"]')[nextIndex]?.focus();
    };

    return (
        <div
            className="experience-timeline"
            role="tablist"
            aria-label={t('experience.selectStep')}
            aria-orientation="vertical"
            data-has-periods={hasPeriods}
            onKeyDown={handleKeyDown}
        >
            {steps.map((step, index) => (
                <button
                    key={step.id}
                    id={`experience-tab-${step.id}`}
                    className="experience-timeline-step"
                    type="button"
                    role="tab"
                    aria-selected={step.id === activeStepId}
                    aria-controls="experience-panel"
                    tabIndex={step.id === activeStepId ? 0 : -1}
                    data-completed={index < activeIndex}
                    onClick={() => onSelect(step.id)}
                >
                    {hasPeriods && <span className="experience-timeline-period">{step.period}</span>}
                    <span className="experience-timeline-marker" aria-hidden="true"/>
                    <span className="experience-timeline-content">
                        <span className="experience-timeline-number" aria-hidden="true">
                            {String(index + 1).padStart(2, '0')}
                        </span>
                        <span className="experience-timeline-title">{step.title}</span>
                    </span>
                </button>
            ))}
        </div>
    );
};
