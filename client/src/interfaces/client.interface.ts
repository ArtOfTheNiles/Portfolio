// Objects to be deconstructed to string arrays for client-side use
export interface ClientProps {
    clientName: string;
    clientURL: string;
    thruClientName?: string;
    thruClientURL?: string;
    associatedProjects: string[];
    highlight: boolean;
}