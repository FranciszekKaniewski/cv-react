import {useTranslation} from 'react-i18next';
import './languageswitch.css';

const languages = ['pl', 'en'] as const;

export const LanguageSwitch = () => {
    const {t, i18n} = useTranslation();
    const currentLanguage = i18n.resolvedLanguage?.startsWith('en') ? 'en' : 'pl';

    return (
        <div
            className="language-switch"
            role="group"
            aria-label={t('common.language')}
            data-language={currentLanguage}
        >
            <span className="language-switch-indicator" aria-hidden="true"/>
            {languages.map((language) => (
                <button
                    key={language}
                    type="button"
                    className="language-switch-option"
                    lang={language}
                    aria-label={t(`common.languages.${language}`)}
                    aria-pressed={currentLanguage === language}
                    title={t(`common.languages.${language}`)}
                    onClick={() => {
                        if (language !== currentLanguage) {
                            void i18n.changeLanguage(language);
                        }
                    }}
                >
                    {language.toUpperCase()}
                </button>
            ))}
        </div>
    );
};
