import { useState } from "react"

import { SkillProps } from "../interfaces/skill.interface"
import "@/styles/skillCard.css"

export const SkillCard = (props: SkillProps) => {
  const DEFAULT_VIEW_LIMIT = 2;
  const [viewLimit, setViewLimit] = useState(DEFAULT_VIEW_LIMIT);

  const image = props.iconURL ? props.iconURL : "https://picsum.photos/64";
  const displayedSkillTypes = props.skillType.slice(0, viewLimit);
  const hasMoreSkillTypes = viewLimit < props.skillType.length;

  let showDescription = false;
  const toggleDescription = () => {
    console.log("Toggling description: " + showDescription);
    showDescription = !showDescription;
  }

  return (
    <div className="skill-card">
      <div className="skill-header">
        <div className="image-alt-wrapper">
          <img className="skill-icon" src={image} alt={props.skillName + " Icon"} />
        </div>
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
                ...
            </button>
            )}
          </ul>
        </small>
      </div>
      <div className="skill-body">
        <p className="summary">{props.summary}</p>
        {!showDescription && ( 
          <button className="show-more" onClick={toggleDescription}>
          Learn More ...
          </button>
        )}
        {showDescription && ( 
        <>
          <p className="description">{props.description}</p>
          <button className="show-more" onClick={toggleDescription}>
          Less ...
          </button>
        </>
        )}
        <ul className="skill-levels">
          <li className="confidence tooltip">Confidence: {props.confidenceLevel}
              <p className="confidence tooltiptext">{props.confidenceDescription}</p>
          </li>
          <li className="passion tooltip">Passion: {props.passionLevel}
              <p className="passion tooltiptext">{props.confidenceDescription}</p>
          </li>
        </ul>
      </div>
    </div>
  )
}