import { ProjectProps } from "./Projects"
import '@/styles/projectCard.css'

function getNiceDate(date: Date) {
  return new Intl.DateTimeFormat('en-US').format(date);
}

export const ProjectCard = (props: ProjectProps) => {
  return (
    <div className="project-card">
      <img className="project-image" src={props.image} alt={props.name +' Image'} />
      <h3 className="project-title">{props.name}</h3>
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