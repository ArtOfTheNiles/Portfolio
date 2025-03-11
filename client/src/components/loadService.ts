import { ProjectProps } from '../interfaces/project.interface';
import { SkillProps } from '../interfaces/skill.interface';

export async function loadProjects(): Promise<ProjectProps[]> {
  let projects: ProjectProps[] = [];
  const response = await fetch('./src/assets/seeds/projects.json');
  projects = await response.json() as ProjectProps[];
  return projects;
}

export async function loadSkills(): Promise<SkillProps[]> {
  let skills: SkillProps[] = [];
  const response = await fetch('./src/assets/seeds/skills.json');
  skills = await response.json() as SkillProps[];
  return skills;
}

export default { loadProjects, loadSkills };