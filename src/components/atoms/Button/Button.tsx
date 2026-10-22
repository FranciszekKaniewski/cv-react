import type {ButtonHTMLAttributes, ReactNode} from "react";

import "./button.css";

type Props = Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'children'> & {
    text: ReactNode;
    variant?: 'primary' | 'secondary' | 'outline';
};

export const Button = ({ text, className = '', type = 'button', variant = 'primary', ...props }: Props) => (
    <button
        {...props}
        className={`button button--${variant} ${className}`.trim()}
        type={type}
    >
        {text}
    </button>
);
