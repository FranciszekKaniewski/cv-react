import algorithmsCover from '../assets/projects/algorithms-max-flow.png';
import moneyCover from '../assets/projects/money-dashboard.png';
import algorithmsInput from '../assets/projects/algorithms-input.png';
import moneyLogin from '../assets/projects/money-login.png';
import engineCover from '../assets/projects/game-engine.svg';
import rendererCover from '../assets/projects/renderer-3d-textures.png';
import rendererTriangleMesh from '../assets/projects/renderer-3d-triangle-mesh.png';
import rendererWireframe from '../assets/projects/renderer-3d-wireframe.png';
import rendererLighting from '../assets/projects/renderer-3d-lighting.png';
import rendererColoredLights from '../assets/projects/renderer-3d-colored-lights.png';
import arenaCover from '../assets/projects/shooting-game-arena.png';
import arenaDefeat from '../assets/projects/shooting-game-defeat.png';
import vetCover from '../assets/projects/vet-manager-overview.png';
import santaCover from '../assets/projects/santa-list-children.png';
import santaPresents from '../assets/projects/santa-list-presents.png';
import santaAddPresent from '../assets/projects/santa-list-add-present.png';
import todoCover from '../assets/projects/to-do.svg';
import megaMapCover from '../assets/projects/mega-map-overview.png';
import megaMapPlock from '../assets/projects/mega-map-plock.png';
import calendarWeek from '../assets/projects/calendar-week.jpg';
import calendarMonth from '../assets/projects/calendar-month.jpg';
import calendarTask from '../assets/projects/calendar-task.jpg';
import vetClinicPresentation from '../assets/projects/vetclinic-ai-presentation.jpg';
import vetClinicDashboard from '../assets/projects/vetclinic-ai-dashboard.png';
import vetClinicSchedule from '../assets/projects/vetclinic-ai-schedule.png';
import vetClinicDoctor from '../assets/projects/vetclinic-ai-doctor.png';
import vetClinicVisit from '../assets/projects/vetclinic-ai-visit.png';
import vetClinicPharmacy from '../assets/projects/vetclinic-ai-pharmacy.png';
import vetClinicStaff from '../assets/projects/vetclinic-ai-staff.png';
import vetClinicLightTheme from '../assets/projects/vetclinic-ai-light-theme.png';
import type {TechnologyId} from './technologies';

export const projectCategories = ['all', 'university', 'courses', 'personal'] as const;
export type ProjectCategory = typeof projectCategories[number];

export type Project = {
    id: string;
    createdYear: number;
    endYear?: number;
    category: Exclude<ProjectCategory, 'all'>;
    image?: string;
    gallery?: {id: string; src: string}[];
    technologies: TechnologyId[];
    featured?: boolean;
    group?: boolean;
    inProgress?: boolean;
    githubUrl?: string;
    backendGithubUrl?: string;
    demoUrl?: string;
    downloadUrl?: string;
    websiteUrl?: string;
};

