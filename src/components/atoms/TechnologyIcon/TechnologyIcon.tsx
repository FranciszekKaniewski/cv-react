import {technologyRegistry} from '../../../data/technologies';
import type {TechnologyId} from '../../../data/technologies';
import './technologyicon.css';

type Props = {
    technologyId: TechnologyId;
    size?: number;
};

export const TechnologyIcon = ({technologyId, size = 18}: Props) => {
    const Icon = technologyRegistry[technologyId].icon;

    return (
        <Icon
            className="technology-icon"
            size={size}
            stroke={1.6}
            aria-hidden="true"
            focusable="false"
        />
    );
};
