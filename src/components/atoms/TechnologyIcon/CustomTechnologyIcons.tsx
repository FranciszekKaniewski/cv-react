import type {IconProps} from '@tabler/icons-react';

const OutlineIcon = ({size = 24, stroke = 1.6, color = 'currentColor', title, children, ...props}: IconProps) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill="none"
        stroke={color}
        strokeWidth={stroke}
        strokeLinecap="round"
        strokeLinejoin="round"
        {...props}
    >
        {title && <title>{title}</title>}
        {children}
    </svg>
);

export const ErlangIcon = (props: IconProps) => (
    <OutlineIcon {...props}>
        <path d="M6 4H3v16h3M18 4h3v16h-3M16 7H9v10h7M9 12h6"/>
    </OutlineIcon>
);

export const DotNetIcon = (props: IconProps) => (
    <OutlineIcon {...props}>
        <circle cx="2" cy="17" r="0.5"/>
        <path d="M5 17V7l5 10V7M16 7h-3v10h3M13 12h2M18 7h5M20.5 7v10"/>
    </OutlineIcon>
);

export const QtIcon = (props: IconProps) => (
    <OutlineIcon {...props}>
        <rect x="3" y="3" width="18" height="18" rx="3"/>
        <ellipse cx="9" cy="11.5" rx="3" ry="4"/>
        <path d="m10 14 3 3M14 8h5M16.5 8v9"/>
    </OutlineIcon>
);
