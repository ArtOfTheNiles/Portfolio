import { ProjectProps } from './Projects.tsx';
//TODO: connect with useList hook to display skills list

export interface SkillProps {
    name: string;
    description: string;
    confidence: number; // 0-1
    learnedOn: string;
}

export const Skills = () => {
    return (
        <section id="skills" className="skills-section">
            <h2>Skills</h2>
            <p>Here are some of the skills I have.</p>
        </section>
    )
}