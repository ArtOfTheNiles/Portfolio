import { useEffect, useState } from 'react'

import { loadProjects } from './loadService';
import '@/styles/projects.css'
import { ProjectCard } from './ProjectCard';

export interface ProjectProps {
    name: string;
    image: string; // URL
    description: string;
    clients: string[];
    technologies: string[];
    startDate: Date;
    endDate: Date;
    portfolio?: string; // URL
    repository?: string; // URL
    liveLink?: string; // URL
}

export const Projects = () => {
    const [projects, setProjects] = useState<ProjectProps[]>([])
    useEffect(() => {
        const loadData = async () => {
            const data: ProjectProps[] = await loadProjects();
            setProjects(data);
        }
        loadData();
    }, []);

    return (
        <section id="projects" className="projects-section">
            <h2>Projects</h2>
            <ul className="projects-list">
                {/* TODO: make it a list */}
                <ProjectCard {...projects[0]} />
                <ProjectCard {...projects[1]} />
                <ProjectCard {...projects[2]} />
                <ProjectCard {...projects[3]} />
                <ProjectCard {...projects[4]} />
                <ProjectCard {...projects[5]} />
            </ul>
        </section>
    )
}
