import {IconCalendar} from '@tabler/icons-react';
import {useTranslation} from 'react-i18next';
import './projectyear.css';

type Props = {year: number; endYear?: number};

export const ProjectYear = ({year, endYear}: Props) => {
    const {t} = useTranslation();
    const hasRange = endYear !== undefined && endYear > year;
    const label = hasRange
        ? t('projects.developmentPeriod', {from: year, to: endYear})
        : t('projects.createdIn', {year});

    return (
        <span className="project-year" title={label}>
            <IconCalendar size={14} stroke={1.6} aria-hidden="true"/>
            <span>
                <time dateTime={String(year)}>{year}</time>
                {hasRange && <>–<time dateTime={String(endYear)}>{endYear}</time></>}
            </span>
        </span>
    );
};
