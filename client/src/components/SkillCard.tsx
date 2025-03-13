import { useState } from "react"

import S3Image from "./S3Image"
import { SkillProps } from "../interfaces/skill.interface"
import "@/styles/skillCard.css"

function clampToTwenty(number: number) {
  return Math.ceil(number / 20) * 20;
}

export const SkillCard = (props: SkillProps) => {
  const DEFAULT_VIEW_LIMIT = 2;
  const [viewLimit, setViewLimit] = useState(DEFAULT_VIEW_LIMIT);
  const [showDescription, setShowDescription] = useState(false);

  const displayedSkillTypes = props.skillType.slice(0, viewLimit);
  const hasMoreSkillTypes = viewLimit < props.skillType.length;

  const toggleDescription = () => {
    setShowDescription(!showDescription);
  }

  return (
    <div className="skill-card">
      <div className="skill-header">
        <div className="image-alt-wrapper">
          <S3Image 
            imageKey={props.iconURL || "skill-icons/None.svg"} 
            alt={props.skillName + " icon"}
            className="skill-icon" 
          />
        </div>
        <h3 className="skill-title"><a href={props.skillURL}>{props.skillName}</a></h3>
        <small>
          <ul className="skill-types">
            {displayedSkillTypes.map((_, index) => (
                <li key={index} className="skill-type">{props.skillType[index]}</li>
            ))}
            {hasMoreSkillTypes && (
            <button 
                className="show-more details"
                onClick={() => setViewLimit((prev) => prev + DEFAULT_VIEW_LIMIT)}
            >
                ...
            </button>
            )}
          </ul>
        </small>
      </div>
        <div className="confidence-passion-section">
          <span className="confidence-section">
            <div className="text-number">
              <h6>Confidence:</h6>
              <span className={`confidence-level skillcap-${clampToTwenty(props.confidenceLevel)}`}>{props.confidenceLevel}</span>
            </div>
            <div className="decorator-bar-container">
              {props.confidenceLevel > 0 && (<div className="fillbar-20"></div>)}
              {props.confidenceLevel > 20 && (<div className="fillbar-40"></div>)}
              {props.confidenceLevel > 40 && (<div className="fillbar-60"></div>)}
              {props.confidenceLevel > 60 && (<div className="fillbar-80"></div>)}
              {props.confidenceLevel > 80 && (<div className="fillbar-100"></div>)}
            </div>
          </span>
          <span className="divider"> | </span>
          <span className="passion-section">
            <div className="text-number">
              <h6>Passion:</h6>
              <span className={`passion-level skillcap-${clampToTwenty(props.passionLevel)}`}>{props.passionLevel}</span>
            </div>
            <div className="decorator-bar-container">
              {props.passionLevel > 0 && (<div className="fillbar-20"></div>)}
              {props.passionLevel > 20 && (<div className="fillbar-40"></div>)}
              {props.passionLevel > 40 && (<div className="fillbar-60"></div>)}
              {props.passionLevel > 60 && (<div className="fillbar-80"></div>)}
              {props.passionLevel > 80 && (<div className="fillbar-100"></div>)}
            </div>
          </span>
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
      </div>
    </div>
  )
}