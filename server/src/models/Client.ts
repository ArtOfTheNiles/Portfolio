import { Schema, model, type Document } from 'mongoose';
import Project from './Project';

export interface IClient extends Document {
  clientName: string;
  clientURL: string;
  associatedProjects: Schema.Types.ObjectId[];
}

const clientSchema = new Schema<IClient>(
  {
    clientName: {
      type: String,
      required: true,
    },
    clientURL: {
      type: String,
      required: true,
    },
    associatedProjects: [{
      type: Schema.Types.ObjectId,
      ref: 'Project',
    }],
  },
  {
    toJSON: { getters: true },
    toObject: { getters: true },
  }
);

const Client = model<IClient>('Client', clientSchema);

export default Client;
