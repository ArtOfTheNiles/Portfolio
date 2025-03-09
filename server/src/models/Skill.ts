import { Schema, model, type Document } from 'mongoose';
import { SkillType } from './skillTypes';

export interface ISkill extends Document {
  skillName: string;
  skillURL?: string;
  iconURL?: string;
  skillType: [string];
  summary: string;
  description: string;
  confidenceLevel: number;
  confidenceDescription: string;
  passionLevel: number;
  passionDescription: string;
  associatedProjects: Schema.Types.ObjectId[];
}

const skillSchema = new Schema<ISkill>(
  {
    skillName: {
      type: String,
      required: true,
    },
    skillURL: { type: String },
    iconURL: { type: String },
    skillType: [{
        type: String,
        enum: Object.values(SkillType),
        required: true,
    }],
    summary: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    confidenceLevel: {
      type: Number,
      min: 0,
      max: 100,
      required: true,
    },
    confidenceDescription: { type: String },
    passionLevel: {
      type: Number,
      min: 0,
      max: 100,
      required: true,
    },
    passionDescription: { type: String },
    associatedProjects: [{
      type: Schema.Types.ObjectId,
      ref: 'Project',
    }],
  },
  {
    timestamps: true,
    toJSON: { getters: true },
    toObject: { getters: true },
  }
);

// Make a virtual to get the skill's earliest learned date through the associated projects

const Skill = model<ISkill>('Skill', skillSchema);

export default Skill;