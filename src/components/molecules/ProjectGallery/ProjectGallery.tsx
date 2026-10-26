import {useRef, useState} from 'react';
import {IconChevronLeft, IconChevronRight, IconPhoto} from '@tabler/icons-react';
import {useTranslation} from 'react-i18next';
import type {Project} from '../../../data/projects';
import './projectgallery.css';

type Props = {project: Project};

export const ProjectGallery = ({project}: Props) => {
    const {t} = useTranslation();
    const [activeIndex, setActiveIndex] = useState(0);
    const scrollerRef = useRef<HTMLDivElement>(null);
    const images = project.gallery?.length ? project.gallery : project.image ? [{id: 'overview', src: project.image}] : [];
    const title = t(`projects.items.${project.id}.title`);
    const imageTitle = (id: string) => t(`projects.items.${project.id}.gallery.${id}.title`, {defaultValue: title});

    const goToImage = (index: number) => {
        const scroller = scrollerRef.current;
        if (!scroller) return;
        const nextIndex = Math.max(0, Math.min(index, images.length - 1));
        scroller.scrollTo({
            left: nextIndex * scroller.clientWidth,
            behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'instant' : 'smooth',
        });
    };

    if (!images.length) return null;

    return (
        <section className="project-gallery" aria-labelledby="project-gallery-title">
            <div className="project-gallery-heading">
                <h3 id="project-gallery-title"><IconPhoto size={16} stroke={1.6} aria-hidden="true"/>{t('projects.modal.gallery')}</h3>
                <span className="project-gallery-count" role="status" aria-live="polite" aria-atomic="true">
                    <span aria-hidden="true">{String(activeIndex + 1).padStart(2, '0')} / {String(images.length).padStart(2, '0')}</span>
                    <span className="project-gallery-sr-only">{t('projects.modal.imageCount', {current: activeIndex + 1, total: images.length})}</span>
                </span>
            </div>
            <div className="project-gallery-stage">
                <div
                    ref={scrollerRef}
                    className="project-gallery-track"
                    role="region"
                    aria-label={t('projects.modal.galleryControls')}
                    tabIndex={0}
                    onScroll={(event) => {
                        const {scrollLeft, clientWidth} = event.currentTarget;
                        if (clientWidth) setActiveIndex(Math.max(0, Math.min(images.length - 1, Math.round(scrollLeft / clientWidth))));
                    }}
                    onKeyDown={(event) => {
                        if (!['ArrowLeft', 'ArrowRight', 'Home', 'End'].includes(event.key)) return;
                        event.preventDefault();
                        if (event.key === 'Home') goToImage(0);
                        else if (event.key === 'End') goToImage(images.length - 1);
                        else goToImage(activeIndex + (event.key === 'ArrowRight' ? 1 : -1));
                    }}
                >
                    {images.map((image, index) => (
                        <div className="project-gallery-slide" key={image.id}>
                            <img
                                src={image.src}
                                alt={t(`projects.items.${project.id}.gallery.${image.id}.alt`, {defaultValue: t('projects.modal.imageAlt', {title, index: index + 1})})}
                                width="800"
                                height="450"
                                decoding="async"
                                draggable="false"
                            />
                        </div>
                    ))}
                </div>
                {images.length > 1 && (
                    <div className="project-gallery-navigation">
                        <button type="button" className="project-gallery-arrow" disabled={activeIndex === 0} onClick={() => goToImage(activeIndex - 1)} aria-label={t('projects.modal.previousImage')}>
                            <IconChevronLeft size={19} stroke={1.7} aria-hidden="true"/>
                        </button>
                        <button type="button" className="project-gallery-arrow" disabled={activeIndex === images.length - 1} onClick={() => goToImage(activeIndex + 1)} aria-label={t('projects.modal.nextImage')}>
                            <IconChevronRight size={19} stroke={1.7} aria-hidden="true"/>
                        </button>
                    </div>
                )}
            </div>
            <div className="project-gallery-caption">
                <p>{imageTitle(images[activeIndex].id)}</p>
                {images.length > 1 && <span>{t('projects.modal.swipeHint')}</span>}
            </div>
            {images.length > 1 && (
                <div className="project-gallery-thumbnails" role="group" aria-label={t('projects.modal.chooseImage')}>
                    {images.map((image, index) => (
                        <button
                            key={image.id}
                            type="button"
                            className="project-gallery-thumbnail"
                            aria-label={t('projects.modal.showImage', {index: index + 1, title: imageTitle(image.id)})}
                            aria-pressed={activeIndex === index}
                            onClick={() => goToImage(index)}
                        >
                            <img src={image.src} alt="" width="100" height="60" draggable="false"/>
                        </button>
                    ))}
                </div>
            )}
        </section>
    );
};
