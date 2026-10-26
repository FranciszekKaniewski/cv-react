import {NameBudges} from "../../molecules/NameBudges/NameBudges.tsx";
import {Button} from "../../atoms/Button/Button.tsx";
import {useTranslation} from "react-i18next";
import './namesection.css';

export const NameSection = () => {
    const {t} = useTranslation();

    return(
        <section className="name-section" aria-labelledby="name-section-title">
            <span className="name-section-label">{t('welcome.label')}</span>
            <h1 id="name-section-title" className="name-section-title">
                {t('welcome.title')}
            </h1>
            <NameBudges/>
            <p className="name-section-description">{t('welcome.description')}</p>
            <div className="name-section-actions">
                <Button
                    text={<>{t('welcome.viewProjects')} <span aria-hidden="true">↗</span></>}
                    onClick={() => document.getElementById('projects')?.scrollIntoView()}
                />
            </div>
        </section>
    )
}
