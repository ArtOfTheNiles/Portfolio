import { gql } from '@apollo/client';

export const GET_ALL_PROJECTS = gql`
  query getAllProjects {
    projects {
      _id
      projectName
      description
      startDate
      endDate
      jobType
      highlight
      clients {
        clientName
        thruClientName
      }
      projectURL
      repositoryURL
      thumbnail
      thumbnailAlignment
      associatedSkills {
        skillName
        iconURL
      }
    }
  }
`;
