import './budge.css'

type Props = {
    bgColor?: string;
    color?: string;
    text: string;
}

export const Budge = ({bgColor, color, text}:Props) => (
    <span className="budge" style={{ backgroundColor: bgColor, color: color }}>
        {text}
    </span>
)
