import { ProjectProps } from './Projects';
import { SkillProps } from './Skills';

export async function loadProjects(): Promise<ProjectProps[]> {
  let projects: ProjectProps[] = [];
  if (projects.length === 0) {
    const response = await fetch('./src/assets/seeds/projects.json');
    projects = await response.json() as ProjectProps[];
  }
  return projects;
}

export async function loadSkills(): Promise<SkillProps[]> {
  let skills: SkillProps[] = [];
  if (skills.length === 0) {
    const response = await fetch('./src/assets/seeds/skills.json');
    skills = await response.json() as SkillProps[];

  }
  return skills;
}

export default { loadProjects, loadSkills };