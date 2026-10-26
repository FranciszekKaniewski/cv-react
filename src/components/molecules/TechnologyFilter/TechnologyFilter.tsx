import {IconCheck} from '@tabler/icons-react';
import {TechnologyIcon} from '../../atoms/TechnologyIcon/TechnologyIcon';
import {technologyRegistry} from '../../../data/technologies';
import type {TechnologyId} from '../../../data/technologies';
import './technologyfilter.css';

type Props = {
    technologyId: TechnologyId;
    selected: boolean;
    onToggle: () => void;
};

export const TechnologyFilter = ({technologyId, selected, onToggle}: Props) => (
    <button
        type="button"
        className="technology-filter"
        aria-pressed={selected}
        aria-controls="projects-results"
        onClick={onToggle}
    >
        <TechnologyIcon technologyId={technologyId}/>
        {technologyRegistry[technologyId].name}
        {selected && <IconCheck size={14} stroke={2} aria-hidden="true"/>}
    </button>
);
