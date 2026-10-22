import {Budge} from '../../atoms/Budge/Budge.tsx';
import {TechnologyIcon} from '../../atoms/TechnologyIcon/TechnologyIcon.tsx';
import {technologyRegistry} from '../../../data/technologies';
import type {TechnologyId} from '../../../data/technologies';
import './technologybadge.css';

type Props = {
    technologyId: TechnologyId;
    highlighted?: boolean;
};

export const TechnologyBadge = ({technologyId, highlighted = false}: Props) => (
    <Budge
        className="technology-badge"
        text={technologyRegistry[technologyId].name}
        icon={<TechnologyIcon technologyId={technologyId}/>}
        variant={highlighted ? 'accent' : 'default'}
    />
);
