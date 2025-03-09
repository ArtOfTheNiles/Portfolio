const typeDefs = `
  type Skill {
    _id: ID!
    skillName: String
    skillURL: String
    iconURL: String
    skillType: String
    description: String
    confidenceLevel: Int
    passionLevel: Int
    associatedProjects: [Project]
    earliestLearnedDate: String
  }

  type Client {
    _id: ID!
    clientName: String
    clientURL: String
    associatedProjects: [Project]
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
  }

  type Query {
    skills: [Skill]
    skill(_id: ID!): Skill
    clients: [Client]
    client(_id: ID!): Client
    projects: [Project]
    project(_id: ID!): Project
  }
`;

export default typeDefs;
