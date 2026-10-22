import type {ReactNode} from 'react';
import './budge.css'

type Props = {
    bgColor?: string;
    color?: string;
    text: string;
    icon?: ReactNode;
    variant?: 'default' | 'accent';
    className?: string;
}

export const Budge = ({bgColor, color, text, icon, variant = 'default', className = ''}:Props) => (
    <span
        className={`budge budge--${variant} ${className}`.trim()}
        style={{ backgroundColor: bgColor, color: color }}
    >
        {icon && <span className="budge-icon" aria-hidden="true">{icon}</span>}
        {text}
    </span>
)
