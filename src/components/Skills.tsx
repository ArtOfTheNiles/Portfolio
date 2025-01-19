import { ProjectProps } from './Projects.tsx';
//TODO: connect with useList hook to display skills list

export class SkillProps {
    name: string;
    description: string;
    confidence: number; // 0-1
    project: ProjectProps;
    constructor(name: string, description: string, confidence: number, project: ProjectProps) {
        this.name = name;
        this.description = description;
        if (confidence < 0) {
            this.confidence = 0;
        } else if (confidence > 1) {
            this.confidence = 1;
        } else {
            this.confidence = confidence;
        }
        this.project = project;
    }
}

export const Skills = () => {
    return (
        <section className="skills-section">
            <h2>Skills</h2>
            <p>Here are some of the skills I have.</p>
        </section>
    )
}