// Texts live in i18n/locales. Years initially follow the repository creation dates.
// Optional demoUrl, downloadUrl and websiteUrl enable their corresponding buttons.
export const projects: Project[] = [
    {
        id: 'vetclinic-ai',
        createdYear: 2025,
        endYear: 2026,
        category: 'university',
        image: vetClinicDashboard,
        gallery: [
            {id: 'dashboard', src: vetClinicDashboard},
            {id: 'schedule', src: vetClinicSchedule},
            {id: 'doctor', src: vetClinicDoctor},
            {id: 'visit', src: vetClinicVisit},
            {id: 'pharmacy', src: vetClinicPharmacy},
            {id: 'staff', src: vetClinicStaff},
            {id: 'light-theme', src: vetClinicLightTheme},
            {id: 'presentation', src: vetClinicPresentation},
        ],
        technologies: ['typescript', 'react', 'tanstackQuery', 'dotnet', 'sql'],
        featured: true,
        group: true,
        websiteUrl: 'https://cassiopeia4.github.io/Project-preview-page/',
    },
    {
        id: 'game-engine',
        createdYear: 2026,
        category: 'university',
        image: engineCover,
        technologies: ['cpp', 'sdl', 'catch2', 'erlang'],
        featured: true,
        inProgress: true,
        githubUrl: 'https://github.com/FranciszekKaniewski/In--Projekt-MMO',
    },
    {
        id: 'algorithms',
        createdYear: 2025,
        category: 'university',
        image: algorithmsCover,
        gallery: [
            {id: 'input', src: algorithmsInput},
            {id: 'max-flow', src: algorithmsCover},
        ],
        technologies: ['typescript', 'react', 'cpp', 'crow', 'docker', 'cpp'],
        featured: true,
        group: true,
        githubUrl: 'https://github.com/FranciszekKaniewski/Projekt-Algorytmy-i-struktury-danych-gr.-SKS',
    },
    {
        id: 'money-app',
        createdYear: 2026,
        category: 'university',
        image: moneyCover,
        gallery: [
            {id: 'login', src: moneyLogin},
            {id: 'dashboard', src: moneyCover},
        ],
        technologies: ['typescript', 'react', 'tanstackQuery', 'php', 'symfony', 'docker'],
        githubUrl: 'https://github.com/FranciszekKaniewski/uni-web-project',
    },
    {
        id: 'renderer-3d',
        createdYear: 2026,
        category: 'university',
        image: rendererCover,
        gallery: [
            {id: 'triangle-mesh', src: rendererTriangleMesh},
            {id: 'wireframe', src: rendererWireframe},
            {id: 'textures', src: rendererCover},
            {id: 'lighting', src: rendererLighting},
            {id: 'colored-lights', src: rendererColoredLights},
        ],
        technologies: ['cpp', 'qt', 'docker'],
        featured: true,
        githubUrl: 'https://github.com/FranciszekKaniewski/UMK-3D-project',
    },
    {
        id: 'shooting-game',
        createdYear: 2026,
        category: 'university',
        image: arenaCover,
        gallery: [
            {id: 'arena', src: arenaCover},
            {id: 'defeat', src: arenaDefeat},
        ],
        technologies: ['erlang', 'javascript', 'react'],
        githubUrl: 'https://github.com/FranciszekKaniewski/programowanie-funkcyjne-fe',
        backendGithubUrl: 'https://github.com/FranciszekKaniewski/erlang-shooting-game-backend',
    },
    {
        id: 'calendar-scheduler',
        createdYear: 2024,
        category: 'university',
        image: calendarWeek,
        gallery: [
            {id: 'week', src: calendarWeek},
            {id: 'month', src: calendarMonth},
            {id: 'task', src: calendarTask},
        ],
        technologies: ['typescript', 'react', 'nodejs', 'nestjs', 'typeorm', 'mysql'],
        githubUrl: 'https://github.com/FranciszekKaniewski/DB_project',
    },
    {
        id: 'school-diary',
        createdYear: 2024,
        category: 'university',
        technologies: ['cpp'],
        githubUrl: 'https://github.com/FranciszekKaniewski/DziennikSzkolnyPD',
    },
    {
        id: 'text-analyzer',
        createdYear: 2025,
        category: 'university',
        technologies: ['cpp'],
        githubUrl: 'https://github.com/FranciszekKaniewski/AnalizatorTekstu',
    },
    {
        id: 'family-tree',
        createdYear: 2025,
        category: 'university',
        technologies: ['cpp'],
        githubUrl: 'https://github.com/FranciszekKaniewski/DrzewoGenealogiczne',
    },
    {
        id: 'vet-manager',
        createdYear: 2023,
        category: 'courses',
        image: vetCover,
        technologies: ['typescript', 'react', 'nodejs', 'express', 'mysql'],
        githubUrl: 'https://github.com/FranciszekKaniewski/Vet-Manager-front',
        backendGithubUrl: 'https://github.com/FranciszekKaniewski/Vet-Manager-back',
    },
    {
        id: 'santa-list',
        createdYear: 2023,
        category: 'courses',
        image: santaCover,
        gallery: [
            {id: 'children', src: santaCover},
            {id: 'presents', src: santaPresents},
            {id: 'add-present', src: santaAddPresent},
        ],
        technologies: ['typescript', 'react', 'nodejs', 'express', 'mysql'],
        githubUrl: 'https://github.com/FranciszekKaniewski/TS-FullStuck-SantaList',
    },
    {
        id: 'mega-map',
        createdYear: 2023,
        category: 'courses',
        image: megaMapCover,
        gallery: [
            {id: 'overview', src: megaMapCover},
            {id: 'plock', src: megaMapPlock},
        ],
        technologies: ['typescript', 'react', 'nodejs', 'express', 'mysql'],
        githubUrl: 'https://github.com/FranciszekKaniewski/MegaK_Map-app-front',
        backendGithubUrl: 'https://github.com/FranciszekKaniewski/MegaK_Map-app-back',
    },
    {
        id: 'to-do',
        createdYear: 2022,
        category: 'courses',
        image: todoCover,
        technologies: ['javascript', 'nodejs', 'express', 'mongodb'],
        // The source repository is private, so no public code link is shown.
    },
];

// The filter always includes every technology used by at least one project.
export const projectTechnologies = [...new Set(projects.flatMap((project) => project.technologies))];
