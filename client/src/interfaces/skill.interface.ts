// Objects to be deconstructed to string arrays for client-side use
export interface SkillProps {
    _id: string;
    skillName: string;
    skillURL?: string;
    iconURL?: string;
    skillType: string[];
    summary: string;
    description: string;
    confidenceLevel: number;
    confidenceDescription: string;
    passionLevel: number;
    passionDescription: string;
    associatedProjects: string[];
    highlight: boolean;
}