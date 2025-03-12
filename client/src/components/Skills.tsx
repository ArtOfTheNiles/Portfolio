import { useEffect, useState } from "react";

import { loadSkills } from "../utility/loadService";
import { SkillCard } from "./SkillCard";
import { SkillProps } from "../interfaces/skill.interface";
import '@/styles/skills.css'

const sortSkillsByConfidence = (skills: SkillProps[]): SkillProps[] => {
    const highlightedSkills = skills
        .filter(skill => skill.highlight)
        .sort((a, b) => b.confidenceLevel - a.confidenceLevel);

    const nonHighlightedSkills = skills
        .filter(skill => !skill.highlight)
        .sort((a, b) => b.confidenceLevel - a.confidenceLevel);

    return [...highlightedSkills, ...nonHighlightedSkills];
}

const sortSkillsByPassion = (skills: SkillProps[]): SkillProps[] => {
    const highlightedSkills = skills
        .filter(skill => skill.highlight)
        .sort((a, b) => b.passionLevel - a.passionLevel);

    const nonHighlightedSkills = skills
        .filter(skill => !skill.highlight)
        .sort((a, b) => b.passionLevel - a.passionLevel);

    return [...highlightedSkills, ...nonHighlightedSkills];
}

export const Skills = () => {
    const DEFAULT_VIEW_LIMIT = 8;
    const [skills, setSkills] = useState<SkillProps[]>([])
    const [viewLimit, setViewLimit] = useState(DEFAULT_VIEW_LIMIT);

    useEffect(() => {
        const loadData = async () => {
            const data: SkillProps[] = await loadSkills();
            setSkills(data);
        }
        loadData();
    }, []);

    const displayedSkills = sortSkillsByConfidence(skills).slice(0, viewLimit);
    const hasMoreSkills = viewLimit < skills.length;

    return (
        <section id="skills" className="skills-section">
            <div className="title-subtitle">
                <h2 className="section-title">Skills</h2>
                <small>I'm planning to add these filters here to make it easier to find what you want <em>but until then, please scroll</em></small>
            </div>
            <nav className="skill-filters">
                <button className="filter-button skill-button" disabled>All</button>
                <button className="filter-button skill-button" disabled>3D Modeling</button>
                <button className="filter-button skill-button" disabled>Advertising</button>
                <button className="filter-button skill-button" disabled>Animation</button>
                <button className="filter-button skill-button" disabled>Compositing</button>
                <button className="filter-button skill-button" disabled>Digital Art</button>
                <button className="filter-button skill-button" disabled>Education</button>
                <button className="filter-button skill-button" disabled>Film</button>
                <button className="filter-button skill-button" disabled>Graphic Design</button>
                <button className="filter-button skill-button" disabled>Language</button>
                <button className="filter-button skill-button" disabled>Motion Graphics</button>
                <button className="filter-button skill-button" disabled>Programming</button>
                <button className="filter-button skill-button" disabled>Office</button>
                <button className="filter-button skill-button" disabled>Service</button>
                <button className="filter-button skill-button" disabled>Soft Skills</button>
                <button className="filter-button skill-button" disabled>Traditional Art</button>
                <button className="filter-button skill-button" disabled>Traditional Animation</button>
                <button className="filter-button skill-button" disabled>Other</button>
            </nav>
            <ul className="skills-list">
                {displayedSkills.map((skill: SkillProps) => (
                    <li key={skill._id}>
                        <SkillCard {...skill} />
                    </li>
                ))}
                {hasMoreSkills && (
                <button 
                    className="show-more"
                    onClick={() => setViewLimit((prev) => prev + DEFAULT_VIEW_LIMIT)}
                >
                    Show More!
                </button>
                )}
            </ul>
        </section>
    )
}