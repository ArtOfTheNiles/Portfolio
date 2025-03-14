import { ProjectProps } from "../interfaces/project.interface"
import '@/styles/projectCard.css'
import { getNiceStringDate, getNiceStringDuration } from '../utility/dtFormat.js'
import S3Image from "./S3Image.js";


export const ProjectCard = (props: ProjectProps) => {
  return (
    <div className="project-card">
      <S3Image 
        imageKey={props.thumbnail || "404.png"} 
        alt={props.projectName + " Image"}
        className="project-image" 
      />
      <h3 className="project-title">{props.projectName}</h3>
      <h4 className="project-job-type"><em>{props.jobType}</em></h4>
      <p className="project-description">{props.description}</p>
      {props.clients && props.clients.length > 0 && (
        <ul className="project-client-list">Clients:
          <li>{props.clients.join(', ')}</li>
        </ul>
      )}
      <nav className="project-links">
        <div className="primary-links">
          {props.projectURL && (
            <a className="project-link" href={props.projectURL} target="_blank" rel="noreferrer">
              View Project
            </a>
          )}
          {props.projectURL && props.repositoryURL && (
            <span> | </span>
          )}
          {props.repositoryURL && (
            <a className="repo-link" href={props.repositoryURL} target="_blank" rel="noreferrer">
              View Repo
            </a>
          )}
        </div>
        {props.associatedSkills && props.associatedSkills.length > 0 && (
          <ul className="project-skill-list">Technologies:
          <li>{props.associatedSkills.join(', ')}</li>
        </ul>
        )}
      </nav>
      {props.otherURLs && props.otherURLs.length > 0 && (
        <ul className="project-other-links">Other Links:
          {props.otherURLs.map((url, index) => (
            <li key={index}>
              <a href={url} target="_blank" rel="noreferrer">{url}</a>
            </li>
          ))}
        </ul>
      )}
      <ul className="project-dates">Dates:
        <li>Start: {getNiceStringDate(props.startDate)}</li>
        <li>End: {getNiceStringDate(props.endDate)}</li>
        <p>Duration: {getNiceStringDuration(props.startDate, props.endDate)}</p>
      </ul>
    </div>
  )
}
