import { Skill, Client, Project } from '../models/index.js';

const resolvers = {
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
  }
};

export default resolvers;
