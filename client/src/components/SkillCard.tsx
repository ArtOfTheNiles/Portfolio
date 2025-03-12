import { useState } from "react"

import { SkillProps } from "../interfaces/skill.interface"
import '@/styles/skillCard.css'

export const SkillCard = (props: SkillProps) => {
  const DEFAULT_VIEW_LIMIT = 2;
  const [viewLimit, setViewLimit] = useState(DEFAULT_VIEW_LIMIT);

  const displayedSkillTypes = props.skillType.slice(0, viewLimit);
  const hasMoreSkillTypes = viewLimit < props.skillType.length;

  return (
    <div className="skill-card">
      <h3 className="skill-title">{props.skillName}</h3>
      <ul className="skill-types">
        {displayedSkillTypes.map((_, index) => (
            <li className="skill-type">{props.skillType[index]}</li>
        ))}
        {hasMoreSkillTypes && (
        <button 
            className="show-more"
            onClick={() => setViewLimit((prev) => prev + DEFAULT_VIEW_LIMIT)}
        >
            More ...
        </button>
        )}
      </ul>
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