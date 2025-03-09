import { Schema, model, type Document } from 'mongoose';

export interface IClient extends Document {
  clientName: string;
  clientURL: string;
  thruClientName?: string;
  thruClientURL?: string;
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
    thruClientName: {
      type: String,
    },
    thruClientURL: {
      type: String,
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
