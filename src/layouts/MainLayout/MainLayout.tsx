import {WelcomeTemplate} from "../../components/templates/welcome/welcome.tsx";
import {ExperienceTemplate} from "../../components/templates/experience/experience.tsx";
import {SkillsTemplate} from "../../components/templates/skills/skills.tsx";
import {ProjectsTemplate} from "../../components/templates/projects/projects.tsx";

import './main-layout.css'

export const MainLayout = () => (
    <div className="main-layout">
        <WelcomeTemplate />
        <ExperienceTemplate />
        <SkillsTemplate />
        <ProjectsTemplate />
    </div>
)