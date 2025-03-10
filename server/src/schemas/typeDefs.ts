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
    ): Skill

    addClient(
      clientName: String!
      clientURL: String!
      thruClientName: String
      thruClientURL: String
    ): Client

    addProject(
      projectName: String!
      jobType: String!
      startDate: String!
      endDate: String
      description: String!
      projectURL: String
      repositoryURL: String
      otherURLs: [String]
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
