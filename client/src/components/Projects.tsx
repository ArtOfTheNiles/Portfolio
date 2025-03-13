import { useEffect, useState } from 'react'
import { useQuery } from '@apollo/client';

import { loadProjects } from '../utility/loadService';
import '@/styles/projects.css'
import { ProjectCard } from './ProjectCard';
import { ProjectProps } from '../interfaces/project.interface';
import { GET_ALL_PROJECTS } from '../queries/getAllProjects';

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
    const { loading, error, data } = useQuery(GET_ALL_PROJECTS);
    const [projects, setProjects] = useState<ProjectProps[]>([])
    const [viewLimit, setViewLimit] = useState(DEFAULT_VIEW_LIMIT);

    useEffect(() => {
        if (data && data.projects) {
            setProjects(data.projects);
        }
    }, [data]);

    const displayedProjects = sortProjects(projects).slice(0, viewLimit);
    const hasMoreProjects = viewLimit < projects.length;

    return (
        <section id="projects" className="projects-section">
            <div className="title-subtitle">
                <h2 className="section-title">Projects</h2>
                <small>I'm planning to add these filters here to make it easier to find what you want <em>but until then, please scroll</em></small>
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
                {loading ? (<p className="loading">Loading...</p>) : 
                    (displayedProjects.map((project: ProjectProps) => (
                        <li key={project._id}>
                            <ProjectCard {...project} />
                        </li>
                    )))
                }
                {error && <p className="error">Error: {error.message}</p>}
                {hasMoreProjects && (
                    <div className="block-item">
                        <button 
                            className="show-more"
                            onClick={() => setViewLimit((prev) => prev + DEFAULT_VIEW_LIMIT)}>
                            Show More!
                        </button>
                    </div>
                )}
            </ul>
        </section>
    )
}
