import { Schema, model, type Document } from 'mongoose';
import { JobType } from './jobTypes';


interface IProject extends Document {
  projectName: string;
  thumbnail?: string;
  clients?: Schema.Types.ObjectId[];
  jobType: JobType;
  startDate: Date;
  endDate: Date;
  description: string;
  projectURL?: string;
  repositoryURL?: string;
  otherURLs?: string[];
  associatedSkills: Schema.Types.ObjectId[];
  highlight: boolean;
}

const projectSchema = new Schema<IProject>(
  {
    projectName: {
      type: String,
      required: true,
    },
    thumbnail: { type: String },
    clients: [{
      type: Schema.Types.ObjectId,
      ref: 'Client',
    }],
    jobType: {
      type: String,
      required: true,
    },
    startDate: {
      type: Date,
      required: true,
    },
    endDate: {
      type: Date,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    projectURL: { type: String },
    repositoryURL: { type: String },
    highlight: { type: Boolean },
    otherURLs: [String],
    associatedSkills: [{
      type: Schema.Types.ObjectId,
      ref: 'Skill',
    }],
  },
  {
    timestamps: true,
    toJSON: { getters: true },
    toObject: { getters: true },
  }
);

const Project = model<IProject>('Project', projectSchema);

export default Project;
