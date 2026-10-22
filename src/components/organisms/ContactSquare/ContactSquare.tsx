import {useTranslation} from 'react-i18next';
import '../../atoms/Button/button.css';
import './contactsquare.css';

const email = 'fkaniewski.web@gmail.com';
const phone = '+48 604 947 826';
const discordProfileUrl = 'https://discord.com/users/252164449094467584';

export const ContactSquare = () => {
    const {t} = useTranslation();

    return (
        <section id="contact" className="contact-square" aria-labelledby="contact-square-title">
            <header className="contact-square-header">
                <span className="contact-square-icon" aria-hidden="true">&lt;/&gt;</span>
                <h2 id="contact-square-title">{t('contact.title')}</h2>
            </header>

            <dl className="contact-square-details">
                <div>
                    <dt className="contact-square-label">{t('contact.email')}</dt>
                    <dd>
                        <a className="contact-square-link" href={`mailto:${email}`}>{email}</a>
                    </dd>
                </div>
                <div>
                    <dt className="contact-square-label">{t('welcome.phone')}</dt>
                    <dd>
                        <a className="contact-square-link" href="tel:+48604947826">{phone}</a>
                    </dd>
                </div>
            </dl>

            <div className="contact-square-discord-row">
                <a
                    className="button button--outline contact-square-discord"
                    href={discordProfileUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={t('contact.openDiscord')}
                >
                    {t('contact.discord')}
                    <span aria-hidden="true">↗</span>
                </a>
            </div>

            <div className="contact-square-location">
                <span className="contact-square-label">{t('contact.residence')}</span>
                <p>{t('contact.location')}</p>
            </div>
        </section>
    );
};
