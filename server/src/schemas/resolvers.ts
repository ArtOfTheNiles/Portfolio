import { GraphQLScalarType } from 'graphql';
import { Skill, Client, Project } from '../models/index.js';

const resolvers = {
  Buffer: new GraphQLScalarType({
    name: 'Buffer',
    description: 'Node.js Buffer scalar type',
    serialize: (value: any) => {
      // Called when sending data to client
      return value.toString('base64');
    },
    parseValue: (value: any) =>{
      // Called when receiving client input variables
      return Buffer.from(value, 'base64');
    },
    parseLiteral: (ast: any) => {
      if (ast.kind === typeof String) {
        return Buffer.from(ast.value, 'base64');
      }
      return null;
    }
  }),
  Query: {
    projects: async () => {
      return await Project.find({});
    },
    project: async (_parent: unknown, _id: string ) => {
      return await Project.findById(_id);
    },
    skills: async () => {
      return await Skill.find({});
    },
    skill: async (_parent: unknown, _id: string ) => {
      return await Skill.findById(_id);
    },
    clients: async () => {
      return await Client.find({});
    },
    client: async (_parent: unknown, _id: string ) => {
      return await Client.findById(_id);
    }
  },
  Mutation: {
    addSkill: async (_parent: unknown, args: any) => {
      const skill = await Skill.create(args);
      return skill;
    },
    addClient: async (_parent: unknown, args: any) => {
      const client = await Client.create(args);
      return client;
    },
    addProject: async (_parent: unknown, args: any) => {
      const project = await Project.create(args);
      return project;
    },
    addSkillToProject: async (_parent: unknown, { projectId, skillId }: any) => {
      const project = await Project.findByIdAndUpdate(
          projectId,
          { $addToSet: { associatedSkills: skillId } },
          { new: true }
      ).populate('associatedSkills');
      return project;
    },
    addClientToProject: async (_parent: unknown, { projectId, clientId }: any) => {
      const project = await Project.findByIdAndUpdate(
          projectId,
          { $addToSet: { clients: clientId } },
          { new: true }
      ).populate('clients');
      return project;
    },
    addProjectToClient: async (_parent: unknown, { clientId, projectId }: any) => {
      const client = await Client.findByIdAndUpdate(
          clientId,
          { $addToSet: { associatedProjects: projectId } },
          { new: true }
      ).populate('associatedProjects');
      return client;
    }
  }
};

export default resolvers;
