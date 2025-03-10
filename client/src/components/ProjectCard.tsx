import { ProjectProps } from "../interfaces/project.interface"
import '@/styles/projectCard.css'

export const ProjectCard = (props: ProjectProps) => {
  const image = `data:${props.thumbnail?.contentType};base64,${props.thumbnail?.data}`;
  return (
    <div className="project-card">
      <img className="project-image" src={image} alt={props.projectName +' Image'} />
      <h3 className="project-title">{props.projectName}</h3>
      <p className="project-description">{props.description}</p>
      <ul className="project-client-list">Clients:
        {/* TODO: make it a list
        <li>{props.clients.join(', ')}</li> */}
      </ul>
      <ul className="project-tech-list">Technologies:
        {/* TODO: make it a list
        <li>{props.technologies.join(', ')}</li> */}
      </ul>
      <ul className="project-dates">Dates:
        {/* <li>Start: {getNiceDate(props.startDate)}</li>
        <li>End: {getNiceDate(props.startDate)}</li>
        <p>Duration: {props.endDate.getTime() - props.startDate.getTime()}</p> */}
      </ul>
    </div>
  )
}