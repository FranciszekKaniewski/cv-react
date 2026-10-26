import type {ComponentType} from 'react';
import type {IconProps} from '@tabler/icons-react';
import {
    IconBrandAzure,
    IconBrandCpp,
    IconBrandCSharp,
    IconBrandDocker,
    IconBrandFigma,
    IconBrandGit,
    IconBrandGithub,
    IconBrandJavascript,
    IconBrandMongodb,
    IconBrandNodejs,
    IconBrandPhp,
    IconBrandPython,
    IconBrandReact,
    IconBrandSymfony,
    IconBrandTerraform,
    IconBrandTypescript,
    IconCat,
    IconDatabase,
    IconDeviceGamepad2,
    IconFeather,
    IconLetterC,
    IconLetterR,
    IconRefresh,
    IconSend,
    IconTerminal2,
    IconTestPipe,
} from '@tabler/icons-react';
import {DotNetIcon, ErlangIcon, QtIcon} from '../components/atoms/TechnologyIcon/CustomTechnologyIcons.tsx';

type Technology = {
    name: string;
    icon: ComponentType<IconProps>;
};

export const technologyRegistry = {
    typescript: {name: 'TypeScript', icon: IconBrandTypescript},
    javascript: {name: 'JavaScript', icon: IconBrandJavascript},
    cpp: {name: 'C++', icon: IconBrandCpp},
    sql: {name: 'SQL', icon: IconDatabase},
    csharp: {name: 'C#', icon: IconBrandCSharp},
    python: {name: 'Python', icon: IconBrandPython},
    erlang: {name: 'Erlang', icon: ErlangIcon},
    c: {name: 'C', icon: IconLetterC},
    php: {name: 'PHP', icon: IconBrandPhp},
    bash: {name: 'Bash', icon: IconTerminal2},
    r: {name: 'R', icon: IconLetterR},
    react: {name: 'React', icon: IconBrandReact},
    nodejs: {name: 'Node.js', icon: IconBrandNodejs},
    express: {name: 'Express', icon: IconBrandNodejs},
    mysql: {name: 'MySQL', icon: IconDatabase},
    typeorm: {name: 'TypeORM', icon: IconDatabase},
    nestjs: {name: 'NestJS', icon: IconCat},
    symfony: {name: 'Symfony', icon: IconBrandSymfony},
    dotnet: {name: '.NET', icon: DotNetIcon},
    crow: {name: 'Crow C++', icon: IconFeather},
    tanstackQuery: {name: 'TanStack Query', icon: IconRefresh},
    catch2: {name: 'Catch2', icon: IconTestPipe},
    sdl: {name: 'SDL', icon: IconDeviceGamepad2},
    qt: {name: 'Qt', icon: QtIcon},
    git: {name: 'Git', icon: IconBrandGit},
    github: {name: 'GitHub', icon: IconBrandGithub},
    postman: {name: 'Postman', icon: IconSend},
    docker: {name: 'Docker', icon: IconBrandDocker},
    figma: {name: 'Figma', icon: IconBrandFigma},
    mongodb: {name: 'MongoDB', icon: IconBrandMongodb},
    azure: {name: 'Azure', icon: IconBrandAzure},
    terraform: {name: 'Terraform', icon: IconBrandTerraform},
} satisfies Record<string, Technology>;

export type TechnologyId = keyof typeof technologyRegistry;
