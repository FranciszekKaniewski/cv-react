import {useTranslation} from "react-i18next";
import {LanguageSwitch} from "../../molecules/LanguageSwitch/LanguageSwitch.tsx";
import './header.css';

export const Header = () => {

    const {t} = useTranslation();

    const sections = ["about", "experience", "skills", "projects"]

    const elements = sections.map((section) =>
        <li key={section} className="nav-element">
            <a className="nav-link" href={`#${section}`}>
                {t(`navigation.${section}`)}
            </a>
        </li>
    )

    return(
        <header className="site-header">
            <a className="header-brand" href="#about">
                <span className="header-brand-mark" aria-hidden="true">&lt;</span>
                <span>Franciszek Kaniewski</span>
                <span className="header-brand-mark" aria-hidden="true">/&gt;</span>
            </a>
            <nav className="header-nav">
                <ul className="header-links">
                    {elements}
                </ul>
            </nav>
            <LanguageSwitch/>
        </header>
    )
}
