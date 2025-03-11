import { ProjectProps } from "../interfaces/project.interface"
import '@/styles/projectCard.css'
import { getNiceStringDate, getNiceStringDuration } from '../utility/dtFormat.js'



export const ProjectCard = (props: ProjectProps) => {
  const image = props.thumbnail ? props.thumbnail : 'https://picsum.photos/150';
  return (
    <div className="project-card">
      <img className="project-image" src={image} alt={props.projectName +' Image'} />
      <h3 className="project-title">{props.projectName}</h3>
      <h4 className="project-job-type"><em>{props.jobType}</em></h4>
      <p className="project-description">{props.description}</p>
      {props.clients && props.clients.length > 0 && (
        <ul className="project-client-list">Clients:
          <li>{props.clients.join(', ')}</li>
        </ul>
      )}
      {props.projectURL && (
        <a className="project-link" href={props.projectURL} target="_blank" rel="noreferrer">
          View Project
        </a>
      )}
      {props.repositoryURL && (
        <a className="repo-link" href={props.repositoryURL} target="_blank" rel="noreferrer">
          View Repo
        </a>
      )}
      {props.associatedSkills && props.associatedSkills.length > 0 && (
      <ul className="project-skill-list">Technologies:
        <li>{props.associatedSkills.join(', ')}</li>
      </ul>
      )}
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
      <ul> Debug: 
        <li>Project ID: {props._id}</li>
        <li>Job Type: {props.jobType}</li>
        <li>Highlight: {props.highlight ? 'Yes' : 'No'}</li>
        <li>Clients: {props.clients}</li>
        <li>Project URL: {props.projectURL}</li>
        <li>Repository URL: {props.repositoryURL}</li>
        <li>Other URLs: {props.otherURLs}</li>
        <li>Associated Skills: {props.associatedSkills}</li>
        
      </ul>
    </div>
  )
}