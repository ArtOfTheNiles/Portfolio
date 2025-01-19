import '@/styles/projects.css'

export interface ProjectProps {
    name: string;
    description: string;
    clients: string[];
    technologies: string[];
    startDate: Date;
    endDate: Date;
}

export interface ArtProps extends ProjectProps {
    portfolio: string; // URL
}

export interface TechProps extends ProjectProps {
    repository: string; // URL
    liveLink: string; // URL
}

export const Projects = () => {
    return (
        <section className="projects-section">
            <h2>Projects</h2>
            <p>Here are some of the projects I have worked on.</p>
        </section>
    )
}
