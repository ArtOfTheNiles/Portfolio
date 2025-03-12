import { useEffect, useState } from 'react'

import { loadProjects } from '../utility/loadService';
import '@/styles/projects.css'
import { ProjectCard } from './ProjectCard';
import { ProjectProps } from '../interfaces/project.interface';

const sortProjects = (projects: ProjectProps[]): ProjectProps[] => {
    const getDateValue = (dateStr: string): number => {
        const date = new Date(dateStr);
        if (isNaN(date.getTime())) {
            return new Date().getTime(); 
        }
        return date.getTime();
    };

    const highlightedProjects = projects
        .filter(project => project.highlight)
        .sort((a, b) => getDateValue(b.endDate) - getDateValue(a.endDate));

    const nonHighlightedProjects = projects
        .filter(project => !project.highlight)
        .sort((a, b) => getDateValue(b.endDate) - getDateValue(a.endDate));

    return [...highlightedProjects, ...nonHighlightedProjects];
};

export const Projects = () => {
    const DEFAULT_VIEW_LIMIT = 8;
    const [projects, setProjects] = useState<ProjectProps[]>([])
    const [viewLimit, setViewLimit] = useState(DEFAULT_VIEW_LIMIT);

    useEffect(() => {
        const loadData = async () => {
            const data: ProjectProps[] = await loadProjects();
            setProjects(data);
        }
        loadData();
    }, []);

    const displayedProjects = sortProjects(projects).slice(0, viewLimit);
    const hasMoreProjects = viewLimit < projects.length;

    return (
        <section id="projects" className="projects-section">
            <div className="title-subtitle">
                <h2 className="section-title">Projects</h2>
                <small>I'm planning to add filters here to make it easier to find what you want <em>but until then, please scroll</em></small>
            </div>
            <nav className="project-filters">
                <button className="filter-button" disabled>All</button>
                <button className="filter-button" disabled>Digital Art</button>
                <button className="filter-button" disabled>Traditional Art</button>
                <button className="filter-button" disabled>3D Modeling</button>
                <button className="filter-button" disabled>Animation</button>
                <button className="filter-button" disabled>Education</button>
                <button className="filter-button" disabled>Programming</button>
                <button className="filter-button" disabled>Film</button>
                <button className="filter-button" disabled>Advertising</button>
                <button className="filter-button" disabled>Office</button>
                <button className="filter-button" disabled>Service</button>
            </nav>
            <ul className="projects-list">
                {displayedProjects.map((project: ProjectProps) => (
                    <li key={project._id}>
                        <ProjectCard {...project} />
                    </li>
                ))}
                {hasMoreProjects && (
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
