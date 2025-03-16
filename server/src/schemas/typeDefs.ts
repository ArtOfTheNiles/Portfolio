const typeDefs = `
  type Skill {
    _id: ID!
    skillName: String
    skillURL: String
    iconURL: String
    skillType: [String]
    summary: String
    description: String
    confidenceLevel: Int
    confidenceDescription: String
    passionLevel: Int
    passionDescription: String
    associatedProjects: [Project]
    earliestLearnedDate: String
    highlight: Boolean
  }

  type Client {
    _id: ID!
    clientName: String
    clientURL: String
    thruClientName: String
    thruClientURL: String
    associatedProjects: [Project]
    highlight: Boolean
  }

  type Project {
    _id: ID!
    projectName: String
    thumbnail: String
    thumbnailAlignment: String
    clients: [Client]
    jobType: String
    startDate: String
    endDate: String
    description: String
    projectURL: String
    repositoryURL: String
    otherURLs: [String]
    associatedSkills: [Skill]
    highlight: Boolean
  }

  type Query {
    skills: [Skill]
    skill(_id: ID!): Skill
    clients: [Client]
    client(_id: ID!): Client
    projects: [Project]
    project(_id: ID!): Project
  }

  type Mutation {
    addSkill(
      skillName: String!
      skillURL: String
      iconURL: String
      skillType: [String!]
      summary: String!
      description: String!
      confidenceLevel: Int!
      confidenceDescription: String
      passionLevel: Int!
      passionDescription: String
      earliestLearnedDate: String
      highlight: Boolean
    ): Skill

    addClient(
      clientName: String!
      clientURL: String!
      thruClientName: String
      thruClientURL: String
      highlight: Boolean
    ): Client

    addProject(
      projectName: String!
      thumbnail: String
      thumbnailAlignment: String
      jobType: String!
      startDate: String!
      endDate: String
      description: String!
      projectURL: String
      repositoryURL: String
      otherURLs: [String]
      highlight: Boolean
    ): Project

    addSkillToProject(
      projectId: ID!
      skillId: ID!
    ): Project

    addClientToProject(
      projectId: ID!
      clientId: ID!
    ): Project

    addProjectToClient(
      clientId: ID!
      projectId: ID!
    ): Client
  }
`;

export default typeDefs;
