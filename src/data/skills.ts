import type {TechnologyId} from './technologies';

export type SkillLevel = 'main' | 'learning' | 'heardAbout';

export type SkillCategory = {
    id: 'languages' | 'frameworks' | 'tools';
    groups: readonly {
        level: SkillLevel;
        technologies: readonly TechnologyId[];
    }[];
};

export const skillCategories = [
    {
        id: 'languages',
        groups: [
            {level: 'main', technologies: ['typescript', 'javascript', 'cpp', 'sql']},
            {level: 'learning', technologies: ['csharp', 'php']},
            {level: 'heardAbout', technologies: ['python', 'erlang', 'c', 'bash', 'r']},
        ],
    },
    {
        id: 'frameworks',
        groups: [
            {level: 'main', technologies: ['react', 'nodejs', 'nestjs']},
            {level: 'learning', technologies: ['dotnet', 'crow', 'tanstackQuery']},
            {level: 'heardAbout', technologies: ['sdl', 'qt', 'catch2']},
        ],
    },
    {
        id: 'tools',
        groups: [
            {level: 'main', technologies: ['git', 'github', 'postman']},
            {level: 'learning', technologies: ['docker', 'figma']},
            {level: 'heardAbout', technologies: ['mongodb', 'azure', 'terraform']},
        ],
    },
] as const satisfies readonly SkillCategory[];
