import {Budge} from "../../atoms/Budge/Budge.tsx";
import './namebudges.css';

export const NameBudges = () => {

    const tags = ["Frontend", "Backend", "Fullstack"];

    const elements = tags.map((tag) =>
        <Budge
            key={tag}
            text={tag}
        />);

    return <div className="name-budges">{elements}</div>
}
