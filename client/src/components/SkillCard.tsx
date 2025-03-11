import { SkillProps } from "../interfaces/skill.interface"
import '@/styles/skills.css'

export const SkillCard = (props: SkillProps) => {
  return (
    <div className="skill-card">
      <h3 className="skill-title">{props.skillName}</h3>
        {props.skillType && props.skillType.length > 1 && (
            <ul className="skill-types">
            {props.skillType.map((type, index) => (
                <li key={index}>{type}</li>
            ))}
            </ul>
        )}
        {props.skillType && props.skillType.length === 1 && (
            <p className="skill-type">{props.skillType[0]}</p>
        )}
      <p className="skill-description">{props.description}</p>
      <ul className="skill-levels">
        <li className="tooltip">Confidence: {props.confidenceLevel}
            <p className="tooltiptext">{props.confidenceDescription}</p>
        </li>
        <li className="tooltip">Passion: {props.passionLevel}
            <p className="tooltiptext">{props.confidenceDescription}</p>
        </li>
      </ul>
    </div>
  )
}