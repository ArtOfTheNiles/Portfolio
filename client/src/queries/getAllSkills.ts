import { gql } from '@apollo/client';

export const GET_ALL_SKILLS = gql`
query getAllSkills {
  skills {
    _id
    skillName
    skillType
    summary
    description
    skillURL
    iconURL
    highlight
    earliestLearnedDate
    confidenceLevel
    confidenceDescription
    passionLevel
    passionDescription
    associatedProjects {
      _id
      projectName
      projectURL
    }
  }
}
`;