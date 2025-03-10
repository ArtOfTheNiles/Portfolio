// Objects to be deconstructed to string arrays for client-side use
export interface ProjectProps {
    projectName: string;
    clients?: string[];
    jobType: string;
    startDate: Date;
    endDate: Date;
    description: string;
    projectURL?: string;
    repositoryURL?: string;
    otherURLs?: string[];
    associatedSkills: string[];
    highlight: boolean;
}