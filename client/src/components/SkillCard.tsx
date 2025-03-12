import { useState } from "react"

import { SkillProps } from "../interfaces/skill.interface"
import "@/styles/skillCard.css"

export const SkillCard = (props: SkillProps) => {
  const DEFAULT_VIEW_LIMIT = 2;
  const [viewLimit, setViewLimit] = useState(DEFAULT_VIEW_LIMIT);

  const image = props.iconURL ? props.iconURL : "https://picsum.photos/64";
  const displayedSkillTypes = props.skillType.slice(0, viewLimit);
  const hasMoreSkillTypes = viewLimit < props.skillType.length;

  return (
    <div className="skill-card">
      <div className="skill-header">
        <img className="skill-icon" src={image} alt={props.skillName + " Icon"} />
        <h3 className="skill-title"><a href={props.skillURL}>{props.skillName}</a></h3>
        <small>
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
        </small>
      </div>
      <div className="skill-body">

      </div>

      <p className="summary">{props.summary}</p>
      <p className="summary tooltiptext">{props.description}</p>
      <ul className="skill-levels">
        <li className="confidence tooltip">Confidence: {props.confidenceLevel}
            <p className="confidence tooltiptext">{props.confidenceDescription}</p>
        </li>
        <li className="passion tooltip">Passion: {props.passionLevel}
            <p className="passion tooltiptext">{props.confidenceDescription}</p>
        </li>
      </ul>
    </div>
  )
}