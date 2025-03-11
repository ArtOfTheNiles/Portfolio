// Objects to be deconstructed to string arrays for client-side use
export interface ProjectProps {
    _id: string;
    projectName: string;
    thumbnail?: string;
    clients?: string[];
    jobType: string;
    startDate: string;
    endDate: string;
    description: string;
    projectURL?: string;
    repositoryURL?: string;
    otherURLs?: string[];
    associatedSkills: string[];
    highlight: boolean;
}