import {useTranslation} from 'react-i18next';
import {Budge} from '../../atoms/Budge/Budge.tsx';
import './experiencecard.css';

type Props = {
    stepId: string;
    title: string;
    description: string;
    period: string;
    position: number;
    total: number;
    animationKey: string;
};

export const ExperienceCard = ({stepId, title, description, period, position, total, animationKey}: Props) => {
    const {t} = useTranslation();

    return (
        <article
            id="experience-panel"
            className="experience-card"
            role="tabpanel"
            aria-labelledby={`experience-tab-${stepId}`}
            tabIndex={0}
        >
            <div className="experience-card-content" key={animationKey}>
                <span className="experience-card-stage">
                    {t('experience.stage', {
                        current: String(position).padStart(2, '0'),
                        total: String(total).padStart(2, '0'),
                    })}
                </span>
                {period && (
                    <div className="experience-card-period">
                        <Budge text={period} bgColor="var(--accent-soft)" color="var(--accent)"/>
                    </div>
                )}
                <h3 className="experience-card-title">{title}</h3>
                <p className="experience-card-description">{description}</p>
            </div>
        </article>
    );
};
